/**
 * Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
 * faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.
 * 
 * dados de entrada:
 * 5
 * 50
 * 10
 * 98
 * 23
 * 
 * saída:
 * 98
 */
const { gets, print } = require('./funcoes-auxiliares');

const numerosSorteados = [];

//percorrer a lista entradas lá na funções-auxiliares com o gets
for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);    
}

//Usado para dscobrir qual o maior valor dentre os dados de entrada
let maiorValor = 0;

for (let i =0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    //Pega dado por dado da lista e faz comparação entre eles para achar o MAIOR número.
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);