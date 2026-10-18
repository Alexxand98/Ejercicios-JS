
function numerosImpares(numeros) {
    let resultado = [];

    for (let i = 0; i < numeros.length; i++) {
        let contador = 0;

        for (let j = 0; j < numeros.length; j++) {
            if (numeros[i] === numeros[j]) {
                contador++;
            }
        }

        if (contador % 2 !== 0 && !resultado.includes(numeros[i])) {
            resultado.push(numeros[i]);
        }
    }

    return resultado;
}

console.log(numerosImpares([1, 1, 2, 3, 3, 3]));
