
function menosRepetido(numeros) {
    let resultado = numeros[0];
    let minimo = numeros.length;

    for (let i = 0; i < numeros.length; i++) {
        let contador = 0;

        for (let j = 0; j < numeros.length; j++) {
            if (numeros[i] === numeros[j]) {
                contador++;
            }
        }

        if (contador < minimo || (contador === minimo && numeros[i] < resultado)) {
            minimo = contador;
            resultado = numeros[i];
        }
    }

    return resultado;
}

console.log(menosRepetido([1, 2, 2, 3, 3, 3]));
