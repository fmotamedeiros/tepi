const pessoa1 = {
    nome: 'Flávio',
    telefone: '(82) 98723-3423',
    endereco: {
        logradouro: 'Rua Cláudio Ramos',
        numero: 347
    }
}
const { endereco } = pessoa1;
console.log(endereco);

const {endereco: { logradouro, numero }} = pessoa1;
console.log(logradouro);
console.log(numero);