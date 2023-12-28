export const MarkerIntro = () => {
    return (
        <>
            <svg id="svg" width="500" height="300" viewBox="0 0 500 300">
                <defs>
                    <marker id="arrowhead" refX="5" refY="5" markerWidth="10" markerHeight="10">
                        <polygon points="0,0 10,5 0,10" fill="black" stroke="black" />
                    </marker>
                    <marker id="box" refX="5" refY="5" markerWidth="10" markerHeight="10">
                        <rect x="0" y="0" width="10" height="10" fill="black" stroke="black" stroke-width="2" />
                    </marker>
                    <marker id="ball" refX="5" refY="5" markerWidth="10" markerHeight="10">
                        <circle cx="5" cy="5" r="2.5" fill="black" />
                    </marker>
                </defs>
                <polyline marker-start="url(#box)" markerEnd="url(#arrowhead)" marker-mid="url(#ball)" stroke="black" strokeWidth="2" fill="none" points="50,150 150,150 250,150 350,150 450,150" />
            </svg>
        </>)
}

type MarkerProp = {
    position: string
}
export const MarkerPosDemo = ({ position }: MarkerProp) => {
    return (
        <>
            <svg id="svg" width="500" height="300" viewBox="0 0 500 300">
                <defs>
                    <marker id="arrowhead" refX="5" refY="5" markerWidth="10" markerHeight="10">
                        <polygon points="0,0 10,5 0,10" fill="black" stroke="black" />
                    </marker>
                    <marker id="box" refX="5" refY="5" markerWidth="10" markerHeight="10">
                        <rect x="0" y="0" width="10" height="10" fill="black" stroke="black" stroke-width="2" />
                    </marker>
                    <marker id="ball" refX="5" refY="5" markerWidth="10" markerHeight="10">
                        <circle cx="5" cy="5" r="2.5" fill="black" />
                    </marker>
                </defs>
                {position == "start" && <polyline marker-start="url(#box)" stroke="black" strokeWidth="2" fill="none" points="50,150 150,150 250,150 350,150 450,150" />}

                {position == "mid" && <polyline marker-mid="url(#ball)" stroke="black" strokeWidth="2" fill="none" points="50,150 150,150 250,150 350,150 450,150" />}

                {position == "end" && <polyline marker-end="url(#arrowhead)" stroke="black" strokeWidth="2" fill="none" points="50,150 150,150 250,150 350,150 450,150" />}

                {position == "all" && <polyline marker-start="url(#box)" marker-mid="url(#ball)" marker-end="url(#arrowhead)" stroke="black" strokeWidth="2" fill="none" points="50,150 150,150 250,150 350,150 450,150" />}
            </svg>
        </>)
}

export const MarkerCrookedArrow = () => {
    return (
        <>
            <svg id="svg" width="500" height="300" viewBox="0 0 500 300">
                <defs>
                    <marker id="arrowhead" refX="5" refY="5" markerWidth="10" markerHeight="10">
                        <polygon points="0,0 10,5 0,10" fill="black" stroke="black" />
                    </marker>

                </defs>
                <polyline markerEnd="url(#arrowhead)" stroke="black" strokeWidth="2" fill="none" points="50,250 450,50" />
            </svg>
        </>)
}

export const MarkerFixedArrow = () => {
    return (
        <>
            <svg id="svg" width="500" height="300" viewBox="0 0 500 300">
                <defs>
                    <marker id="arrowhead-2" orient="auto" refX="5" refY="5" markerWidth="10" markerHeight="10">
                        <polygon points="0,0 10,5 0,10" fill="black" stroke="black" />
                    </marker>

                </defs>
                <polyline markerEnd="url(#arrowhead-2)" stroke="black" strokeWidth="2" fill="none" points="50, 250 450,50" />
            </svg>
        </>)
}


export const MarkerAutoStartReverse = () => {
    return (
        <>
            <svg id="svg" width="500" height="300" viewBox="0 0 500 300">
                <defs>
                    <marker id="arrowhead-3" orient="auto-start-reverse" refX="5" refY="5" markerWidth="10" markerHeight="10">
                        <polygon points="0,0 10,5 0,10" fill="black" stroke="black" />
                    </marker>

                </defs>
                <polyline markerStart="url(#arrowhead-3)" markerEnd="url(#arrowhead-3)" stroke="black" strokeWidth="2" fill="none" points="50, 250 450,50" />
            </svg>
        </>)
}

export const MarkerAngle = () => {
    return (
        <>
            <svg id="svg" width="500" height="300" viewBox="0 0 500 300">
                <defs>
                    <marker id="arrowhead-4" orient="25deg" refX="5" refY="5" markerWidth="10" markerHeight="10">
                        <polygon points="0,0 10,5 0,10" fill="black" stroke="black" />
                    </marker>

                </defs>
                <polyline markerEnd="url(#arrowhead-4)" stroke="black" strokeWidth="2" fill="none" points="50, 250 450,50" />
                <text x="350" y="50">(25deg)</text>
            </svg>
        </>)
}