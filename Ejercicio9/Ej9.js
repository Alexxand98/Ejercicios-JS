
function ordenarDigitos(num) {
    let digitos = num.toString().split("");

    digitos.sort((a, b) => b - a);

    let resultado = digitos.join("");

    return Number(resultado);
}

console.log(ordenarDigitos(42145));
