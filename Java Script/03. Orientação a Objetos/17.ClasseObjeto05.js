function Pessoa() {
  var nome;

  this.getNome = function () {
    return nome;
  };

  this.setNome = function (value) {
    nome = value;
  };
}

function PessoaJuridica() {
  var cnpj;

  this.getCNPJ = function () {
    return cnpj;
  };

  this.setCNPJ = function (value) {
    cnpj = value;
  };
}

function PessoaFisica() {
  var cpf;

  this.getCPF = function () {
    return cpf;
  };

  this.setCPF = function (value) {
    cpf = value;
  };
}

// O Prototype transfere as propriedades de um objeto para outro
PessoaFisica.prototype = new Pessoa();
PessoaJuridica.prototype = new Pessoa();

var oPessoaFisica = new PessoaFisica();
var oPessoaJuridica = new PessoaJuridica();

oPessoaFisica.setCPF('111111');
oPessoaFisica.setNome('João');

oPessoaJuridica.setCNPJ('222222');
oPessoaJuridica.setNome('Empresa');

console.log(oPessoaFisica.getNome());
console.log(oPessoaFisica.getCPF());
console.log(oPessoaJuridica.getNome());
console.log(oPessoaJuridica.getCNPJ());
