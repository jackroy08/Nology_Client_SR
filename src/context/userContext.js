import { navigate } from "@reach/router";
import React, { createContext, useState, useEffect } from "react";
import firebase, { firestore } from "../firebase";
import { getUserVehicle } from "../services/VehiclesService"
import { getTeamSupervisor } from "../services/UsersService"
import { getTeamSiteName } from "../services/TeamsService";

export const UserContext = createContext({});

export const UserProvider = (props) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [supervisor, setSupervisor] = useState({});
    const [vehicle, setVehicle] = useState({});
    const [teamSiteName, setTeamSiteName] = useState({});

    const signUp = (username, password) => {
        let email;
        if (username.match(/@/)){
            email = username;
        } else {
            email = `${username}@shiftreporter.com`;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(response => {
                firestore
                    .collection("users")
                    .doc(username)
                    .set({
                        authID: response.user.uid
                    }, {merge: true});

                    navigate("/");
                    alert("Sign up successful");
            }).catch(function(error) {
                alert(error.message)
        });
    }

    const signIn = (username, password) => {
        let email;
        if (username.match(/@/)){
            email = username;
        } else {
            email = `${username}@shiftreporter.com`;
        }

        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(
                firebase.auth().signInWithEmailAndPassword(email, password)
                .then(async authUser => {
                    await firestore.collection("users")
                            .where("authID" , "==" , `${authUser.user.uid}`)
                            .get()
                            .then((collection) => {
                                if (collection.docs[0]) {
                                    const subscription = collection.docs[0].ref.onSnapshot((user) => {
                                        console.log(user);
                                        setUser(user.data());
                                        localStorage.setItem("user", JSON.stringify(user.data()));
                                        navigate(`/${user.data().userType}`);
                                    })
                                } else {
                                    setUser({})
                                }                             
                            })
                }).catch(function(error) {
                    alert(error.message)
                    console.log(error);
                })
            )
        };

    const signOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                navigate(`/`);
                localStorage.removeItem("user")
                setTimeout(() => setUser(null), 1000);
            })
            .catch((error) => {
                alert(error);
            });
    };

    
    const loadUserContent = () => {
        getUserVehicle(user.assignedVehicle)
            .then(response => {
                setVehicle(response[0]);
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

    useEffect(() => {
        if (user){
            firestore
                .collection("users")
                .doc(user.userID)
                .get()
                .then((doc) => {
                    if (doc) {
                        const subscription = doc.ref.onSnapshot((user) => {
                            setUser(user.data())
                            localStorage.setItem("user", JSON.stringify(user.data()))
                        })
                    }
                });
        }
    }, [])

    useEffect(() => {
        console.log("outside");
        if (user){
            console.log("inside");
            loadUserContent()
        }
        }, [user]);
    
    return (
        <UserContext.Provider value={{ user, signUp, signOut, signIn, vehicle, supervisor, teamSiteName }}>
            {props.children}
        </UserContext.Provider>
    );
};
