import styles from './AppHeader.module.scss';
import { Link } from "react-router-dom";

const AppHeader = () => {
    return (
        <><header className={styles.container}>
            <Link to="/">
                <div className={styles.title}>Creative Coding with SVGs</div>
            </Link>
            <div className={styles.zuubaDigital}>zuubaDigital</div>
        </header></>
    )
}

export default AppHeader;