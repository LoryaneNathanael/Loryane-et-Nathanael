document.addEventListener('DOMContentLoaded', function() {
    const centreDroite = document.getElementById('centre_droite');

    // Glissement vers la droite au clic
    centreDroite.addEventListener('click', function() {
        centreDroite.classList.add('slide-out-right');
    });
});
