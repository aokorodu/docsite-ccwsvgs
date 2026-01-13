import styles from './Sprite.module.scss';

export const WalkExample = () => {
    return (<>
        <svg width={200} height={500} viewBox="0 0 200 500">
            <defs>
                <clipPath id="walk_cp">
                    <rect x="0" y="0" width="200" height="500" />
                </clipPath>
            </defs>
            <g clipPath="url(#walk_cp)">
                <g className={styles.holder}>
                    <image href="/sprites_walk_sequence.png" height="500" width="1600" />
                </g></g>
        </svg>
        <div>
            <span>Illustration by </span>
            <a href="https://www.vecteezy.com/free-vector/walking-sequence" target="_blank" rel="noopener noreferrer">Yuliya Pauliukevich</a>
        </div>
    </>)
}

export const BounceExample = () => {
    return (<>
        <svg width={350} height={350} viewBox="0 0 350 350">
            <defs>
                <clipPath id="frame_cp">
                    <rect x="0" y="0" width="50" height="350" />
                </clipPath>
            </defs>
            <g transform="translate(150 0)" clipPath='url(#frame_cp)'>
                <g className={styles.bounceHolder} >
                    <image href="/sprites_bouncing_ball.svg" height="350" width="350" />
                </g></g>
        </svg>
    </>)
}

export const BounceWorkingExample = () => {
    return (<>
        <div>
            <svg width={350} height={350} viewBox="0 0 350 350">
                <defs>
                    <clipPath id="frame_cp">
                        <rect x="0" y="0" width="50" height="350" />
                    </clipPath>
                </defs>
                {/* <g transform="translate(75 50)" clipPath='url(#frame_cp)'>
                <g className={styles.bounceHolder} > */}
                <image href="/sprites_bouncing_ball.svg" height="350" width="350" />
                {/* </g></g> */}
            </svg>
        </div>
    </>)
}

export const BounceWorkingExample2 = () => {
    return (<>
        <div>
            <svg width={350} height={350} viewBox="0 0 350 350">
                <g className={styles.bounceHolderNoStep} >
                    <image href="/sprites_bouncing_ball.svg" height="350" width="350" />
                </g>
            </svg>
        </div>
    </>)
}

export const BounceWorkingExample3 = () => {
    return (<>
        <div>
            <svg width={350} height={350} viewBox="0 0 350 350">
                <defs>
                    <clipPath id="frame_cp">
                        <rect x="0" y="0" width="50" height="350" />
                    </clipPath>
                </defs>
                <g clipPath='url(#frame_cp)'>
                    <g className={styles.bounceHolderNoStep} >
                        <image href="/sprites_bouncing_ball.svg" height="350" width="350" />
                    </g>
                </g>
            </svg>
        </div>
    </>)
}

export const BounceExample4 = () => {
    return (<>
        <svg width={350} height={350} viewBox="0 0 350 350">
            <defs>
                <clipPath id="frame_cp">
                    <rect x="0" y="0" width="50" height="350" />
                </clipPath>
            </defs>
            <g clipPath='url(#frame_cp)'>
                <g className={styles.bounceHolder} >
                    <image href="/sprites_bouncing_ball.svg" height="350" width="350" />
                </g></g>
        </svg>
    </>)
}