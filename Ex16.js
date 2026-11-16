/* Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores 
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  Crie um caso default para operações inválidas. */


function Mycalcu(Num1, operador, Num2) {

    let resultado;

    switch (operador) {

        case '+':
            resultado = Num1 + Num2;
            return `Resultado: ${resultado}`

        case '-':
            resultado = Num1 - Num2;
            return `Resultado: ${resultado}`

        case '*':
            resultado = Num1 * Num2;
            return `Resultado: ${resultado}`

        case '/':
            resultado = Num1 / Num2;
            return `Resultado: ${resultado}`

        default:
            return 'Escolha um operador válido.'
    }

}
console.log(Mycalcu(3, '*', 3))
console.log(Mycalcu(9, '-', 3))
console.log(Mycalcu(5, '/', 3))
console.log(Mycalcu(10, '+', 3))
