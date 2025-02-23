'use client'

import { useEffect, useRef, useState } from "react"
import styles from './DChap.module.scss';

type positionProps = {
    x: number,
    y: number
}

export const AppendLeafExample = ({ x, y }: positionProps) => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 300 300">
            <g transform={`translate(${x}, ${y})`}>
                <path d="M28.817 0C6.04933 16.1538 -22.6636 70 28.817 70C85.8145 70 51.5847 30.5128 28.817 0Z" fill="#06B943" />
                <path d="M27.3982 10.3379L29.8304 65.4764H27.3982V10.3379Z" fill="#280505" />
                <path d="M39.1777 38.1504L28.926 51.876L27.3982 49.598L39.1777 38.1504Z" fill="#280505" />
                <path d="M16.4536 45.1719L29.185 55.4583L27.5264 57.5996L16.4536 45.1719Z" fill="#280505" />
                <path d="M21.3179 33.2305L29.023 41.4565L27.4858 42.8802L21.3179 33.2305Z" fill="#280505" />
                <path d="M34.1602 26.4414L28.4894 36.54L27.3982 35.3383L34.1602 26.4414Z" fill="#280505" />
                <path d="M23.75 22.1055L28.0837 28.1223L27.6937 28.4724L23.75 22.1055Z" fill="#280505" />
            </g>
        </svg></>)
}

type genleafprops = {
    rotate: boolean,
    color: string,
    canremove: boolean
}

export const GenerateLeafs = ({ rotate, color, canremove = false }: genleafprops) => {
    const svg = useRef<SVGSVGElement>(null);
    const leafDef = useRef<SVGGElement>(null)
    useEffect(() => {
        buildLeaves();
    }, [])

    const getColor = () => {
        const h = Math.round(Math.random() * 360);
        const s = 50 + Math.round(Math.random() * 50);
        const l = 40 + Math.round(Math.random() * 50);

        return `hsl(${h}, ${s}%, ${l}%)`
    }


    const buildLeaves = () => {
        const num = 30;
        const leafStr = ``
        const namespace = "http://www.w3.org/2000/svg"
        for (let i = 0; i < num; i++) {
            let my_leaf = document.createElementNS(namespace, "use");
            my_leaf.setAttribute('href', "#leaf");
            const xpos = String(Math.random() * 500); // value between 0-500
            const ypos = String(Math.random() * 500); // value between 0-500
            my_leaf.setAttribute("x", xpos);
            my_leaf.setAttribute("y", ypos);
            if (rotate) {
                const angle = Math.random() * 180;
                my_leaf.setAttribute("transform", `rotate(${angle}, ${xpos}, ${ypos})`);
            }
            if (color) {
                color === "random" ? my_leaf.setAttribute("fill", getColor()) : my_leaf.setAttribute("fill", color);
            } else {
                my_leaf.setAttribute("fill", "#06B943");

            }

            if (canremove) {
                my_leaf.addEventListener("click", () => {
                    my_leaf.remove();
                })
            }
            svg.current?.appendChild(my_leaf);
        }

    }

    return (<>
        <svg ref={svg} width="500" height="500" viewBox="0 0 500 500">
            <defs>
                <g id="leaf">
                    <path d="M28.817 0C6.04933 16.1538 -22.6636 70 28.817 70C85.8145 70 51.5847 30.5128 28.817 0Z" />
                    <path d="M27.3982 10.3379L29.8304 65.4764H27.3982V10.3379Z" fill="#280505" />
                    <path d="M39.1777 38.1504L28.926 51.876L27.3982 49.598L39.1777 38.1504Z" fill="#280505" />
                    <path d="M16.4536 45.1719L29.185 55.4583L27.5264 57.5996L16.4536 45.1719Z" fill="#280505" />
                    <path d="M21.3179 33.2305L29.023 41.4565L27.4858 42.8802L21.3179 33.2305Z" fill="#280505" />
                    <path d="M34.1602 26.4414L28.4894 36.54L27.3982 35.3383L34.1602 26.4414Z" fill="#280505" />
                    <path d="M23.75 22.1055L28.0837 28.1223L27.6937 28.4724L23.75 22.1055Z" fill="#280505" />
                </g>
            </defs>
        </svg>
    </>)
}

