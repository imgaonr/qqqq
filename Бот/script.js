// script.js

let coins = localStorage.getItem('coins') ? parseInt(localStorage.getItem('coins')) : 65063042;
let energy = localStorage.getItem('energy') ? parseInt(localStorage.getItem('energy')) : 7131;
const maxEnergy = 7500;
const energyRestoreRate = 1;
const energyRestoreInterval = 1000;

const coinCountElement = document.getElementById('coinCount');
const energyTextElement = document.getElementById('energyText');
const hamsterElement = document.getElementById('hamster');
const boostButton = document.getElementById('boostButton');
const quistButton = document.getElementById('quistButton');
const mainButton = document.getElementById('mainButton');
const gameContainer = document.getElementById('gameContainer');
const questsSection = document.getElementById('questsSection');
const backButton = document.getElementById('backButton');

function updateUI() {
    coinCountElement.textContent = coins.toLocaleString();
    energyTextElement.textContent = `${energy} / ${maxEnergy}`;
    localStorage.setItem('coins', coins);
    localStorage.setItem('energy', energy);
}

hamsterElement.addEventListener('click', () => {
    if (energy > 0) {
        coins += 1;
        energy -= 1;
        updateUI();
    } else {
        alert('Недостаточно энергии!');
    }
});

boostButton.addEventListener('click', () => {
    energy = Math.min(energy + 100, maxEnergy);
    updateUI();
});

function restoreEnergy() {
    if (energy < maxEnergy) {
        energy += energyRestoreRate;
        if (energy > maxEnergy) {
            energy = maxEnergy;
        }
        updateUI();
    }
}

quistButton.addEventListener('click', () => {
    gameContainer.style.display = 'none';
    questsSection.style.display = 'flex';
});

mainButton.addEventListener('click', () => {
    questsSection.style.display = 'none';
    gameContainer.style.display = 'flex';
});

backButton.addEventListener('click', () => {
    questsSection.style.display = 'none';
    gameContainer.style.display = 'flex';
});

setInterval(restoreEnergy, energyRestoreInterval);

updateUI();
