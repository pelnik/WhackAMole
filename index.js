let score = 0;

const holes = [...document.getElementsByClassName('hole')];

function generateRandomMole() {
  const randomHoleIndex = Math.floor(Math.random() * holes.length);
  holes[randomHoleIndex].classList.toggle("mole");
}


setInterval(generateRandomMole, 300)

const scoreDisplay = document.getElementById('score');

const gameArea = document.getElementById('whack-a-mole');
gameArea.addEventListener('click', function(clickEvent) {
  if (clickEvent.target.matches('.mole')) {
    clickEvent.target.classList.remove('mole');
    score += 1;
    scoreDisplay.innerText = score;
  }
});