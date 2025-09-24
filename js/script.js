
const paw = document.querySelector('.cat-paw');
const btnWave = document.getElementById('btnWave');

function wavePaw() {
  paw.classList.add('wave');
  setTimeout(() => {
    paw.classList.remove('wave');
  }, 500);
}

paw.addEventListener('click', wavePaw);
btnWave.addEventListener('click', wavePaw);
