//IMPORTAR FUNCIÓN SUM DE APP.JS

const { sum } = require ('./app.js');

//1ERA PRUEBA DE FUNCIÓN

test ('suma 14 + 9 es igual a 23', () => {
    let result = sum (14,9);

    expect(result).toBe(23);
});

//PROGRAMA PARA CONVERTIR VALOR NUMÉRICO DE UNA MONEDA A OTRA.

test ('One euro should be 1.206 dollars', function() {

    const { fromEurotoDollar } = require ('./app.js')

    expect(fromEurotoDollar(3.5)).toBe(4.2);

})

test ('One dollar should be 106.58333 yen', function() {

    const { fromDollartoYen } = require ('./app.js')

    expect (fromDollartoYen(6.0)).toBe(639.5);

})

test ('One Yen should be 0.00625489 pounds', function() {

    const { fromYentoPound } = require ('./app.js')

    expect (fromYentoPound(511.6)).toBe(3.2);

})