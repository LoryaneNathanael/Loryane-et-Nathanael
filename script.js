document.addEventListener('DOMContentLoaded', function() {
    const centreDouble = document.getElementById('centre_double');

    // Décalage au clic pour montrer la moitié gauche
    centreDouble.addEventListener('click', function() {
        centreDouble.style.left = "-50vw"; // Décale l'image vers la gauche
        centreDouble.style.clipPath = "inset(0 50% 0 0)"; // Affiche la moitié gauche
    });
});
