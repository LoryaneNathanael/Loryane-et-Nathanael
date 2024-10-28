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
        }
    });

    // Deuxième clic pour le glissement entre centre_droite et centre_gauche
    centreDroite.addEventListener('click', function() {
        if (step === 2) {
            centreDroite.classList.add('slide-out-right'); // Glisse centre_droite vers la droite
            centreGauche.classList.remove('hidden');
            centreGauche.classList.add('slide-in-left'); // Affiche centre_gauche au centre
            step++;
        }
    });
});
