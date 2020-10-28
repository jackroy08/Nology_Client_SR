import React from 'react'
import { useForm } from "react-hook-form";
import Styles from './EditTeamForm.module.scss';
import sitesArr from '../../../../data/sites';

const EditTeamForm = (props) => {
    const {
        site, 
        team, 
        subTeam
    } = props.team

    const { register, handleSubmit, errors } = useForm();

    const editTeam = (data) => {
        console.log(data.team)
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

            <label htmlFor="team">Team :</label>
            <input
                defaultValue={team}
                type="text"
                id="team"
                name="team"
                placeholder="enter the team"
                ref={register({ required: true })} />
                {errors.teamName && <p>Team is required.</p>}
            
            <label htmlFor="subTeam">Sub Team :</label>
            <input
                defaultValue={subTeam}
                type="text"
                id="subTeam"
                name="subTeam"
                placeholder="enter the Sub Team"
                ref={register({ required: true })} />
                {errors.subTeam && <p>Sub team is required.</p>}
            
            <button className={`${Styles.btn} ${Styles.btnDanger}`} data-dismiss="modal" aria-label="Close" onClick={props.hide}>Cancel</button>
            <button className={`${Styles.btn} ${Styles.btnSuccess}`} type="submit">Create</button>
        </form>
    )
}

export default EditTeamForm;
