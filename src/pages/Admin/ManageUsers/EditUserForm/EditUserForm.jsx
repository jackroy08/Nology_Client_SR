import React from 'react'
import { useForm } from "react-hook-form";
import Styles from './EditUserForm.module.scss';

const EditUserForm = (props) => {
    const {
        userType, 
        userID, 
        password,
        fullNameStr,
        dateOfBirth, 
        currentTeam, 
    } = props.user

    const { register, handleSubmit, errors } = useForm();

    const editUser = (data) => {
        console.log(data.userType)
    }
    
    return (
        <form className={Styles.userForm} onSubmit={handleSubmit(editUser)}>
            <label htmlFor="userID">Employee number :</label>
            <input
                value={userID}
                type="text"
                id="userID"
                name="userID"
                ref={register({/* required: true */ })} />
                {errors.userID && <p>userID is required.</p>}
            
            <label htmlFor="password">Password :</label>
            <input
                value={password}
                type="text"
                id="password"
                name="password"
                placeholder="P@ssw0rd!"
                ref={register({ /*required: true, minLength: 8*/ })} />
                {errors.password && <p>Password is required. Minimin Length of 8 characters</p>}
            
            <label htmlFor="userType">Select User Type :</label>
            <select
                value={userType}
                name="userType"
                id="userType"
                ref={register({ /*required: true*/ })}>
                <option value="">Select User Type :</option>
                <option value="operator">Operator</option>
                <option value="supervisor">Supervisor</option>
                <option value="maintenance">Maintenance</option>
                <option value="management">Management</option>
            </select>
                {errors.userType && <p>User Type is required.</p>}

            <label htmlFor="currentTeam">Select Team :</label>
            <select
                value={currentTeam}
                name="currentTeam"
                id="currentTeam" 
                ref={register({ /*required: true */})}>
                <option value="">Select Team</option>
                <option value="teamA">Team A</option>
                <option value="teamB">Team B</option>
                <option value="teamC">Team C</option>
                <option value="teamD">Team D</option>
            </select>
            
            <label htmlFor="fullName">Full Name :</label>
            <input
                value={fullNameStr}                
                type="text"
                id="fullName"
                name="fullName"
                placeholder="enter user's full name"
                ref={register({ /* required: true, minLength: 2 */})} />
                {errors.fullName && <p>FullName is required. Minimum length of 2 characters.</p>}
            
            <label htmlFor="dateOfBirth">Date of Birth :</label>
            <input
                value={dateOfBirth}
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                placeholder="enter user's Date of Birth"
                ref={register} />
                {errors.dateOfBirth && <p>Date of birth is required.</p>}
            
            <button className={Styles.btn} type="submit">Edit User</button>
        </form>
    )
}

export default EditUserForm;
