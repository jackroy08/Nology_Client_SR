import { firestore } from '../firebase';

const getLoads  = () => {
    return firestore.collection("loads").get().then(response => response.docs.map(document => document.data()));
}

//watches loads collection and updates the state whenever the db changes
const subscribeToLoads  = (setState) => {
    firestore.collection("laods").onSnapshot(snapshot => setState(snapshot.docs.map(document => document.data())))
}

const updateLoads = (load) => {
    firestore.collection("loads").doc("recentLoads").update({...load});
}

const deleteLoad  = (load) => {
    // not finished!!!
    let loadArr = [];
    getLoads().then(response => loadArr=response);
    loadArr.filter((arrLoad) => {
        return load==! arrLoad;
    });
    firestore.collection("loads").doc("recentLoads").delete();
    
    updateLoads(load);
}

export { getLoads, subscribeToLoads, createLoad, deleteLoad };