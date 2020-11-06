import React, { useState, useEffect } from 'react';
import Styles from "./Load.module.scss";
import { getLoads, updateLoad } from "./../../../services/LoadsService";
import LoadApproveForm from "./LoadApproveForm";
import { useForm } from "react-hook-form";


export const Load = (props) => {

    const { users } = props;

    const { register, handleSubmit } = useForm();

    const [ loadsArray, setLoadsArray ] = useState([]);

    useEffect(() => {
        getLoads().then(dataArray => setLoadsArray(dataArray[0].loadsArr.filter(load => load.isSignedOff===null)));
    }, [])

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <section>
            <h2>Approve Load</h2>
            {loadsArray.map((load,i) => (<LoadApproveForm key={i} index={i} load={load} />))}
            {/* Additional option for the supervisor to add a load themselves. Would need to add driver themselves? */} 
            <h2>Add Load</h2>
            <form className={Styles.addLoad} onSubmit={handleSubmit(onSubmit)}>
                
                <label htmlFor="add-driver">Driver</label>
                <select id="add-driver" name="add-driver" ref={register}>
                    {users.map(u => <option key={u.userID} value={u.fullNameStr}>{u.fullNameStr}</option>)}
                </select>

                <label htmlFor="add-material">Material</label>
                <input type="text" id="add-material" name="add-material" ref={register} placeholder="Enter Material Here"/>

                <label htmlFor="add-mass">Mass</label>
                <input type="number" id="add-mass" name="add-mass" ref={register} placeholder="KG"/>
                        
                <input type="submit"/>
            </form>
        </section>
    )
}

export default Load;
