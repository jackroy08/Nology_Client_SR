import React, {useState} from 'react';
import Styles from './Supervisor.module.scss'
import Load from './Load';

export const Supervisor = (props) => {

    let data = props.data;

    const [isOverlayShown, setIsOverlayShown] = useState(false);

    const [overlayContent, setOverlayContent] = useState(null);

    let overlayStyle = isOverlayShown ? Styles.shown : "";

    return (
    <>
        <article>
            <ul>
                {/* math random probably isnt the best tool for this */}
                {Array.isArray(data) ? data.map(issue => <li key={Math.random()}>{issue}</li>) : <p>Incorrect Data Format</p>}
            </ul>
        </article>
        <section>
            <div><button onClick={()=>{setIsOverlayShown(true); setOverlayContent(<Load setIsOverlayShown={setIsOverlayShown} setOverlayContent={setOverlayContent} />)}}>Add Load</button></div>
            <div><button>Assign Drivers</button></div>
            <div><button>Sign off Maintenance</button></div>
            <div><button>Check Out Vehicle</button></div>
        </section>
        <div className={`${Styles.overlay} ${overlayStyle}`}>
            {overlayContent}
        </div>
    </>
    )
}
