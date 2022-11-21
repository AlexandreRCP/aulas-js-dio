/*
let var1 = 10 + 10;
console.log(var1)
var1 = 20 - 10;
console.log(var1)
var1 = 20 * 10;
console.log(var1)
var1 = 20 / 10;
console.log(var1)
*/
//desafio.txt
console.log("----------------------------------------------------------------------------")
console.log("    Desafio 01 JavaScript - Calcular gasto de combustível em uma viagem")
console.log("----------------------------------------------------------------------------")

console.log("              ***************************************")
const valorcomb = 4.50;
console.log("              *     Valor do combustível: " + valorcomb + "       *")

const kmdeviagem = 360;
console.log("              *         Km da viagem: " + kmdeviagem + "           *")

const gastoporkm = 12;
console.log("              *     Média do carro por KM: " + gastoporkm + "       *")
console.log("              ***************************************")

console.log()
const totalgasto = kmdeviagem / gastoporkm * valorcomb;
console.log("============= Total de gastos com combustível: " + totalgasto.toFixed(2) + " ==============")