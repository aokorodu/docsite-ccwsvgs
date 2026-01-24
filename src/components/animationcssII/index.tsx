import styles from './CSSAnim.module.scss';
import { useState } from 'react';

type animDirProps = {
    direction: string;
}
export const AnimationDirection = ({ direction }: animDirProps) => {
    const getStyle = () => {
        let style = styles.animDirNormal;

        switch (direction) {
            case "reverse":
                style = styles.animDirReverse;
                break;

            case "alternate":
                style = styles.animDirAlternate;
                break;

            case "alternate-reverse":
                style = styles.animDirAlternateReverse;
                break;

            default:
                style = styles.animDirNormal;
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
        if (!started) return styles.animFillHold;

        let m = styles.animFillNone;

        switch (mode) {
            case "none":
                m = styles.animFillNone;
                break;

            case "forwards":
                m = styles.animFillForwards;
                break;

            case "backwards":
                m = styles.animFillBackwards;
                break;

            case "both":
                m = styles.animFillBoth;
                break;

            default:
                m = styles.animFillNone;
        }

        return m;

    }
    return (<>
        <div className={styles.fillStuffContainer}>
            <svg width="100%" height="300" viewBox="0 0 300 300">
                <rect className={getFillModeStyle()} x="120" y="120" width="60" height="60" fill="lightgrey" stroke="#343434" />
            </svg>
            <button onClick={() => { setStarted(!started) }}>{started ? "reset" : "play"} </button>
        </div>
    </>)
}
