// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль.
// При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так,
// чтобы пока изменение темы запушено, кнопка Start была не активна.

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  body: document.querySelector('body'),
  start: document.querySelector("button[data-action='start']"),
  stop: document.querySelector("button[data-action='stop']"),
};

refs.start.addEventListener('click', onStart);
refs.stop.addEventListener('click', onStop);

let timerId = null;


function onStart() {
  timerId = setInterval(() => {
    let bodyColor = colors[randomIntegerFromInterval(0, colors.length)];
    refs.body.style.backgroundColor = `${bodyColor}`;
  }, 1000);
  refs.start.disabled = true;
}

function onStop() {
  clearInterval(timerId);
  refs.start.disabled = false;
}
