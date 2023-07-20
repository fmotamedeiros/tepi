let dobrar1 = function (n) {
    return n * 2;
}

let dobrar2 = (n) => {
    return n * 2;
}

// Retorno fica implícito sem a utilização do bloco
let dobrar3 = (n) => n * 2;

console.log(dobrar3(4));