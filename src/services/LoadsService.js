import firebase, { firestore } from "../firebase";

const getLoads  = () => {
    return firestore.collection("loads").get().then(response => response.docs.map(document => document.data()));
}

//watches loads collection and updates the state whenever the db changes
const subscribeToLoads = (setState) => {
    firestore.collection("loads").onSnapshot(snapshot => setState(snapshot.docs.map(document => document.data())))
}
    
const createLoad  = (load) => {
    firestore.collection("loads")
        .add({...load});
}

const updateLoads = (load) => {
    firestore.collection("loads").doc("recentLoads").update({...load});
}

const deleteLoad  = (load) => {

}

export { getLoads, subscribeToLoads, updateLoads, deleteLoad, createLoad }