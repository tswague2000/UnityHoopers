'use client';

import { useActionState } from 'react';
import styles from './ContactForm.module.css';

/**
 * @param {Object} previousFormState
 * @param {FormData} formData
 */
const formContact = (previousFormState, formData) => {
    const nom = formData.get('nom');
    const courriel = formData.get('courriel');
    const message = formData.get('message');

    let newFormState = {
        nom: { erreur: null, valeur: '' },
        courriel: { erreur: null, valeur: '' },
        message: { erreur: null, valeur: '' }
    };

    let erreur = false;

    // Validation pour le nom
    if (!nom) {
        erreur = true;
        newFormState.nom.erreur = 'Veuillez entrer votre nom';
    } else if (nom.length < 2) {
        erreur = true;
        newFormState.nom.erreur = 'Le nom doit comporter au moins 2 caractères';
    } else if (!nom.match(/^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/)) {
        erreur = true;
        newFormState.nom.erreur = 'Le nom ne peut contenir que des lettres, espaces ou tirets';
    }

    // Validation pour le courriel
    if (!courriel) {
        erreur = true;
        newFormState.courriel.erreur = 'Veuillez entrer une adresse courriel';
    } else if (!courriel.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)) {
        erreur = true;
        newFormState.courriel.erreur = 'Veuillez entrer une adresse courriel valide';
    }

    // Validation pour le message
    if (!message) {
        erreur = true;
        newFormState.message.erreur = 'Veuillez entrer un message';
    } else if (message.length > 500) {
        erreur = true;
        newFormState.message.erreur = 'Le message ne doit pas dépasser 500 caractères';
    }

    // Affichage dans la console si aucune erreur
    if (!erreur) {
        console.log('Données du formulaire :', {
            nom,
            courriel,
            message
        });
    }

    if (erreur) {
        newFormState.nom.valeur = nom;
        newFormState.courriel.valeur = courriel;
        newFormState.message.valeur = message;
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
        </div>
    );
}
