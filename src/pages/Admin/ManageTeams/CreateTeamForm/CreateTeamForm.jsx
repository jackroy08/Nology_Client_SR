import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";
import Styles from './CreateTeamForm.module.scss';
import teamsArr from '../../../../data/teams';
import sitesArr from '../../../../data/sites';
import Modal from '../../../../components/Modal';
import useModal from '../../../../components/Modal/useModal';
import { createTeam } from '../../../../services/TeamsService'


// ------ CLASSES ----- //

class Team {
    constructor( site, teamName, subTeamName) {
    this.site = site;
    this.teamName = teamName;
    this.subTeamName = subTeamName;
    this.teamID = `${this.teamName} ${this.subTeamName}`;
    }
}

// ------ JSX ----- //

const CreateTeamForm = (props) => {
    const { register, handleSubmit, errors } = useForm();
    
    const createNewTeam = (data) => {
        {props.hide()}
        return createTeam(new Team(data.site, data.teamName, data.subTeamName));
    }
    
    return ( 
        <form className={Styles.teamForm} onSubmit={handleSubmit(createNewTeam)}>
            <label htmlFor="site">Select Site :</label>
            <select
                name="site"
                id="site"
                ref={register({ required: true })}>
                <option value="">Select site :</option>
                {sitesArr.map((site) => <option key={site}>{site}</option>)}
            </select>
            {errors.site && <p>Site is required.</p>}

            <label htmlFor="teamName">Team Name:</label>
            <input
                type="text"
                id="teamName"
                name="teamName"
                placeholder="enter the team name"
                ref={register({ required: true })} />
                {errors.teamName && <p>Team Name is required.</p>}
            
            <label htmlFor="subTeamName">Sub Team Name :</label>
            <input
                type="text"
                id="subTeamName"
                name="subTeamName"
                placeholder="enter the Sub Team Name"
                ref={register({ required: true })} />
                {errors.subTeamName && <p>Sub Team Name is required.</p>}
            
                
            <button
                className={`${Styles.btn} ${Styles.btnDanger}`}
                data-dismiss="modal"
                aria-label="Close"
                onClick={props.hide}
                >Cancel
                </button>
            <button 
                className={`${Styles.btn} ${Styles.btnSuccess}`}
                type="submit"
                >Create</button>
        </form>
    );
}

export default CreateTeamForm;