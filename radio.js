"use strict";

const particulierForm = document.getElementById('particulier_form');
        const professionnelForm = document.getElementById('professionnel_form');
        const particulierRadio = document.getElementById('particulier');
        const professionnelRadio = document.getElementById('professionnel');

        particulierRadio.addEventListener('click', function() {
            particulierForm.style.display = 'block';
            professionnelForm.style.display = 'none';
        });

        professionnelRadio.addEventListener('click', function() {
            particulierForm.style.display = 'none';
            professionnelForm.style.display = 'block';
        });
