const alunos = [
    {nome: 'Flávio', nota: 7.0},
    {nome: 'Maria', nota: 8.5},
    {nome: 'Alfredo', nota: 5.5}, 
    {nome: 'Júlia', nota: 3.5}
];

const aprovados = alunos.filter((aluno) => {return (aluno.nota >= 7)});
console.log(aprovados);

const aprovados2 = alunos.filter((aluno) => aluno.nota >= 7);
console.log(aprovados2);

const aprovado = (aluno) => aluno.nota >= 7;
const aprovados3 = alunos.filter(aprovado);
console.log(aprovados3);