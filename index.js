const Reader = require("./lib/utils/Reader");
const ExpService = require("./lib/services/ExplorerServices");

const explorers = Reader.ReadJsonfile("explorers.json")
console.log("Metodo LeerJSON")
console.log(explorers);

const mision = "java"
const mision2="node"
const explorerMission = ExpService.filterByMission(explorers,mision);
console.log("Metodo Filter")
console.log(explorerMission)

const numeroExplorers = ExpService.getAmountOfExplorerByMission(explorers,mision2)
console.log("Metodo GET AMOUNT")
console.log(numeroExplorers)

const username = ExpService.getExplorersUsernameByMission(explorers,mision)
console.log("Metodo Get Explorers")
console.log(username)