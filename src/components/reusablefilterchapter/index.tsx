export const DropShadowExample = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <defs>
                <filter id="shadow">
                    <feDropShadow
                        dx="15" dy="15"
                        stdDeviation="5" flood-color="black" flood-opacity=".5" />
                </filter>
            </defs>
            <image filter="url(#shadow)" id="image" x="100" y="100" href={'/zuubaDigitalLogo.png'} width="300"
                height="300">
            </image>
        </svg>
    </>)
}

export const DistortionExample = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <defs>
                <filter id="turb-displace-filter">
                    <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="5" result="turbulence" seed="0" />
                    <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="30" xChannelSelector="R" yChannelSelector="G" />
                </filter>
            </defs>
            <image filter="url(#turb-displace-filter)" id="image" x="100" y="100" href={'/zuubaDigitalLogo.png'} width="300"
                height="300">
            </image>
        </svg>
    </>)
}

export const BlurExample = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <defs>
                <filter id="blur-filter">
                    <feGaussianBlur stdDeviation="10 0" />
                </filter>
            </defs>
            <image filter="url(#blur-filter)" id="image" x="100" y="100" href={'/zuubaDigitalLogo.png'} width="300"
                height="300">
            </image>
        </svg>
    </>)
}

type colorsatprops = {
    value: string;
}

export const ColorSaturation = ({ value }: colorsatprops) => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <defs>
                <filter id={`color_saturation_${value}`}>
                    <feColorMatrix type="saturate" values={value} />
                </filter>
            </defs>
            <image filter={`url(#color_saturation_${value})`} id="image" x="100" y="100" href={'/zuubaDigitalLogo.png'} width="300"
                height="300">
            </image>
        </svg>
    </>)
}

type hueprops = {
    value: string;
}

export const HueRotate = ({ value }: hueprops) => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <defs>
                <filter id={`hue_rotation_${value}`}>
                    <feColorMatrix type="hueRotate" values={value} />
                </filter>
            </defs>
            <image filter={`url(#hue_rotation_${value})`} id="image" x="100" y="100" href={'/zuubaDigitalLogo.png'} width="300"
                height="300">
            </image>
        </svg>
    </>)
}

export const RedMatrix = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <defs>
                <filter id="red_matrix">
                    <feColorMatrix
                        in="SourceGraphic"
                        type="matrix"
                        values="1 0 0 0 0
                                0 0 0 0 0
                                0 0 0 0 0
                                0 0 0 1 0"
                    />
                </filter>
            </defs>
            <image filter="url(#red_matrix)" id="image" x="100" y="100" href={'/zuubaDigitalLogo.png'} width="300"
                height="300">
            </image>
        </svg>
    </>)
}

export const RedShift = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <defs>
                <filter id="red_shift_matrix">
                    <feColorMatrix
                        in="SourceGraphic"
                        type="matrix"
                        values="1 0 0 0 1
                                0 1 0 0 0
                                0 0 1 0 0
                                0 0 0 1 0"
                    />
                </filter>
            </defs>
            <image filter="url(#red_shift_matrix)" id="image" x="100" y="100" href={'/zuubaDigitalLogo.png'} width="300"
                height="300">
            </image>
        </svg>
    </>)
}


export const GreenShift = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <defs>
                <filter id="green_shift_matrix">
                    <feColorMatrix
                        in="SourceGraphic"
                        type="matrix"
                        values="1 0 0 0 0
                                0 1 0 0 1
                                0 0 1 0 0
                                0 0 0 1 0"
                    />
                </filter>
            </defs>
            <image filter="url(#green_shift_matrix)" id="image" x="100" y="100" href={'/zuubaDigitalLogo.png'} width="300"
                height="300">
            </image>
        </svg>
    </>)
}

export const TurbulenceExample = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <defs>
                <filter id="turbulence">
                    <feTurbulence baseFrequency=".01" numOctaves="1" seed="5" />
                </filter>
            </defs>

            <rect filter="url(#turbulence)" x="100" y="100" width="300" height="300" fill="black" />

        </svg>
    </>)
}

type dscuttoff = {
    cuttoff: boolean
}
export const DropShadowCuttoff = ({ cuttoff }: dscuttoff) => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <defs>
                {cuttoff && <filter id="big_shadow">
                    <feDropShadow
                        dx="0" dy="0"
                        stdDeviation="30" flood-color="black" flood-opacity=".8" />
                </filter>}
                {!cuttoff && <filter x="-20%" y="-20%" width="140%" height="140%" id="big_shadow_all">
                    <feDropShadow
                        dx="0" dy="0"
                        stdDeviation="30" flood-color="black" flood-opacity=".8" />
                </filter>}
            </defs>
            <image filter={cuttoff ? "url(#big_shadow)" : "url(#big_shadow_all)"} id="image" x="100" y="100" href={'/zuubaDigitalLogo.png'} width="300"
                height="300">
            </image>
        </svg>
    </>)
}

