import React from 'react'
import { useForm } from "react-hook-form";
import Styles from './EditPartForm.module.scss';
import sitesArr from '../../../../data/sites';
import { updatePart } from '../../../../services/PartsService'

const EditPartForm = (props) => {
    const {
        partID,
        partName 
    } = props.part

    const { register, handleSubmit, errors } = useForm();

    const updateCurrentPart = (data) => {
        const updatedPart = {
            partName: data.partName,
        }
        {props.hide()}
        return updatePart(partID, updatedPart);
    }
    
    return (
        <form className={Styles.partForm} onSubmit={handleSubmit(updateCurrentPart)}>
            <label htmlFor="partName">Part Name :</label>
            <input className={Styles.inputPrimary}
                defaultValue={partName}
                type="text"
                id="partName"
                name="partName"
                placeholder="enter the part name"
                ref={register({ required: true })} />
                {errors.partName && <p> Part Name is required.</p>}
            
            <button className={`${Styles.btn} ${Styles.btnPrimary}`} data-dismiss="modal" aria-label="Close" onClick={props.hide}>Cancel</button>
            <button className={`${Styles.btn} ${Styles.btnSecondary}`} type="submit">Update</button>
        </form>
    )
}

export default EditPartForm;
