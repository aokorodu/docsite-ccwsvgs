

import styles from './CSSAnim.module.scss';
import { useState } from 'react';

type animDirProps = {
    direction: string;
}
export const AnimationDirection = ({ direction }: animDirProps) => {
    const getStyle = () => {
        let style = styles.animDir_normal;

        switch (direction) {
            case "reverse":
                style = styles.animDir_reverse;
                break;

            case "alternate":
                style = styles.animDir_alternate;
                break;

            case "alternate-reverse":
                style = styles.animDir_alternate_reverse;
                break;

            default:
                style = styles.animDir_normal;
        }

        return style;
    }
    return (<>
        <svg width="300" height="300" viewBox="0 0 300 300">
            <rect className={getStyle()} x="100" y="100" width="100" height="100" fill="blue" />
        </svg>
    </>)
}

type animFillProps = {
    mode: string;
}

export const AnimationFillMode = ({ mode }: animFillProps) => {
    const [started, setStarted] = useState(false)
    const getFillModeStyle = () => {
        if (!started) return styles.animFill_hold;

        let m = styles.animFill_none;

        switch (mode) {
            case "none":
                m = styles.animFill_none;
                break;

            case "forwards":
                m = styles.animFill_forwards;
                break;

            case "backwards":
                m = styles.animFill_backwards;
                break;

            case "both":
                m = styles.animFill_both;
                break;

            default:
                m = styles.animFill_none;
        }

        return m;

    }
    return (<>
        <div className={styles.fillStuffContainer}>
            <svg width="300" height="300" viewBox="0 0 300 300">
                <rect className={getFillModeStyle()} x="120" y="120" width="60" height="60" fill="lightgrey" stroke="#343434" />
            </svg>
            <button onClick={() => { setStarted(!started) }}>{started ? "reset" : "play"} </button>
        </div>
    </>)
}