export const IntroExample = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <defs>
                <g id="complex">
                    <path
                        d="M47.385 29.2166C47.385 40.4548 37.492 44.0769 24.9805 44.0769C12.469 44.0769 2.57608 41.0789 2.57608 29.8407C2.57608 18.6025 12.469 3.37973 24.9805 3.37973C37.492 3.37973 47.385 17.9784 47.385 29.2166Z"
                        fill="#F6E1C7" />
                    <path
                        d="M4.07203 1.41588C2.83523 2.97816 -0.929 18.9109 5.89469 18.7962C11.2844 18.7055 14.2299 7.7937 14.2299 7.7937C11.429 4.70267 5.30883 -0.1464 4.07203 1.41588Z"
                        fill="#F6E1C7" />
                    <path
                        d="M4.72217 3.10029C3.97422 4.06778 0.932965 16.0735 4.98336 15.2811C7.97772 14.6952 11.5579 7.4046 11.5579 7.4046C9.86411 5.49038 5.47012 2.1328 4.72217 3.10029Z"
                        fill="#C9B397" />
                    <path
                        d="M45.9283 1.41588C47.1651 2.97816 50.9293 18.9109 44.1056 18.7962C38.7159 18.7055 35.7704 7.7937 35.7704 7.7937C38.5713 4.70267 44.6915 -0.1464 45.9283 1.41588Z"
                        fill="#F6E1C7" />
                    <path
                        d="M45.2782 3.10029C46.0261 4.06778 49.0674 16.0735 45.017 15.2811C42.0226 14.6952 38.4424 7.4046 38.4424 7.4046C40.1362 5.49038 44.5302 2.1328 45.2782 3.10029Z"
                        fill="#C9B397" />
                    <circle cx="13.4488" cy="18.5369" r="4.67295" fill="black" />
                    <circle cx="13.4488" cy="18.5369" r="4.67295" fill="black" />
                    <circle cx="15.0509" cy="16.9348" r="1.60216" fill="white" />
                    <circle cx="36.5513" cy="18.5369" r="4.67295" fill="black" />
                    <circle cx="36.5513" cy="18.5369" r="4.67295" fill="black" />
                    <circle cx="38.1534" cy="16.9348" r="1.60216" fill="white" />
                    <path
                        d="M33.6079 28.7712C33.9881 31.0612 33.1136 32.7406 31.5567 33.8772C29.971 35.0349 27.6579 35.636 25.2174 35.636C22.7123 35.636 20.2604 35.3919 18.5653 34.4138C17.7333 33.9337 17.0934 33.282 16.7103 32.3934C16.3249 31.4994 16.181 30.3225 16.4205 28.7653C16.9119 25.5701 17.9071 22.898 19.3568 21.0365C20.795 19.1897 22.6788 18.1377 25.0137 18.1377C27.3005 18.1377 29.2333 19.5178 30.7236 21.5873C32.2121 23.6543 33.2046 26.3417 33.6079 28.7712Z"
                        fill="#E7C29B" stroke="black" />
                    <path
                        d="M29.1602 23.6892C29.1602 25.0411 27.642 25.2293 24.89 25.8596C22.3731 25.1517 20.8398 24.841 20.8398 23.489C20.8398 22.1371 22.7933 20.4588 25.02 20.4588C27.2467 20.4588 29.1602 22.3373 29.1602 23.6892Z"
                        fill="black" />
                    <line x1="24.8935" y1="25.3469" x2="24.9535" y2="29.3244" stroke="black" />
                    <path d="M19.5878 29.0026C20.3644 31.9504 24.0518 32.2175 25 29.1456" stroke="black" fill="none" />
                    <path d="M25 29.0026C25.7766 31.9504 29.464 32.2175 30.4122 29.1456" stroke="black" fill="none" />
                </g>

                <pattern id="tile_1" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                    <use href="#complex" x="0" y="0"></use>
                </pattern>


            </defs>
            <rect x="0" y="0" width="500" height="500" fill="url(#tile_1)">
            </rect>
        </svg>
    </>)
}

export const TargetDesign = () => {
    return (
        <>
            <svg width="100" height="100" viewBox="0 0 50 50">
                <g id="target" stroke="black" fill="none">
                    <rect x="0" y="0" width="50" height="50" />
                    <circle cx="25" cy="25" r="25" />
                    <circle cx="25" cy="25" r="20" />
                    <circle cx="25" cy="25" r="15" />
                    <circle cx="25" cy="25" r="10"
                        fill="black"
                        fill-opacity=".2"
                        stroke="black"
                    />
                </g>
            </svg>
        </>
    )
}

export const PatternFill = () => {
    return (<>
        <svg width="500" height="300" viewBox="0 0 500 300">
            <defs>
                <g id="target_2" stroke="black" fill="none">
                    <rect x="0" y="0" width="50" height="50" />
                    <circle cx="25" cy="25" r="25" />
                    <circle cx="25" cy="25" r="20" />
                    <circle cx="25" cy="25" r="15" />
                    <circle cx="25" cy="25" r="10"
                        fill="black"
                        fill-opacity=".2"
                        stroke="black"
                    />
                </g>

                <pattern id="tile_2" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                    <use href="#target_2" x="0" y="0"></use>
                </pattern>


            </defs>
            <rect x="0" y="0" width="500" height="300" fill="url(#tile_2)">
            </rect>
        </svg>
    </>)
}

export const PUUserSpace = () => {
    return (<>
        <svg width="600" height="300" viewBox="0 0 600 300">
            <defs>

                <circle id="circle_design" cx="25" cy="25" r="25" fill="#eaeaea" />
                <pattern id="circle_tile" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                    <use href="#circle_design" x="0" y="0"></use>
                </pattern>


            </defs>
            <rect x="0" y="0" width="600" height="300" fill="url(#circle_tile)">
            </rect>

            <rect x="50" y="50" width="50" height="50" fill="none" stroke="red" strokeWidth={2}>
            </rect>

            <text x="120" y="75" fill="black" fontSize={20}>tile size: 50x50</text>
        </svg>
    </>)
}

export const PUUserSpace_100 = () => {
    return (<>
        <svg width="600" height="300" viewBox="0 0 600 300">
            <defs>

                <circle id="circle_design" cx="25" cy="25" r="25" stroke="grey" fill="#eaeaea" />
                <pattern id="circle_tile_100" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <use href="#circle_design" x="0" y="0"></use>
                </pattern>


            </defs>
            <rect x="0" y="0" width="600" height="300" fill="url(#circle_tile_100)">
            </rect>
        </svg>
    </>)
}

export const PUUserSpace_20 = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <defs>

                <circle id="circle_design" cx="25" cy="25" r="25" fill="#eaeaea" />
                <pattern id="circle_tile_100" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <use href="#circle_design" x="0" y="0"></use>
                </pattern>


            </defs>
            <rect x="0" y="0" width="500" height="500" fill="url(#circle_tile_100)">
            </rect>
        </svg>
    </>)
}

export const PCU_obb = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <defs>

                <pattern id="circle_tile_obb" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"
                    patternContentUnits="objectBoundingBox">
                    <circle cx=".05" cy=".05" r=".05" fill="#D9D9D9" />
                </pattern>


            </defs>
            <rect x="0" y="0" width="200" height="200" fill="url(#circle_tile_obb)">
            </rect>
        </svg>
    </>)
}