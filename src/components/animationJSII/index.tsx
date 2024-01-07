'use client'

import styles from './AnimationJSII.module.scss';
import { useRef, useState } from 'react';

export const BackAndForthExample = () => {
    return (<>
        <svg width="200" height="300" viewBox="0 0 200 300">
            <circle className={styles.backAndForthAnimation} cx="100" cy="250" r="10" fill="green" />
        </svg>
    </>)
}

export const FailExample = () => {
    const myCircle = useRef<SVGCircleElement>(null);
    const [played, setPlayed] = useState(false)
    const playBustedAnimation = () => {
        if (played) {
            reset();
            return;
        }
        let ypos = 0;
        for (let i = 0; i < 290; i++) {
            myCircle.current?.setAttribute("cy", String(ypos));
            ypos += 1;
        }

        setPlayed(true);
    }

    const reset = () => {
        myCircle.current?.setAttribute("cy", "10");
        setPlayed(false);
    }
    return (<>
        <div className={styles.containerWithButton}>
            <svg width="200" height="300" viewBox="0 0 200 300">
                <circle ref={myCircle} cx="100" cy="10" r="10" fill="green" />
            </svg>
            <button onClick={() => { playBustedAnimation() }}>{played ? "reset" : "play"}</button>
        </div>
    </>)
}

export const AnimationFrameExample = () => {
    let animID: number = 0;
    const myCircle = useRef<SVGCircleElement>(null);
    let playing = false;
    let ypos = 10;

    const playAnimation = () => {
        console.log("playAnimation")
        playing = true;
        moveCircle();
    }

    const moveCircle = () => {
        console.log('move circle')
        if (ypos > 400 || !playing) return;
        //if (!playing) return;

        myCircle.current?.setAttribute("cy", String(ypos));
        ypos += 1;

        animID = window.requestAnimationFrame(moveCircle);
    }

    const reset = () => {
        console.log('reset')
        ypos = 10;
        myCircle.current?.setAttribute("cy", String(ypos));
        playing = false;
        window.cancelAnimationFrame(animID);
    }
    return (<>
        <div className={styles.containerWithButton}>
            <svg width="200" height="300" viewBox="0 0 200 300">
                <circle ref={myCircle} cx="100" cy="10" r="10" fill="green" />
            </svg>
            <button onClick={() => { !playing ? playAnimation() : reset() }}>{playing ? "reset" : "play"}</button>
        </div>
    </>)
}