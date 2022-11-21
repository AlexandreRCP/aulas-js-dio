// Desafio 03

console.log("--------------------------------------------------------------------------------------------------------------");
console.log("            Desafio 05 JavaScript - Calcular o preço de um produtor de acordo com o pagamento                 ");
console.log("--------------------------------------------------------------------------------------------------------------");

console.log();
console.log("                 ****************************************************************************");

const precoProduto = 100;
const avistaDebito = precoProduto - (precoProduto * 0.1);
const avistaDinheiro = precoProduto - (precoProduto * 0.15);
const creditoAcimaDuas = precoProduto + (precoProduto * 0.1);

const formaPagamento = 'duasVezes';

if (formaPagamento === 'duasVezes') {
    console.log("                 *                 Preço da etiqueta R$ " + precoProduto.toFixed(2) + " Boas Compras!                *");
    console.log("                 ****************************************************************************");
} else if (formaPagamento === avistaDebito) {
    console.log("                 *         Seu pagamento com desconto é de R$ " + avistaDebito.toFixed(2) + " Boas Compras!           *");
    console.log("                 ****************************************************************************");
} else if (formaPagamento === avistaDinheiro) {
    console.log("                 *          Seu pagamento com desconto é de R$ " + avistaDinheiro.toFixed(2) + " Boas Compras!          *");
    console.log("                 ****************************************************************************");
} else if (formaPagamento === creditoAcimaDuas) {
    console.log("                 *               Sua compra ficará em R$ " + creditoAcimaDuas.toFixed(2) + " Boas Compras!               *");
    console.log("                 ****************************************************************************");
}

console.log();
console.log("                 ============  Obrigado por compra em nossas lojas volte sempre  ============");
console.log();
