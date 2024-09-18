'use client'

import styles from './AnimJS.module.scss';
import componentStyles from '../ComponentStyles.module.scss'
import { useRef, useState } from 'react';

export const FrameRateExample = () => {
    return (<>
        <div className={styles.imageHolder}>
            <figure>
                <figcaption>10 fps</figcaption><img className={styles.image}
                    src="/javascript_animation_balloon_10fps.gif"
                    alt="image"
                    width="300"
                    height="300"
                /></figure>
            <figure>
                <figcaption>30 fps</figcaption>
                <img className={styles.image}
                    src="/javascript_animation_balloon_30fps.gif"
                    alt="image"
                    width="300px"
                    height="300px"
                />

            </figure>
        </div>

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
        square.current?.removeEventListener("animationend", animEndHandler);
        //square.current?.classList.remove(styles.shrinkAnimation);
        square.current?.classList.add(styles.expandAnimation);
    }

    const reset = () => {
        square.current?.classList.remove(styles.expandAnimation);
        square.current?.classList.remove(styles.shrinkAnimation);
        square.current?.removeEventListener("animationend", animEndHandler);
        setStarted(false)
    }
    const [started, setStarted] = useState(false)
    return (<>
        <div className={componentStyles.containerWithButton}>
            <svg width="500" height="500" viewBox="0 0 500 500">
                <g id="square" transform="translate(250 250)" onClick={() => {

                    const list = square.current?.classList;
                    if (!started) {
                        setStarted(true);
                        square.current?.classList.add(styles.shrinkAnimation);
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
                    {!started && <text className={styles.clickMeText} x="0" y="0" fill="black" textAnchor='middle' dominantBaseline={"middle"}>Click Me!</text>}
                </g>
            </svg>
            {started && <button onClick={() => { reset() }}>{"reset"}</button>}
        </div></>)
}

export const BitterEnd = () => {
    let square = useRef<SVGRectElement>(null);
    const animEndHandler = () => {
        square.current?.removeEventListener("animationend", animEndHandler);
        square.current?.classList.add(styles.expandAnimation);
    }
    return (<>
        <div className={componentStyles.containerWithButton}>
            <svg width="500" height="500" viewBox="0 0 500 500">
                <g id="square" transform="translate(250 250)" onClick={() => {

                    const list = square.current?.classList;
                    if (list?.contains(styles.expandAnimation)) {
                        list?.remove(styles.expandAnimation);
                    }
                    list?.add(styles.shrinkAnimation);
                    square.current?.addEventListener("animationend", animEndHandler)


                }}>
                    <rect
                        ref={square}
                        className={styles.squareStyle}
                        x="-150" y="-150"
                        rx="20" ry="20"
                        width="300" height="300"

                    />

                </g>
            </svg>
        </div></>)
}