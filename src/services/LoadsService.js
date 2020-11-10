import firebase, { firestore } from "../firebase";

const getLoads  = () => {
    return firestore.collection("loads").get().then(response => response.docs.map(document => document.data()));
}

//watches loads collection and updates the state whenever the db changes
const subscribeToLoads = (setState) => {
    firestore.collection("loads").onSnapshot(snapshot => setState(snapshot.docs.map(document => document.data())))
}

const updateLoad = (load) => {
    firestore
        .collection("loads")
        .doc("recentLoads")
        .update({
            loadsArr: firebase.firestore.FieldValue.arrayUnion({...load})
        })
    }
    
const createLoad  = (load) => {
    firestore.collection("loads").doc("recentLoads").set({...load});
}

const updateLoads = (load) => {
    firestore.collection("loads").doc("recentLoads").update({...load});
}

const deleteLoad  = (load) => {
    getLoads().then(response => response[0].loadsArr)
    .then(loads => {
        const newLoadsArr = loads.filter(arrLoad => {
            return load !== arrLoad;
        });
        firestore.collection("loads").doc("recentLoads").delete();
        createLoad(newLoadsArr);
    })    
}

export { getLoads, subscribeToLoads, updateLoads, deleteLoad, updateLoad }