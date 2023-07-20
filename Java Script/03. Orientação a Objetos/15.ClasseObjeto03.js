const pessoa = {
    nome: 'Flávio',
    telefone: '(82) 98723-3423',
    digaSeuNome() {
        console.log(`Meu nome é ${this.nome}!`);
    }
}

pessoa.digaSeuNome();

// Conflito entre OO e programação funcional: this varia de acordo com a chamada
const digaSeuNome = pessoa.digaSeuNome;
digaSeuNome();

// Como corrigir? Dizer quem deve ser utilizado como THIS
// O bind retorna uma nova função com a associação entre this e pessoa

const digaSeuNomeComBind = pessoa.digaSeuNome.bind(pessoa);
digaSeuNomeComBind();