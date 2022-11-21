// Desafio 01

console.log("--------------------------------------------------------------------------------------------------------------");
console.log("    Desafio 03 JavaScript - Calcular média de aluno e falar se ele Passou ou está de Recuperação ou Passou    ");
console.log("--------------------------------------------------------------------------------------------------------------");

console.log();
console.log("                 ****************************************************************************")
const nota1 = 5;
const nota2 = 4.5;
const nota3 = 5;

const media = (nota1 + nota2 + nota3) / 3;
if (media < 5) {
    console.log("                 *           O nota média do aluno foi: " + media.toFixed(2) + " O aluno foi Reprovado!         *");
} else if (media >= 5 && media <= 7) {
    console.log("                 *       O nota média do aluno foi: " + media.toFixed(2) + " O Aluno está de Recuperação!       *");
} else if (media > 7) {
    console.log("                 *           O nota média do aluno foi: " + media.toFixed(2) + " O Aluno está Aprovado!        *");
    console.log();
    console.log("                 ================      Parabéns você foi APROVADO " + media.toFixed(2) + "     =================");
}
console.log();


    