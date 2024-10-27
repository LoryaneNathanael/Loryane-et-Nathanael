document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('background-music');
    const playMusicButton = document.getElementById('play-music');
    const cover = document.querySelector('.book-cover');
    const centreDroite = document.getElementById('centre_droite');
    const centreGauche = document.getElementById('centre_gauche');
    let step = 1;

    // Charger les images
    function preloadImages(callback) {
        const images = ['extérieur_recto.png', 'centre_droite.png', 'centre_gauche.png'];
        let loadedImages = 0;

        images.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedImages++;
                if (loadedImages === images.length) callback();
            };
        });
    }

    preloadImages(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('background-video').style.display = 'block';
    });

    // Musique
    playMusicButton.addEventListener('click', function() {
        backgroundMusic.play();
    });

    // Animation d'ouverture
    cover.addEventListener('click', function() {
        if (step === 1) {
            cover.style.transform = 'rotateY(-180deg)'; // Ouvre la couverture
            centreDroite.style.display = 'block'; // Affiche l'intérieur (centre_droite)
            step++;
        } else if (step === 2) {
            // Étape 2 : Glissement de centre_droite et apparition de centre_gauche
            centreDroite.style.transform = 'translateX(100%)'; // Déplace centre_droite vers la droite
            centreGauche.classList.remove('hidden'); // Affiche centre_gauche
            centreGauche.style.transform = 'translateX(0)'; // Centre centre_gauche
            step++;
        }
    });
});
