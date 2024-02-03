'use client'

import { useRef } from "react"

const SBezierDemo = () => {

    const path = useRef<SVGPathElement>(null);
    const ball_1 = useRef<SVGCircleElement>(null);
    const ball_2 = useRef<SVGCircleElement>(null);
    const ball_reflection = useRef<SVGCircleElement>(null);
    const ball_3 = useRef<SVGCircleElement>(null);
    const connector = useRef<SVGPathElement>(null)
    let currentBall: any = null;
    const stage = useRef<SVGSVGElement>(null);
    const pathText = useRef<SVGTSpanElement>(null)
    let dragging = false;
    const startDragging = () => {
        dragging = true;

        stage.current?.addEventListener("mousemove", drag);
        stage.current?.addEventListener("mouseup", stopDragging);
        stage.current?.addEventListener("touchmove", touchdrag);
        stage.current?.addEventListener("touchend", stopDragging);

    }


    const touchdrag = (e: TouchEvent) => {
        if (!dragging) return;

        e.preventDefault();
        e.stopImmediatePropagation();

        const x = e.touches[0].clientX;
        const y = e.touches[0].clientY;


        if (stage.current != null) {

            const p = toSVGPoint(stage.current, x, y);
            console.log('p ', p.y);
            if ((p.x < 20) || (p.x > 480) || (p.y < 20) || (p.y > 480)) {
                stopDragging();
                return;
            }

            const xpos = p.x;
            const ypos = p.y;
            const xmirror = 500 - xpos;
            const ymirror = 500 - ypos;
            currentBall.current?.setAttribute("cx", String(Math.round(p.x)));
            currentBall.current?.setAttribute("cy", String(Math.round(p.y)));
            if (currentBall == ball_2) {
                ball_reflection.current?.setAttribute("cx", String(Math.round(xmirror)));
                ball_reflection.current?.setAttribute("cy", String(Math.round(ymirror)));
            }


            updatePath();
        }
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

            const xpos = p.x;
            const ypos = p.y;
            const xmirror = 500 - xpos;
            const ymirror = 500 - ypos;
            currentBall.current?.setAttribute("cx", String(Math.round(p.x)));
            currentBall.current?.setAttribute("cy", String(Math.round(p.y)));
            if (currentBall == ball_2) {
                ball_reflection.current?.setAttribute("cx", String(Math.round(xmirror)));
                ball_reflection.current?.setAttribute("cy", String(Math.round(ymirror)));
            }


            updatePath();
        }
    }

    const updatePath = () => {
        const b1x = ball_1.current?.getAttribute("cx");
        const b1y = ball_1.current?.getAttribute("cy");
        const b2x = ball_2.current?.getAttribute("cx");
        const b2y = ball_2.current?.getAttribute("cy");
        const b3x = ball_3.current?.getAttribute("cx");
        const b3y = ball_3.current?.getAttribute("cy");
        const reflectX = 500 - Number(b2x);
        const reflectY = 500 - Number(b2y);
        const str = `M 0,250 C ${b1x},${b1y} ${b2x},${b2y} 250,250 S${b3x},${b3y}  500,250`;
        path.current?.setAttribute("d", str);
        connector.current?.setAttribute("d", `M${b2x}, ${b2y} L${reflectX}, ${reflectY}`);
        if (pathText.current != null) pathText.current.textContent = `C ${b1x}, ${b1y} ${b2x}, ${b2y} 250, 250 S${b3x}, ${b3y}`;
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
        stage.current?.removeEventListener("touchmove", touchdrag);
        stage.current?.removeEventListener("touchend", stopDragging);
    }

    return (<>
        <svg ref={stage} width={500} height={500} viewBox="0 0 500 500">
            <rect x={0} y={0} width={500} height={500} fill={"#eaeaea"} stroke={"none"} />
            <path ref={path} d="M 0,250 C 25,100 225,100 250,250 S 475,400 500,250" stroke={"black"} strokeWidth={2} fill="none" />
            <path ref={connector} d="M225, 100 L275, 400" stroke={"black"} strokeWidth={1} strokeDasharray={10} />
            <text x={225} y={70} textAnchor={"middle"}>Drag the control points</text>
            <text x={250} y={460} textAnchor={"middle"}>"M 0,250 <tspan stroke={"red"} ref={pathText}>C 25,100 225,100 250,250 S 475,400</tspan> 500,250"</text>
            <circle
                onMouseDown={() => {
                    currentBall = ball_1;
                    startDragging();
                    console.log('dragging');
                }}

                onTouchStart={() => {
                    currentBall = ball_1;
                    startDragging();
                    console.log('dragging');
                }}
                ref={ball_1} cx={25} cy={100} r={20} fill={"red"} />
            <circle
                onMouseDown={() => {
                    currentBall = ball_2;
                    startDragging();
                    console.log('dragging');
                }}
                onTouchStart={() => {
                    currentBall = ball_2;
                    startDragging();
                    console.log('dragging');
                }}
                ref={ball_2} cx={225} cy={100} r={20} fill={"green"} />
            <circle
                onMouseDown={() => {
                    currentBall = ball_3;
                    startDragging();
                    console.log('dragging');
                }}
                onTouchStart={() => {
                    currentBall = ball_3;
                    startDragging();
                    console.log('dragging');
                }}
                ref={ball_3} cx={475} cy={400} r={20} fill={"blue"} />
            <circle
                onMouseDown={() => {
                    currentBall = ball_3;
                    startDragging();
                    console.log('dragging');
                }}
                onTouchStart={() => {
                    currentBall = ball_3;
                    startDragging();
                    console.log('dragging');
                }}
                ref={ball_reflection} cx={275} cy={400} r={20} fill={"none"} stroke={"black"} strokeWidth={2} strokeDasharray={3} />

        </svg>
    </>)
}

export default SBezierDemo