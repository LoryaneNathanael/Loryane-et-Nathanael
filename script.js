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
            exterieurRecto.classList.add('open-book'); // Applique l'effet de livre
            setTimeout(() => {
                exterieurRecto.style.display = 'none'; // Cache `exterieur_recto`
                centreDouble.classList.remove('hidden'); // Affiche `centre_double`
                centreDouble.style.left = '50%'; // Positionne la moitié droite de `centre_double` au centre
            }, 500); // Temporisation pour l'effet d'ouverture
            step++;
        }
    });
});
