import React, { useState } from 'react';
import { firestore } from '../firebase';


const getTeams = () => firestore.collection("teams").get().then((response) => {
    return response.docs.map((doc) => doc.data())
});

const createTeam  = (newTeam) => {
    console.log(newTeam)
    firestore.collection("teams").doc(newTeam.teamID).set({...newTeam});
}

const updateTeam  = (team) => {
    firestore.collection("teams").doc(team.teamID).update({
        teamName : team.teamName,
        subTeamName : team.subTeamName,
        teamID : `${team.teamName} ${team.subTeamName}`,
        site : team.site,
        })
        .then(function() {
        console.log("Document successfully updated!");
        });}

const deleteTeam  = (team) => {
    firestore.collection("teams").doc(team.teamID).delete();
}



export {getTeams, createTeam, updateTeam, deleteTeam };