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
            cardContainer.style.transform = 'rotateY(-90deg)'; // Ouvre la carte de gauche à droite
            step++;
        } else if (step === 2) {
            card.src = 'henné_recto.png';
            card.style.position = 'absolute';
            card.style.left = '10%';
            card.style.bottom = '10%';
            card.style.clipPath = 'inset(50% 0 0 0)';
            step++;
        } else if (step === 3) {
            card.style.clipPath = 'inset(0 0 0 0)';
            card.style.transform = 'translateY(-20%)';
            step++;
        } else if (step === 4) {
            card.style.transform = 'scale(1.5)';
            step++;
        } else if (step === 5) {
            card.src = 'henné_verso.png';
            card.style.transform = 'rotateY(180deg)';
            step++;
        } else if (step === 6) {
            card.src = 'henné_recto.png';
            card.style.transform = 'rotateY(0deg)';
            step++;
        } else if (step === 7) {
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
