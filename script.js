document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('background-music');
    const playMusicButton = document.getElementById('play-music');
    const cover = document.querySelector('.book-cover');
    const inner = document.querySelector('.book-inner');
    let step = 1;

    // Charger les images
    function preloadImages(callback) {
        const images = ['exterieur_recto.png', 'centre_droite.png'];
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
            inner.style.transform = 'rotateY(0deg)'; // Affiche l'intérieur
            step++;
        }
    });
});
