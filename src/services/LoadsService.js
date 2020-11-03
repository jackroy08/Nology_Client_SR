import { firestore } from "./../firebase";

const getLoads  = () => {
    return firestore.collection("loads").get().then(response => response.docs.map(document => document.data()));
}

const createLoad  = () => {
    console.log("create loads here")
}

const updateLoad  = () => {
    console.log("update loads here")
}

const deleteLoad  = () => {
    console.log("delete loads here")
}

export { getLoads, createLoad, updateLoad, deleteLoad };