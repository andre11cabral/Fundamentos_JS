/* Faça um algoritmo que calcule o fatorial de um número. */

function NumFatorial(fatorialNum) {

    let resultado = 1;

    for (let i = 2; i <= fatorialNum; i++) {
        resultado = resultado * i;
    }
    return resultado;
} 
console.log(NumFatorial(5));
console.log(NumFatorial(4));
console.log(NumFatorial(6)); 