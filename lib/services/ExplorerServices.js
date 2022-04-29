class ExplorerService{

    static filterByMission(explorers,mission){
        const explorerByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorerByMission;

    }
    static getAmountOfExplorerByMission(explorers,mission){
        const numExplorers = explorers.filter((explorer) => explorer.mission == mission);
        return numExplorers;
    } 
    static getExplorersUsernameByMission(explorers,mission){
        const explorersGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernames = explorersGetUsernames.map((explorer) => explorer.githubUsername);
        return usernames


    }

}

module.exports = ExplorerService