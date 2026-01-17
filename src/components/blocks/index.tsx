import styles from './Block.module.scss';
import { CodeBlock, solarizedDark, shadesOfPurple } from "react-code-blocks";
import { useTheme } from '../../context';

type Props = {
    title?: string | null;
    caption?: string | null;
    children: string;
    highlight?: string;
}

const Blocks = ({ caption, title, highlight, children }: Props) => {
    const { theme } = useTheme();
    const lang = children.indexOf("<") == -1 ? "js" : "html";
    const codeTheme = theme === 'dark' ? solarizedDark : shadesOfPurple;

    return (
        <div className={styles.holder}>
            {title && <div className={styles.title}>{title}</div>}
            <CodeBlock
                text={children}
                language={lang}
                showLineNumbers={true}
                highlight={highlight}
                theme={codeTheme}
            />
            <div>{caption}</div>
        </div>
    )
}

export default Blocks