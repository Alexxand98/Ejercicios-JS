
function arrayDiff(a, b) {
    let resultado = [];

    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            resultado.push(a[i]);
        }
    }

    return resultado;
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2])); 
