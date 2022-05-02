const FizzBuzzServices = require('./../../lib/services/FizzbuzzService')

describe("Unit test for FizzBuzzService",() =>{
    test('1) Validate Explorer Services',() =>{
        const explorer1 = {name: "Explorer1", score: 1}
        const resexplorer = FizzBuzzServices.applyValidationInExplorer(explorer1)
        expect(FizzBuzzServices.applyValidationInExplorer(explorer1)).toEqual(resexplorer)
    });
})

