import { navigate } from "@reach/router";
import React, { createContext, useState, useEffect } from "react";
import firebase, { firestore } from "../firebase";
import { getUserVehicle } from "../services/VehiclesService"
import { getTeamSupervisor } from "../services/UsersService"
import { getTeamSiteName } from "../services/TeamsService";



export const UserContext = createContext({});

export const UserProvider = (props) => {
    const [user, setUser] = useState(null);
    const [supervisor, setSupervisor] = useState({});
    const [vehicle, setVehicle] = useState({});
    const [teamSiteName, setTeamSiteName] = useState({});

    const signUp = (username, password) => {
        let email;
        if (username.match(/@/)){
            email = username;
        } else email = `${username}@shiftreporter.com`;

        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(response => {
                        firestore
                        .collection("users")
                        .doc(username)
                        .set({
                            authID: response.user.uid
                        }, {merge: true})
                }).catch(function(error) {
                    alert(error.message)
                })
            }).catch(function(error) {
                alert(error.message)
        });
    }

    const signIn = (username, password) => {
        let email;
        if (username.match(/@/)){
            email = username;
        } else email = `${username}@shiftreporter.com`;

        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
                firebase.auth().signInWithEmailAndPassword(email, password)
                .then(response => {
                    firestore
                        .collection("users").where("authID" , "==" , `${response.user.uid}`)
                        .get()
                        .then(response => {
                            response.forEach(doc => {
                                setUser(doc.data());
                            });
                        });
                }).catch(function(error) {
                    alert(error.message)
                });
            }).catch(function(error) {
                alert(error.message)
        });
    }

    const signOut = () => {
        console.log('signing out')
        firebase
            .auth()
            .signOut()
            .then(() => {
                navigate(`/`);
                setTimeout(() => setUser(null), 1000);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    if (user) {
        navigate(`/${user.userType}`);
    }

    useEffect(() => {
        console.log(user);
        if (user){
            
            getUserVehicle(user.userID)
                .then(response => {
                    setVehicle(response[0]);
                    console.log(response[0]);
                });
            getTeamSupervisor(user.currentTeam, user.currentSubTeam)
                .then(response => {
                    setSupervisor(response[0])
                });
            getTeamSiteName(user.currentTeam, user.currentSubTeam)
                .then(response => {
                    setTeamSiteName(response[0])
                });
            }
        }, [user])
    

    return (
        <UserContext.Provider value={{ user, signUp, signOut, signIn, vehicle, supervisor, teamSiteName }}>
            {props.children}
        </UserContext.Provider>
    );
};
