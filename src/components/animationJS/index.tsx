import styles from './AnimationJS.module.scss'
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