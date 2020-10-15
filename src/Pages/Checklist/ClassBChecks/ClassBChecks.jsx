import React from 'react';
import { Link } from '@reach/router';


const ClassBChecks = () => {
    return (
        <section>
            <article>
                <h1>Class B Checks</h1>
                <ul>
                    <li>check 1</li>
                    <li>check 2</li>
                    <li>etc.</li>
                </ul>
            </article>
            <article>
                <p>
                    Text box for additional info
                </p>
            </article>
            <article>
                <Link to="/classa">
                    <button>Back</button> 
                </Link>
                <Link to="/classc">
                    <button>Next</button>
                </Link> 
            </article>
        </section>
    )
}

export default ClassBChecks;