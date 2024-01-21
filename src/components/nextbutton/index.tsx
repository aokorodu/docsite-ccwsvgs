'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";
import { navConfig } from '../../config';
import styles from './nextbutton.module.scss';

const Nextbutton = () => {
    const pathname = usePathname();
    const nav = navConfig;
    const links = nav.links;

    const getLink = (): string => {
        const nextIndex = getNextIndex();
        console.log('next index: ', links[nextIndex].link)
        return links[nextIndex].link;
    }

    const getPageNme = (): string => {
        const nextIndex = getNextIndex();
        console.log('next index: ', links[nextIndex].title)
        return links[nextIndex].title;
    }



    const getNextIndex = () => {
        const num = links.length;
        for (let i = 0; i < num; i++) {
            const path = links[i].link;
            if (path == pathname) return i + 1;
        }

        return -1;
    }
    return (<>
        <div className={styles.holder}><Link href={`${getLink()}`}>Next: {getPageNme()} &gt;</Link></div>

    </>)
}

export default Nextbutton