class Vehicle {
    constructor(plantID, plantType, currentTeam = null, currentUser  = null, goStatus = "go",
        checkItems = null, lastChecked = [], checkedLog = []) {
        this.plantID = plantID;
        this.plantType = plantType;
        this.currentTeam = currentTeam;
        this.currentUser = currentUser;
        this.goStatus = goStatus;
        this.checkItems = checkItems;
        this.lastChecked = lastChecked;
        this.checkedLog = checkedLog;
    }
}

export default Vehicle;