document.addEventListener('DOMContentLoaded', function() {
    const centreDroite = document.getElementById('centre_droite');
    const centreGauche = document.getElementById('centre_gauche');
    let step = 1;

    // Animation de glissement pour centre_droite et centre_gauche
    centreDroite.addEventListener('click', function() {
        if (step === 1) {
            // Fait glisser centre_droite vers la droite et centre_gauche vers le centre
            centreDroite.classList.add('slide-out-right');
            centreGauche.classList.remove('hidden'); // Affiche centre_gauche
            centreGauche.classList.add('slide-in-left');
            step++;
        }
    });
});
