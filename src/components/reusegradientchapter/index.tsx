export const ExampleIntro = () => {
    return (
        <>
            <svg width="500" height="250" viewBox="0 0 500 250">
                <defs>
                    <linearGradient id="lin-grad_0">
                        <stop offset="0%" stopColor="red" />
                        <stop offset="100%" stopColor="blue" />
                    </linearGradient>
                    <radialGradient id="myGradient">
                        <stop offset="0%" stop-color="blue" />
                        <stop offset="100%" stop-color="red" />
                    </radialGradient>
                </defs>
                <rect x="0" y="0" width="250" height="250" fill="url(#lin-grad_0)" />
                <rect x="250" y="0" width="250" height="250" fill="url(#myGradient)" />
            </svg>
        </>
    )
}

export const LinearGradient = () => {
    return (
        <>
            <svg width="500" height="100" viewBox="0 0 500 100">
                <defs>
                    <linearGradient id="lin-grad_0">
                        <stop offset="0%" stopColor="red" />
                        <stop offset="100%" stopColor="blue" />
                    </linearGradient>
                </defs>
                <rect x="0" y="0" width="500" height="100" fill="url(#lin-grad_0)" />
            </svg>
        </>
    )
}


export const LGChartOffset100 = () => {
    return (
        <>
            <svg width="500" height="250" viewBox="0 0 500 250">
                <rect width="500" height="250" fill="white" />
                <rect x="93" y="108" width="300" height="100" fill="url(#paint0_linear_624_359)" />
                <text fill="black" ><tspan x="32" y="48.2273">offset=&#x201c;0%&#x201d;</tspan></text>
                <text fill="black" ><tspan x="32" y="70.2273">stop-color=&#x201d;red&#x201d;</tspan></text>
                <text fill="black" ><tspan x="284" y="74.2273">stop-color=&#x201d;blue&#x201d;</tspan></text>
                <text fill="black" ><tspan x="284" y="54.2273">offset=&#x201d;100%&#x201d;</tspan></text>
                <path d="M92.2929 102.707C92.6834 103.098 93.3166 103.098 93.7071 102.707L100.071 96.3431C100.462 95.9526 100.462 95.3195 100.071 94.9289C99.6805 94.5384 99.0474 94.5384 98.6569 94.9289L93 100.586L87.3431 94.9289C86.9526 94.5384 86.3195 94.5384 85.9289 94.9289C85.5384 95.3195 85.5384 95.9526 85.9289 96.3431L92.2929 102.707ZM92 80L92 102L94 102L94 80L92 80Z" fill="black" />
                <path d="M392.293 102.707C392.683 103.098 393.317 103.098 393.707 102.707L400.071 96.3431C400.462 95.9526 400.462 95.3195 400.071 94.9289C399.681 94.5384 399.047 94.5384 398.657 94.9289L393 100.586L387.343 94.9289C386.953 94.5384 386.319 94.5384 385.929 94.9289C385.538 95.3195 385.538 95.9526 385.929 96.3431L392.293 102.707ZM392 80L392 102L394 102L394 80L392 80Z" fill="black" />
                <defs>
                    <linearGradient id="paint0_linear_624_359" x1="93" y1="158" x2="393" y2="158" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF0000" />
                        <stop offset="1" stop-color="#0000FF" />
                    </linearGradient>
                </defs>
            </svg>

        </>
    )
}

export const LGChartOffset50 = () => {
    return (
        <>
            <svg width="500" height="250" viewBox="0 0 500 250" fill="none">
                <rect width="500" height="250" fill="white" />
                <path d="M99.2929 108.707C99.6834 109.098 100.317 109.098 100.707 108.707L107.071 102.343C107.462 101.953 107.462 101.319 107.071 100.929C106.681 100.538 106.047 100.538 105.657 100.929L100 106.586L94.3431 100.929C93.9526 100.538 93.3195 100.538 92.9289 100.929C92.5384 101.319 92.5384 101.953 92.9289 102.343L99.2929 108.707ZM99 86L99 108L101 108L101 86L99 86Z" fill="black" />
                <text fill="black" ><tspan x="247" y="72.2273">stop-color=&#x201d;blue&#x201d;</tspan></text>
                <text fill="black" ><tspan x="247" y="52.2273">offset=&#x201d;50%&#x201d;</tspan></text>
                <path d="M249.293 108.707C249.683 109.098 250.317 109.098 250.707 108.707L257.071 102.343C257.462 101.953 257.462 101.319 257.071 100.929C256.681 100.538 256.047 100.538 255.657 100.929L250 106.586L244.343 100.929C243.953 100.538 243.319 100.538 242.929 100.929C242.538 101.319 242.538 101.953 242.929 102.343L249.293 108.707ZM249 86L249 108L251 108L251 86L249 86Z" fill="black" />
                <rect x="100" y="114" width="300" height="100" fill="url(#paint0_linear_726_1703)" />
                <text fill="black" ><tspan x="38" y="52.2273">offset=&#x201c;0%&#x201d;</tspan></text>
                <text fill="black" ><tspan x="38" y="74.2273">stop-color=&#x201d;red&#x201d;</tspan></text>
                <defs>
                    <linearGradient id="paint0_linear_726_1703" x1="100" y1="164" x2="400" y2="164" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF0000" />
                        <stop offset="0.5" stop-color="#0000FF" />
                    </linearGradient>
                </defs>
            </svg>


        </>
    )
}

