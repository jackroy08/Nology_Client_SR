import React, { useState } from 'react';
import { firestore } from '../firebase';


const getTeams  = () => {
    return firestore.collection("teams").get().then(response => response.docs.map(document => document.data()));
}

//watches teams collection and updates the state whenever the db changes
const subscribeToTeams = (setState) => {
    firestore.collection("teams").onSnapshot(snapshot => setState(snapshot.docs.map(document => document.data())))
}

const createTeam  = (newTeam) => {
    firestore.collection("teams").doc(newTeam.teamID).set({...newTeam});
}

const updateTeam  = (updatedTeam) => {
    firestore.collection("teams").doc(updatedTeam.teamID).update({...updatedTeam});
}


const deleteTeam  = (team) => {
    firestore.collection("teams").doc(team.teamID).delete();
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

export { getTeams, createTeam, subscribeToTeams, updateTeam, deleteTeam, getTeamSiteName };
