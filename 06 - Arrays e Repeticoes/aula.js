/*
//Array list
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

console.log(soma / 5);
*/

//ArrayList dinamicamente
/*
const nome = 'Alexandre Rodrigues Cirino de Paiva';

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
}
*/
//Média de notas dinamicamente
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota
} 

const media = soma / notas.length;

console.log(media.toFixed(2));