function random([ min = 0, max = 100 ]){
    
    if (min < max){
        [min, max] = [max, min];
    }

    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(random([20, 10]));
console.log(random([20]));
console.log(random([, 200]));