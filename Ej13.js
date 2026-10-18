
function comprobar(linea, pistas) {
    let grupos = [];
    let contador = 0;

    for (let i = 0; i < linea.length; i++) {
        if (linea[i] === 1) {
            contador++;
        } else if (contador > 0) {
            grupos.push(contador);
            contador = 0;
        }
    }

    if (contador > 0) {
        grupos.push(contador);
    }

    pistas = pistas.filter(n => n > 0);

    return grupos.join(",") === pistas.join(",");
}

function resolverNonograma(columnas, filas) {
    let tablero = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    function resolver(fila) {
        if (fila === 5) {
            for (let c = 0; c < 5; c++) {
                let columna = [];

                for (let f = 0; f < 5; f++) {
                    columna.push(tablero[f][c]);
                }

                if (!comprobar(columna, columnas[c])) {
                    return false;
                }
            }

            return true;
        }

        for (let num = 0; num < 32; num++) {
            let binario = num.toString(2).padStart(5, "0");
            let linea = binario.split("").map(Number);

            if (comprobar(linea, filas[fila])) {
                tablero[fila] = linea;

                if (resolver(fila + 1)) {
                    return true;
                }
            }
        }

        return false;
    }

    if (resolver(0)) {
        return tablero;
    }

    return [];
}

let columnas = [
    [1, 1],
    [4],
    [1, 1, 1],
    [3],
    [1]
];

let filas = [
    [1],
    [2],
    [3],
    [1, 2],
    [4]
];

console.log(resolverNonograma(columnas, filas));
