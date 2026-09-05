const cdAudio = document.getElementById('cd-audio');
const cdKnop = document.getElementById('cd-knop');
const cdSchijf = document.getElementById('cd-schijf');

cdKnop.addEventListener('click', () => {
    if (cdAudio.paused) {
        cdAudio.play();
        cdSchijf.classList.add('actief');
        cdKnop.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        cdAudio.pause();
        cdSchijf.classList.remove('actief');
        cdKnop.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
});
