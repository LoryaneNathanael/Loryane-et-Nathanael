document.addEventListener('DOMContentLoaded', function() {
    const centreDouble = document.getElementById('centre_double');

    // Applique la classe au clic pour déclencher le déplacement
    centreDouble.addEventListener('click', function() {
        centreDouble.classList.toggle('slide-left');
    });
});
