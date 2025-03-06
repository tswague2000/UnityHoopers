"use server";

import resend from '@/library/resend.js';
import { validateFormContact } from "@/validations/contactForm";

export async function contactFormServer(formData) {
    // Valider les données du formulaire
    const [erreur, newFormState] = validateFormContact(formData);
    
    // Si une erreur est détectée, retourner l'erreur et le nouvel état du formulaire
    if (erreur) {
        return [erreur, newFormState];
    }

    // Récupérer les valeurs du formulaire
    const nom = formData.get("nom"); 
    const email = formData.get("courriel"); 
    const message = formData.get("message"); 

    await resend.emails.send({
        from: 'onboarding@resend.dev', 
        to: 'hadjaidiatou500@gmail.com',
        subject: "Nouveau message du formulaire de contact",
        text: `Nom: ${nom}\nEmail: ${email}\nMessage: ${message}`, 
        html: `
            <p>Vous avez reçu un nouveau message de contact :</p>
            <p><strong>Nom :</strong> ${nom}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Message :</strong> ${message}</p>
        ` 
    });
    
    // Retourner un message de succès
    return [false, { success: "Votre message a été envoyé avec succès !" }];
}