class fizzbuzz{
    static applyValidationInExplorer(explorer){
        
        Object.entries(explorer).forEach(item =>{
            if(explorer.score%5 ==0 && explorer.score%3== 0){
                const trick = {trick:'FIZZBUZZ'};
                const finalExplorer = Object.assign(explorer,trick)
            }
            else if (explorer.score%5 ==0){
                const trick = {trick:'BUZZ'};
                const finalExplorer = Object.assign(explorer,trick)
            }
            else if(explorer.score%3== 0){
                const trick = {trick:'FIZZ'};
                const finalExplorer = Object.assign(explorer,trick)
            }
            else{
                const trick = {trick:explorer.score};
                const finalExplorer = Object.assign(explorer,trick)
            }
        });
    }
}

module.exports = fizzbuzz