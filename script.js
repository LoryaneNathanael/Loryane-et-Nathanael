document.addEventListener('DOMContentLoaded', function() {
    const centreDouble = document.getElementById('centre_double');

    // Ajoute la classe pour déclencher l'animation au clic
    centreDouble.addEventListener('click', function() {
        centreDouble.classList.toggle('slide-left'); // Applique la classe de glissement
    });
});
