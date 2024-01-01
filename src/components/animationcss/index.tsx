import styles from './CSSAnim.module.css';

export const HoverExample = () => {
    return (<>
        <svg width="300" height="300" viewBox="0 0 300 300">
            <circle className={styles.circle}
                id="my-circle"
                cx="150" cy="150"
                r="100"></circle>
        </svg>
    </>)
}

type strokedashprops = {
    hover: boolean
}
export const StrokeDash = ({ hover = false }: strokedashprops) => {
    return (<>
        <svg width="300" height="300" viewBox="0 0 300 300">
            <circle className={!hover ? styles.strokeDash : styles.strokeDashHover}
                id="my-circle"
                cx="150" cy="150"
                r="100" pathLength={100}></circle>
        </svg>
    </>)
}

export const GeoProperties = () => {
    return (<>
        <svg width="300" height="300" viewBox="0 0 300 300">
            <circle className={styles.geoPropAnimation}
                id="my-circle"
                fill="orange"></circle>
        </svg>
    </>)
}

export const KeyframeExample = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <circle r={50} className={styles.zoomCircle}></circle>
        </svg>
    </>)
}