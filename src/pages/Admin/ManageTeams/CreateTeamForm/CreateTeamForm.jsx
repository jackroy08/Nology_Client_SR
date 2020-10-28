import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";
import Styles from './CreateTeamForm.module.scss';
import teamsArr from '../../../../data/teams';
import sitesArr from '../../../../data/sites';
import Modal from '../../../../components/Modal';
import useModal from '../../../../components/Modal/useModal';


// ------ CLASSES ----- //

class Team {
    constructor( site, team, subTeam) {
    this.site = site;
    this.team = team;
    this.subTeam = subTeam;
    }
    get teamID () {
        return `${this.team} ${this.subTeam}`
    }
}

// ------ JSX ----- //

const CreateTeamForm = (props) => {
    const { register, handleSubmit, errors } = useForm();
    
    const createNewTeam = (data) => {
        teamsArr.push(new Team(data.site, data.team, data.subTeam)); 
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

            <label htmlFor="team">Team :</label>
            <input
                type="text"
                id="team"
                name="team"
                placeholder="enter the team"
                ref={register({ required: true })} />
                {errors.teamName && <p>Team is required.</p>}
            
            <label htmlFor="subTeam">Sub Team :</label>
            <input
                type="text"
                id="subTeam"
                name="subTeam"
                placeholder="enter the Sub Team"
                ref={register({ required: true })} />
                {errors.subTeam && <p>Sub team is required.</p>}
            
                
            <button className={`${Styles.btn} ${Styles.btnDanger}`} data-dismiss="modal" aria-label="Close" onClick={props.hide}>Cancel</button>
            <button className={`${Styles.btn} ${Styles.btnSuccess}`} type="submit">Create</button>
        </form>
    );
}

export default CreateTeamForm;