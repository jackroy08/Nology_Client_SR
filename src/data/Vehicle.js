class Vehicle {
    constructor(plantID, plantType, goStatus, currentTeam = null, currentUser  = null,
        checkItems = null, lastChecked = [], checkedLog = []) {
        this.plantID = plantID;
        this.plantType = plantType;
        this.goStatus = goStatus;
        this.currentTeam = currentTeam;
        this.currentUser = currentUser;
        this.checkItems = checkItems;
        this.lastChecked = lastChecked;
        this.checkedLog = checkedLog;
    }
}

export default Vehicle;