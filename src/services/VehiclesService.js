import vehiclesArr from "../data/vehicles";
import firebase, { firestore } from "./../firebase";

const getVehicles  = () => {
    return firestore.collection("vehicles").get().then(response => response.docs.map(document => document.data()));
}

//watches vehicles collection and updates the state whenever the db changes
const subscribeToVehicles = (setState) => {
    firestore.collection("vehicles").onSnapshot(snapshot => setState(snapshot.docs.map(document => document.data())))
}

const createVehicle  = (vehicle) => {
    firestore.collection("vehicles").doc(vehicle.plantID).set({...vehicle});
}

//what should this fucntion do
const updateVehicle  = () => {
    console.log("update vehicles here") 
}

const setVehicleIssues = (vehicle, issues, goStatus) => {
    firestore
        .collection("vehicles")
        .doc(vehicle)
        .set({
            checkItems: [...issues],
            goStatus: goStatus
        }, {merge: true})
}

const updateVehicleIssues = (vehicle, issues) => {
    firestore
        .collection("vehicles")
        .doc(vehicle)
        .update({
            checkItems: firebase.firestore.FieldValue.arrayUnion({...issues})
        })
}

const deleteVehicle  = () => {
    console.log("delete vehicles here")
}

export { getVehicles, subscribeToVehicles, createVehicle, updateVehicle, setVehicleIssues, updateVehicleIssues, deleteVehicle };