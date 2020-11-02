import usersArr from "../data/users";
import { firestore } from "../firebase";

const getUsers = async () => {
    return await firestore.collection("users")
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            return data;
        });
}

function getOperators() {
    return firestore
        .collection("users")
        .where('userType', '==', "operator")
        .get()
        .then(querySnapshot => {
            querySnapshot.docs.map(doc => doc.data())
        });
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