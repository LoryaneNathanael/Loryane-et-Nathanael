document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.getElementById('card-container');
    const card = document.getElementById('card');
    const bookPages = document.getElementById('book-pages');
    const centreDouble = document.getElementById('centre-double');
    const playMusicButton = document.getElementById('play-music');
    const backgroundMusic = document.getElementById('background-music');
    let step = 1;

    // Lancer la musique au clic sur le bouton
    playMusicButton.addEventListener('click', function() {
        backgroundMusic.play();
    });

    cardContainer.addEventListener('click', function() {
        if (step === 1) {
            // Ouvre la couverture vers la gauche
            card.style.transform = 'rotateY(-180deg)';
            
            // Affiche le centre double après l’animation de la couverture
            setTimeout(() => {
                cardContainer.style.display = 'none';
                bookPages.style.display = 'flex';
                centreDouble.style.transform = 'rotateY(0deg)';
            }, 1000);

            step++;
        }
    });
});
