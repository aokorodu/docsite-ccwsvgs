import styles from './TransformChap.module.scss';

export const Example1 = () => {
    return (<>
        <svg
            width="500"
            height="500"
            viewBox="0 0 500 500"
        >
            <style></style>
            <rect x="100" y="100"
                width="100" height="100"
                fill="grey" stroke="black"
            />
            <rect className={styles.translateFirst} x="100" y="100"
                width="100" height="100"
                fill="grey" stroke="black"
            />

            <rect className={styles.rotateFirst} x="100" y="100"
                width="100" height="100"
                fill="grey" stroke="black"
            />
        </svg>
    </>)
}