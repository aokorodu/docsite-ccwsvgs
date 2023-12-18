import { navConfig } from '../../config';
import NavButton from "./navbutton";
import styles from "./navigation.module.scss";

const Navigation = () => {
    const nav = navConfig;
    const pages = nav.pages;

    const getPages = () => {
        return pages.map((pageData) => {
            return <NavButton {...pageData} />;
        });
    };
    return (
        <>
            <div className={styles.container}>{getPages()}</div>
        </>
    );
};

export default Navigation;