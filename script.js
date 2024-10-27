document.addEventListener('DOMContentLoaded', function() {
    const cardWrapper = document.querySelector('.card-wrapper');
    let step = 1;

    // Animation de glissement pour card-wrapper
    cardWrapper.addEventListener('click', function() {
        if (step === 1) {
            // Fait glisser card-wrapper vers la droite
            cardWrapper.classList.add('slide-out-right');
            step++;
        }
    });
});
