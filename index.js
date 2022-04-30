const Reader = require("./lib/utils/Reader");
const ExpService = require("./lib/services/ExplorerServices");
const FizzbuzzService = require("./lib/services/FizzbuzzService")

const explorers = Reader.ReadJsonfile("explorers.json")

const mision = "java"
const mision2="node"
const explorerMission = ExpService.filterByMission(explorers,mision);

const numeroExplorers = ExpService.getAmountOfExplorerByMission(explorers,mision2)

const username = ExpService.getExplorersUsernameByMission(explorers,mision)

const explorer1 = {name: "Explorer1", score: 1}
FizzbuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1}
console.log(explorer1) 

const explorer3 = {name: "Explorer3", score: 3}
FizzbuzzService.applyValidationInExplorer(explorer3) // {name: "Explorer3", score: 3, trick: "FIZZ"}
console.log(explorer3)

const explorer5 = {name: "Explorer5", score: 5}
FizzbuzzService.applyValidationInExplorer(explorer5) // {name: "Explorer5", score: 5, trick: "BUZZ"}
console.log(explorer5)

const explorer15 = {name: "Explorer15", score: 15}
FizzbuzzService.applyValidationInExplorer(explorer15) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
console.log(explorer15)