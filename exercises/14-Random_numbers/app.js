function getRandomInt() {
    // Generar un número decimal entre 0 (inclusive) y 10 (exclusive), y luego redondear hacia abajo
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber;
}

console.log(getRandomInt());