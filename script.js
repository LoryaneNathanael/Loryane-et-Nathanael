// Variables pour contrôler l'état de la vidéo et la musique
let isMusicPlaying = false;
let audio;
let cardVideo = document.getElementById('card-video');
let clickCount = 0;
let pauseTimes = [3, 7, 12, 15, 17, 19, 21, 27, 31]; // Seconds to pause

// Fonction pour la musique
function playMusic() {
    if (!isMusicPlaying) {
        audio = new Audio('musique.mp3');
        audio.loop = true;
        audio.play();
        isMusicPlaying = true;
    } else {
        audio.pause();
        isMusicPlaying = false;
    }
}

// Fonction pour le chargement de la page
window.addEventListener('load', () => {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    cardVideo.style.display = 'none'; // Masque la vidéo de la carte pour utiliser le canevas
    cardVideo.pause();
    cardVideo.currentTime = 0;
    setupChromaKey(); // Lance le traitement du fond vert
});

// Fonction de chroma key pour retirer le fond vert
function setupChromaKey() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);

    canvas.width = cardVideo.videoWidth;
    canvas.height = cardVideo.videoHeight;

    canvas.style.position = 'absolute';
    canvas.style.top = '50%';
    canvas.style.left = '50%';
    canvas.style.transform = 'translate(-50%, -50%)';
    canvas.style.zIndex = '1';

    cardVideo.addEventListener('play', () => {
        const renderFrame = () => {
            if (!cardVideo.paused && !cardVideo.ended) {
                ctx.drawImage(cardVideo, 0, 0, canvas.width, canvas.height);
                const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const len = frame.data.length;

                for (let i = 0; i < len; i += 4) {
                    const r = frame.data[i];
                    const g = frame.data[i + 1];
                    const b = frame.data[i + 2];

                    // Chroma key condition for green
                    if (g > 200 && r < 150 && b < 150) {
                        frame.data[i + 3] = 0; // Set alpha to 0 (transparent)
                    }
                }

                ctx.putImageData(frame, 0, 0);
                requestAnimationFrame(renderFrame);
            }
        };
        requestAnimationFrame(renderFrame);
    });
}

// Fonction de contrôle de la vidéo par clics
cardVideo.addEventListener('click', () => {
    if (clickCount < pauseTimes.length) {
        cardVideo.play();
        cardVideo.ontimeupdate = () => {
            if (cardVideo.currentTime >= pauseTimes[clickCount]) {
                cardVideo.pause();
                clickCount++;
            }
        };
    } else {
        cardVideo.play();
    }
});

// Compatibilité iOS pour la lecture automatique de la vidéo de fond
document.addEventListener('DOMContentLoaded', () => {
    const backgroundVideo = document.getElementById('background-video');
    if (backgroundVideo) {
        backgroundVideo.play().catch(() => {
            backgroundVideo.muted = true;
            backgroundVideo.play();
        });
    }
});
