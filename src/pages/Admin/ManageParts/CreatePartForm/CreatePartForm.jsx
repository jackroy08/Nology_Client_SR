import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";
import Styles from './CreatePartForm.module.scss';
import Modal from '../../../../components/Modal';
import useModal from '../../../../components/Modal/useModal';
import { createPart } from '../../../../services/PartsService'


// ------ CLASSES ----- //

class Part {
    constructor(partID, partName) {
        this.partID = partID;
        this.partName = partName;
    }
}

// ------ JSX ----- //

const CreatePartForm = (props) => {
    const { register, handleSubmit, errors } = useForm();
    
    const createNewPart = (data) => {
        {props.hide()}
        return createPart(new Part(data.partID, data.partName));
    }
    
    return ( 
        <form className={Styles.partForm} onSubmit={handleSubmit(createNewPart)}>
            <label htmlFor="partID">Part ID:</label>
            <input className={Styles.inputPrimary}
                type="text"
                id="partID"
                name="partID"
                placeholder="enter the part ID"
                ref={register({ required: true })} />
                {errors.partID && <p>Part ID is required.</p>}
                
            <label htmlFor="partName">Part Name:</label>
            <input className={Styles.inputPrimary}
                type="text"
                id="partName"
                name="partName"
                placeholder="enter the part name"
                ref={register({ required: true })} />
                {errors.partName && <p>Part Name is required.</p>}
                
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

export default CreatePartForm;