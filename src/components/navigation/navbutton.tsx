'use client'

import { useState } from "react";
import Link from "next/link";
import styles from "./navbutton.module.scss";

type navprops = {
    title: string,
    link: string,
    subnav: subnavprops[]
}

type subnavprops = {
    title: string,
    link: string,
}

const NavButton = ({ title, link, subnav }: navprops) => {
    const [open, setOpen] = useState(false);
    if (subnav.length > 0) console.log("subnav", subnav);
    return (
        <>
            <div className={styles.holder}>
                <div
                    onClick={() => {
                        setOpen(!open);
                    }}
                >
                    <Link href={link}>{title} </Link>
                </div>
                {open && (
                    <div className={styles.subholder}>
                        {subnav.map((item) => {
                            return <div>{item.title}</div>;
                        })}
                    </div>
                )}
            </div>
        </>
    );
};

export default NavButton;