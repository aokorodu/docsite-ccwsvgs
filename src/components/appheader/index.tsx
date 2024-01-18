import styles from './AppHeader.module.scss';
import Link from "next/link";

const AppHeader = () => {
    return (
        <><header className={styles.container}>
            <Link href={"/"}>
                <div className={styles.title}>Creative Coding with SVGs</div>
            </Link>
            <div className={styles.zuubaDigital}>zuubaDigital</div>
        </header></>
    )
}

export default AppHeader;