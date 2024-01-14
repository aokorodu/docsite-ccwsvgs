export const DefsExample = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">

            <defs>
                <circle id="dot" cx="0" cy="0" r="100" fill="purple" />
            </defs>

            <use href="#dot" x="250" y="250"></use>

        </svg>
    </>)
}

export const DefsSmileExample = () => {
    return (<><svg width="362" height="362" viewBox="0 0 362 362" fill="none">
        <circle cx="181" cy="181" r="181" fill="#F3C729" />
        <circle cx="118.5" cy="140.5" r="12.5" fill="black" />
        <circle cx="243.5" cy="140.5" r="12.5" fill="black" />
        <path
            d="M80 224C121 271 241 276 291 224"
            stroke="black"
            strokeWidth="13"
            stroke-linecap="round"
        />
        <line
            x1="110.107"
            y1="111.014"
            x2="87.0145"
            y2="128.893"
            stroke="black"
            strokeWidth="10"
            stroke-linecap="round"
        />
        <line
            x1="5"
            y1="-5"
            x2="34.2046"
            y2="-5"
            transform="matrix(0.790724 0.612173 0.612173 -0.790724 244 99)"
            stroke="black"
            strokeWidth="10"
            stroke-linecap="round"
        />
    </svg></>)
}