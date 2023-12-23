'use client'

import { useRef } from "react"

const QBezierDemo = () => {

    const path = useRef<SVGPathElement>(null);
    const ball = useRef<SVGCircleElement>(null);
    const stage = useRef<SVGSVGElement>(null);
    const pathText = useRef<SVGTextElement>(null)
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

            ball.current?.setAttribute("cx", String(p.x));
            ball.current?.setAttribute("cy", String(p.y));

            updatePath(p.x, p.y);
        }
    }

    const updatePath = (x: number, y: number) => {
        const str = `M 0,250 L 50,250 Q ${Math.round(x)},${Math.round(y)} 450,250 L 500,250`;
        path.current?.setAttribute("d", str);
        if (pathText.current != null) pathText.current.textContent = str;
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
            <path ref={path} d="M 0,250 L 50,250 Q 250,120 450,250 L 500,250" stroke={"black"} strokeWidth={2} fill="none" />
            <text x={250} y={100} textAnchor={"middle"}>Drag Me!</text>
            <text ref={pathText} x={250} y={450} textAnchor={"middle"}>"M 0,250 L 50,250 Q 250,120 450,250 L 500,250"</text>
            <circle
                onMouseDown={() => {
                    startDragging();
                    console.log('dragging');
                }}
                ref={ball} cx={250} cy={120} r={10} fill={"red"} />

        </svg>
    </>)
}

export default QBezierDemo