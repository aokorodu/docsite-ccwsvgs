'use client'

import { useState } from "react";
import Link from "next/link";
import styles from "./navbutton.module.scss";
import { usePathname } from "next/navigation";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type navprops = {
    index: number,
    title: string,
    link: string,
    subnav: subnavprops[]
}

type subnavprops = {
    title: string,
    link: string,
}

const NavButton = ({ index, title, link, subnav }: navprops) => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    let indexStr = String(index + 1);
    if (indexStr.length < 2) indexStr = `0${indexStr}`
    if (subnav.length > 0) console.log("subnav", subnav);
    return (
        <>
            <div className={styles.holder}>
                <div className={styles.buttonContents}
                    onClick={() => {
                        setOpen(!open);
                    }}
                >
                    <div>
                        <span className={styles.buttonNumber}>{indexStr}</span>
                        <Link href={link} className={`${styles.link} ${pathname == link ? styles.activeLink : ""}`}>{title} </Link>
                    </div>
                    <div className={styles.iconHolder}>
                        {subnav.length > 0 && <span>{open ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}</span>}
                    </div>
                </div>
                {open && (
                    <div className={styles.subholder}>
                        {subnav.map((item) => {

                            return (<>
                                <Link key={item.title} href={item.link} className={`${styles.link} ${pathname == item.link ? styles.activeLink : ""}`}>{item.title} </Link></>);
                        })}
                    </div>
                )}
            </div>
        </>
    );
};

export default NavButton;