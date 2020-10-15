import React from 'react';
import { Link } from '@reach/router';

const ClassAChecks = () => {
    const checks = ["STOP BLOCKS", "FIRE EXTINGUISHER", "OPERATOR LICENCE", "SEAT BELTS (IN USE)", "HEAD LIGHTS"];
    const listItems = checks.map((item, index) => <p key={index}>{item}</p>);
    return (
        <section>
            <h1>Class A Checks</h1>
                <form> 
                        {listItems}
                </form>
            <article>
                <p>
                    Text box for additional info
                </p>
            </article>
            <article>
            <Link to="/">
                <button>Back</button> 
            </Link>
            <Link to="/classb">
                <button>Next</button>
            </Link>
            </article>
        </section>
    )
}

export default ClassAChecks;