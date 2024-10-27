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

    // Animation au clic
    exterieurRecto.addEventListener('click', function() {
        if (step === 1) {
            // Ouvre `exterieur_recto` pour afficher `centre_double`
            centreDouble.classList.remove('hidden');
            centreDouble.style.opacity = '0';
            exterieurRecto.classList.add('open-book');
            setTimeout(() => {
                centreDouble.style.opacity = '1';
                exterieurRecto.style.display = 'none';
            }, 400);
            step++;
        } else if (step === 2) {
            // Déplace `centre_double` vers la droite pour afficher la moitié gauche
            centreDouble.classList.add('slide-left');
            step++;
        }
    });
});
