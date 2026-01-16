import styles from './AppHeader.module.scss';
import { Link } from "react-router-dom";
import { useTheme } from '../../context';

const AppHeader = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={styles.container}>
            <Link to="/">
                <div className={styles.title}>Creative Coding with SVGs</div>
            </Link>
            <div className={styles.rightSection}>
                <div
                    onClick={toggleTheme}
                    className={styles.themeToggle}
                    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                    {theme === 'light' ? (

                        <div className={styles.darkMode} />
                    ) : (

                        <div className={styles.lightMode} />
                    )}
                </div>
                <div className={styles.zuubaDigital}>zuubaDigital</div>
            </div>
        </header>
    )
}

export default AppHeader;