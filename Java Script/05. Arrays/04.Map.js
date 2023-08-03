const notas = [2, 5, 7, 9];

const resultados = notas.map((elemento) => {
    return elemento + 2;
});
console.log(resultados);

const resultados2 = notas.map((elemento) => elemento + 2);
console.log(resultados2);

const converterParaDolar = item => item / 4.9;
const formatarComoReal = item => `R$ ${parseFloat(item).toFixed(2).replace('.', ',')}`;

const res = notas.map(converterParaDolar).map(formatarComoReal);
console.log(res);