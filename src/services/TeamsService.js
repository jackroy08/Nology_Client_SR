import { firestore } from "../firebase";

const getTeams  = () => {
    console.log("get teams here")
}

const createTeam  = () => {
    console.log("create teams here")
}

const updateTeam  = () => {
    console.log("update teams here")
}

const deleteTeam  = () => {
    console.log("delete teams here")
}

const getTeamSiteName = (operatorTeam, operatorSubTeam) => {
    console.log(operatorTeam);
    return firestore
        .collection("teams")
        .where("teamName", "==", `${operatorTeam}`)
        .where("subTeamName", "==", `${operatorSubTeam}`)
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data())
            return data;
        });
}

export { getTeams, createTeam, updateTeam, deleteTeam, getTeamSiteName };