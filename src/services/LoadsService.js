import { firestore } from '../firebase';

const getLoads  = () => {
    return firestore.collection("loads").get().then(response => response.docs.map(document => document.data()));
}

//watches loads collection and updates the state whenever the db changes
const subscribeToLoads  = (setState) => {
    firestore.collection("laods").onSnapshot(snapshot => setState(snapshot.docs.map(document => document.data())))
}

const createLoad  = (load) => {
    firestore.collection("loads").doc("recentLoads").set({...load});
}

const updateLoads = (load) => {
    firestore.collection("loads").doc("recentLoads").update({...load});
}

const deleteLoad  = (load) => {

    let loadArr = [];
    getLoads().then(response => loadArr=response);
    const newLoadsArr = loadArr.filter((arrLoad) => {
        return load !== arrLoad;
    });
    firestore.collection("loads").doc("recentLoads").delete();
    
    createLoad(newLoadsArr);
}

export { getLoads, subscribeToLoads, updateLoads, deleteLoad };