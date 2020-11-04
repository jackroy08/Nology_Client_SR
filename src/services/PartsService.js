
import React, { useState } from 'react';
import { firestore } from '../firebase';


const getParts = () => firestore.collection("parts").get().then((response) => {
    return response.docs.map((doc) => doc.data())
});

//watches teams collection and updates the state whenever the db changes
const subscribeToParts = (setState) => {
    firestore.collection("parts").onSnapshot(snapshot => setState(snapshot.docs.map(document => document.data())))
}

const createPart  = (newPart) => {
    firestore.collection("parts").doc(newPart.partID).set({...newPart});
}

const updatePart  = (partID, updatedPart) => {
    firestore.collection("parts").doc(partID).update({...updatedPart});
}


const deletePart = (part) => {
    firestore.collection("parts").doc(part.partID).delete();
}

export {getParts, subscribeToParts, createPart, updatePart, deletePart };