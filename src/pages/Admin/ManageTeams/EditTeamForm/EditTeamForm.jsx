import React from 'react'
import { useForm } from "react-hook-form";
import Styles from './EditTeamForm.module.scss';
import sitesArr from '../../../../data/sites';

const EditTeamForm = (props) => {
    const {
        site, 
        teamName, 
        subTeamName
    } = props.team

    const { register, handleSubmit, errors } = useForm();

    const editTeam = (data) => {
    }
    
    return (
        <form className={Styles.teamForm} onSubmit={handleSubmit(editTeam)}>
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
            <button className={`${Styles.btn} ${Styles.btnSuccess}`} type="submit">Create</button>
        </form>
    )
}

export default EditTeamForm;
