import React from 'react'

export const AssignDriver = (props) => {

    const {setIsOverlayShown, setOverlayContent} = props;  

    return (
        <section>
            <h1>Add Load</h1>
            <div>
                <h2>Driver</h2>
                <input type="text"/>
                <h2>Vehicle</h2>
                <input type="text"/>
                <button>Submit</button>
                <button onClick={()=>{setIsOverlayShown(false);  setOverlayContent(null)}}>Cancel</button>
            </div>
        </section>
    )
}

export default AssignDriver;