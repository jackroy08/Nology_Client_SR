import React, { useState } from 'react'
import Styles from './ManageUsers.module.scss';
import {Link} from '@reach/router';
import CreateUserForm from './CreateUserForm'

const ManageUsers = () => {

    return (
    <>
        <CreateUserForm/>   
        <div>Show me a list of Users that I can filter.</div>
    </>
    )
}

export default ManageUsers;
