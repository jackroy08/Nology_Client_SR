import React, { useState } from 'react';
import { firestore } from '../firebase';


const getTeams = () => firestore.collection("teams").get().then((response) => response.docs.map((doc) => doc.data()))

const createTeam  = (newTeam) => {
    console.log(newTeam)
    firestore.collection("teams").doc(newTeam.teamID).set({...newTeam});
}

const updateTeam  = () => {
    console.log("update teams here")
}

const deleteTeam  = (team) => {
    firestore.collection("teams").doc(team.teamID).delete();
}



export {getTeams, createTeam, updateTeam, deleteTeam };