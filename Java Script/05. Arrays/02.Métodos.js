const alunos = ['Flávio', 'Maria', 'Alfredo', 'Júlia'];
console.log(alunos);

// Remove o último
alunos.pop();
console.log(alunos);

// Remove o primeiro
alunos.shift();
console.log(alunos);

// Adiciona no final
alunos.push('Fernanda');
console.log(alunos);

// Adiciona no início
alunos.unshift('Bruno');
console.log(alunos);

// Pega os dois últimos
let novosAlunos = alunos.slice(2);
console.log(novosAlunos);

// Pega da posição 1 até o (3-1)
novosAlunos = alunos.slice(1, 3);
console.log(novosAlunos);