import { firestore } from '../firebase';

const getSites  = () => {
    return firestore.collection("sites").get().then(response => response.docs.map(document => document.data()));
}

const subscribeToSites = (setState) => {
    firestore.collection("sites").onSnapshot(snapshot => setState(snapshot.docs.map(document => document.data())))
}

const createSite  = (site) => {
    firestore.collection("sites").doc(site.name).set({...site});
}

const updateSite  = (site) => {
    firestore.collection("sites").doc(site.name).update({...site});
}

const deleteSite  = (site) => {
    firestore.collection("sites").doc(site.name).delete();
}

export { getSites, subscribeToSites, createSite, updateSite, deleteSite };