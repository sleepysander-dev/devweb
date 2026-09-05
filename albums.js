const scroller = document.getElementById('albums-scroller');
const pijlLinks = document.getElementById('pijl-links');
const pijlRechts = document.getElementById('pijl-rechts');

const scrollAfstand = 170;

pijlLinks.addEventListener('click', () => {
    scroller.scrollBy({ left: -scrollAfstand, behavior: 'smooth' });
});

pijlRechts.addEventListener('click', () => {
    scroller.scrollBy({ left: scrollAfstand, behavior: 'smooth' });
});
