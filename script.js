const car = document.querySelector('.car');
const obstacle = document.querySelector('.obstacle');
const scoreElement = document.getElementById('score');
let carPositionX = 125; // Машина бошланғич позицияси
let score = 0;
let obstacleSpeed = 10;

// Move car left or right
window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' && carPositionX > 25) {
    carPositionX -= 100; // Йўл кенглигига мувофиқ қадам
  } else if (event.key === 'ArrowRight' && carPositionX < 225) {
    carPositionX += 100; // Йўл кенглигига мувофиқ қадам
  }
  car.style.left = carPositionX + 'px';
});

// Объект ҳаракати
function moveObstacle() {
  let obstaclePositionY = -150;
  let obstaclePositionX = Math.random() < 0.5 ? 25 : 225; // Йўлнинг иккиланг позицияси
  obstacle.style.left = obstaclePositionX + 'px';

  const obstacleInterval = setInterval(() => {
    obstaclePositionY += obstacleSpeed; // Душман тезлиги
    obstacle.style.top = obstaclePositionY + 'px';

    // Тўқнашувни текшириш
    if (
      obstaclePositionY > 450 &&
      obstaclePositionY < 550 &&
      obstaclePositionX === carPositionX
    ) {
      alert('Game Over! Your Score: ' + score);
      clearInterval(obstacleInterval);
      window.location.reload(); // Ўйинни қайта бошлаш
    }

    // Объектни қайта жойлаштириш
    if (obstaclePositionY > 600) {
      obstaclePositionY = -150;
      obstaclePositionX = Math.random() < 0.5 ? 25 : 225; // Йўлнинг икки позицияси
      obstacle.style.left = obstaclePositionX + 'px';
      score++;
      scoreElement.textContent = score;

      if (score % 5 === 0) {
        obstacleSpeed += 2; // Тезликни ошириш
      }
    }
  }, 100);
}

// Ҳаракатни бошлаш
moveObstacle();
if (event.key === 'ArrowLeft' && carPositionX > 250) {
    carPositionX -= 100; // Қадам чапга
  } else if (event.key === 'ArrowRight' && carPositionX < 2205) {
    carPositionX += 100; // Қадам ўнгга
  }
  car.style.left = carPositionX + 'px';
  