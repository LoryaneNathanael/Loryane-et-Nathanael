document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('background-music');
    const playMusicButton = document.getElementById('play-music');
    const cover = document.querySelector('.book-cover');
    const inner = document.querySelector('.book-inner');
    let step = 1;

    // Charger les images
    function preloadImages(callback) {
        const images = ['extérieur_recto.png', 'centre_double.png'];
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
    cover.addEventListener('click', function() {
        if (step === 1) {
            cover.style.transform = 'rotateY(-180deg)'; // Ouvre la couverture
            setTimeout(() => {
                inner.style.transform = 'scaleX(1)'; // Déplie l'intérieur de droite à gauche
            }, 500); // Délai pour synchroniser l'animation
            step++;
        }
    });
});
