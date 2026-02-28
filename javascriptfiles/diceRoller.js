function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const typeOfDice = document.getElementById("typeOfDice").value; // e.g. "20" for D20
    const diceResults = document.getElementById("diceResults");
    const diceImgs = document.getElementById("diceImgs");
    const values = [];
    const images = [];
    
    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * typeOfDice) + 1; // uses the dropdown value
        values.push(value);
        images.push(`<img src="/images/dicesides/d${typeOfDice}/${value}.png" alt="Dice ${value}">`);
    }

    diceResults.textContent = `Total: ${values.reduce((sum, a) => sum + a, 0)}`;
    diceImgs.innerHTML = images.join('');
}