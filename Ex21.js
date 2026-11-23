/* Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela:
 1) crianças com menos de 10 anos pagam R$80; 
 2) conveniados com idade entre 10 e 30 anos pagam R$50; 
 3) conveniados com idade acima de  30 e até 60 anos pagam R$ 95; 
 4) conveniados acima de 60 anos pagam R$130 */

function convênioMedico(idadeConveniado) {
    let convênioFixo = 100;
    let planoTotal;

    if (idadeConveniado < 10 && idadeConveniado >= 0) {
        planoTotal = (80 + convênioFixo);
        return `O valor do seu convênio será de, ${`R$` + planoTotal.toFixed(2)}`;

    } else if (idadeConveniado >= 10 && idadeConveniado <= 30) {
        planoTotal = (50 + convênioFixo);
        return `O valor do seu convênio será de, ${`R$` + planoTotal.toFixed(2)}`;

    } else if (idadeConveniado > 30 && idadeConveniado <= 60) {
        planoTotal = (95 + convênioFixo);
        return `O valor do seu convênio será de, ${`R$` + planoTotal.toFixed(2)}`;

    } else if (idadeConveniado > 60) {
        planoTotal = (130 + convênioFixo);
        return `O valor do seu convênio será de, ${`R$` + planoTotal.toFixed(2)}`;

    }
    else
        return `Idade inválida!`

}

console.log(convênioMedico(5));
console.log(convênioMedico(10));
console.log(convênioMedico(30));
console.log(convênioMedico(31));
console.log(convênioMedico(60));
console.log(convênioMedico(61));
console.log(convênioMedico(-1));