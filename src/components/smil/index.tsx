'use client'

import { useState, useRef } from 'react';
import styles from './SMIL.module.scss';
import { start } from 'repl';

export const Example_Still = () => {
    return (
        <>
            <div className={styles.fillStuffContainer}><svg width="200" height="300" viewBox="0 0 200 300">
                <circle cx="100" cy="20" r="10" fill="green" />
            </svg></div>

        </>
    )
}

export const Example_1 = () => {
    return (
        <>
            <div className={styles.fillStuffContainer}><svg width="200" height="300" viewBox="0 0 200 300">
                <circle cx="50" cy="20" r="10" fill="green">
                    <animate
                        attributeName="cy"
                        from="20"
                        to="280"
                        dur="2s"
                        repeatCount="indefinite" />
                </circle>
            </svg></div>

        </>
    )
}

type exampleProps = {
    begin: string,
    end: string,
}

export const Example_Fill_Freeze = ({ begin = '2s', end = 'click' }: exampleProps) => {

    const [started, setStarted] = useState(false);
    const animateElement = useRef<SVGAnimateElement>(null)
    return (
        <>
            <div className={styles.fillStuffContainer}>
                {!started && <svg width="200" height="300" viewBox="0 0 200 300">
                    <circle cx="100" cy="20" r="10" fill="green" />
                </svg>}
                {started && <svg width="200" height="300" viewBox="0 0 200 300">
                    <circle cx="100" cy="20" r="10" fill="green">
                        <animate
                            id={`${Math.random()}`}
                            ref={animateElement}
                            attributeName="cy"
                            from="20"
                            to="280"
                            dur="2s"
                            repeatCount="3"
                            fill="freeze"
                            begin={begin}
                            end={end}
                            restart="always" />
                    </circle>
                </svg>}
                <button onClick={() => {
                    setStarted(!started);
                }}>{started ? "reset" : "play"} </button>
            </div>
        </>
    )
}

type endprops = {
    endvalue: string
}
export const Example_End = ({ endvalue }: endprops) => {

    const [started, setStarted] = useState(false);
    const animateElement = useRef<SVGAnimateElement>(null)
    return (
        <>
            <div className={styles.fillStuffContainer}>
                {!started && <svg width="200" height="300" viewBox="0 0 200 300">
                    <circle cx="100" cy="20" r="10" fill="green" />
                </svg>}
                {started && <svg width="200" height="300" viewBox="0 0 200 300">
                    <circle cx="100" cy="20" r="10" fill="green">
                        <animate
                            id={`${Math.random()}`}
                            ref={animateElement}
                            attributeName="cy"
                            from="20"
                            to="280"
                            dur={endvalue === "click" ? "10s" : "1s"}
                            repeatCount="indefinite"
                            fill="freeze"
                            end={endvalue} />
                    </circle>
                </svg>}
                <button onClick={() => {
                    setStarted(!started);
                }}>{started ? "reset" : "play"} </button>
            </div>
        </>
    )
}