export const SliderStuff = () => {
    const dynoCircle = useRef<SVGCircleElement>(null);
    const [xpos, setXPos] = useState(250);
    const [ypos, setYPos] = useState(250);
    const [xgradval, setXGradVal] = useState("50%");
    const [ygradval, setYGradVal] = useState("50%");
    const [radius, setRadius] = useState(100);
    const rangeValCX = useRef(250);
    const rangeValCY = useRef(250);
    const rangeValRadius = useRef(100);
    const rangeValGradCX = useRef("50%");
    const rangeValGradCY = useRef("50%");
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <defs>
                <radialGradient id="dynamic-gradient" cx={xgradval} cy={ygradval}>
                    <stop id="first_stop" offset="0%" stop-color="yellow"></stop>
                    <stop id="second_stop" offset="100%" stop-color="orange"></stop>
                </radialGradient>
                <linearGradient id="thebg" x1={"0%"} y1={"0%"} x2={"0%"} y2={"100%"}>
                    <stop id="first_stop" offset="0%" stop-color="lightblue"></stop>
                    <stop id="second_stop" offset="100%" stop-color="violet"></stop>
                </linearGradient>
            </defs>
            <rect x="0" y="0" width="500" height="500" fill="url(#thebg)" />
            <circle ref={dynoCircle} cx={xpos} cy={ypos} r={radius} fill="url(#dynamic-gradient)" stroke="white" strokeWidth={3} strokeOpacity={.2} />
        </svg>
        <div className={styles.allSlideHolder}>
            <div className={styles.sliderHolder}>
                <label>radial gradient cx</label>
                <input id="radius" type="range" min="0" max="100" value={rangeValGradCX.current} onChange={(e) => {
                    const neval = `${e.target.value}%`;
                    console.log('new value: ', neval)
                    setXGradVal(neval);
                    rangeValGradCX.current = e.target.value;
                }}></input>
            </div>
            <div className={styles.sliderHolder}>
                <label>radial gradient cy</label>
                <input id="radius" type="range" min="0" max="100" value={rangeValGradCY.current} onChange={(e) => {
                    const neval = `${e.target.value}%`;
                    setYGradVal(neval);
                    rangeValGradCY.current = e.target.value;
                }}></input>
            </div>
            <div className={styles.sliderHolder}>
                <label>cx</label>
                <input id="radius" type="range" min="0" max="500" value={rangeValCX.current} onChange={(e) => {
                    const neval = Number(e.target.value);
                    setXPos(neval);
                    rangeValCX.current = neval;
                }}></input>
            </div>
            <div className={styles.sliderHolder}>
                <label>cy</label>
                <input id="radius" type="range" min="0" max="500" value={rangeValCY.current} onChange={(e) => {
                    const neval = Number(e.target.value);
                    setYPos(neval);
                    rangeValCY.current = neval;
                }}></input>
            </div>
            <div className={styles.sliderHolder}>
                <label>radius</label>
                <input id="radius" type="range" min="10" max="250" value={rangeValRadius.current} onChange={(e) => {
                    const neval = Number(e.target.value);
                    setRadius(neval);
                    rangeValRadius.current = neval;
                }}></input>
            </div>


        </div>
    </>)
}

export const DraggingExample = () => {
    return (
        <>
            <iframe
                height="600px"
                style={{ width: "100%" }}
                title="Dragging Elements"
                src="https://codepen.io/aokorodu/embed/preview/MWNbdyg?default-tab=result&theme-id=dark"
                frameBorder="no"
                loading="lazy"
            >
                See the Pen <a href="https://codepen.io/aokorodu/pen/MWNbdyg">
                    Dragging SVG Elements</a> by zuubaDigital (<a href="https://codepen.io/aokorodu">@aokorodu</a>)
                on <a href="https://codepen.io">CodePen</a>
            </iframe>
        </>
    );
};

export const DraggingExample2 = () => {
    return (
        <>
            <iframe
                height="600px"
                style={{ width: "100%" }}
                title="Dragging Elements"
                src="https://codepen.io/aokorodu/embed/preview/emOjoqw?default-tab=result&theme-id=dark"
                frameBorder="no"
                loading="lazy"
            >
                See the Pen <a href="https://codepen.io/aokorodu/pen/emOjoqw?editors=0010">
                    Dragging SVG Elements - Multiple Dynamic</a> by zuubaDigital (<a href="https://codepen.io/aokorodu">@aokorodu</a>)
                on <a href="https://codepen.io">CodePen</a>
            </iframe>
        </>
    );
};


export const DynamicLeavesExample = () => {
    return (
        <>
            <iframe
                height="600px"
                style={{ width: "100%" }}
                title="Generating Elements - Leaf FINAL"
                src="https://codepen.io/aokorodu/embed/preview/MYWebOa?default-tab=js%2Cresult&theme-id=dark"
                frameBorder="no"
                loading="lazy"
            >
                See the Pen <a href="https://codepen.io/aokorodu/pen/MYWebOa">
                    Generating Elements - Leaf FINAL</a> by zuubaDigital (<a href="https://codepen.io/aokorodu">@aokorodu</a>)
                on <a href="https://codepen.io">CodePen</a>
            </iframe>
        </>
    );
};
