

import styles from './AnimationJSII.module.scss';
import componentStyles from '../ComponentStyles.module.scss'
import { useEffect, useRef, useState } from 'react';

export const BackAndForthExample = () => {
    return (<>
        <svg width="200" height="300" viewBox="0 0 200 300">
            <circle className={styles.backAndForthAnimation} cx="100" cy="250" r="10" fill="green" />
        </svg>
    </>)
}

export const FailExample = () => {
    const myCircle = useRef<SVGCircleElement>(null);
    const [played, setPlayed] = useState(false)
    const playBustedAnimation = () => {
        if (played) {
            reset();
            return;
        }
        let ypos = 0;
        for (let i = 0; i < 290; i++) {
            myCircle.current?.setAttribute("cy", String(ypos));
            ypos += 1;
        }

        setPlayed(true);
    }

    const reset = () => {
        myCircle.current?.setAttribute("cy", "10");
        setPlayed(false);
    }
    return (<>
        <div className={componentStyles.containerWithButton}>
            <svg width="200" height="300" viewBox="0 0 200 300">
                <circle ref={myCircle} cx="100" cy="10" r="10" fill="green" />
            </svg>
            <button onClick={() => { playBustedAnimation() }}>{played ? "reset" : "play"}</button>
        </div>
    </>)
}

export const AnimationFrameExample = () => {
    let animID: number = 0;
    const myCircle = useRef<SVGCircleElement>(null);
    const myButton = useRef<HTMLButtonElement>(null)
    let playing = false;
    let ypos = 10;

    const playAnimation = () => {
        playing = true;
        moveCircle();
        if (myButton.current) myButton.current.textContent = "RESET";
    }

    const moveCircle = () => {
        if (ypos > 290 || !playing) return;

        myCircle.current?.setAttribute("cy", String(ypos));
        ypos += 1;

        animID = window.requestAnimationFrame(moveCircle);
    }

    const reset = () => {
        ypos = 10;
        myCircle.current?.setAttribute("cy", String(ypos));
        if (myButton.current) myButton.current.textContent = "PLAY";
        playing = false;
        window.cancelAnimationFrame(animID);
    }
    return (<>
        <div className={componentStyles.containerWithButton}>
            <svg width="200" height="300" viewBox="0 0 200 300">
                <circle ref={myCircle} cx="100" cy="10" r="10" fill="green" />
            </svg>
            <button ref={myButton} onClick={() => { !playing ? playAnimation() : reset() }}>{"PLAY"}</button>
        </div>
    </>)
}

type SimpleBounceProps = {
    top?: boolean
}
export const SimpleBounceExample = ({ top = false }: SimpleBounceProps) => {
    let animID: number = 0;
    const myCircle = useRef<SVGCircleElement>(null);
    const myButton = useRef<HTMLButtonElement>(null)
    let playing = false;
    let ypos = 10;
    let speed = 1;

    const playAnimation = () => {
        playing = true;
        moveCircle();
        if (myButton.current) myButton.current.textContent = "RESET";
    }

    const moveCircle = () => {
        if (!playing) return;
        if (ypos < -10) return;

        if (ypos > 290) {
            ypos = 290;
            speed *= -1;
        }
        if (top) {
            if (ypos < 10) {
                ypos = 10;
                speed *= -1;
            }
        }

        myCircle.current?.setAttribute("cy", String(ypos));
        ypos += speed;

        animID = window.requestAnimationFrame(moveCircle);
    }

    const reset = () => {
        ypos = 10;
        myCircle.current?.setAttribute("cy", String(ypos));
        if (myButton.current) myButton.current.textContent = "PLAY";
        playing = false;
        window.cancelAnimationFrame(animID);
    }
    return (<>
        <div className={componentStyles.containerWithButton}>
            <svg width="200" height="300" viewBox="0 0 200 300">
                <circle ref={myCircle} cx="100" cy="10" r="10" fill="green" />
            </svg>
            <button ref={myButton} onClick={() => { !playing ? playAnimation() : reset() }}>{"PLAY"}</button>
        </div>
    </>)
}


