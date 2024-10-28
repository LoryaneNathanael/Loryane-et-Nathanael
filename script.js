// Fonction pour gérer l'écran de chargement
window.addEventListener('load', () => {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('content').style.display = 'block';
});

// Fonction pour lire la musique
let isMusicPlaying = false;
let audio;

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

// Compatibilité iOS pour la lecture automatique de la vidéo de fond
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('background-video');
    if (video) {
        video.play().catch(() => {
            // Si la lecture automatique échoue, ajouter un écouteur de clic
            video.muted = true;
            video.play();
        });
    }
});
