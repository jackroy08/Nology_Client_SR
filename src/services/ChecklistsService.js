import { firestore } from "./../firebase";

const getChecklists  = (vehicleType) => {
    console.log(vehicleType)
        return firestore
            .collection("checklistData")
            .doc(vehicleType)
            .get()
            .then(response => response.data())
}

const subscribeToChecklist = () => {
    console.log("subscibe to checklists here")
}
const createChecklist  = (data) => {
    Object.keys(data).forEach(type => {
        firestore
        .collection("checklistData")
        .doc(type)
        .set(data[type]);
    })
}

const updateChecklist  = () => {
    console.log("update Checklists here")
}

const deleteChecklist  = () => {
    console.log("delete Checklists here")
}

export { getChecklists, subscribeToChecklist, createChecklist, updateChecklist, deleteChecklist };