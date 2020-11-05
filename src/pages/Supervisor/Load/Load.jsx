import React, { useState, useEffect } from 'react';
import Styles from "./Load.module.scss";
import { useForm } from "react-hook-form";
import { getLoads } from "./../../../services/LoadsService";



export const Load = () => {

    // const { register, handleSubmit } = useForm();

    const [ loadsArray, setLoadsArray ] = useState([]);

    useEffect(() => {
        getLoads().then(dataArray => setLoadsArray(dataArray));
    }, [])

    // const mapLoadsArray = () => {
    //     loadsArray.map(load => ( 
    //         <form>
    //             <label htmlFor={}>
    //             {load}
    //             <input 
    //                 type={input.type} 
    //                 name={input.id} 
    //                 ref={register}
    //                 id={input.label}
    //             />
    //             </label>
    //         </form>
    //     ));
    // }

    return (
        <section>
            <h2>Approve Load</h2>
            <form className={Styles.approveLoadForm}>
                {/* list of loads goes here. option on each one to selected material and add weight */}
                <h5>John's load</h5>
                <label htmlFor="">
                Approve
                <input type="checkbox"/>
                </label>
                <label htmlFor="">
                Material
                <select name="" id="">
                    <option value="">Coal</option>
                    <option value="">Topsoil</option>
                    <option value="">Non-ore Rock</option>
                </select>
                </label>
                <label htmlFor="">
                Weight
                <input type="text" placeholder="KG"/>
                </label>
                <input type="submit" />
            </form>
            <h2>Add Load</h2>
            <form>
                {/* Additional option for the supervisor to add a load themselves. Would need to add driver themselves? */}
                <input type="submit"/>
            </form>
        </section>
    )
}

export default Load;
