import { firestore } from "./../firebase";

const getVehicles  = () => {
    return firestore.collection("vehicles").get().then(response => response.docs.map(document => document.data()));
}

//watches vehicles collection and updates the state whenever the db changes
const subscribeToVehicles = (setState) => {
    firestore.collection("vehicles").onSnapshot(snapshot => setState(snapshot.docs.map(document => document.data())))
}

const createVehicle  = (vehicle) => {
    firestore.collection("vehicles").doc(vehicle.vehicleID).set({...vehicle});
}

const updateVehicle  = (vehicle) => {
    firestore.collection("vehicles").doc(vehicle.vehicleID).update({...vehicle});
}

const deleteVehicle  = (vehicle) => {
    firestore.collection("vehicles").doc(vehicle.vehicleID).delete();
}

export { getVehicles, subscribeToVehicles, createVehicle, updateVehicle, deleteVehicle };