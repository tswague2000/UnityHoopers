"use server";

import resend from '@/library/resend.js';
import { validateFormContact } from "@/validations/contactForm";

export async function contactFormServer(formData) {
    let [erreur, newFormState] = validateFormContact(formData);

    // Vérification manuelle supplémentaire côté serveur
    if (!formData.get("nom") || formData.get("nom").trim().length < 2) {
        erreur = true;
        newFormState.nom = { erreur: "Le nom doit contenir au moins 2 caractères." };
    }

    const courriel = formData.get("courriel");
    if (!courriel || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(courriel)) {
        erreur = true;
        newFormState.courriel = { erreur: "Adresse e-mail invalide." };
    }

    const message = formData.get("message");
    if (!message || message.trim().length < 5) {
        erreur = true;
        newFormState.message = { erreur: "Le message doit contenir au moins 5 caractères." };
    }

    else if (!message || message.trim().length > 500) {
        erreur = true;
        newFormState.message = { erreur: "Le message doit contenir maximum 500 caractères." };
    }


    if (erreur) {
        return [erreur, newFormState];
    }

    // Simuler l'envoi du message (à remplacer par une vraie logique d'envoi) 
    // console.log("Message reçu :", { nom: formData.get('nom'), courriel, message });

    // envoi des informations avec resend
    await resend.emails.send({
        from: 'onboarding@resend.dev', 
        to: 'hadjaidiatou500@gmail.com',
        subject: "Nouveau message du formulaire de contact",
        html:'<p> formulare de contact </p>',
        text: message 
    });
    
    return [false, { success: "Votre message a été envoyé avec succès !" }];
}
