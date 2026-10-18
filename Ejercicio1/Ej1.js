function numVocales(str) {
    let count = 0;
    const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (let i = 0; i < str.length; i++) {
        if (vocales.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(numVocales("a,e,i,o,u"));