/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Km rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor
gasto m reais para realizar este percuso.


class Carros {

    marca;
    cor;
    mediaCombustivel;

    constructor(marca, cor, mediaCombustivel) {

        this.marca = marca;
        this.cor = cor;
        this.mediaCombustivel = mediaCombustivel;
    }
    
    calcularMedia(distancia, precoCombustivel) {
        return distancia * this.mediaCombustivel * precoCombustivel;
    }
}

const uno = new Carros('Fiat', 'Prata', 1 / 15);
const palio = new Carros('Fiat', 'Branco', 1 / 10);

console.log(uno.calcularMedia(70, 5.70));
console.log(palio.calcularMedia(70, 5.70));
*/
//----------------------------------------------------------------------------------------------
/*
    2 - Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura)).
    Instancie uma pessoa chamada de José que tenha 70kg de peso e 1,75 de altura e peça a José
    para dizer o valor do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return 'Seu IMC é: ' + imc.toFixed(2) + ' e você está abaixo do PESO!';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Seu IMC é: ' + imc.toFixed(2) + ' e você está com o PESO NORMAL!';
        } else if (imc >= 25 && imc < 30) {
            return 'Seu IMC é: ' + imc.toFixed(2) + ' e você está ACIMA DO PESO!';
        } else if (imc >= 30 && imc < 40) {
            return 'Seu IMC é: ' + imc.toFixed(2) + ' e você está OBESO!';
            console.log("                 ****************************************************************************");
        }else if (imc > 40) {
            return 'Seu IMC é: ' + imc.toFixed(2) + ' e você está com OBSIDADE GRAVE!';
        }
    }
}


const jose = new Pessoa('José', 70, 1.75);
const alexandre = new Pessoa('Alexandre Paiva', 74, 1.74);
console.log(jose);
console.log(jose.calcularImc());
console.log(jose.classificarImc());
console.log();
console.log(alexandre);
console.log(alexandre.calcularImc());
console.log(alexandre.classificarImc());