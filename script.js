let points = 0;
let clickValue = 1;
let cost = 50;

const counter = document.getElementById('counter');
const clicker = document.getElementById('clicker');
const upgrade = document.getElementById('upgrade');
const costDisplay = document.getElementById('cost');

function updateDisplay() {
  counter.textContent = `${points} brainrot points`;
  costDisplay.textContent = cost;
}

clicker.addEventListener('click', () => {
  points += clickValue;
  updateDisplay();
});

upgrade.addEventListener('click', () => {
  if (points >= cost) {
    points -= cost;
    clickValue++;
    cost = Math.floor(cost * 1.5);
    updateDisplay();
  }
});

updateDisplay();
