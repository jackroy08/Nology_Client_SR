import vehiclesArr from "../data/vehicles";
import firebase, { firestore } from "./../firebase";

const getVehicles  = () => {
    return firestore.collection("vehicles").get().then(response => response.docs.map(document => document.data()));
}

//watches vehicles collection and updates the state whenever the db changes
const subscribeToVehicles = (setState) => {
    return firestore.collection("vehicles").onSnapshot(snapshot => setState(snapshot.docs.map(document => document.data())));
}

const createVehicle  = (vehicle) => firestore.collection("vehicles").doc(vehicle.vehicleID).set({...vehicle});

const updateVehicle  = (vehicle) => firestore.collection("vehicles").doc(vehicle.vehicleID).update({...vehicle});

const deleteVehicle  = (vehicle) => firestore.collection("vehicles").doc(vehicle.vehicleID).delete();

const setVehicleIssues = (vehicle, issues, goStatus) => {
    firestore
        .collection("vehicles")
        .doc(vehicle)
        .set({
            checkItems: [...issues],
            goStatus: goStatus
        }, {merge: true})
}

const getUserVehicle = (operator) => {
    return firestore
        .collection("vehicles")
        .where('currentUser', '==', `${operator}`)
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            return data;
        });
    }

const updateVehicleIssues = (vehicle, issues) => {
    console.log("updateVehicleIssues");
    firestore
        .collection("vehicles")
        .doc(vehicle)
        .update({
            checkItems: firebase.firestore.FieldValue.arrayUnion({...issues})
        })
    }
export { getVehicles, subscribeToVehicles, createVehicle, updateVehicle, setVehicleIssues, updateVehicleIssues, deleteVehicle, getUserVehicle };
