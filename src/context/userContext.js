import { navigate } from "@reach/router";
import React, { createContext, useState, useEffect } from "react";
import firebase, { firestore } from "../firebase";
import { getUserVehicle } from "../services/VehiclesService"
import { getTeamSupervisor } from "../services/UsersService"
import { getTeamSiteName } from "../services/TeamsService";
import { getChecklists } from "../services/ChecklistsService";
import Modal from "../components/Modal";
import useModal from "../components/Modal/useModal";
import Error from "../components/Error";

export const UserContext = createContext({});

export const UserProvider = (props) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [supervisor, setSupervisor] = useState({});
    const [checklistData, setChecklistData] = useState({});
    const [vehicle, setVehicle] = useState({});
    const [teamSiteName, setTeamSiteName] = useState({});
    const { isShowing, toggle } = useModal();
    const [modalContent, setModalContent] = useState(null);

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
                    setModalContent(<Error message={"Sign up successful. Please log in to continue"} hide={toggle} />);
                    toggle();
            }).catch(function(error) {
                setModalContent(<Error message={error.message} hide={toggle} />);
                toggle();
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
                                        setUser(user.data());
                                        localStorage.setItem("user", JSON.stringify(user.data()));
                                        navigate(`/${user.data().userType}`);
                                    })
                                } else {
                                    setUser({})
                                }                             
                            })
                }).catch(function(error) {
                    setModalContent(<Error message={error.message} hide={toggle} />);
                    toggle();
                })
            )
        };

    const signOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                navigate(`/`);
                setUser(null);
                localStorage.removeItem("user")
                setTimeout(() => setUser(null), 1000);
            })
            .catch((error) => {
                alert(error);
            });
    };
    
    const loadUserContent = () => {
        if (user.assignedVehicle) {
            getUserVehicle(user.assignedVehicle)
                .then(response => {
                    setVehicle(response[0]);
                });
            }
        if (user.currentTeam && user.currentSubTeam) {
            getTeamSupervisor(user.currentTeam, user.currentSubTeam)
                .then(response => {
                    setSupervisor(response[0])
                });
        getTeamSiteName(user.currentTeam, user.currentSubTeam)
            .then(response => {
                setTeamSiteName(response[0])
            });
        }
    }   

    useEffect(() => {
        if (user && user.userID){
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
        if (user){
            loadUserContent()
        }
        }, [user]);

    useEffect(() => {
        if (vehicle.vehicleType) {
            getChecklists(vehicle.vehicleType)
                .then(response => {
                    setChecklistData(response)
                })
        }
    }, [vehicle])
    
    return (
        <UserContext.Provider value={{ user, signUp, signOut, signIn, vehicle, supervisor, teamSiteName, checklistData }}>
            {props.children}
            <Modal innerComponent={modalContent} isShowing={isShowing} hide={toggle}/>
        </UserContext.Provider>
    );
};
