document.addEventListener('DOMContentLoaded', function() {
    const exterieurRecto = document.getElementById('exterieur_recto');
    const centreDouble = document.getElementById('centre_double');
    let step = 1;

    // Animation au clic pour montrer `centre_double`
    exterieurRecto.addEventListener('click', function() {
        if (step === 1) {
            exterieurRecto.classList.add('open-book'); // Applique l'effet de livre
            setTimeout(() => {
                exterieurRecto.style.display = 'none'; // Cache `exterieur_recto`
                centreDouble.classList.remove('hidden'); // Affiche `centre_double`
            }, 1000); // Temporisation pour l'effet d'ouverture
            step++;
        }
    });
});
