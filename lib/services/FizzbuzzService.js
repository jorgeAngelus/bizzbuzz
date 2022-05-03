class fizzbuzz{
    static applyValidationInExplorer(explorer){
        
        Object.entries(explorer).forEach(() =>{
            if(explorer.score%5 ==0 && explorer.score%3== 0){
                const trick = {trick:"FIZZBUZZ"};
                const finalExplorer = Object.assign(explorer,trick);
                return finalExplorer;
            }
            else if (explorer.score%5 ==0){
                const trick = {trick:"BUZZ"};
                const finalExplorer = Object.assign(explorer,trick);
                return finalExplorer;
            }
            else if(explorer.score%3== 0){
                const trick = {trick:"FIZZ"};
                const finalExplorer = Object.assign(explorer,trick);
                return finalExplorer;
            }
            else{
                const trick = {trick:explorer.score};
                const finalExplorer = Object.assign(explorer,trick);
                return finalExplorer;
            }
        });
    }
}

module.exports = fizzbuzz;