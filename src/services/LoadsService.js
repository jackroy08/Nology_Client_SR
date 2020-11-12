import firebase, { firestore } from "../firebase";

import { createNewsItem } from "./newsItemsService";

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


const createLoad  = (load) => {
    firestore.collection("loads")
        .add({...load});
    createNewsItem({
        dateCreated: load.currentDate,
        title: `Load Reported`,
        message: `${load.driver} reported load`,
        team: load.team,
        type: "loadReported",
        info: {driver: load.driver},
        seenBy: [],
        isImportant: false
    })
}


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
