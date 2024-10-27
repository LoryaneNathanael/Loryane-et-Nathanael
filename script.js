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
            // Ouvre la couverture vers la gauche pour afficher centre_droit
            card.style.transform = 'rotateY(-180deg)';
            setTimeout(() => {
                cardContainer.style.display = 'none';
                centreDroit.classList.remove('hidden'); // Affiche centre_droit
            }, 1000);

            step++;
        } else if (step === 2) {
            // Glisse centre_droit vers la droite pour révéler centre_gauche
            centreDroit.style.transform = 'translateX(50vw)';
            setTimeout(() => {
                centreGauche.classList.remove('hidden'); // Affiche centre_gauche
            }, 1000);

            step++;
        }
    });
});
