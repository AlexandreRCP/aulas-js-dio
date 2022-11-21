function calcularImc (peso, altura) {
    return peso / (altura * altura); //ou peso / Math.pow (altura, 2);
}

function classificarImc (imc) {
    if (imc < 18.5) {
        return ('Seu IMC é: ' + imc.toFixed(2) + ' você está abaixo do PESO!');
    } else if (imc >= 18.5 && imc < 25) {
        return ('Seu IMC é: ' + imc.toFixed(2) + ' você está com o PESO NORMAL!');
    } else if (imc >= 25 && imc < 30) {
        return ('Seu IMC é: ' + imc.toFixed(2) + ' você está ACIMA DO PESO!');
    } else if (imc >= 30 && imc < 40) {
        retun ('Seu IMC é: ' + imc.toFixed(2) + ' você está OBESO!');
    }else if (imc > 40) {
        return ('Seu IMC é: ' + imc.toFixed(2) + ' você está com OBSIDADE GRAVE!');
    }
}

(function () {
    const peso = 75;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();