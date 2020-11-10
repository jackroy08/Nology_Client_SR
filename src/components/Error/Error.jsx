import React from 'react'

const Error = (props) => {
    const { message, hide } = props;
    return (
        <p>{message}</p>
    )
}

export default Error
