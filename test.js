
//importo la funcion desde el archivo app.js, segun lo especificado en el package.json//
const { fromEuroToDollar } = require('./app.js')
const { fromDollarToYen } = require('./app.js')
const { fromYenToPound } = require('./app.js')

test("One euro should be 1.2 dollars",() => {
    let total=fromEuroToDollar(1)
    expect(total).toBe(1.2);
});

test("One dollar  should be 106 yenes",() => {
    let total=fromDollarToYen(1)
    expect(total).toBe(106.58333333333334);
});

test("100 yen should be 0.62 pounds",() => {
    let total=fromYenToPound(100)
    expect(total).toBe(0.6254886630179828);
})
    
   
