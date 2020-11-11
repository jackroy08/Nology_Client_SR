import firebase, { firestore } from "../firebase";

// const getLoads  = () => {
//     return firestore.collection("loads").get().then(response => response.docs.map(document => document.data()));
// }

const getLoads  = () => {
    return firestore.collection("loads")
        .get()
        .then(response => response.docs
        .map(document => {
            return {
                ...document.data(),
                id: document.id
            }
        })
        );
}

//watches loads collection and updates the state whenever the db changes
const subscribeToLoads = (handleSnapshot) => {
    return firestore.collection("loads")
        .onSnapshot(handleSnapshot);
}

// dont touch this function //
const createLoad  = (load) => {
    firestore.collection("loads")
        .add({...load});
}
///////////////////////////////

const updateLoad = (document, load) => {
    firestore.collection("loads").doc(document).update({...load});
}

const updateLoads = (load) => {
    firestore.collection("loads").doc("recentLoads").update({...load});
}

const deleteLoad  = (load) => {
    console.log('working');
}

export { getLoads, subscribeToLoads, updateLoad, updateLoads, deleteLoad, createLoad }
