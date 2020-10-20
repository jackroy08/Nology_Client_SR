class Vehicle {
    constructor(plantID, plantType, currentTeam = null, currentUser  = null, goStatus = "go",
        checkItems = ["TO BE ADDED"], lastChecked = [], checkedLog = []) {
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

const articulatedWaterTruck01 = new Vehicle("001", "Articulated Water Truck");
const dieselBowser01 = new Vehicle("002", "Diesel Bowser");
const drills01 = new Vehicle("003", "Drills");
const excavator01 = new Vehicle("004", "Excavator");
const fel01 = new Vehicle("005", "FEL");
const forklift01 = new Vehicle("006", "Forklift");
const grader01 = new Vehicle("007", "Grader");
const ldv01 = new Vehicle("008", "LDV");
const srvWaterBowser01 = new Vehicle("009", "SRV Water Bowser");
const trackDozer01 = new Vehicle("010", "Track Dozer");
const rdt01 = new Vehicle("11", "RDT");
const truckMountedCrane01 = new Vehicle("12", "Truck Mounted Crane");
const tlb01 = new Vehicle("13", "TLB");
const lightingPlant01 = new Vehicle("14", "Lighting Plant")
const hydraulicRigOperator01 = new Vehicle("15", "Hydraulic Rig Operator");
const loader01 = new Vehicle("16", "Loader");
const haulTruck01 = new Vehicle("17", "Haul Truck");
const bus01 = new Vehicle("18", "Bus");

const vehicleData = [
    articulatedWaterTruck01, dieselBowser01, drills01, excavator01, fel01, forklift01, grader01, ldv01, srvWaterBowser01, 
    trackDozer01, rdt01, truckMountedCrane01, tlb01, lightingPlant01, hydraulicRigOperator01, loader01, haulTruck01, bus01
];
export default vehicleData;