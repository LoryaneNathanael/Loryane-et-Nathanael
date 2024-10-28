// Variables pour contrôler l'état de la vidéo et la musique
let isMusicPlaying = false;
let audio = new Audio('musique.mp3');
let cardVideo = document.getElementById('card-video');
let clickCount = 0;
let pauseTimes = [3, 7, 12, 15, 17, 19, 21, 27, 31]; // Seconds to pause

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

// Fonction de chroma key pour retirer le fond vert
function setupChromaKey() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);

    // Ajuste le canevas à la taille de la vidéo une fois la vidéo chargée
    cardVideo.addEventListener('loadeddata', () => {
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

                    for (let i = 0; i < len; i += 4) {
                        const r = frame.data[i];
                        const g = frame.data[i + 1];
                        const b = frame.data[i + 2];

                        // Condition pour rendre transparent le fond vert fluo
                        if (g > 200 && r < 150 && b < 150) {
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

    // Lance la lecture de la vidéo par étapes via les clics
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
