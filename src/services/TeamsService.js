import React, { useState } from 'react';
import { firestore } from '../firebase';


const getTeams = () => firestore.collection("teams").get().then((response) => response.docs.map((doc) => doc.data()))

const createTeam  = () => {
    console.log("create teams here")
}

const updateTeam  = () => {
    console.log("update teams here")
}

const deleteTeam  = () => {
    console.log("delete teams here")
}

export {getTeams, createTeam, updateTeam, deleteTeam };