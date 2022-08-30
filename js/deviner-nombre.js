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
    let nbMystere = 0;
    let nbEssais = 0;
    let reponse = 0;
    let message = 0;

    nbMystere = tireNombre(1,100);

    do {
        reponse = parseInt(prompt('Entrez un nombre entre 1 et 100 !'));
        nbEssais++;

        // Série de test
        if (reponse > nbMystere){
            alert('Cest moins');
        }

        if (reponse < nbMystere) {
            alert('Cest plus');
        }

        if (reponse === nbMystere) {
            message = `Vous avez trouvé après ${nbEssais} essais`;
            alert(message);
        }
    }while (reponse !== nbMystere);










}()); // main IIFE