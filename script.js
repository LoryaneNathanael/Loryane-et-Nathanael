document.addEventListener('DOMContentLoaded', function() {
    const cardWrapper = document.querySelector('.card-wrapper');
    let step = 1;

    // Animation de glissement pour card-wrapper
    cardWrapper.addEventListener('click', function() {
        if (step === 1) {
            cardWrapper.classList.add('slide-left');
            step++;
        }
    });
});
