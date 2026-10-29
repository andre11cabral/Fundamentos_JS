/* Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado 
e o resto da divisão destes dois valores. */

function calculo(dividendo, divisor) {
    
    let resultado = Math.floor(dividendo / divisor);
    console.log(`O resultado é ` + resultado);


    let resto = dividendo - (resultado * divisor);
    console.log(`O resto dessa divisão é ` + resto);

} calculo(17, 3)
