const fs = require("fs");

class Reader{
    static ReadJsonfile(path){
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }
}

module.exports = Reader;
