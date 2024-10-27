document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.getElementById('card-container');
    const card = document.getElementById('card');
    const centreGauche = document.getElementById('centre-gauche');
    const centreDroite = document.getElementById('centre-droite');
    const playMusicButton = document.getElementById('play-music');
    const backgroundMusic = document.getElementById('background-music');
    let step = 1;

    // Lancer la musique au clic sur le bouton
    playMusicButton.addEventListener('click', function() {
        backgroundMusic.play();
    });

    // Animation d'ouverture de la carte
    cardContainer.addEventListener('click', function() {
        if (step === 1) {
            // Cache l'image de la couverture et affiche les pages gauche et droite
            card.style.display = 'none';
            centreGauche.style.display = 'block';
            centreDroite.style.display = 'block';

            // Animation pour ouvrir la carte
            centreGauche.style.transform = 'rotateY(0deg)'; // Ouvrir la page gauche
            centreDroite.style.transform = 'rotateY(0deg)'; // Ouvrir la page droite
            step++;
        }
    });
});
