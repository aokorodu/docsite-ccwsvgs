'use client'

import styles from './AnimationJS.module.scss';
import { useRef, useState } from 'react';

export const FrameRateExample = () => {
    return (<>
        <div className={styles.imageHolder}>
            <figure>
                <figcaption>30 fps</figcaption>
                <img className={styles.image}
                    src="/javascript_animation_balloon_30fps.gif"
                    alt="image"
                    width="300px"
                    height="300px"
                />

            </figure><figure>
                <figcaption>10 fps</figcaption><img className={styles.image}
                    src="/javascript_animation_balloon_10fps.gif"
                    alt="image"
                    width="300"
                    height="300"
                /></figure></div>

    </>)
}

export const ToggleClassWithJS = () => {
    let square = useRef<SVGRectElement>(null);
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <g id="square" transform="translate(250 250)" onClick={() => {
                const list = square.current?.classList;
                list?.contains(styles.spinStyleTransition) ? square.current?.classList.remove(styles.spinStyleTransition) : square.current?.classList.add(styles.spinStyleTransition)

            }}>
                <rect
                    ref={square}
                    className={styles.squareStyle}
                    x="-150" y="-150"
                    rx="20" ry="20"
                    width="300" height="300"

                />
                <text className={styles.clickMeText} x="0" y="0" fill="black" textAnchor='middle' dominantBaseline={"middle"}>Click Me!</text>
            </g>
        </svg></>)
}

export const ToggleKeyframeAnimBroke = () => {
    let square = useRef<SVGRectElement>(null);
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <g id="square" transform="translate(250 250)" onClick={() => {
                const list = square.current?.classList;
                list?.contains(styles.spinStyleAnimation)
                    ? square.current?.classList.remove(styles.spinStyleAnimation)
                    : square.current?.classList.add(styles.spinStyleAnimation)

            }}>
                <rect
                    ref={square}
                    className={styles.squareStyle}
                    x="-150" y="-150"
                    rx="20" ry="20"
                    width="300" height="300"

                />
                <text className={styles.clickMeText} x="0" y="0" fill="black" textAnchor='middle' dominantBaseline={"middle"}>Click Me!</text>
            </g>
        </svg></>)
}

export const AnimEnd = () => {
    let square = useRef<SVGRectElement>(null);
    const animEndHandler = () => {
        console.log('animation end');
        square.current?.removeEventListener("animationend", animEndHandler);
        //square.current?.classList.remove(styles.firstPartAnimation);
        square.current?.classList.add(styles.secondPartAnimation);
    }

    const reset = () => {
        square.current?.classList.remove(styles.secondPartAnimation);
        square.current?.classList.remove(styles.firstPartAnimation);
        square.current?.removeEventListener("animationend", animEndHandler);
    }
    const [started, setStarted] = useState(false)
    return (<>
        <div className={styles.containerWithButton}>
            <svg width="500" height="500" viewBox="0 0 500 500">
                <g id="square" transform="translate(250 250)" onClick={() => {
                    const list = square.current?.classList;
                    if (!list?.contains(styles.firstPartAnimation)) {
                        square.current?.classList.add(styles.firstPartAnimation);
                        square.current?.addEventListener("animationend", animEndHandler)
                    }



                }}>
                    <rect
                        ref={square}
                        className={styles.squareStyle}
                        x="-150" y="-150"
                        rx="20" ry="20"
                        width="300" height="300"

                    />
                    <text className={styles.clickMeText} x="0" y="0" fill="black" textAnchor='middle' dominantBaseline={"middle"}>Click Me!</text>
                </g>
            </svg>
            <button onClick={() => { reset() }}>{"reset"}</button>
        </div></>)
}