/* Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo: PLANO: A AUMENTO : 10% | PLANO: B AUMENTO: 15% PLANO: C AUMENTO: 20%.
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.  */

function AumeFuncionario(MeuPlanoTrabalho) {

    let salarioMinimo = 1630;
    let salarioAjustado;

    switch (MeuPlanoTrabalho) {

        case 'A':
            salarioAjustado = (salarioMinimo * 1.10);
            return `Seu NOVO salário é,  ${salarioAjustado.toFixed(2)}`;


        case 'B':
            salarioAjustado = (salarioMinimo * 1.15);
            return `Seu NOVO salário é,  ${salarioAjustado.toFixed(2)}`;


        case 'C':
            salarioAjustado = (salarioMinimo * 1.20);
            return `Seu NOVO salário é,  ${salarioAjustado.toFixed(2)}`;


        default:
            return `Plano indicado é inválido.`

    }

}
console.log(AumeFuncionario('A'));
console.log(AumeFuncionario('B'));
console.log(AumeFuncionario('C'));