document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.getElementById('card-container');
    const card = document.getElementById('card');
    const centreDroit = document.getElementById('centre-droit');
    const centreGauche = document.getElementById('centre-gauche');
    const playMusicButton = document.getElementById('play-music');
    const backgroundMusic = document.getElementById('background-music');
    let step = 1;

    // Lancer la musique au clic sur le bouton
    playMusicButton.addEventListener('click', function() {
        backgroundMusic.play();
    });

    cardContainer.addEventListener('click', function() {
        if (step === 1) {
            // Étape 1 : la carte se retourne comme un livre
            card.style.transform = 'rotateY(-180deg)';
            setTimeout(() => {
                cardContainer.style.display = 'none';
                centreDroit.classList.remove('hidden'); // Affiche centre_droite
            }, 1000);
            step++;
        } else if (step === 2) {
            // Étape 2 : centre_droite glisse vers la droite et centre_gauche apparaît à gauche
            centreDroit.style.transform = 'translateX(50vw)'; // Glissement vers la droite
            setTimeout(() => {
                centreGauche.classList.remove('hidden'); // Affiche centre_gauche
            }, 500);
            step++;
        }
    });
});
