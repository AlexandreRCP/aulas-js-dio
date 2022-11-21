// Desafio 02

console.log("--------------------------------------------------------------------------------------------------------------");
console.log("       Desafio 04 JavaScript - Calcular o IMC de uma pessoa adulta e falar qual a condição do seu IMC         ");
console.log("--------------------------------------------------------------------------------------------------------------");

console.log();
console.log("                 ****************************************************************************");

const peso = 165;
const altura = 2.00;
const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("                 *              Seu IMC é:  " + imc.toFixed(2) + " e você está abaixo do PESO!               *");
    console.log("                 ****************************************************************************");
} else if (imc >= 18.5 && imc < 25) {
    console.log("                 *             Seu IMC é:  " + imc.toFixed(2) + " e você está com o PESO NORMAL!             *");
    console.log("                 ****************************************************************************");
} else if (imc >= 25 && imc < 30) {
    console.log("                 *                Seu IMC é:  " + imc.toFixed(2) + " e você está ACIMA DO PESO!              *");
    console.log("                 ****************************************************************************");
} else if (imc >= 30 && imc < 40) {
    console.log("                 *                  Seu IMC é:  " + imc.toFixed(2) + " e você está OBESO!                    *");
    console.log("                 ****************************************************************************");
}else if (imc > 40) {
    console.log("                 *               Seu IMC é: " + imc.toFixed(2) + " e você está com OBSIDADE GRAVE !          *");
    console.log("                 ****************************************************************************");
    console.log();
    console.log("                 ===============   Seu estado é grave " + imc.toFixed(2) + " está muito alto!  ===============");
}
console.log();
