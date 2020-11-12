import React from 'react'
import { useForm } from "react-hook-form";
import Styles from './EditSiteForm.module.scss';
import sitesArr from '../../../../data/sites';
import { updateSite } from '../../../../services/SitesService'

const EditSiteForm = (props) => {
    const {
        siteID,
        siteName
    } = props.site

    const { register, handleSubmit, errors } = useForm();

    const updateCurrentSite = (data) => {
        const updatedSite = {
            siteID : siteID,
            siteName : data.siteName,
        }
        {props.hide()}
        return updateSite(updatedSite);
    }
    
    return (
        <form className={Styles.siteForm} onSubmit={handleSubmit(updateCurrentSite)}>
            
            <label htmlFor="siteName">Site Name :</label>
            <input className={Styles.inputPrimary}
                defaultValue={siteName}
                type="text"
                id="siteName"
                name="siteName"
                placeholder="enter the siteName"
                ref={register({ required: true })} />
                {errors.siteName && <p> Site Name is required.</p>}
            <button className={`${Styles.btn} ${Styles.btnPrimary}`} data-dismiss="modal" aria-label="Close" onClick={props.hide}>Cancel</button>
            <button className={`${Styles.btn} ${Styles.btnSecondary}`} type="submit">Update</button>
        </form>
    )
}

export default EditSiteForm;
