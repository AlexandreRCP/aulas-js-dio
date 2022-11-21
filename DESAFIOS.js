/*
//TODO:  Retorne o valor de todos múltiplos de "A" até o seu limite "N".
var a = 5;
var n = 20;

const vetor = Object.keys(new Array(n).fill(null)).map(Number);
vetor.splice(0, a);

for (let i = 0; i < vetor.length; i++) {
    const numero = vetor[i];
    if (numero % 2 === 0){
        console.log(`O número é ${numero} É PAR!`);
    }
}

//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".

function calcular_soma(a, N) {
    m = N / a;
    sum = m * (m + 1) / 2;
    ans = a * sum;
    return ans;
}
 
// Driver code
let a = 3;
let N = 18;
 
console.log(calcular_soma(a, N));
 */

//TODO: Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme o enunciado.
/* Sem function
let resultado = 15;
//print(fizzBuzz(resultado));

if (resultado % 3 === 0 && resultado % 5 === 0){
    console.log("FizzBuzz");
} else if (resultado % 3 === 0){
    console.log("Fizz");
} else if (resultado % 5 === 0){
    console.log("Buzz");
} else {
    console.log(resultado);
}

//Com função

let resultado = 15;
console.log(fizzBuzz(resultado));

function fizzBuzz(resultado){
    if (resultado % 3 === 0 && resultado % 5 === 0){
        return "FizzBuzz";
    } else if (resultado % 3 === 0){
        return "Fizz";
    } else if (resultado % 5 === 0){
        return "Buzz";
    } else {
        return resultado;
    }
}
*/

//TODO: Implemente um método que calcule o somatório de um número usando recursividade:
/*
var n = 15;

//Sem function
const vetor = Object.keys(new Array(n + 1).fill(null)).map(Number);
var soma = vetor.reduce(function(soma, i) {
    return soma + i;
});

console.log(soma);

// Com Function

let n = 10;

function somatorio(n) {
    //Maneira simples de pegar um numero inteiro e decompor ele 1 por 1 exe.: (10) - 9, 8 , 7, .... 2, 1, 0.
    if (n === 0) {
        return 0;
    }
    else {
        return n + somatorio(n - 1);
    }
}

console.log(somatorio(n));


//TODO: Imprima se os valores numéricos passados são iguais ou não.
let a = 10;
let b = 10;

if (a === b) {
    console.log("São iguais");
} else {
    console.log("Não são iguais");
}
*/

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.
let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 
let valor = 212;

const resultado = elementos.indexOf(valor, 0);

if (resultado === -1) {
    console.log("Número " + valor + " não encontrado!");
} else {
    console.log("Achei " + valor + " na posição " + resultado);
}


