import React from 'react'
import { useForm } from "react-hook-form";
import Styles from './EditTeamForm.module.scss';
import sitesArr from '../../../../data/sites';
import { updateTeam } from '../../../../services/TeamsService'

const EditTeamForm = (props) => {
    const {
        site, 
        teamName, 
        subTeamName
    } = props.team

    const { register, handleSubmit, errors } = useForm();

    const updateCurrentTeam = (data) => {
        const updatedTeam = {
            site : data.site,
            teamName : data.teamName,
            subTeamName : data.subTeamName,
            teamID: `${data.teamName} ${data.subTeamName}`
        }
        {props.hide()}
        return updateTeam(updatedTeam);
    }
    
    return (
        <form className={Styles.teamForm} onSubmit={handleSubmit(updateCurrentTeam)}>
            <label htmlFor="site">Select Site :</label>
            <select
                defaultValue={site}
                name="site"
                id="site"
                ref={register({ required: true })}>
                <option value="">Select site :</option>
                {sitesArr.map((site) => <option key={site}>{site}</option>)}
            </select>
            {errors.site && <p>Site is required.</p>}

            <label htmlFor="teamName">Team Name :</label>
            <input
                defaultValue={teamName}
                type="text"
                id="teamName"
                name="teamName"
                placeholder="enter the teamName"
                ref={register({ required: true })} />
                {errors.teamName && <p> Team Name is required.</p>}
            
            <label htmlFor="subTeamName">Sub Team Name:</label>
            <input
                defaultValue={subTeamName}
                type="text"
                id="subTeamName"
                name="subTeamName"
                placeholder="enter the Sub Team"
                ref={register({ required: true })} />
                {errors.subTeamName && <p>Sub Team Name is required.</p>}
            
            <button className={`${Styles.btn} ${Styles.btnDanger}`} data-dismiss="modal" aria-label="Close" onClick={props.hide}>Cancel</button>
            <button className={`${Styles.btn} ${Styles.btnSuccess}`} type="submit">Update</button>
        </form>
    )
}

export default EditTeamForm;
