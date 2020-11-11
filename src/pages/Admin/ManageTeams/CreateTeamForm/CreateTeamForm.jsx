import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";
import Styles from './CreateTeamForm.module.scss';
import { createTeam } from '../../../../services/TeamsService'
import { getSites, subscribeToSites } from '../../../../services/SitesService'


// ------ CLASSES ----- //

class Team {
    constructor( teamID, site, teamName, subTeamName) {
        this.teamID = teamID;
    this.site = site;
    this.teamName = teamName;
    this.subTeamName = subTeamName;
    }
}

// ------ JSX ----- //

const CreateTeamForm = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const [sitesArr, setSitesArr] = useState([]);
    
    const createNewTeam = (data) => {
        {props.hide()}
        return createTeam(new Team(data.teamID, data.site, data.teamName, data.subTeamName));
    }
    
    useEffect(() => {
        getSites().then(response => {
            setSitesArr(response.map(site => site.siteName));
        });
    }, [])
    
    return ( 
        <form className={Styles.teamForm} onSubmit={handleSubmit(createNewTeam)}>
            <label htmlFor="site">Select Site :</label>
            <select
                className={Styles.selectPrimary}
                name="site"
                id="site"
                ref={register({ required: true })}>
                <option value="">Select site :</option>
                {sitesArr.map((site) => <option key={site}>{site}</option>)}
            </select>
            {errors.site && <p>Site is required.</p>}

            <label htmlFor="teamID">Team ID:</label>
            <input
                className={Styles.inputPrimary}
                type="text"
                id="teamID"
                name="teamID"
                placeholder="enter Team ID"
                ref={register({ required: true })} />
                {errors.teamID && <p>Numeric Team ID required </p>}

            <label htmlFor="teamName">Team Name:</label>
            <input
                className={Styles.inputPrimary}
                type="text"
                id="teamName"
                name="teamName"
                placeholder="enter the team name"
                ref={register({ required: true })} />
                {errors.teamName && <p>Team Name is required.</p>}
            
            <label htmlFor="subTeamName">Sub Team Name :</label>
            <input
                className={Styles.inputPrimary}
                type="text"
                id="subTeamName"
                name="subTeamName"
                placeholder="enter the Sub Team Name"
                ref={register({ required: true })} />
                {errors.subTeamName && <p>Sub Team Name is required.</p>}
                
            <button
                className={`${Styles.btn} ${Styles.btnPrimary}`}
                data-dismiss="modal"
                aria-label="Close"
                onClick={props.hide}
                >Cancel
                </button>
            <button 
                className={`${Styles.btn} ${Styles.btnSecondary}`}
                type="submit"
                >Create</button>
        </form>
    );
}

export default CreateTeamForm;