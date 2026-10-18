
function encontrarIndice(numeros) {

    for (let i = 0; i < numeros.length; i++) {
        let izquierda = 0;
        let derecha = 0;

        for (let j = 0; j < i; j++) {
            izquierda += numeros[j];
        }

        for (let j = i + 1; j < numeros.length; j++) {
            derecha += numeros[j];
        }

        if (izquierda === derecha) {
            return i;
        }
    }

    return -1;
}

console.log(encontrarIndice([20, 10, -80, 10, 10, 15, 35])); 