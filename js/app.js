function toggleEnvelope(envelope) {
  envelope.classList.toggle('open');
}

const snowfallContainer = document.getElementById('snowfall');

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '❄'; // Символ снежинки
  snowflake.style.left = Math.random() * 100 + 'vw'; // Случайное горизонтальное положение
  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Разная скорость падения
  snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // Разные размеры снежинок
  snowfallContainer.appendChild(snowflake);

  // Удалить снежинку после завершения анимации
  setTimeout(() => {
    snowflake.remove();
  }, 4000);
}

// Создавать снежинки каждые 200 миллисекунд
setInterval(createSnowflake, 200);

