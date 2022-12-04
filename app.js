//PROBANDO JS

console.log("Hello World");

//EJEMPLO JS

const sum = (a,b) => {

    return a + b;
}

//prueba registro consola

console.log(sum(7,3));

//PROGRAMA PARA CONVERTIR VALOR NUMÉRICO DE UNA MONEDA A OTRA.

let OneEuroIs = {
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8,
}

const fromEurotoDollar = function(valueinEuro) {

    let valueInDollar = valueinEuro * 1.2;

    return valueInDollar;

}


const fromDollartoYen = function (valueinEuro){
    let valueInDollar = valueinEuro * 1.2;
    let valueInYen = valueInDollar * 127.9;
    
    return valueInYen;
}


const fromYentoPound = function (){
    let valueInYen = valueinEuro * 127.9;
    let valueinPound = valueInYen * 0.8;



}






//exportación de las funciones

module.exports = { sum, fromEurotoDollar, fromDollartoYen };