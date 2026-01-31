import { useMemo } from 'react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import styles from './Block.module.scss';
import { useTheme } from '../../context';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);

type Props = {
    title?: string | null;
    caption?: string | null;
    children: string;
    highlight?: string;
    lang?: 'javascript' | 'xml' | 'css';
}

// Parse highlight prop to get set of line numbers to highlight
function parseHighlight(highlight: string | undefined): Set<number> {
    const highlightedLines = new Set<number>();
    if (!highlight) return highlightedLines;

    const parts = highlight.split(',');
    for (const part of parts) {
        const trimmed = part.trim();
        if (trimmed.includes('-')) {
            const [start, end] = trimmed.split('-').map(Number);
            for (let i = start; i <= end; i++) {
                highlightedLines.add(i);
            }
        } else {
            highlightedLines.add(Number(trimmed));
        }
    }
    return highlightedLines;
}

// Dedent code: remove common leading whitespace from all lines
function dedent(code: string): string {
    const lines = code.split('\n');

    // Remove leading empty line if present (common with template literals)
    if (lines[0].trim() === '') {
        lines.shift();
    }

    // Remove trailing empty line if present
    if (lines.length > 0 && lines[lines.length - 1].trim() === '') {
        lines.pop();
    }

    // Find minimum indentation (ignoring empty lines)
    let minIndent = Infinity;
    for (const line of lines) {
        if (line.trim() === '') continue;
        const match = line.match(/^(\s*)/);
        if (match) {
            minIndent = Math.min(minIndent, match[1].length);
        }
    }

    if (minIndent === Infinity) minIndent = 0;

    // Remove the common indentation from all lines
    return lines.map(line => line.slice(minIndent)).join('\n');
}

const Blocks = ({ caption, title, highlight, lang: langProp, children }: Props) => {
    const { theme } = useTheme();

    // Dedent and detect language
    const code = useMemo(() => dedent(children), [children]);
    const lang = langProp ?? (code.indexOf("<") === -1 ? "javascript" : "xml");

    const highlightedLines = useMemo(() => parseHighlight(highlight), [highlight]);

    const lines = useMemo(() => {
        const codeLines = code.split('\n');
        return codeLines.map(line => {
            try {
                return hljs.highlight(line, { language: lang }).value;
            } catch {
                return line;
            }
        });
    }, [code, lang]);

    const themeClass = theme === 'dark' ? styles.dark : styles.light;

    return (
        <div className={styles.holder}>
            {title && <div className={styles.title}>{title}</div>}
            <div className={`${styles.codeContainer} ${themeClass}`}>
                <pre className={styles.pre}>
                    <code className={styles.code}>
                        {lines.map((lineHtml, index) => {
                            const lineNumber = index + 1;
                            const isHighlighted = highlightedLines.has(lineNumber);
                            return (
                                <span
                                    key={index}
                                    className={`${styles.line} ${isHighlighted ? styles.highlighted : ''}`}
                                >
                                    <span className={styles.lineNumber}>{lineNumber}</span>
                                    <span
                                        className={styles.lineContent}
                                        dangerouslySetInnerHTML={{ __html: lineHtml || ' ' }}
                                    />
                                </span>
                            );
                        })}
                    </code>
                </pre>
            </div>
            {caption && <div className={styles.caption}>{caption}</div>}
        </div>
    );
}

export default Blocks;
