import colors from './src/colors.json';

const startBtnEl = document.querySelector('[data-action="start"]');
const stopBtnEl = document.querySelector('[data-action="stop"]');
const bodyEl = document.querySelector('body');
const firstIndex = colors.indexOf(colors[0]);
const lastIndex = colors.indexOf(colors[colors.length - 1]);
let colorIndex = 0;
let idSetInterval = 0;

startBtnEl.addEventListener('click', onStartSwitchColorsClick);

stopBtnEl.addEventListener('click', onStopSwitchColorsClick);

function onStartSwitchColorsClick() {
  idSetInterval = setInterval(() => {
    colorIndex = randomIntegerFromInterval(firstIndex, lastIndex);
    bodyEl.style.backgroundColor = colors[colorIndex];
  }, 1000);

  startBtnEl.disabled = true;
};

function onStopSwitchColorsClick() {
  clearInterval(idSetInterval);
  startBtnEl.disabled = false;
};

function randomIntegerFromInterval(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min);
};