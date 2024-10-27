document.addEventListener('DOMContentLoaded', function() {
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

    // Bouton pour démarrer la musique
    document.getElementById('play-music').addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
        } else {
            backgroundMusic.pause();
        }
    });

    // Gérer la séquence d'animation de la carte
    cardRecto.addEventListener('click', function() {
        if (step === 1) {
            cardRecto.classList.add('hidden');
            cardDouble.classList.remove('hidden');
            step++;
        } else if (step === 2) {
            cardDouble.classList.add('hidden');
            cardSimple.classList.remove('hidden');
            step++;
        } else if (step === 3) {
            cardSimple.classList.add('hidden');
            henneRecto.classList.remove('hidden');
            step++;
        } else if (step === 4) {
            henneRecto.classList.add('hidden');
            henneVerso.classList.remove('hidden');
            step++;
        } else if (step === 5) {
            henneVerso.classList.add('hidden');
            cardBack.classList.remove('hidden');
            downloadButton.classList.remove('hidden');
            answerButton.classList.remove('hidden');
            step++;
        }
    });

    // Redirection vers Google Form au clic sur "Réponse"
    answerButton.addEventListener('click', function() {
        window.location.href = 'https://forms.gle/XDoqUYNLDYwuiema9';
    });

    // Fonction pour générer et télécharger le PDF
    downloadButton.addEventListener('click', function() {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: [380, 380]
        });

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
