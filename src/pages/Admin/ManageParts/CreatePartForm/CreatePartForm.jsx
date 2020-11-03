import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";
import Styles from './CreatePartForm.module.scss';
import Modal from '../../../../components/Modal';
import useModal from '../../../../components/Modal/useModal';
import { createPart } from '../../../../services/PartsService'


// ------ CLASSES ----- //

class Part {
    constructor(partName) {
    this.partName = partName;
    }
}

// ------ JSX ----- //

const CreatePartForm = (props) => {
    const { register, handleSubmit, errors } = useForm();
    
    const createNewPart = (data) => {
        {props.hide()}
        return createPart(new Part(data.partName));
    }
    
    return ( 
        <form className={Styles.partForm} onSubmit={handleSubmit(createNewPart)}>
            <label htmlFor="partName">Part Name:</label>
            <input
                type="text"
                id="partName"
                name="partName"
                placeholder="enter the part name"
                ref={register({ required: true })} />
                {errors.partName && <p>Part Name is required.</p>}
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

export default CreatePartForm;