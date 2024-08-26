document.addEventListener("DOMContentLoaded", function() {
    let coinCount = 127916010;
    let energyCount = 5000;

    const hamster = document.getElementById('hamster');
    const coinDisplay = document.getElementById('coin-count');
    const energyDisplay = document.getElementById('energy-count');

    hamster.addEventListener('click', function() {
        if (energyCount > 0) {
            coinCount += 10; // Increase coins by 10 for each tap
            energyCount -= 1; // Decrease energy by 1 for each tap

            coinDisplay.textContent = coinCount.toLocaleString();
            energyDisplay.textContent = energyCount;

            if (energyCount === 0) {
                alert("Energy depleted! Please wait for it to recharge.");
            }
        }
    });
});
