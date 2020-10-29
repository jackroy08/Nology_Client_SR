import React from 'react'

export const Load = () => {

    return (
        <section>
            <h1>Add Load</h1>
            <div>
                <h2>Driver</h2>
                <input type="text"/>
                <h2>Weight</h2>
                <input type="text"/>
                <h2>Location</h2>
                <input type="text"/>
                <button>Submit</button>
            </div>
        </section>
    )
}

export default Load;
