"use strict";


function validerFormulaire(event, formId) {
    event.preventDefault(); // Empêcher l'envoi du formulaire par défaut

    const form = document.getElementById(formId);
    const inputs = form.getElementsByTagName('input');

    let champsVides = [];

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type !== 'submit' && inputs[i].value === '') {
                    champsVides.push(inputs[i]);
        }
    }

    if (champsVides.length > 0) {
        // Afficher le message d'erreur
        alert('Veuillez remplir tous les champs du formulaire.');
    } else {
        // Envoyer le formulaire si tout est rempli
        form.submit();
    }
}


