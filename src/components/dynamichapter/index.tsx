'use client'

import { useEffect, useRef } from "react"

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
    color: string
}

export const GenerateLeafs = ({ rotate, color }: genleafprops) => {
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