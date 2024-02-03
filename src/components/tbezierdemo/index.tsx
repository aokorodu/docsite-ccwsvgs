'use client'

import { useRef } from "react"

const TBezierDemo = () => {

    const path = useRef<SVGPathElement>(null);
    const ball = useRef<SVGCircleElement>(null);
    const ballReflection = useRef<SVGCircleElement>(null);
    const connector = useRef<SVGPathElement>(null);
    const stage = useRef<SVGSVGElement>(null);
    const pathText = useRef<SVGTSpanElement>(null)
    let dragging = false;
    const startDragging = () => {
        dragging = true;

        stage.current?.addEventListener("mousemove", drag);
        stage.current?.addEventListener("touchmove", touchdrag);
        stage.current?.addEventListener("mouseup", stopDragging);
        stage.current?.addEventListener("touchstop", stopDragging);

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
            const xposMirror = 500 - xpos;
            const yposMirror = 500 - ypos;
            ball.current?.setAttribute("cx", String(xpos));
            ball.current?.setAttribute("cy", String(ypos));
            ballReflection.current?.setAttribute("cx", String(xposMirror));
            ballReflection.current?.setAttribute("cy", String(yposMirror));
            connector.current?.setAttribute("d", `M${xpos},${ypos} L${xposMirror},${yposMirror}`);
            updatePath(xpos, ypos);
        }
    }


    const drag = () => {
        if (!dragging) return;

        if (stage.current != null) {

            const p = toSVGPoint(stage.current, x, y);
            console.log('p ', p.y);
            if ((p.x < 20) || (p.x > 480) || (p.y < 20) || (p.y > 480)) {
                stopDragging();
                return;
            }

            const xpos = p.x;
            const ypos = p.y;
            const xposMirror = 500 - xpos;
            const yposMirror = 500 - ypos;
            ball.current?.setAttribute("cx", String(xpos));
            ball.current?.setAttribute("cy", String(ypos));
            ballReflection.current?.setAttribute("cx", String(xposMirror));
            ballReflection.current?.setAttribute("cy", String(yposMirror));
            connector.current?.setAttribute("d", `M${xpos},${ypos} L${xposMirror},${yposMirror}`);
            updatePath(xpos, ypos);
        }
    }

    const updatePath = (x: number, y: number) => {
        const str = `M 0,250 Q ${Math.round(x)},${Math.round(y)} 250,250 T 500,250`;
        path.current?.setAttribute("d", str);
        if (pathText.current != null) pathText.current.textContent = `Q ${Math.round(x)}, ${Math.round(y)} 250,250 T`;
    }

    const toSVGPoint = (svg: SVGGraphicsElement, x: number, y: number) => {
        let p = new DOMPoint(x, y);

        return p.matrixTransform(svg.getScreenCTM()?.inverse());
    };


    const stopDragging = () => {
        dragging = false;
        console.log('stop dragging')
        stage.current?.removeEventListener("mousemove", drag);
        stage.current?.removeEventListener("touchmove", touchdrag);
        stage.current?.removeEventListener("mouseup", stopDragging)
        stage.current?.removeEventListener("touchmove", touchdrag);
        stage.current?.removeEventListener("touchstop", stopDragging);

    }

    return (<>
        <svg ref={stage} width={500} height={500} viewBox="0 0 500 500">
            <rect x={0} y={0} width={500} height={500} fill={"#eaeaea"} stroke={"none"} />
            <path ref={path} d="M 0,250 Q 125,100 250,250 T 500,250" stroke={"black"} strokeWidth={2} fill="none" />
            <text x={125} y={75} textAnchor={"middle"}>Drag Me!</text>
            <text x={250} y={450} textAnchor={"middle"}>"M 0,250 <tspan stroke={"red"} ref={pathText}>Q 250, 120 250, 250 T</tspan> 500,250"</text>
            <path ref={connector} d={"M125,100 L375,400"} stroke={"black"} strokeDasharray={5} />
            <circle
                cx={250} cy={250} r={5} fill={"black"} />
            <circle
                onMouseDown={() => {
                    startDragging();
                    console.log('dragging');
                }}

                onTouchStart={() => {
                    startDragging();
                    console.log('dragging');
                }}
                ref={ball} cx={125} cy={100} r={20} fill={"red"} />
            <circle
                ref={ballReflection} cx={375} cy={400} r={15} fill={"none"} stroke={"black"} strokeWidth={3} strokeDasharray={5} pathLength={100} />

        </svg>
    </>)
}

export default TBezierDemo