document.addEventListener('DOMContentLoaded', function() {
    const exterieurRecto = document.getElementById('exterieur_recto');
    const centreDroite = document.getElementById('centre_droite');
    const centreGauche = document.getElementById('centre_gauche');
    const playMusicButton = document.getElementById('play-music');
    const backgroundMusic = document.getElementById('background-music');
    let step = 1;

    // Musique au clic sur le bouton de lecture
    playMusicButton.addEventListener('click', function() {
        backgroundMusic.play();
        console.log("Musique lancée"); // Vérification musique
    });

    // Premier clic : Animation d'ouverture de exterieur_recto
    exterieurRecto.addEventListener('click', function() {
        if (step === 1) {
            console.log("Premier clic détecté"); // Vérification premier clic
            exterieurRecto.classList.add('open-book');
            setTimeout(() => {
                exterieurRecto.style.display = 'none';
                centreDroite.classList.remove('hidden');
                console.log("Ouverture terminée, centre_droite affichée"); // Vérification ouverture
            }, 1000);
            step++;
        }
    });

    // Deuxième clic : Glissement de centre_droite et affichage de centre_gauche
    centreDroite.addEventListener('click', function() {
        if (step === 2) {
            console.log("Deuxième clic détecté"); // Vérification deuxième clic
            centreDroite.classList.add('slide-out-right');
            centreGauche.classList.remove('hidden');
            centreGauche.classList.add('slide-in-left');
            console.log("Animation de glissement démarrée"); // Vérification glissement
            step++;
        }
    });
});
