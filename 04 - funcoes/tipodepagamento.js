const precoProduto = 100;

function formaDePagamento (precoProduto, forma) {
    return precoProduto - (precoProduto * (forma / 100));
}

function pagamentoComJuros (precoProduto, juros) {
    return precoProduto + (precoProduto * (juros / 100));
}

const aplicarDesc = 10;

if (aplicarDesc === 1) {
    console.log(formaDePagamento (precoProduto, 10));
} else if (aplicarDesc === 2) {
    console.log(formaDePagamento (precoProduto, 15));
} else if (aplicarDesc === 3) {
    console.log(precoProduto);
} else {
    console.log (pagamentoComJuros (precoProduto, 10));
}