document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.getElementById('card-container');
    const card = document.getElementById('card');
    const bookPages = document.getElementById('book-pages');
    const centreGauche = document.getElementById('centre-gauche');
    const centreDroite = document.getElementById('centre-droite');
    const playMusicButton = document.getElementById('play-music');
    const backgroundMusic = document.getElementById('background-music');
    let step = 1;

    // Lancer la musique au clic sur le bouton
    playMusicButton.addEventListener('click', function() {
        backgroundMusic.play();
    });

    cardContainer.addEventListener('click', function() {
        if (step === 1) {
            card.style.display = 'none'; // Masquer la couverture
            bookPages.style.display = 'flex'; // Afficher les pages du centre

            // Animation d'ouverture des pages
            setTimeout(() => {
                centreGauche.style.transform = 'rotateY(0deg)'; // Ouvre la page gauche
                centreDroite.style.transform = 'rotateY(0deg)'; // Ouvre la page droite
            }, 200);

            step++;
        }
    });
});
