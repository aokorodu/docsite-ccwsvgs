import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./navbutton.module.scss";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type navprops = {
    index: number,
    title: string,
    link: string,
    subnav: subnavprops[],
    onSelect?: () => void
}

type subnavprops = {
    title: string,
    link: string,
}

const NavButton = ({ index, title, link, subnav, onSelect }: navprops) => {
    const { pathname } = useLocation();
    const [open, setOpen] = useState(false);

    const hasSubnav = () => {
        if (subnav.length > 0) return true;
        return false;
    }

    let indexStr = String(index + 1);
    if (indexStr.length < 2) indexStr = `0${indexStr}`
    if (hasSubnav()) console.log("subnav", subnav);
    return (
        <>
            <div className={styles.holder}>
                <div className={styles.buttonContents}
                    onClick={() => {
                        if (hasSubnav()) {
                            setOpen(!open);
                        }
                    }}
                >
                    <div>
                        <span onClick={onSelect} className={styles.buttonNumber}>{indexStr}</span>
                        {hasSubnav() ? (
                            <span className={`${styles.link} ${open ? styles.activeLink : ""}`}>{title} </span>
                        ) : (
                            <Link to={link} onClick={onSelect} className={`${styles.link} ${pathname == link ? styles.activeLink : ""}`}>{title} </Link>
                        )}
                    </div>
                    <div className={styles.iconHolder}>
                        {hasSubnav() && <span>{open ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}</span>}
                    </div>
                </div>
                {open && (
                    <div className={styles.subholder}>
                        {subnav.map((item) => {
                            console.log('pathname: ', pathname, " link: ", item.link)
                            return (<>
                                <Link key={item.title} to={item.link} onClick={onSelect} className={`${styles.link} ${pathname == item.link ? styles.activeLink : ""}`}>{item.title} </Link></>);
                        })}
                    </div>
                )}
            </div>
        </>
    );
};

export default NavButton;
