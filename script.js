// script.js
let coinCount = 0;

const hamster = document.getElementById('hamster');
const coinDisplay = document.getElementById('coin-count');

hamster.addEventListener('click', () => {
    coinCount += 1; // Increase coin count by 1 each tap
    coinDisplay.textContent = coinCount;
});
