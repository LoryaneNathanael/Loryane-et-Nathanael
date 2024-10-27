document.addEventListener('DOMContentLoaded', function() {
    const centreDouble = document.getElementById('centre_double');

    // Clic pour déclencher l'animation de glissement
    centreDouble.addEventListener('click', function() {
        centreDouble.classList.toggle('slide-left'); // Applique le glissement
    });
});
