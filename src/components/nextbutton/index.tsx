'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";
import { navConfig } from '../../config';
import styles from './nextbutton.module.scss';

const Nextbutton = () => {
    const pathname = usePathname();
    const nav = navConfig;
    const links = nav.links;

    const getLink = (val: number): string => {
        const nextIndex = getIndex(val);
        return links[nextIndex].link;
    }

    const getPageNme = (val: number): string => {
        const nextIndex = getIndex(val);
        return links[nextIndex].title;
    }


    const getIndex = (val: number) => {
        const num = links.length;
        for (let i = 0; i < num; i++) {
            const path = links[i].link;
            if (path == pathname) {

                return (i + val)
            }
        }

        return -1;
    }

    return (<>
        <div className={styles.holder}>
            {getIndex(0) >= 0 && <Link href={`${getLink(-1)}`}>&lt; Prev: {getPageNme(-1)}</Link>}
            {getIndex(0) < links.length - 1 && <Link href={`${getLink(1)}`}>Next: {getPageNme(1)} &gt;</Link>}
        </div>

    </>)
}

export default Nextbutton