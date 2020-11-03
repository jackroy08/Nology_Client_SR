import usersArr from "../data/users";
import { firestore } from "../firebase";

function getUsers() {
    return firestore.collection("users").get().then(response => response.docs.map(document => document.data()));
}

function getOperators() {
    const operatorsSnapshot = firestore.collection("users")
        .where('userType', '==', "operator")
        .get()
        .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            operatorsSnapshot.push(doc.id, " => ", doc.data());
        });
    });
    return operatorsSnapshot;
}

const createUser  = () => {
    console.log("create users here")
}

const updateUser = () => {
    console.log("user updated ")
        
}

const deleteUser  = () => {
    console.log("delete users here")
}

export { getUsers, getOperators, createUser, updateUser, deleteUser };