export const LG_offset_50 = () => {
    return (
        <>
            <svg width="500" height="100" viewBox="0 0 500 100">
                <defs>
                    <linearGradient id="lin-grad_50">
                        <stop offset="0%" stopColor="red" />
                        <stop offset="50%" stopColor="blue" />
                    </linearGradient>
                </defs>
                <rect x="0" y="0" width="500" height="100" fill="url(#lin-grad_50)" />
            </svg>
        </>
    )
}

export const LG_offset_3Stops = () => {
    return (
        <>
            <svg width="500" height="100" viewBox="0 0 500 100">
                <defs>
                    <linearGradient id="three_stops">
                        <stop offset="00%" stopColor="red" />
                        <stop offset="50%" stopColor="gold" />
                        <stop offset="100%" stopColor="green" />
                    </linearGradient>
                </defs>
                <rect x="0" y="0" width="500" height="100" fill="url(#three_stops)" />
            </svg>
        </>
    )
}


export const LnearGradientExample = () => {
    return (
        <>
            <iframe
                height="600px"
                style={{ width: "100%" }}
                title="Reusable Objects - LINEAR GRADIENTS"
                src="https://codepen.io/aokorodu/embed/preview/PwoWdqr?default-tab=html%2Cresult&theme-id=dark"
                frameBorder="no"
                loading="lazy"
            >
                See the Pen{" "}
                <a href="https://codepen.io/aokorodu/pen/PwoWdqr">
                    Reusable Objects - LINEAR GRADIENTS
                </a>{" "}
                by zuubaDigital (<a href="https://codepen.io/aokorodu">@aokorodu</a>) on{" "}
                <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </>
    );
};

export const RadialGradientExample = () => {
    return (
        <>
            <iframe
                height="600px"
                style={{ width: "100%" }}
                title="Reusable Objects - RADIAL GRADIENTS"
                src="https://codepen.io/aokorodu/embed/preview/dPyNqNQ?default-tab=html%2Cresult&theme-id=dark"
                frameBorder="no"
                loading="lazy"
            >
                See the Pen{" "}
                <a href="https://codepen.io/aokorodu/pen/dPyNqNQ">
                    Reusable Objects - RADIAL GRADIENTS
                </a>{" "}
                by zuubaDigital (<a href="https://codepen.io/aokorodu">@aokorodu</a>) on{" "}
                <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </>
    );
};


export const RadialGradientIntro = () => {
    return (
        <>
            <svg width="500" height="500" viewBox="0 0 500 500">
                <defs>
                    <radialGradient id="rad-grad_0">
                        <stop offset="0%" stopColor="red" />
                        <stop offset="100%" stopColor="blue" />
                    </radialGradient>
                </defs>
                <rect x="0" y="0" width="500" height="500" fill="url(#rad-grad_0)" />
            </svg>
        </>
    )
}

export const RadialGradientOrientation = () => {
    return (
        <>
            <svg width="500" height="500" viewBox="0 0 500 500">
                <defs>
                    <radialGradient id="rad-grad_1"
                        cx="50%" cy="50%" fx="0%" fy="50%">
                        <stop offset="0%" stopColor="red" />
                        <stop offset="100%" stopColor="blue" />
                    </radialGradient>
                </defs>
                <rect x="0" y="0" width="500" height="500" fill="url(#rad-grad_1)" />
            </svg>
        </>
    )
}

export const RadialGradientOrientation_2 = () => {
    return (
        <>
            <svg width="500" height="500" viewBox="0 0 500 500">
                <defs>
                    <radialGradient id="rad-grad_2"
                        cx="99%" cy="50%" fx="50%" fy="50%">
                        <stop offset="0%" stopColor="red" />
                        <stop offset="100%" stopColor="blue" />
                    </radialGradient>
                </defs>
                <rect x="0" y="0" width="500" height="500" fill="url(#rad-grad_2)" />
            </svg>
        </>
    )
}

export const RadialGradientRadius = () => {
    return (
        <>
            <svg width="500" height="500" viewBox="0 0 500 500">
                <defs>
                    <radialGradient id="rad-grad_4"
                        r="20%">
                        <stop offset="0%" stopColor="red" />
                        <stop offset="100%" stopColor="blue" />
                    </radialGradient>
                </defs>
                <rect x="0" y="0" width="500" height="500" fill="url(#rad-grad_4)" />
            </svg>
        </>
    )
}

export const RadialGradientRadius_2 = () => {
    return (
        <>
            <svg width="500" height="500" viewBox="0 0 500 500">
                <defs>
                    <radialGradient id="rad-grad_5"
                        r="120%">
                        <stop offset="0%" stopColor="red" />
                        <stop offset="100%" stopColor="blue" />
                    </radialGradient>
                </defs>
                <rect x="0" y="0" width="500" height="500" fill="url(#rad-grad_5)" />
            </svg>
        </>
    )
}

export const FillLinearGradient = () => {
    return (
        <>
            <svg width="500" height="500" viewBox="0 0 500 500">
                <defs>
                    <linearGradient id="lin-grad_0">
                        <stop offset="0%" stopColor="red" />
                        <stop offset="100%" stopColor="blue" />
                    </linearGradient>
                </defs>

                <circle cx="250" cy="250" r="200" fill="url(#lin-grad_0)" />
            </svg>
        </>
    )
}

export const StrokeLinearGradient = () => {
    return (
        <>
            <svg width="500" height="500" viewBox="0 0 500 500">
                <defs>
                    <linearGradient id="lin-grad_0">
                        <stop offset="0%" stopColor="red" />
                        <stop offset="100%" stopColor="blue" />
                    </linearGradient>
                </defs>

                <circle cx="250" cy="250" r="200" stroke="url(#lin-grad_0)" strokeWidth="15" fill="none" />
            </svg>
        </>
    )
}