import React from 'react';
import Styles from './Supervisor.module.scss'

const data = [
    'truck broke down',
    'man down',
    'TMM no T'
]

export const Supervisor = () => {
    return (
    <>
        <article>
            <ul>
                {data.map(issue => <li>{issue}</li>)}
            </ul>
        </article>
        <div>
            <div><button>Add Load</button></div>
            <div><button>Assign Drivers</button></div>
            <div><button>Sign off Maintenance</button></div>
            <div><button>Check Out Vehicle</button></div>
        </div>
    </>
    )
}
