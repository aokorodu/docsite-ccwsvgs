

import { useState, useRef, useEffect } from 'react';
import styles from './SMIL.module.scss';
import { createNoise2D } from "simplex-noise";

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
    begin?: string,
    end?: string,
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

export const SMILWithPerlin = () => {
    const perlinPath = useRef<SVGPathElement>(null);

    // svg namespace just in case we're creating some graphics
    const namespace = "http://www.w3.org/2000/svg";
    const w = 800;
    const h = 250;
    const maxY = 2 * h / 3;
    const minY = h / 3;

    const noise = createNoise2D();

    // variable properties
    let denom = 400; // the bigger the denom the more gradual the shape changes. A low number produces a very jagged line.

    // tick variable is used in changing the noise value over time so we can animate the lines. The lower the tickIncrement the more slowley the line changes
    let tick = 0;
    let tickIncrement = 0.0010;
    const totalPoints = 200;

    // dx is just the horizontal distance between points. It will be used for calculating the x value for all the points in the polyline.
    const dx = w / totalPoints;

    const mapRange = (value: number, inMin: number, inMax: number, outMin: number, outMax: number) =>
        ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

    function makePerlinPath() {
        if (!perlinPath.current) return;
        let pointArray = [];
        let xpos = -50;
        let pref = "M";
        for (let i = 0; i < totalPoints + 2; i++) {

            let dy = noise(xpos / denom, tick);
            let ypos = mapRange(dy, -1, 1, minY, maxY);
            pointArray.push(` ${pref}${xpos},${ypos}`);
            if (i == 0) pref = "L";
            xpos = i * dx;

        }
        perlinPath.current.setAttribute("d", pointArray.join(" "));
        tick += tickIncrement;
    }

    useEffect(() => {
        let mounted = true;
        let rafId: number;

        const update = () => {
            if (!mounted) return;
            makePerlinPath();
            if (tick > 100000) tick = Math.random();
            rafId = window.requestAnimationFrame(update);
        };

        // start the loop once the component is mounted and ref is attached
        update();

        return () => {
            mounted = false;
            if (rafId) cancelAnimationFrame(rafId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            <svg id="bottom" viewBox={`0 0 ${w} ${h}`}>
                <defs>
                    <linearGradient id="sky_gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="300">
                        <stop offset="0" stopColor="#7f009b" />
                        <stop offset=".85" stopColor="#25002c" />
                    </linearGradient>
                </defs>
                <rect id="bg" x="0" y="0" width={w} height={h} fill="url(#sky_gradient)" stroke="black" />
                <g id="holder">
                    <path ref={perlinPath} id="perlinPath" d="" fill="none" stroke="none" stroke-width="1" pathLength="100" />

                    <text>
                        <textPath className={styles.pathText} href="#perlinPath" startOffset="0">
                            🐟 Creative Coding with SVGs!!⁠ 🐡
                            <animate attributeName="startOffset" from="100" to="-100" begin="0s" dur="20s" repeatCount="indefinite" />
                        </textPath>
                    </text>

                    <text >
                        <textPath className={styles.pathText} href="#perlinPath" startOffset="0">
                            🐠 Creative Coding with SVGs!!
                            <animate attributeName="startOffset" from="100" to="-100" begin="-10s" dur="20s" repeatCount="indefinite" />
                        </textPath>
                    </text>

                </g>
            </svg>

        </>
    )
}