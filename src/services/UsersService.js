import { firestore } from "../firebase";

const getUsers = () => {
    return firestore.collection("users")
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            return data;
        });
}

const subscribeToUsers = (setState) => {
    return firestore.collection("users").onSnapshot(snapshot => setState(snapshot.docs.map(document => document.data())))
}
const createUser  = (newUser) => firestore.collection("users").doc(newUser.userID).set({...newUser});

const updateUser  = (updatedUser) => {
    return firestore
        .collection("users")
        .doc(updatedUser.userID)
        .update({...updatedUser})
};

const deleteUser  = (user) => firestore.collection("users").doc(user.userID).delete();

const getOperators = () => {
    return firestore
        .collection("users")
        .where('userType', '==', "operator")
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data())
            return data;
        });
}

const getTeamSupervisor = (operatorTeam, operatorSubTeam) => {
    return firestore
        .collection("users")
        .where('userType', '==', "supervisor")
        .where("currentTeam", "==", `${operatorTeam}`)
        .where("currentSubTeam", "==", `${operatorSubTeam}`)
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data())
            return data;
        });
    }

export { getUsers, subscribeToUsers, createUser, updateUser, deleteUser,  getOperators, getTeamSupervisor};