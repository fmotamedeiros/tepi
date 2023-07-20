function random({ min = 0, max = 100 }){
    // Random retorna um número entre 0 e 1
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const objeto = {max: 10, min: 0};
console.log(random(objeto));

console.log(random({}));