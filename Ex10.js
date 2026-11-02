/* Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false. */

function eDivisivel(numInt) {

    if (numInt % 3 === 0) {

        console.log(true);
    } else {
        console.log(false);
    }

} 
eDivisivel(12)
eDivisivel(35)
eDivisivel(129)

