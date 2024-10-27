document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('background-music');
    const playMusicButton = document.getElementById('play-music');
    const exterieurRecto = document.getElementById('exterieur_recto');
    const centreDouble = document.getElementById('centre_double');
    let step = 1;

    // Démarrer la musique
    playMusicButton.addEventListener('click', function() {
        backgroundMusic.play();
    });

    // Animation au clic pour montrer `centre_double`
    exterieurRecto.addEventListener('click', function() {
        if (step === 1) {
            // Affiche immédiatement `centre_double` mais avec une opacité réduite
            centreDouble.classList.remove('hidden');
            centreDouble.style.opacity = '0';

            // Applique l'effet d'ouverture sur `exterieur_recto`
            exterieurRecto.classList.add('open-book');

            // Graduellement augmenter l'opacité de `centre_double`
            setTimeout(() => {
                centreDouble.style.opacity = '1';
                exterieurRecto.style.display = 'none'; // Cache `exterieur_recto` une fois l'effet terminé
            }, 500); // Réduit le délai pour rendre la transition fluide
            step++;
        }
    });
});
