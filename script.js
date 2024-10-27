document.addEventListener('DOMContentLoaded', function() {
    const centreDroite = document.getElementById('centre_droite');
    const centreGauche = document.getElementById('centre_gauche');
    let step = 1;

    // Animation de glissement pour centre_droite et centre_gauche
    centreDroite.addEventListener('click', function() {
        if (step === 1) {
            // Fait glisser centre_droite vers la droite
            centreDroite.classList.add('slide-out-right');
            // Affiche et fait glisser centre_gauche depuis la gauche
            centreGauche.classList.remove('hidden');
            centreGauche.classList.add('slide-in-left');
            step++;
        }
    });
});
