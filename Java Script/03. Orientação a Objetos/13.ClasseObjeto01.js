class Pessoa {

  nome = '';

  constructor(nome) {
    this.nome = nome;
  }
  
  getNome() {
    return this.nome
  }

  digaSeuNome() {
    return `Meu nome é: ${this.nome}`;
  }
}

const pessoa1 = new Pessoa('Flávio');

console.log(pessoa1.getNome());
console.log(pessoa1.digaSeuNome());