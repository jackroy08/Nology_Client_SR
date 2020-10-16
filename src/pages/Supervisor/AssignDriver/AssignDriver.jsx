import React from 'react'



export const AssignDriver = (props) => {



    const { setIsOverlayShown, setOverlayContent, employeeArr, vehicleArr } = props;

    return (
        <section>
            <h1>Assign Driver</h1>
            <div>
                <h2>Driver</h2>


                <input list="drivers" />
                <datalist id="drivers">

                    {employeeArr.map(employee => <option value={employee} />)}

                </datalist>

                <h2>Vehicle</h2>
                <input list="vehicles"/>
                <datalist id="vehicles">

                    {vehicleArr.map(vehicle => <option value={vehicle} />)}

                </datalist>
                <button>Submit</button>
                <button onClick={() => { setIsOverlayShown(false); setOverlayContent(null) }}>Cancel</button>
            </div>
        </section>
    )
}

export default AssignDriver;