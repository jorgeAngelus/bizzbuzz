const Reader = require('./../../lib/utils/Reader')

describe("Unit test for Read class",() =>{
    test('1) read a JSON',()=>{
        const explorers = Reader.ReadJsonfile("explorers.json")
        expect(Reader.ReadJsonfile("explorers.json")).toEqual(explorers)

    });
});