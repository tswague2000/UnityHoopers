export function validateFormContact(formData){
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
    } else if (!courriel.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        erreur = true;
        newFormState.courriel.erreur = 'Veuillez entrer une adresse courriel valide';
    }

    // Validation pour le message
    if (!message) {
        erreur = true;
        newFormState.message.erreur = 'Veuillez entrer un message';
    } else if (message.length > 500 && message.length < 5) {
        erreur = true;
        newFormState.message.erreur = 'Le message ne doit pas dépasser 500 caractères';
    }
    else if ( message.length < 5) {
        erreur = true;
        newFormState.message.erreur = 'Le message ne doit pas avoir minimum 5 caractères';
    }

    return [erreur, newFormState]
}