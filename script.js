document.addEventListener('DOMContentLoaded', function() {
    const centreDouble = document.getElementById('centre_double');

    // Ajoute un décalage instantané au clic
    centreDouble.addEventListener('click', function() {
        centreDouble.style.left = "-100vw"; // Décale instantanément l'image vers la gauche
    });
});
