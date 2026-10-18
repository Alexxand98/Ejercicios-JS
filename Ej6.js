
function persistencia(num) {
    let contador = 0;

    while (num >= 10) {
        let digitos = num.toString();
        let resultado = 1;

        for (let i = 0; i < digitos.length; i++) {
            resultado *= Number(digitos[i]);
        }

        num = resultado;
        contador++;
    }

    return contador;
}

console.log(persistencia(999));