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
    const myButton = useRef<HTMLButtonElement>(null)
    let playing = false;
    let ypos = 10;

    const playAnimation = () => {
        console.log("playAnimation")
        playing = true;
        moveCircle();
        if (myButton.current) myButton.current.textContent = "RESET";
    }

    const moveCircle = () => {
        console.log('move circle')
        if (ypos > 290 || !playing) return;

        myCircle.current?.setAttribute("cy", String(ypos));
        ypos += 1;

        animID = window.requestAnimationFrame(moveCircle);
    }

    const reset = () => {
        console.log('reset')
        ypos = 10;
        myCircle.current?.setAttribute("cy", String(ypos));
        if (myButton.current) myButton.current.textContent = "PLAY";
        playing = false;
        window.cancelAnimationFrame(animID);
    }
    return (<>
        <div className={styles.containerWithButton}>
            <svg width="200" height="300" viewBox="0 0 200 300">
                <circle ref={myCircle} cx="100" cy="10" r="10" fill="green" />
            </svg>
            <button ref={myButton} onClick={() => { !playing ? playAnimation() : reset() }}>{"PLAY"}</button>
        </div>
    </>)
}

type SimpleBounceProps = {
    top: boolean
}
export const SimpleBounceExample = ({ top = false }: SimpleBounceProps) => {
    let animID: number = 0;
    const myCircle = useRef<SVGCircleElement>(null);
    const myButton = useRef<HTMLButtonElement>(null)
    let playing = false;
    let ypos = 10;
    let speed = 1;

    const playAnimation = () => {
        console.log("playAnimation")
        playing = true;
        moveCircle();
        if (myButton.current) myButton.current.textContent = "RESET";
    }

    const moveCircle = () => {
        if (!playing) return;
        if (ypos < -10) return;

        if (ypos > 290) {
            ypos = 290;
            speed *= -1;
        }
        if (top) {
            if (ypos < 10) {
                ypos = 10;
                speed *= -1;
            }
        }

        myCircle.current?.setAttribute("cy", String(ypos));
        ypos += speed;

        animID = window.requestAnimationFrame(moveCircle);
    }

    const reset = () => {
        console.log('reset')
        ypos = 10;
        myCircle.current?.setAttribute("cy", String(ypos));
        if (myButton.current) myButton.current.textContent = "PLAY";
        playing = false;
        window.cancelAnimationFrame(animID);
    }
    return (<>
        <div className={styles.containerWithButton}>
            <svg width="200" height="300" viewBox="0 0 200 300">
                <circle ref={myCircle} cx="100" cy="10" r="10" fill="green" />
            </svg>
            <button ref={myButton} onClick={() => { !playing ? playAnimation() : reset() }}>{"PLAY"}</button>
        </div>
    </>)
}

export const ComplexBounceExample = () => {
    let animID: number = 0;
    const myCircle = useRef<SVGCircleElement>(null);
    const myButton = useRef<HTMLButtonElement>(null)
    let playing = false;
    const startPos = {
        x: 100,
        y: 150
    }
    let pos = {
        x: 100,
        y: 150
    }

    const speed = {
        x: 1,
        y: 1
    }

    const playAnimation = () => {
        console.log("playAnimation")
        playing = true;
        moveCircle();
        if (myButton.current) myButton.current.textContent = "RESET";
    }

    const moveCircle = () => {
        if (!playing) return;
        pos.x += speed.x;
        pos.y += speed.y;

        if (pos.x > 190) {
            pos.x = 190;
            speed.x *= -1;
        }
        if (pos.x < 10) {
            pos.x = 10;
            speed.x *= -1;
        }

        if (pos.y > 290) {
            pos.y = 290;
            speed.y *= -1;
        }
        if (pos.y < 10) {
            pos.y = 10;
            speed.y *= -1;
        }


        myCircle.current?.setAttribute("cx", String(pos.x));
        myCircle.current?.setAttribute("cy", String(pos.y));

        animID = window.requestAnimationFrame(moveCircle);
    }

    const reset = () => {
        console.log('reset')
        pos.x = startPos.x;
        pos.y = startPos.y;
        myCircle.current?.setAttribute("cx", String(pos.x));
        myCircle.current?.setAttribute("cy", String(pos.y));
        if (myButton.current) myButton.current.textContent = "PLAY";
        playing = false;
        window.cancelAnimationFrame(animID);
    }
    return (<>
        <div className={styles.containerWithButton}>
            <svg width="200" height="300" viewBox="0 0 200 300">
                <circle ref={myCircle} cx="100" cy="150" r="10" fill="green" />
            </svg>
            <button ref={myButton} onClick={() => { !playing ? playAnimation() : reset() }}>{"PLAY"}</button>
        </div>
    </>)
}