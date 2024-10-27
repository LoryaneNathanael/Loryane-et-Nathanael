document.addEventListener('DOMContentLoaded', function() {
    const cardWrapper = document.querySelector('.card-wrapper');
    const centreGauche = document.getElementById('centre_gauche');
    let step = 1;

    // Animation de glissement pour card-wrapper
    cardWrapper.addEventListener('click', function() {
        if (step === 1) {
            // Retire la classe cachée de centre_gauche et glisse le conteneur
            centreGauche.classList.remove('hidden');
            cardWrapper.classList.add('slide-to-left');
            step++;
        }
    });
});
