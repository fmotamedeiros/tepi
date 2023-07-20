class Pessoa {
    idade = 0;
  
    doSomething() {
      setInterval(() => {
        this.idade++;
        console.log(this.idade);
  
      }, 1000);
    }
  }
  
  new Pessoa().doSomething();
  
  // Quem dispara o setInterval é um temporizador..
  // Precisa fazer o bind do this..