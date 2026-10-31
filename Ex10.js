/* Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false. */

/* function eDivisivel(numInt, numDiv) {

    if (numInt === 3, 6, 9, 12, 15, 18, 21, 24, 27, 30) {
        const resultado = Math.floor(numInt / numDiv);

        console.log('Resultado: ' + resultado + ', ' + true);
    } else {
        console.log('Resultado: ' + resultado + ', ' + false);
    }

} eDivisivel(7135, 3) */

function eDivisivel(numInt) {

    if (numInt % 3 == 0) {
        console.log('É divisivel: ' + true);
    } else {
        console.log('Não é divisivel: ' + false)
    }
} eDivisivel(4.512)