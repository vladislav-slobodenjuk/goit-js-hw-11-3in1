const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const delay = 1000;
let changeColorId = null;

const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function getRandomColor(colors) {
  return colors[randomIntegerFromInterval(0, colors.length - 1)];
}

// const randomColor = getRandomColor(colors);
// const randomColor = colors[randomIntegerFromInterval(0, 5)];

refs.start.addEventListener('click', onStartClick);

function setBgColor(color, elem) {
  elem.style.backgroundColor = color;
}

function onStartClick() {
  changeColorId = setInterval(() => {
    setBgColor(getRandomColor(colors), refs.body);
    refs.start.disabled = true;
    console.log(`color is set ${Date.now()}`);
  }, delay);
}
console.log();

refs.stop.addEventListener('click', onStopClick);

function onStopClick() {
  clearInterval(changeColorId);
  refs.start.disabled = false;
}
