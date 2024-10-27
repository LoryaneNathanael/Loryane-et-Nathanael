document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('background-music');
    const playMusicButton = document.getElementById('play-music');
    const coverLeft = document.querySelector('.book-cover-left');
    const coverRight = document.querySelector('.book-cover-right');
    const inner = document.querySelector('.book-inner');
    let step = 1;

    // Charger les images
    function preloadImages(callback) {
        const images = ['extérieur_recto_left.png', 'extérieur_recto_right.png', 'centre_double.png'];
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

    // Animation d'ouverture de la carte
    coverLeft.addEventListener('click', function() {
        if (step === 1) {
            coverLeft.style.transform = 'rotateY(-180deg)'; // Ouvre la moitié gauche
            coverRight.style.transform = 'rotateY(180deg)'; // Ouvre la moitié droite
            setTimeout(() => {
                inner.style.transform = 'scaleX(1)'; // Révèle le centre double
            }, 500); // Délai pour synchroniser l'animation
            step++;
        }
    });
});
