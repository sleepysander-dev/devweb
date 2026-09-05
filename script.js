const knop = document.getElementById('modus-knop');

knop.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        knop.textContent = 'Lichte modus';
    } else {
        knop.textContent = 'Donkere modus';
    }
});
