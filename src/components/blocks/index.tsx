'use client'
import styles from './Block.module.scss';

import { CopyBlock, dracula } from "react-code-blocks";

type Props = {
    title: string | null;
    caption: string | null;
    children: string;
}

const Blocks = ({ caption, title, children }: Props) => {
    const lang = children.indexOf("<") == -1 ? "css" : "html";
    return (
        <>
            <div className={styles.holder}>
                {title && <div className={styles.title}>{title}</div>}
                <CopyBlock
                    text={children}
                    language={lang}
                    showLineNumbers={false}
                    theme={dracula}
                    codeBlock
                />
                <div>{caption}</div>
            </div>
        </>
    )
}

export default Blocks