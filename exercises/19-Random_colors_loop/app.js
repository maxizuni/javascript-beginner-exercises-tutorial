function getColor(colorNumber = 0) {
	//make sure the parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch (colorNumber) {
		case 1: return "red";

		case 2: return "yellow";

		case 3: return "blue";

		case 4: return "green";

		default: return "black";

	}
}

function getAllStudentColors() {
    for (let i = 0; i < 10; i++) {
        // Generar un número aleatorio entre 1 y 4
        let randomNumber = Math.floor(Math.random() * 4) + 1;
        // Obtener el color usando la función getColor()
        let color = getColor(randomNumber);
        // Imprimir el color en la consola
        console.log(color);
    }
}

// Llamar a la función para imprimir los colores
getAllStudentColors();