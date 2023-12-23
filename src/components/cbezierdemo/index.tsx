'use client'

import { useRef } from "react"

const CBezierDemo = () => {

    const path = useRef<SVGPathElement>(null);
    const ball_1 = useRef<SVGCircleElement>(null);
    const ball_2 = useRef<SVGCircleElement>(null);
    let currentBall: any = null;
    const stage = useRef<SVGSVGElement>(null);
    const pathText = useRef<SVGTSpanElement>(null)
    let dragging = false;
    const startDragging = () => {
        dragging = true;

        stage.current?.addEventListener("mousemove", drag);
        stage.current?.addEventListener("mouseup", stopDragging);

    }


    const drag = (e: MouseEvent) => {
        if (!dragging) return;

        const x = e.clientX;
        const y = e.clientY;


        if (stage.current != null) {

            const p = toSVGPoint(stage.current, x, y);
            console.log('p ', p.y);
            if ((p.x < 20) || (p.x > 480) || (p.y < 20) || (p.y > 480)) {
                stopDragging();
                return;
            }

            currentBall.current?.setAttribute("cx", String(Math.round(p.x)));
            currentBall.current?.setAttribute("cy", String(Math.round(p.y)));

            updatePath();
        }
    }

    const updatePath = () => {
        const b1x = ball_1.current?.getAttribute("cx");
        const b1y = ball_1.current?.getAttribute("cy");
        const b2x = ball_2.current?.getAttribute("cx");
        const b2y = ball_2.current?.getAttribute("cy");
        const str = `M 0,250 L 50,250 C ${b1x},${b1y} ${b2x},${b2y} 450,250 L 500,250`;
        path.current?.setAttribute("d", str);
        if (pathText.current != null) pathText.current.textContent = `C ${b1x}, ${b1y} ${b2x}, ${b2y}`;
    }

    const toSVGPoint = (svg: SVGGraphicsElement, x: number, y: number) => {
        let p = new DOMPoint(x, y);

        return p.matrixTransform(svg.getScreenCTM()?.inverse());
    };


    const stopDragging = () => {
        dragging = false;
        console.log('stop dragging')
        stage.current?.removeEventListener("mousemove", drag)
        stage.current?.removeEventListener("mouseup", stopDragging)
    }

    return (<>
        <svg ref={stage} width={500} height={500} viewBox="0 0 500 500">
            <rect x={20} y={20} width={460} height={460} fill={"#eaeaea"} stroke={"none"} />
            <path ref={path} d="M 0,250 L 50,250 C 200,125 300,425 450,250 L 500,250" stroke={"black"} strokeWidth={2} fill="none" />
            <text x={250} y={100} textAnchor={"middle"}>Drag the control points</text>
            <text x={250} y={460} textAnchor={"middle"}>"M 0,250 L 50,250 <tspan stroke={"red"} ref={pathText}>C 200, 125 300, 425</tspan> 450,250 L 500,250"</text>
            <circle
                onMouseDown={() => {
                    currentBall = ball_1;
                    startDragging();
                    console.log('dragging');
                }}
                ref={ball_1} cx={200} cy={125} r={10} fill={"red"} />
            <circle
                onMouseDown={() => {
                    currentBall = ball_2;
                    startDragging();
                    console.log('dragging');
                }}
                ref={ball_2} cx={300} cy={425} r={10} fill={"blue"} />

        </svg>
    </>)
}

export default CBezierDemo