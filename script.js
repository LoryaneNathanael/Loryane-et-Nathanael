document.addEventListener('DOMContentLoaded', function() {
    const exterieurRecto = document.getElementById('exterieur_recto');
    const centreDroite = document.getElementById('centre_droite');
    const centreGauche = document.getElementById('centre_gauche');
    let step = 1;

    // Animation d'ouverture et de glissement
    exterieurRecto.addEventListener('click', function() {
        if (step === 1) {
            // Ouvre exterieur_recto comme un livre
            exterieurRecto.classList.add('open-book');
            setTimeout(() => {
                // Affiche centre_droite après l'ouverture
                exterieurRecto.style.display = 'none';
                centreDroite.classList.remove('hidden');
            }, 1000); // Délai pour correspondre à la durée de l'ouverture
            step++;
        } else if (step === 2) {
            // Fait glisser centre_droite vers la droite
            centreDroite.classList.add('slide-out-right');
            // Affiche centre_gauche depuis la gauche
            centreGauche.classList.remove('hidden');
            centreGauche.classList.add('slide-in-left');
            step++;
        }
    });
});
