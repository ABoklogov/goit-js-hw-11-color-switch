import colors from './src/colors.json';

const startBtnEl = document.querySelector('[data-action="start"]');
const stopBtnEl = document.querySelector('[data-action="stop"]');
const bodyEl = document.querySelector('body');

const firstIndex = colors.indexOf(colors[0]);
const lastIndex = colors.indexOf(colors[colors.length - 1]);

const colorIndex = randomIntegerFromInterval(firstIndex, lastIndex);
// console.log(color);
const d = setInterval(() => {
    colors[colorIndex]
}, 1000);
console.log(d);

startBtnEl.addEventListener('click', onSwitchColorsClick);

function onSwitchColorsClick() {
    
    bodyEl.style.backgroundColor = colors[colorIndex];
    console.log(colors[colorIndex]);

};

// const colorSwitching = setInterval(, 1000);

 function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};