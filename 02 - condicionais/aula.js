//Se o numero é PAR ou IMPAR
/*
const numero = 0;
const isNumeroPar = numero % 2;

if (numero === 0) {
    console.log("O Número: " + numero + " é invalido");
} else if (isNumeroPar === 0) {
    console.log ("O Número: " + numero + " é Par!");
} else {
    console.log ("O Número: " + numero + " é Impar!");
}
*/

console.log("--------------------------------------------------------------------------------------------------------------");
console.log("    Desafio 02 JavaScript - Calcular gasto de combustível em uma viagem com condicional ser Alcool ou Gasolina");
console.log("--------------------------------------------------------------------------------------------------------------")

console.log("                          ***************************************")
const valorGaso = 6.70;
const valorAlco = 5.45;

let tipoComb = 'Gasolina';

if (tipoComb == 'Etanol') {
    console.log("                          *     Valor do combustível: " + valorAlco + "      *");
} else {
    console.log("                          *     Valor do combustível: " + valorGaso + "       *");
}


const kmdeviagem = 360;
console.log("                          *         Km da viagem: " + kmdeviagem + "           *");

const gastoporkm = 12;
console.log("                          *     Média do carro por KM: " + gastoporkm + "       *");
console.log("                          ***************************************");

console.log();
if (tipoComb == 'Etanol') {
    const totalgasto = kmdeviagem / gastoporkm * valorAlco;
    console.log("========================= Total de gastos com combustível: " + totalgasto.toFixed(2) + " =======================");
} else {
    const totalgasto = kmdeviagem / gastoporkm * valorGaso;
    console.log("========================= Total de gastos com combustível: " + totalgasto.toFixed(2) + " =======================");
}
