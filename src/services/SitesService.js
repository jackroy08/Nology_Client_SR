import React, { useState } from 'react';
import { firestore } from '../firebase';


const getSites = () => firestore.collection("sites").get().then((response) => {
    return response.docs.map((doc) => doc.data())
});

//watches sites collection and updates the state whenever the db changes
const subscribeToSites = (setState) => {
    firestore.collection("sites").onSnapshot(snapshot => setState(snapshot.docs.map(document => document.data())))
}

const createSite  = (newSite) => {
    firestore.collection("sites").doc(newSite.siteID).set({...newSite});
}

const updateSite  = (updatedSite) => {
    firestore.collection("sites").doc(updatedSite.siteID).update({...updatedSite});
}


const deleteSite  = (site) => {
    firestore.collection("sites").doc(site.siteID).delete();
}

export {getSites, subscribeToSites, createSite, updateSite, deleteSite };
