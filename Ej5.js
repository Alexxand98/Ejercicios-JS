
function eliminarRepetidos(elementos) {
    let resultado = [];

    for (let i = 0; i < elementos.length; i++) {
        if (!resultado.includes(elementos[i])) {
            resultado.push(elementos[i]);
        }
    }

    return resultado;
}

console.log(eliminarRepetidos([1, 2, 2, 3, 1])); 