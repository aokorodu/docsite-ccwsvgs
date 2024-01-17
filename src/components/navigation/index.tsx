'use client'

import { useState } from 'react';
import { navConfig } from '../../config';
import NavButton from "./navbutton";
import styles from "./navigation.module.scss";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navigation = () => {
    const nav = navConfig;
    const pages = nav.pages;
    const [open, toggleOpen] = useState(false);

    const getPages = () => {
        console.log('get pages')
        return pages.map((pageData) => {
            return <NavButton key={pageData.title} {...pageData} />;
        });
    };
    return (
        <>
            <div className={styles.desktopContainer}>{getPages()}</div>
            <div className={styles.mobileNavHolder}>
                <div className={styles.hamburgerHolder} onClick={() => { console.log('click'); toggleOpen(!open) }}>
                    {!open && <MenuIcon fontSize='large' />}
                    {open && <CloseIcon fontSize='large' />}
                </div>
                {open && <div className={styles.container}>
                    <div className={styles.bg} />
                    <div className={styles.mobileButtonContainer}>
                        {getPages()}
                    </div>
                </div>}


            </div>
        </>
    );
};

export default Navigation;