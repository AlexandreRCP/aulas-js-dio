// 1 - Crie um programa que dado um número imprima a sua tabuado
/*
const numero = 7

for (let i = 1; i <= 10; i++) {
    console.log(numero * i);
}
*/
// 2 - Crie umprograma que seja capaz de percorrer uma lista de números e imprima cada numero encontrado

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 100];

for (let i = 1; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0){
        console.log(`O número é ${numero} É PAR!`);
    }
}
