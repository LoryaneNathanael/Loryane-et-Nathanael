document.addEventListener('DOMContentLoaded', function() {
    const exteriorCard = document.getElementById('card-exterior');
    const doubleCard = document.getElementById('card-double');
    const downloadButton = document.getElementById('download-button');
    const answerButton = document.getElementById('answer-button');
    const backgroundMusic = document.getElementById('background-music');
    const playMusicButton = document.getElementById('play-music');

    let step = 1;

    // Musique
    playMusicButton.addEventListener('click', () => {
        backgroundMusic.play();
    });

    // Animation d'ouverture de carte
    exteriorCard.addEventListener('click', function() {
        if (step === 1) {
            exteriorCard.style.transform = 'perspective(1000px) rotateY(-180deg)'; // Effet d'ouverture de livre
            setTimeout(() => {
                exteriorCard.classList.add('hidden'); // Cache la couverture
                doubleCard.classList.remove('hidden'); // Affiche l'intérieur
                doubleCard.style.transform = 'perspective(1000px) rotateY(0deg)'; // Ouverture vers l'intérieur
            }, 1000); // Après l'animation de 1 seconde
            step++;
        }
    });
});
