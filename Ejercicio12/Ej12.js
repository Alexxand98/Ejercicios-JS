
function triangulo(colores) {

    while (colores.length > 1) {
        let nuevaFila = "";

        for (let i = 0; i < colores.length - 1; i++) {
            let a = colores[i];
            let b = colores[i + 1];

            if (a === b) {
                nuevaFila += a;
            } else if (a !== "R" && b !== "R") {
                nuevaFila += "R";
            } else if (a !== "G" && b !== "G") {
                nuevaFila += "G";
            } else {
                nuevaFila += "B";
            }
        }

        colores = nuevaFila;
    }

    return colores;
}

console.log(triangulo("RRGBRGBB"));
