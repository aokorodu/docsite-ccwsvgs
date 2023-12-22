'use client'

import { useEffect, useState, useRef } from "react"

const BezierDemo = () => {

    const path = useRef(null);
    const ball = useRef(null);
    const stage = useRef<SVGGraphicsElement>(null);
    let dragging = false;
    const startDragging = () => {
        dragging = true;

        stage.current?.addEventListener("mousemove", drag);
        stage.current?.addEventListener("mouseup", stopDragging)

    }


    const drag = (e: MouseEvent) => {
        const x = e.clientX;
        const y = e.clientY;

        if (stage.current != null) {
            const p = toSVGPoint(stage.current, x, y);
            console.log('p ', p);
        }

    }

    const toSVGPoint = (svg: SVGGraphicsElement, x: number, y: number) => {
        let p = new DOMPoint(x, y);

        return p.matrixTransform(svg.getScreenCTM()?.inverse());
    };


    const stopDragging = () => {
        dragging = false;
        stage.current?.removeEventListener("mousemove", drag)
        stage.current?.removeEventListener("mouseup", stopDragging)
    }

    return (<>
        <div>hello world</div>
        <svg ref={stage} width={500} height={500} viewBox="0 0 500 500">
            <path ref={path} d="M 0,250 L 50,250 Q 250,120 450,250 L 500,250" stroke={"black"} strokeWidth={2} fill="none" />
            <circle
                onMouseDown={() => {
                    startDragging();
                    console.log('dragging');
                }}
                ref={ball} cx={250} cy={120} r={10} fill={"red"} />

        </svg>
    </>)
}

export default BezierDemo