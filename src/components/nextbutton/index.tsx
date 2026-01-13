import { Link, useLocation } from "react-router-dom";
import { navConfig } from '../../config';
import styles from './nextbutton.module.scss';

const Nextbutton = () => {
    const { pathname } = useLocation();
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
            {getIndex(0) > 0 && <Link to={`${getLink(-1)}`}>&lt; Prev: {getPageNme(-1)}</Link>}
            {getIndex(0) < links.length - 1 && <Link to={`${getLink(1)}`}>Next: {getPageNme(1)} &gt;</Link>}
        </div>

    </>)
}

export default Nextbutton
