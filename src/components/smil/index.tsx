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

export const Example_Fill_Freeze = ({ begin = '0s', end = 'click' }: exampleProps) => {

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
                    <text x="100" y="280" dominantBaseline={"hanging"} textAnchor='middle'>{endvalue == "click" ? "click circle to stop" : ""}</text>
                </svg>}
                <button onClick={() => {
                    setStarted(!started);
                }}>{started ? "reset" : "play"} </button>
            </div>
        </>
    )
}

export const MultipleAnim_Example = () => {
    const [started, setStarted] = useState(false);

    return (<>
        <div className={styles.fillStuffContainer}>
            {!started && <svg width="500" height="500" viewBox="0 0 500 500">
                <circle cx="50" cy="250" r="20" fill="#93C17E" />
            </svg>}
            {started && <svg width="500" height="500" viewBox="0 0 500 500">
                <circle cx="50" cy="250" r="20" fill="#93C17E">
                    <animate
                        id="slide"
                        attributeName="cx"
                        values="50; 450; 250"
                        dur="2s"
                        begin="0"
                        fill="freeze"
                    />
                    <animate
                        id="grow"
                        attributeName="r"
                        values="20; 100"
                        dur="2s"
                        fill="freeze"
                    />
                    <animate
                        attributeName="fill"
                        values="#93C17E; #ff00ff; #009900"
                        dur="4s"
                        fill="freeze"
                    />
                </circle>
            </svg>}
            <button onClick={() => {
                setStarted(!started);
            }}>{started ? "reset" : "play"} </button>
        </div>
    </>)
}

export const MultipleAnimSequ_Example = () => {
    const [started, setStarted] = useState(false);

    return (<>
        <div className={styles.fillStuffContainer}>
            {!started && <svg width="500" height="500" viewBox="0 0 500 500">
                <circle cx="50" cy="250" r="20" fill="#93C17E" />
            </svg>}
            {started && <svg width="500" height="500" viewBox="0 0 500 500">
                <circle cx="50" cy="250" r="20" fill="#93C17E">
                    <animate
                        id="slide"
                        attributeName="cx"
                        values="50; 450; 250"
                        dur="2s"
                        begin="0"
                        fill="freeze"
                    />
                    <animate
                        id="grow"
                        attributeName="r"
                        values="20; 100"
                        dur="2s"
                        fill="freeze"
                        begin="slide.end"
                    />
                    <animate
                        id="fill"
                        attributeName="fill"
                        values="#93C17E; #ff00ff; #009900"
                        dur="4s"
                        fill="freeze"
                        begin="grow.begin + 500ms"
                    />
                </circle>
            </svg>}
            <button onClick={() => {
                setStarted(!started);
            }}>{started ? "reset" : "play"} </button>
        </div>
    </>)
}