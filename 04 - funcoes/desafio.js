/*
function escrevaNome(nome) {
    return ('Meu nome é ' + nome);
}

(function () {
    const nome = 'Alexandre Paiva';

    const meuNome = escrevaNome(nome);
    console.log(escrevaNome(nome));
})();
*/

function verificarIdade (idade) {
    if (idade >= 18) {
        console.log('Maior');
    }
    else {
        console.log('Menor');
    }
}

verificarIdade(11);