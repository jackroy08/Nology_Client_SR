import React from 'react'

export const Issue = (props) => {

    const {vehicle, issue} = props.issue;
    return (
        <>
            <p>{`${vehicle}: ${issue}`}</p>
        </>
    )
}

export default Issue;
