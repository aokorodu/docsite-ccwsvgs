

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

export const SMILStrokeDashArray = () => {
    return (
        <>
            <svg viewBox="0 50 700 300">
                <defs>
                    <g id="letters" fill="none" stroke-width="6" stroke-dasharray="18 82" stroke-linecap="round">
                        <path d="M528.386 107C539.327 107 549.506 108.563 558.914 111.699H558.913C568.367 114.771 576.723 119.172 583.971 124.908C591.281 130.587 597.179 137.33 601.655 145.134C606.137 152.947 608.86 161.514 609.827 170.824L609.941 171.928H557.813L557.627 171.166C556.878 168.114 555.703 165.458 554.113 163.188L554.107 163.179C552.512 160.843 550.519 158.878 548.121 157.279L548.109 157.271L548.099 157.264C545.768 155.615 543.023 154.38 539.849 153.572L539.827 153.566C536.709 152.7 533.255 152.263 529.458 152.263C521.282 152.263 514.365 154.215 508.658 158.076L508.659 158.077C503.005 161.943 498.649 167.525 495.613 174.877L495.614 174.878C492.636 182.236 491.129 191.16 491.129 201.676C491.129 212.316 492.577 221.366 495.442 228.85C498.303 236.321 502.54 241.987 508.133 245.907C513.711 249.818 520.68 251.805 529.101 251.805C536.58 251.805 542.718 250.714 547.558 248.582L547.562 248.58C552.471 246.443 556.083 243.438 558.462 239.586C560.565 236.181 561.756 232.229 562.013 227.704H528.815V190.308H611.978V216.692C611.978 233.52 608.4 247.977 601.199 260.02C594.07 271.983 584.216 281.171 571.655 287.572L571.653 287.573C559.158 293.912 544.846 297.067 528.743 297.067C510.781 297.067 494.965 293.251 481.326 285.587C467.689 277.923 457.038 266.998 449.383 252.833L449.381 252.83C441.78 238.653 438 221.828 438 202.391C438 187.155 440.31 173.619 444.952 161.802L444.953 161.798C449.501 150.369 455.753 140.643 463.715 132.636L464.49 131.866C472.812 123.666 482.433 117.483 493.348 113.322C504.255 109.105 515.937 107 528.386 107Z" pathLength="100" />
                        <path d="M302.885 107L303.095 107.721L340.391 235.95L377.688 107.721L377.897 107H436.165L435.731 108.313L375.308 291.375L375.08 292.062H305.701L305.475 291.375L245.051 108.313L244.617 107H302.885Z" pathLength="100" />
                        <path d="M167.659 103C182.547 103 195.478 105.491 206.423 110.51C217.359 115.525 225.825 122.614 231.778 131.784C237.797 140.903 240.822 151.556 240.883 163.704L240.888 164.71H191.406L191.333 163.789C190.874 158.054 188.74 153.671 184.984 150.532L184.979 150.528C181.303 147.41 175.593 145.76 167.659 145.76C162.605 145.76 158.536 146.379 155.412 147.571L155.403 147.574C152.31 148.72 150.11 150.262 148.708 152.149C147.286 154.063 146.546 156.245 146.491 158.727V158.742L146.49 158.758C146.38 160.8 146.737 162.615 147.539 164.227C148.401 165.782 149.765 167.245 151.683 168.602C153.619 169.912 156.131 171.13 159.237 172.243C161.952 173.216 165.128 174.105 168.772 174.906L170.363 175.244L170.371 175.246L185.385 178.463H185.386C195.574 180.62 204.326 183.474 211.628 187.034C218.919 190.59 224.919 194.794 229.604 199.659C234.284 204.461 237.73 209.882 239.926 215.918L240.335 217.053C242.315 222.759 243.329 228.933 243.386 235.566V235.58C243.325 247.787 240.27 258.188 234.171 266.727C228.082 275.251 219.392 281.706 208.158 286.115L208.157 286.114C196.987 290.522 183.598 292.71 168.017 292.71C152.01 292.71 137.995 290.341 125.994 285.577H125.992C114.022 280.801 104.678 273.438 98.002 263.484L97.998 263.479C91.3676 253.442 88.0602 240.663 88 225.211L87.9961 224.207H137.144L137.194 225.153C137.485 230.618 138.847 235.146 141.232 238.781C143.619 242.419 146.978 245.187 151.344 247.083C155.778 248.982 161.089 249.95 167.302 249.95C172.53 249.95 176.844 249.302 180.275 248.044C183.726 246.779 186.267 245.053 187.972 242.908C189.68 240.759 190.556 238.322 190.613 235.564C190.552 233.004 189.711 230.795 188.084 228.896L188.064 228.873C186.484 226.911 183.795 225.086 179.877 223.448L179.865 223.443V223.442C175.957 221.751 170.634 220.159 163.873 218.676L145.639 214.743L145.637 214.742C129.315 211.202 116.362 205.274 106.843 196.907L106.838 196.903C97.2949 188.4 92.5879 176.816 92.6484 162.275C92.5895 150.467 95.7426 140.099 102.132 131.215L102.133 131.214C108.567 122.292 117.447 115.363 128.732 110.414L128.734 110.413C140.085 105.462 153.066 103 167.659 103Z" pathLength="100" />
                    </g>
                </defs>
                <rect id="bg" x="0" y="0" width="700" height="400" fill="#0c0c0c" stroke="black" stroke-width="2" />
                <use href="#letters" x="0" y="0" stroke="#FFB200" stroke-dashoffset="0">
                    <animate attributeName="stroke-dashoffset" from="100" to="-100" begin="0s" dur="20s" repeatCount="10" />
                </use>
                <use href="#letters" x="0" y="0" stroke="#EB5B00" stroke-dashoffset="20">
                    <animate attributeName="stroke-dashoffset" from="100" to="-100" begin="-4s" dur="20s" repeatCount="10" />
                </use>
                <use href="#letters" x="0" y="0" stroke="#D91656" stroke-dashoffset="40">
                    <animate attributeName="stroke-dashoffset" from="100" to="-100" begin="-8s" dur="20s" repeatCount="10" />
                </use>
                <use href="#letters" x="0" y="0" stroke="violet" stroke-dashoffset="60">
                    <animate attributeName="stroke-dashoffset" from="100" to="-100" begin="-12s" dur="20s" repeatCount="10" />
                </use>
                <use href="#letters" x="0" y="0" stroke="#FFAB5B" stroke-dashoffset="80">
                    <animate attributeName="stroke-dashoffset" from="100" to="-100" begin="-16s" dur="20s" repeatCount="10" />
                </use>
            </svg>

        </>
    )
}