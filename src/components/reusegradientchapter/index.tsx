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

export const LG_offset_50 = () => {
    return (
        <>
            <svg width="500" height="100" viewBox="0 0 500 100">
                <defs>
                    <linearGradient id="lin-grad_50">
                        <stop offset="50%" stopColor="red" />
                        <stop offset="100%" stopColor="blue" />
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