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
const subscribeToLoads = (setState) => {
    return firestore.collection("loads")
        .onSnapshot(snapshot => setState(snapshot.docs
            .map(document => {
                return {
                    ...document.data(),
                    id: document.id
                }
            })
        ));
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

const deleteLoad  = (load) => {
    console.log('working');
}

export { getLoads, subscribeToLoads, updateLoad, deleteLoad, createLoad }
