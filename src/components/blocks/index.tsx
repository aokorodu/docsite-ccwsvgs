'use client'

import { CopyBlock, dracula } from "react-code-blocks";

type Props = {
    children: string;
}

const Blocks = ({ children }: Props) => {
    const lang = children.indexOf("<") == -1 ? "css" : "html";
    return (
        <CopyBlock
            text={children}
            language={lang}
            showLineNumbers={true}
            theme={dracula}
            codeBlock
        />
    )
}

export default Blocks