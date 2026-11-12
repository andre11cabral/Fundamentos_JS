/* 
Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 
3. Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5.
 Repita a operação até que o código lido seja negativo. */


function calcuMed(codigo, nota1, nota2, nota3) {

    let notas = [nota1, nota2, nota3];
    notas.sort((a, b) => b - a);
    let MediaNota = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10;

    return `Código do Aluno: ${codigo}. Notas: ${nota1}, ${nota2}, ${nota3}. ${MediaNota < 5 ? '= Reprovado.' : '= Aprovado.'}`;

}
console.log('\n' + calcuMed(255255255, 6.1, 4.5, 5.9));
console.log(calcuMed(255255256, 4.2, 3.9, 3.9));
