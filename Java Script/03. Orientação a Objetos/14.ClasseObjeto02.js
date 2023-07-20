// Para criar propriedades podemos usar a palavra var ou this. Se utilizarmos a palavra var o atributo vai ficar privado e se utilizarmos a palavra this o atributo vai ficar publico.

function Pessoa() {
  var nome;

  this.getNome = function () {
    return nome;
  };

  this.setNome = function (value) {
    nome = value;
  };
}

pessoa = new Pessoa();
pessoa.setNome('Flávio');


console.log(pessoa.getNome());