class Pessoa {

  nome = '';

  constructor(nome) {
    this.nome = nome;
  }

  getNome() {
    return this.nome;
  }

  digaSeuNome() {
    return `Meu nome é: ${this.nome}`;
  }
}

class PessoaFisica extends Pessoa {

  cpf = '';

  constructor(nome, cpf) {
    super(nome);
    this.cpf = cpf;
  }

  getCpf() {
    return this.cpf;
  }

  digaSeuCpf() {
    return `Meu CPF é: ${this.cpf}`;
  }
}

const pessoa1 = new Pessoa('Flávio');

console.log(pessoa1.getNome());
console.log(pessoa1.digaSeuNome());

const pessoa2 = new PessoaFisica('Maria', '324.234.565-34');

console.log(pessoa2.getNome());
console.log(pessoa2.digaSeuCpf());