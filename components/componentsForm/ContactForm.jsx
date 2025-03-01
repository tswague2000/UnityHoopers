'use client';

import { useActionState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './ContactForm.module.css';
import { validateFormContact } from '@/validations/contactForm';
import { contactFormServer } from '@/actions/contactForm';

const formContact = async (previousFormState, formData) => {
    let [erreur, newFormState] = validateFormContact(formData);

    if (erreur) {
        newFormState.nom.valeur = formData.get('nom');
        newFormState.courriel.valeur = formData.get('courriel');
        newFormState.message.valeur = formData.get('message');
    }

    if (!erreur) {
        let [erreur, newFormState] = await contactFormServer(formData);
        if (!erreur) {
            toast.success("Votre message a été envoyé avec succès !");
        }
    }

    return newFormState;
}

export default function Contact() {
    const [formState, formAction] = useActionState(formContact, {
        nom: { erreur: null, valeur: '' },
        courriel: { erreur: null, valeur: '' },
        message: { erreur: null, valeur: '' }
    });

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.titre}>Contactez-nous</h1>
            </div>
            <form action={formAction} className={styles.form} noValidate>
                <div className={styles.champ}>
                    <label>Nom *</label>
                    <input
                        type="text"
                        name="nom"
                        defaultValue={formState.nom.valeur}
                        className={formState.nom.erreur ? styles.erreur : ''}
                    />
                    <div className={styles.erreur}>
                        {formState.nom.erreur}
                    </div>
                </div>
                <div className={styles.champ}>
                    <label>Email *</label>
                    <input
                        type="email"
                        name="courriel"
                        defaultValue={formState.courriel.valeur}
                        className={formState.courriel.erreur ? styles.erreur : ''}
                    />
                    <div className={styles.erreur}>
                        {formState.courriel.erreur}
                    </div>
                </div>
                <div className={styles.champ}>
                    <label>Rédigez votre message *</label>
                    <textarea
                        name="message"
                        rows="5"
                        maxLength="500"
                        defaultValue={formState.message.valeur}
                        className={formState.message.erreur ? styles.erreur : ''}
                    ></textarea>
                    <div className={styles.erreur}>
                        {formState.message.erreur}
                    </div>
                </div>
                <button type="submit" className={styles.bouton}>Soumettre</button>
            </form>
            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}