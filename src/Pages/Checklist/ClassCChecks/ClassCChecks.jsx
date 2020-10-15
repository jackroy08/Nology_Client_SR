import React from 'react';
import { Link } from '@reach/router';

const ClassCChecks = () => {
    return (
        <section>
            <article>
                <h1>Class C Checks</h1>
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
                <Link to="/classb">
                    <button>Back</button> 
                </Link>
                <Link to="">
                    <button>Next</button>
                </Link> 
            </article>
        </section>
    )
}

export default ClassCChecks;