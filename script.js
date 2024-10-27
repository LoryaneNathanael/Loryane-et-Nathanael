document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('background-music');
    const playMusicButton = document.getElementById('play-music');
    const exterieurRecto = document.getElementById('exterieur_recto');
    const centreDouble = document.getElementById('centre_double');
    const halfView = document.querySelector('.half-view');
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
                halfView.style.display = 'block'; // Affiche le conteneur `half-view`
                centreDouble.classList.remove('hidden'); // Affiche `centre_double`
            }, 500); // Temporisation pour l'effet d'ouverture
            step++;
        }
    });
});
