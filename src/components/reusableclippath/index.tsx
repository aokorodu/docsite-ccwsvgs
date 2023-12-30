export const WithClip = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <defs>
                <clipPath id="circ_CP">
                    <circle cx="250" cy="250" r="150" />
                </clipPath>
                <pattern id="tile" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                    <circle cx="25" cy="25" r="25" fill="#eaeaea" stroke="black" strokeWidth={3} />
                </pattern>
            </defs>
            <rect clip-path="url(#circ_CP)"
                x="0" y="0" width="500" height="500" fill="url(#tile)">
            </rect>
        </svg>
    </>)
}

export const NoClip = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <defs>
                <pattern id="tile" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                    <circle cx="25" cy="25" r="25" fill="#eaeaea" stroke="black" strokeWidth={3} />
                </pattern>
            </defs>
            <rect x="0" y="0" width="500" height="500" fill="url(#tile)">
            </rect>
        </svg>
    </>)
}




export const StarClip = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <defs>
                <clipPath id="star_clip">
                    <path d="M147.5 87L159.062 123.622H196.479L166.208 146.256L177.771 182.878L147.5 160.244L117.229 182.878L128.792 146.256L98.5206 123.622H135.938L147.5 87Z" fill="#D9D9D9" />
                    <path d="M272.5 123L294.839 192.444L367.13 192.444L308.645 235.362L330.985 304.806L272.5 261.888L214.015 304.806L236.355 235.362L177.87 192.444L250.161 192.444L272.5 123Z" fill="#D9D9D9" />
                    <path d="M157.5 259L180.288 327.407H254.032L194.372 369.685L217.16 438.093L157.5 395.815L97.8398 438.093L120.628 369.685L60.9678 327.407H134.712L157.5 259Z" fill="#D9D9D9" />
                    <path d="M396 62L406.328 93.0942H439.749L412.71 112.312L423.038 143.406L396 124.188L368.962 143.406L379.29 112.312L352.251 93.0942H385.672L396 62Z" fill="#D9D9D9" />
                </clipPath>
                <pattern id="tile_2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="10" fill="#eaeaea" stroke="black" strokeWidth={1} />
                </pattern>
            </defs>
            <rect clip-path="url(#star_clip)"
                x="0" y="0" width="500" height="500" fill="url(#tile_2)">
            </rect>
        </svg>
    </>)
}