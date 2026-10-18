
function cuatroCuadrados(num) {

    for (let a = 0; a <= Math.sqrt(num); a++) {
        for (let b = 0; b <= Math.sqrt(num); b++) {
            for (let c = 0; c <= Math.sqrt(num); c++) {
                for (let d = 0; d <= Math.sqrt(num); d++) {

                    if (a*a + b*b + c*c + d*d === num) {
                        return [a, b, c, d];
                    }

                }
            }
        }
    }

    return [];
}

console.log(cuatroCuadrados(7));