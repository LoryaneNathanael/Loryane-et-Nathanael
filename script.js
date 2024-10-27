document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.querySelector('.card-container');
    const card = document.getElementById('card');
    const downloadButton = document.getElementById('download-button');
    const answerButton = document.getElementById('answer-button');
    const backgroundMusic = document.getElementById('background-music');
    const loader = document.getElementById('loader');
    const backgroundVideo = document.getElementById('background-video');
    let step = 1;

    // Précharger les images
    function preloadImages(callback) {
        const images = ['extérieur_recto.png', 'centre_double.png', 'centre_simple.png', 'henné_recto.png', 'henné_verso.png', 'arrière.png'];
        let loadedImages = 0;

        images.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedImages++;
                if (loadedImages === images.length) callback();
            };
        });
    }

    preloadImages(() => {
        loader.style.display = 'none';
        cardContainer.style.display = 'block';
        backgroundVideo.style.display = 'block';
    });

    // Démarrage musique
    document.getElementById('play-music').addEventListener('click', () => {
        backgroundMusic.play();
    });

    cardContainer.addEventListener('click', function() {
        if (step === 1) {
            card.src = 'centre_double.png';
            cardContainer.style.transform = 'scale(1.2) translateY(-10%)';
            step++;
        } else if (step === 2) {
            card.src = 'henné_recto.png';
            cardContainer.style.transform = 'scale(1.5) translateY(0)';
            step++;
        } else if (step === 3) {
            card.src = 'centre_simple.png';
            cardContainer.style.transform = 'scale(1.2)';
            step++;
        } else if (step === 4) {
            card.src = 'arrière.png';
            downloadButton.style.display = 'block';
            answerButton.style.display = 'block';
            cardContainer.style.display = 'none';
        }
    });

    answerButton.addEventListener('click', function() {
        window.location.href = 'https://forms.gle/XDoqUYNLDYwuiema9';
    });

    downloadButton.addEventListener('click', function() {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({ orientation: 'portrait', unit: 'px', format: [380, 380] });

        pdf.addImage('extérieur_recto.png', 'PNG', 0, 0, 380, 380);
        pdf.addPage();
        pdf.addImage('centre_simple.png', 'PNG', 0, 0, 380, 380);
        pdf.addPage();
        pdf.addImage('henné_verso.png', 'PNG', 0, 0, 380, 380);
        pdf.addPage();
        pdf.addImage('arrière.png', 'PNG', 0, 0, 380, 380);

        pdf.save('Loryane_et_Nathanael.pdf');
    });
});
