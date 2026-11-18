/* Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o 
comando switch. Crie um caso default para produto não existente. 

 O cardápio de uma lanchonete é o seguinte: 
    Código  Descrição do Produto    Preço 
    100        Cachorro Quente     R$ 3,00 
    200      Hambúrguer Simples    R$ 4,00 
    300        Cheeseburguer       R$ 5,50 
    400           Bauru            R$ 7,50 
    500        Refrigerante        R$ 3,50 
    600            Suco            R$ 2,80 */

function chamaPedi(codigo, quantidade) {
    let valorTotal;

    switch (codigo) {

        case 100:
            valorTotal = (quantidade * 3.00);
            return `Total a pagar pelo Cachorro-Quente: ${`R$` + valorTotal.toFixed(2)}`;

        case 200:
            valorTotal = (quantidade * 4.00);
            return `Total a pagar pelo Hambúrguer Simples: ${`R$` + valorTotal.toFixed(2)}`;;

        case 300:
            valorTotal = (quantidade * 5.50);
            return `Total a pagar pelo Cheeseburguer: ${`R$` + valorTotal.toFixed(2)}`;

        case 400:
            valorTotal = (quantidade * 7.50);
            return `Total a pagar pelo Bauru: ${`R$` + valorTotal.toFixed(2)}`;

        case 500:
            valorTotal = (quantidade * 3.50);
            return `Total a pagar pelo Refrigerante: ${`R$` + valorTotal.toFixed(2)}`;



        case 600:
            valorTotal = (quantidade * 2.80);
            return `Total a pagar pelo Suco: ${`R$` + valorTotal.toFixed(2)}`;

        default:
            return `Produto não existente!`;
    }

}
console.log(chamaPedi(100, 6));
console.log(chamaPedi(200, 5));
console.log(chamaPedi(300, 4));
console.log(chamaPedi(400, 3));
console.log(chamaPedi(500, 2));
console.log(chamaPedi(600, 1));
console.log(chamaPedi(700, 0));
