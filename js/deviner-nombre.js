/**
* Jeu du nombre mystère
* @author  Loïc Rossé
* @version 0.1
* @since   2022-08-30
*/

// Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
(function main() {
    "use strict";

    /**
     * Retourne un nombre entier aléatoire compris entre min et max
     * @param min
     * @param max
     * @returns {number}
     */
    function tireNombre(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    // Déclaration
    const MIN = 1;
    const MAX = 100;
    let nbMystere = 0;
    let nbEssais = 0;
    let reponse = 0;
    let message = `Entrez un nombre entre ${MIN} et ${MAX} !`;


    nbMystere = tireNombre(MIN,MAX);

    do {
        reponse = parseInt(prompt(message));
        nbEssais++;

        // Série de test
        if (reponse > nbMystere){
            message = 'C\'est moins';
        }

        if (reponse < nbMystere) {
            message = 'C\'est plus';
        }

    }while (reponse !== nbMystere);

        message = `Vous avez trouvé après ${nbEssais} essais`;
        alert(message);

}()); // main IIFE
