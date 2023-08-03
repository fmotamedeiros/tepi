const alunos = [
    {nome: 'Flávio', nota: 7.0},
    {nome: 'Maria', nota: 8.5},
    {nome: 'Alfredo', nota: 5.5}, 
    {nome: 'Júlia', nota: 3.5}
];

const notas = alunos.map(aluno => aluno.nota);
console.log(notas);

const total = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual);
console.log(total);