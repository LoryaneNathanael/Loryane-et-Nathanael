console.log("Script chargé"); // Vérifie que le fichier JS est chargé

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM complètement chargé"); // Vérifie que le DOM est prêt

    const exterieurRecto = document.getElementById('exterieur_recto');
    const centreDroite = document.getElementById('centre_droite');
    const centreGauche = document.getElementById('centre_gauche');
    const playMusicButton = document.getElementById('play-music');
    const backgroundMusic = document.getElementById('background-music');
    let step = 1;

    // Vérification de la musique
    playMusicButton.addEventListener('click', function() {
        backgroundMusic.play();
        console.log("Musique lancée");
    });

    // Premier clic pour l'ouverture de la couverture
    if (exterieurRecto) {
        exterieurRecto.addEventListener('click', function() {
            if (step === 1) {
                console.log("Premier clic détecté"); // Vérifie le premier clic
                exterieurRecto.classList.add('open-book');
                setTimeout(() => {
                    exterieurRecto.style.display = 'none';
                    centreDroite.classList.remove('hidden');
                    console.log("Ouverture terminée, centre_droite affichée");
                }, 1000);
                step++;
            }
        });
    } else {
        console.error("Element 'exterieur_recto' non trouvé");
    }

    // Deuxième clic pour le glissement
    if (centreDroite) {
        centreDroite.addEventListener('click', function() {
            if (step === 2) {
                console.log("Deuxième clic détecté"); // Vérifie le deuxième clic
                centreDroite.classList.add('slide-out-right');
                centreGauche.classList.remove('hidden');
                centreGauche.classList.add('slide-in-left');
                console.log("Animation de glissement démarrée");
                step++;
            }
        });
    } else {
        console.error("Element 'centre_droite' non trouvé");
    }
});
