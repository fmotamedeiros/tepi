const pessoa1 = {
    nome: 'Flávio',
    telefone: '(82) 98233-2354',
    getFone : function () {
        return this.telefone;
    }
};

console.log(pessoa1.getFone());