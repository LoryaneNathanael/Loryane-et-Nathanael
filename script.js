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
    cardVideo.style.display = 'block'; // Affiche la vidéo de la carte une fois chargée
    cardVideo.pause();
    cardVideo.currentTime = 0;
});

// Fonction pour retirer le fond vert
cardVideo.addEventListener('loadedmetadata', () => {
    cardVideo.style.WebkitFilter = 'chroma key(0.494, 0.847, 0.341)'; // Vert fluo
});

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
