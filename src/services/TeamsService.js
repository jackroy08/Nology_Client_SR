import React, { useState } from 'react';
import { firestore } from '../firebase';


const getTeams = () => firestore.collection("teams").get().then((response) => {
    return response.docs.map((doc) => doc.data())
});

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

export {getTeams, subscribeToTeams, createTeam, updateTeam, deleteTeam };