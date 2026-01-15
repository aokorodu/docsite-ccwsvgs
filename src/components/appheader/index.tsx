import styles from './AppHeader.module.scss';
import { Link } from "react-router-dom";
import { useTheme } from '../../context';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';

const AppHeader = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={styles.container}>
            <Link to="/">
                <div className={styles.title}>Creative Coding with SVGs</div>
            </Link>
            <div className={styles.rightSection}>
                <IconButton
                    onClick={toggleTheme}
                    className={styles.themeToggle}
                    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                    {theme === 'light' ? (
                        <DarkModeIcon className={styles.themeIcon} />
                    ) : (
                        <LightModeIcon className={styles.themeIcon} />
                    )}
                </IconButton>
                <div className={styles.zuubaDigital}>zuubaDigital</div>
            </div>
        </header>
    )
}

export default AppHeader;