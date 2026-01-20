function rollDice(faces) {
    const result = Math.floor(Math.random() * faces) + 1;
    return result;
}

console.log(rollDice(6));