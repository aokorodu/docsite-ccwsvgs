import styles from './AppHeader.module.scss';

const AppHeader = () => {
    return (
        <><header className={styles.container}>
            <div className={styles.title}>Creative Coding with SVGs</div>
            <div className={styles.zuubaDigital}>zuubaDigital</div>
        </header></>
    )
}

export default AppHeader;