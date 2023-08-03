const alunos = ['Flávio', 'Maria', 'Alfredo', 'Júlia'];
console.log(alunos);

alunos.sort();
console.log(alunos);

delete alunos[0];
console.log(alunos);

// A partir da posição 0, remover um elemento
alunos.splice(0, 1);
console.log(alunos);

alunos.splice(1, 0, 'Bia');
console.log(alunos);

// Undefined :: sem erro
console.log(alunos[20]);