document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const cardRecto = document.getElementById('card-recto');
    const cardDouble = document.getElementById('card-double');
    const cardSimple = document.getElementById('card-simple');
    const henneRecto = document.getElementById('henne-recto');
    const henneVerso = document.getElementById('henne-verso');
    const cardBack = document.getElementById('card-back');
    const downloadButton = document.getElementById('download-button');
    const answerButton = document.getElementById('answer-button');
    const backgroundMusic = document.getElementById('background-music');
    let step = 1;

    // Masquer le loader après chargement
    window.addEventListener('load', function() {
        loader.style.display = 'none';
        cardRecto.classList.remove('hidden'); // Affiche la première image
    });

    // Ajout du bouton pour démarrer la musique
    document.getElementById('play-music').addEventListener('click', function() {
        backgroundMusic.play();
    });

    // Gérer la séquence d'animation
    cardRecto.addEventListener('click', function() {
        if (step === 1) {
            cardRecto.classList.add('hidden');
            cardDouble.classList.remove('hidden');
            step++;
        } else if (step === 2) {
            cardDouble.classList.add('hidden');
            henneRecto.classList.remove('hidden');
            henneRecto.style.transform = 'translateY(10px)';
            step++;
        } else if (step === 3) {
            henneRecto.classList.add('hidden');
            cardSimple.classList.remove('hidden');
            step++;
        } else if (step === 4) {
            cardSimple.classList.add('hidden');
            henneRecto.classList.remove('hidden');
            henneRecto.style.transform = 'scale(1.2) rotateY(180deg)';
            step++;
        } else if (step === 5) {
            henneRecto.classList.add('hidden');
            henneVerso.classList.remove('hidden');
            step++;
        } else if (step === 6) {
            henneVerso.classList.add('hidden');
            cardDouble.classList.remove('hidden');
            step++;
        } else if (step === 7) {
            cardDouble.classList.add('hidden');
            cardBack.classList.remove('hidden');
            downloadButton.style.display = 'block';
            answerButton.style.display = 'block';
            step++;
        }
    });
});
