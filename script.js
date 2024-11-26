const bouton = document.getElementById('btn');
        
// Fonction pour calculer la distance entre la souris et le bouton
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

document.addEventListener('mousemove', (souris) => {
    const rect = bouton.getBoundingClientRect();  // Position et dimensions du bouton
    const distanceSourisBouton = distance(souris.clientX, souris.clientY, rect.left + rect.width / 2, rect.top + rect.height / 2);

    // Si la souris est trop proche du bouton, le bouton "fuit"
    if (distanceSourisBouton < 100) {
        let nouvelleGauche = Math.random() * (window.innerWidth - rect.width);
        let nouvelleHaut = Math.random() * (window.innerHeight - rect.height);
        
        bouton.style.left = nouvelleGauche + 'px';
        bouton.style.top = nouvelleHaut + 'px';

        bouton.innerHTML = "😆";
    } else {bouton.innerHTML = "😃";}
});  