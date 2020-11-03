import usersArr from "../data/users";
import { firestore } from "../firebase";

const getUsers = () => {
    return firestore.collection("users")
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            return data;
        });
}

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

const createUser  = () => {
    console.log("create users here")
}

const updateUser = (user) => {
    firestore
        .collection("users")
        .doc(user.userID)
        .update({...user})
}

const deleteUser  = () => {
    console.log("delete users here")
}

export { getUsers, getOperators, getTeamSupervisor, createUser, updateUser, deleteUser };