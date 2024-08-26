js_content = '''
document.querySelector('.hamster').addEventListener('click', function() {
    let coinDisplay = document.querySelector('.coin-display');
    let energyText = document.querySelector('.energy-text');
    let energyBarFill = document.querySelector('.energy-bar-fill');

    // Increase coins by 5
    let currentCoins = parseInt(coinDisplay.textContent.replace(/,/g, ''));
    currentCoins += 5;
    coinDisplay.textContent = currentCoins.toLocaleString();

    // Decrease energy by 5
    let currentEnergy = parseInt(energyText.textContent.split('/')[0]);
    if (currentEnergy > 0) {
        currentEnergy -= 5;
        let energyPercentage = (currentEnergy / 5000) * 100;
        energyBarFill.style.width = energyPercentage + '%';
        energyText.textContent = currentEnergy + '/5000';
    }

    // Show +5 hover effect
    let hoverEffect = document.createElement('div');
    hoverEffect.textContent = '+5';
    hoverEffect.style.position = 'absolute';
    hoverEffect.style.left = '50%';
    hoverEffect.style.transform = 'translateX(-50%)';
    hoverEffect.style.bottom = '80%';
    hoverEffect.style.color = '#FFD700';
    hoverEffect.style.fontSize = '16px';
    hoverEffect.style.fontWeight = 'bold';
    hoverEffect.style.transition = 'bottom 0.8s ease, opacity 0.8s ease';
    document.querySelector('.hamster-container').appendChild(hoverEffect);

    setTimeout(function() {
        hoverEffect.style.bottom = '100%';
        hoverEffect.style.opacity = '0';
        setTimeout(function() {
            hoverEffect.remove();
        }, 800);
    }, 100);
});
'''
