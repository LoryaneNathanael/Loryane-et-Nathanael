// Variables pour contrôler l'état de la vidéo et la musique
let isMusicPlaying = false;
let audio = new Audio('musique.mp3');
let cardVideo = document.getElementById('card-video');
let clickCount = 0;
let pauseTimes = [3, 9, 12, 19, 24, 32]; // Nouvelles secondes de pause

// Fonction pour la musique
function playMusic() {
    if (!isMusicPlaying) {
        audio.loop = true;
        audio.play().catch(error => console.error("Erreur de lecture de la musique:", error));
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
    setupChromaKey(); // Lance le traitement du fond vert pour la vidéo de la carte
    cardVideo.currentTime = 0;
});

// Fonction de chroma key pour retirer le fond vert avec une couleur spécifique
function setupChromaKey() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);

    cardVideo.addEventListener('loadeddata', () => {
        // Assure que le canevas utilise les dimensions de la vidéo après le chargement
        canvas.width = cardVideo.videoWidth;
        canvas.height = cardVideo.videoHeight;
        canvas.style.position = 'absolute';
        canvas.style.top = '50%';
        canvas.style.left = '50%';
        canvas.style.transform = 'translate(-50%, -50%)';
        canvas.style.zIndex = '1';

        // Joue la vidéo de la carte au clic et affiche le rendu sans fond vert
        cardVideo.addEventListener('play', () => {
            const renderFrame = () => {
                if (!cardVideo.paused && !cardVideo.ended) {
                    ctx.drawImage(cardVideo, 0, 0, canvas.width, canvas.height);
                    const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    const len = frame.data.length;

                    // Valeurs précises du fond vert fluo #7ed957
                    const targetR = 126;
                    const targetG = 217;
                    const targetB = 87;
                    const tolerance = 60; // Ajuster la tolérance pour la couleur

                    for (let i = 0; i < len; i += 4) {
                        const r = frame.data[i];
                        const g = frame.data[i + 1];
                        const b = frame.data[i + 2];

                        // Condition pour rendre transparent le fond vert avec tolérance
                        if (Math.abs(r - targetR) < tolerance &&
                            Math.abs(g - targetG) < tolerance &&
                            Math.abs(b - targetB) < tolerance) {
                            frame.data[i + 3] = 0; // Alpha à 0 (transparent)
                        }
                    }

                    ctx.putImageData(frame, 0, 0);
                    requestAnimationFrame(renderFrame);
                }
            };
            requestAnimationFrame(renderFrame);
        });
    });

    // Contrôle de la vidéo au clic
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
}

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
