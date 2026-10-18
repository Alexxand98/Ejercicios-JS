
function contarBits(num) {
    if (num < 0) {
        return "El numero no puede ser negativo";
    }

    let binario = num.toString(2);
    let contador = 0;

    for (let i = 0; i < binario.length; i++) {
        if (binario[i] === "1") {
            contador++;
        }
    }

    return contador;
}

console.log(contarBits(1234));