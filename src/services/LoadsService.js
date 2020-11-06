import firebase, { firestore } from "../firebase";

const getLoads  = () => {
    console.log("get loads")
    return firestore.collection("loads").get().then(response => response.docs.map(document => document.data()));
}

//watches loads collection and updates the state whenever the db changes
const subscribeToLoads = (setState) => {
    console.log("subscribe loads")
    firestore.collection("laods").onSnapshot(snapshot => setState(snapshot.docs.map(document => document.data())))
}

const updateLoad = (load) => {
    console.log("update loads")
    firestore
        .collection("loads")
        .doc("recentLoads")
        .update({
            loadsArr: firebase.firestore.FieldValue.arrayUnion({...load})
        })
    }
    
const createLoad  = (load) => {
    console.log("create loads")
    firestore.collection("loads").doc("recentLoads").set({...load});
}

const updateLoads = (load) => {
    console.log("update loads")
    firestore.collection("loads").doc("recentLoads").update({...load});
}

const deleteLoad  = (load) => {
    console.log("delete loads")

    let loadArr = [];
    getLoads().then(response => loadArr=response);
    const newLoadsArr = loadArr.filter((arrLoad) => {
        return load !== arrLoad;
    });
    firestore.collection("loads").doc("recentLoads").delete();
    
    createLoad(newLoadsArr);
}

export { getLoads, subscribeToLoads, updateLoads, deleteLoad, updateLoad }