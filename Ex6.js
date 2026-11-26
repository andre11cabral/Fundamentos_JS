/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
retornará o valor da aplicação sob o regime de juros compostos.*/


function Appfin(capIni, txJur, tempApp) {
    let monAppFin;

    monAppFin = capIni * (1 + txJur * tempApp);
    return `Juros simples: ${monAppFin.toFixed(2)}`
}

function AppfinComposto(capIni, txJur, tempApp) {
    monAppFin = capIni * ((1 + txJur) ** tempApp);
    return `Juros composto: ${monAppFin.toFixed(2)}`;
}

console.log(Appfin(1000, 0.10, 3));
console.log(AppfinComposto(1000, 0.10, 3));





