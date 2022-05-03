const ExplorerServices = require("./../../lib/services/ExplorerServices");

describe("Unit test for Explorer Services",()=>{
    test("1) filter by Mision",()=>{
        const explorers = [{
            "name": "Woopa1",
            "githubUsername": "ajolonauta1",
            "score": 1,
            "mission": "node",
            "stacks": [
                "javascript",
                "reasonML",
                "elm"
            ]
        },
        {
            "name": "Woopa2",
            "githubUsername": "ajolonauta2",
            "score": 2,
            "mission": "node",
            "stacks": [
                "java",
                "groovy",
                "elm"
            ]
        }
        ];
        const mision = "javascript";
        const explorerMission = ExplorerServices.filterByMission(explorers,mision);
        expect(ExplorerServices.filterByMission(explorers,mision)).toEqual(explorerMission);        
    });
});


describe("Unit test for getAmountOfExplorerByMission",()=>{
    test("2)getAmountOfExplorerByMission",()=>{
        const explorers = [{
            "name": "Woopa1",
            "githubUsername": "ajolonauta1",
            "score": 1,
            "mission": "node",
            "stacks": [
                "javascript",
                "reasonML",
                "elm"
            ]
        },
        {
            "name": "Woopa2",
            "githubUsername": "ajolonauta2",
            "score": 2,
            "mission": "node",
            "stacks": [
                "java",
                "groovy",
                "elm"
            ]
        }
        ];
        const mision = "java";
        const numeroExplorers = ExplorerServices.getAmountOfExplorerByMission(explorers,mision);
        expect(ExplorerServices.getAmountOfExplorerByMission(explorers,mision)).toEqual(numeroExplorers);
    });
});

describe("Unit test for getAmountOfExplorerByMission",()=>{
    test("3)getExplorersUsernameByMission",()=>{
        const explorers = [{
            "name": "Woopa1",
            "githubUsername": "ajolonauta1",
            "score": 1,
            "mission": "node",
            "stacks": [
                "javascript",
                "reasonML",
                "elm"
            ]
        },
        {
            "name": "Woopa2",
            "githubUsername": "ajolonauta2",
            "score": 2,
            "mission": "node",
            "stacks": [
                "java",
                "groovy",
                "elm"
            ]
        }
        ];
        const mision = "javascript";
        const nombreUserMission = ExplorerServices.getExplorersUsernameByMission(explorers,mision);
        expect(ExplorerServices.getExplorersUsernameByMission(explorers,mision)).toEqual(nombreUserMission);
    });
});