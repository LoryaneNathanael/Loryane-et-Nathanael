document.addEventListener('DOMContentLoaded', function() {
    const cover = document.querySelector('.book-cover');
    const centreDroite = document.getElementById('centre_droite');
    let step = 1;

    // Animation de glissement pour centre_droite
    cover.addEventListener('click', function() {
        if (step === 1) {
            cover.style.transform = 'rotateY(-180deg)'; // Ouvre la couverture
            centreDroite.style.display = 'block'; // Affiche l'intérieur (centre_droite)
            step++;
        } else if (step === 2) {
            // Fait glisser centre_droite vers la droite
            centreDroite.classList.add('slide-out-right');
            step++;
        }
    });
});
