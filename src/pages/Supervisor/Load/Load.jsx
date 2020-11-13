import React, { useState, useEffect, useContext } from 'react';
import Styles from "./Load.module.scss";
import { subscribeToLoads, createLoad } from "./../../../services/LoadsService";
import { createNewsItem } from "../../../services/newsItemsService";
import LoadApproveForm from "./LoadApproveForm";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../context/userContext";


export const Load = (props) => {

    const { users } = props;

    const { register, handleSubmit } = useForm();

    const [ loadsArray, setLoadsArray ] = useState([]);

    const [ filteredLoadsArr, setFilteredLoadsArr] = useState([])

    const { user, teamSiteName } = useContext(UserContext);

    useEffect(() => {
        // 1. is mounted set to false on component dismount to prevent assigning state on unmounted component
        let isMounted = true;

        // 2. subscribes to snapshot and save the unsubscribe function to a variable for use on dismount
        const unsubscribe = subscribeToLoads(snapshot => {
            // 3. get the collection documents for us to store in state
            const docs = snapshot.docs.map(document => ({...document.data(), id: document.id}));
            
            // 4. check that component is still mounted before attempting to set state
            if (isMounted) setLoadsArray(docs)   
        });     

        // 5. Unmount function - Which will unsubscribe us from the loads subscription
        return(() => {
            isMounted = false;
            unsubscribe();
        })
    }, []);

    // getTeams().then(res => {if(mounted){setTeamsAvailableToView((getUniqueTeams(res)))}});

    useEffect(()=>{
        setFilteredLoadsArr(loadsArray.filter(load => load.isSignedOff === null).filter(load => load.team === user.currentTeam))
    },[loadsArray])

    const onSubmit = (data) => {
        const newLoad = {
            currentDate: new Date(),
            driver: data.addDriver,
            isSignedOff: true,
            mass: data.addMass,
            material: data.addMaterial,
            site: teamSiteName.site,
            supervisor: user.fullNameStr,
            team: user.currentTeam
        }
        createLoad(newLoad) 
        
        createNewsItem({
            dateCreated: new Date(),
            title: "Load",
            message: `Load Added and Approved by ${user.fullNameStr}`,
            team: user.currentTeam,
            type: "loadCreatedBySupervisor",
            seenBy: [],
            isImportant: false,
            info: {
                driver: data.addDriver,
                mass: data.addMass,
                material: data.addMaterial,
                approvedBy: user.userID
            }
        })
    }

    const approveLoads = filteredLoadsArr.length ? filteredLoadsArr.map((load, i) => (<LoadApproveForm key={`${load.currentDate.toString()}${load.driver}`} index={i} load={load} />)) : <h3>There are currently no loads to approve</h3>;

    return (
        <section>
            <h3>Approve Load</h3>
            {approveLoads}
            <h3>Add Load</h3>
            <form className={Styles.addLoadForm} onSubmit={handleSubmit(onSubmit)}>
                
                <label htmlFor="addDriver">Driver</label>
                <select className={Styles.selectPrimary} id="addDriver" name="addDriver" ref={register}>
                    {users.map(u => <option key={u.userID} value={u.fullNameStr}>{u.fullNameStr}</option>)}
                </select>

                <label htmlFor="addMaterial">Material</label>
                <input className={Styles.inputPrimary} type="text" id="addMaterial" name="addMaterial" ref={register} placeholder="Enter Material Here"/>

                <label htmlFor="addMass">Mass</label>
                <input className={Styles.inputPrimary} type="number" id="addMass" name="addMass" ref={register} placeholder="KG"/>
                
                <button className={Styles.btnPrimary} type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Load;