type ComplexBounceProps = {
    randomized?: boolean
}
export const ComplexBounceExample = ({ randomized = false }: ComplexBounceProps) => {
    let animID: number = 0;
    const myCircle = useRef<SVGCircleElement>(null);
    const myButton = useRef<HTMLButtonElement>(null)
    let playing = false;
    const startPos = {
        x: 100,
        y: 150
    }
    let pos = {
        x: 100,
        y: 150
    }

    const speed = {
        x: randomized ? Math.random() * 10 - 5 : 1,
        y: randomized ? Math.random() * 10 - 5 : 1,
    }

    const playAnimation = () => {
        playing = true;
        moveCircle();
        if (myButton.current) myButton.current.textContent = "RESET";
    }

    const moveCircle = () => {
        if (!playing) return;
        pos.x += speed.x;
        pos.y += speed.y;

        if (pos.x > 190) {
            pos.x = 190;
            speed.x *= -1;
        }
        if (pos.x < 10) {
            pos.x = 10;
            speed.x *= -1;
        }

        if (pos.y > 290) {
            pos.y = 290;
            speed.y *= -1;
        }
        if (pos.y < 10) {
            pos.y = 10;
            speed.y *= -1;
        }


        myCircle.current?.setAttribute("cx", String(pos.x));
        myCircle.current?.setAttribute("cy", String(pos.y));

        animID = window.requestAnimationFrame(moveCircle);
    }

    const reset = () => {
        pos.x = startPos.x;
        pos.y = startPos.y;
        speed.x = randomized ? Math.random() * 10 - 5 : 1;
        speed.y = randomized ? Math.random() * 10 - 5 : 1;
        myCircle.current?.setAttribute("cx", String(pos.x));
        myCircle.current?.setAttribute("cy", String(pos.y));
        if (myButton.current) myButton.current.textContent = "PLAY";
        playing = false;
        window.cancelAnimationFrame(animID);
    }
    return (<>
        <div className={componentStyles.containerWithButton}>
            <svg width="200" height="300" viewBox="0 0 200 300">
                <circle ref={myCircle} cx="100" cy="150" r="10" fill="green" />
            </svg>
            <button ref={myButton} onClick={() => { !playing ? playAnimation() : reset() }}>{"PLAY"}</button>
        </div>
    </>)
}

export const ParticleExample = () => {
    const num = 30;
    const radius = 15;
    const right = 485;
    const left = 15;
    const top = 485;
    const bottom = 15;
    let playing = false;
    const buttonRef = useRef<HTMLButtonElement>(null);
    const particleRefs = useRef<SVGCircleElement[]>([]);

    const addToParticleRefs = (el: SVGCircleElement) => {
        if (el) particleRefs.current?.push(el)
    }

    const getParticles = () => {
        const arr = [];
        for (let i = 0; i < num; i++) {
            const xpos = 250;
            const ypos = 250;
            const xSpeed = Math.random() * 10 - 5;
            const ySpeed = Math.random() * 10 - 5;
            arr.push(<circle ref={addToParticleRefs} r={radius}
                cx={xpos} cy={ypos} data-xspeed={xSpeed} data-yspeed={ySpeed} fill="orange" stroke="black" strokeWidth={3} />)
        }

        return arr;
    }

    const togglePlay = () => {
        playing = !playing;
        if (buttonRef.current) {
            const str = playing ? "STOP" : "PLAY";
            buttonRef.current.textContent = str;
        }

        moveParticles()
    }

    const moveParticles = () => {
        if (!playing) return;

        particleRefs.current?.forEach((particle) => {
            let x = Number(particle.getAttribute("cx"));
            let y = Number(particle.getAttribute("cy"));
            let xspeed = Number(particle.getAttribute("data-xspeed"));
            let yspeed = Number(particle.getAttribute("data-yspeed"));

            if (x) {
                x += xspeed;
                if (x > right) {
                    x = right;
                    xspeed *= -1
                } else if (x < left) {
                    x = left;
                    xspeed *= -1
                }
            }

            if (y) {
                y += yspeed;
                if (y > top) {
                    y = top;
                    yspeed *= -1
                } else if (y < bottom) {
                    y = bottom;
                    yspeed *= -1
                }
            }

            particle.setAttribute("cx", String(x));
            particle.setAttribute("cy", String(y));
            particle.setAttribute("data-xspeed", String(xspeed));
            particle.setAttribute("data-yspeed", String(yspeed));
        })

        window.requestAnimationFrame(moveParticles)
    }

    useEffect(() => {
        moveParticles();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (<>
        <div className={componentStyles.containerWithButton}>
            <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
                {getParticles()}
            </svg>
            <button ref={buttonRef} onClick={togglePlay}>{"PLAY"}</button>
        </div>
    </>)
}