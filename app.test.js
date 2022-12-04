//IMPORTAR FUNCIÓN SUM DE APP.JS

const { sum } = require ('./app.js');

//1ERA PRUEBA DE FUNCIÓN

test ('suma 14 + 9 es igual a 23', () => {
    let result = sum (14,9);

    expect(result).toBe(23);
});
