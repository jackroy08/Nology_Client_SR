import firebase, { firestore } from "../firebase";

const getLoads  = () => {
    console.log("get loads here")
}

const createLoad  = () => {
    console.log("create loads here")
}

const updateLoad = (load) => {
    firestore
        .collection("loads")
        .doc("recentLoads")
        .update({
            loadsArr: firebase.firestore.FieldValue.arrayUnion({...load})
        })
}

const deleteLoad  = () => {
    console.log("delete loads here")
}

export { getLoads, createLoad, updateLoad, deleteLoad };