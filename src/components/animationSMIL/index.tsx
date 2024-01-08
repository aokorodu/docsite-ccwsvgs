'use client'

import styles from './AnimationSMIL.module.scss';
import { useState } from 'react';

export const FillExample = () => {

    const [playing, setPlaying] = useState(false);
    return (<>
        <div className={styles.containerWithButton}>

            {!playing && <svg id="svg_1" width="500" height="200" viewBox="0 0 500 200">
                <circle id="one" cx="50" cy="100" r="20" fill="#93C17E" />
            </svg>}
            {playing && <svg id="svg_1" width="500" height="200" viewBox="0 0 500 200">
                <circle id="two" cx="50" cy="100" r="20" fill="#93C17E">
                    <animate
                        attributeName="cx"
                        from="50"
                        to="450"
                        dur="1s"
                        repeatCount="2"
                        fill="freeze"
                    />
                </circle>
            </svg>}


            <button onClick={() => { setPlaying(!playing) }}>{playing ? "RESET" : "PLAY"}</button>
        </div>
    </>)
}