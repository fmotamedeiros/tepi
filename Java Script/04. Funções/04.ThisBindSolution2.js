class Pessoa {
    idade = 0;
  
    doSomething() {
      setInterval(function () {
        this.idade++;
        console.log(this.idade);
  
      }.bind(this), 1000);
    }
  }
  
  new Pessoa().doSomething();
  
  // Quem dispara o setInterval é um temporizador..
  // Precisa fazer o bind do this..