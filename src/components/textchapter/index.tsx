export const Exampleone = () => {
    return (
        <svg
            width="500"
            height="500"
            viewBox="0 0 500 500"
        >
            <text x="50" y="250">
                This is the text element
            </text>
        </svg>
    )
}

export const Exampletwo = () => {
    return (
        <svg
            width="500"
            height="500"
            viewBox="0 0 500 500"
        >
            <text x="65" y="250" fontSize="50" font-family="IBM Plex Sans, sans-serif" font-weight="normal"
            >The text element</text>
        </svg>
    )
}

export const Example3 = () => {
    return (
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="65" y="100" dominant-baseline="auto" fill="black" font-family="Arial" fontSize="32">dominant-baseline-auto</text>
            <path d="M0,100 H500" stroke="black" />

            <text x="65" y="200" dominant-baseline="middle" fill="black" font-family="Arial" fontSize="32">dominant-baseline-middle</text>
            <path d="M0,200 H500" stroke="black" />

            <text x="65" y="300" dominant-baseline="hanging" fill="black" font-family="Arial" fontSize="32">dominant-baseline-hanging</text>
            <path d="M0,300 H500" stroke="black" />


        </svg>
    )
}

export const ExampleFour = () => {
    return (
        <>
            <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
                <text x="250" y="100" fill="black" fontSize="30" font-weight="900" textAnchor="auto">text-anchor start</text>

                <text x="250" y="250" fill="black" fontSize="30" font-weight="900" textAnchor="middle">text-anchor middle</text>

                <text x="250" y="400" fill="black" fontSize="30" font-weight="900" textAnchor="end">text-anchor end</text>

                <path d="M250,0 V500" stroke="red" />
            </svg>
        </>
    )
}

export const Example5 = () => {
    return (
        <>
            <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
                <text
                    x="250" y="250"
                    text-anchor="middle"
                    font-size="35" fill="black">styling
                    <tspan fill="red" fontSize={45}>
                        with
                    </tspan>
                    tspan
                </text>
            </svg>
        </>
    )
}

export const Example6 = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
            <text
                x="250" y="250"
                text-anchor="middle"
                font-size="35"
                fill="black">
                styling
                <tspan
                    x="100" y="50"
                    fill="red">
                    with
                </tspan>
                TSPAN
            </text>
        </svg></>)
}

export const Example7 = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
            <text x="250" y="250" text-anchor="middle" font-size="35" fill="black" >styling <tspan dx="0" dy="100" fill="red" font-weight="900">with</tspan>TSPAN</text></svg>
    </>)
}

export const Example8 = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
            <text
                x="250" y="250"
                text-anchor="middle"
                font-size="35"
                fill="black" >
                styling
                <tspan
                    fill="red"
                    rotate="25">
                    with
                </tspan>
                TSPAN
            </text></svg>
    </>)
}

export const Example9 = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
            <text
                x="250" y="250"
                text-anchor="middle"
                font-size="35"
                fill="black" >
                styling
                <tspan
                    fill="red"
                    rotate="-25 0 25 90">
                    with
                </tspan>
                TSPAN
            </text></svg>
    </>)
}

export const Example10 = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
            <path id="spiral" d="M229.2 391C197.733 391 173.2 381.4 155.6 362.2C138.533 344.067 130 319 130 287C130 248.6 141.467 214.867 164.4 185.8C145.733 171.933 136.4 156.867 136.4 140.6C136.4 119.533 149.6 109 176 109C191.733 109 206.933 113.533 221.6 122.6C222.667 122.867 223.2 123.933 223.2 125.8C223.2 126.333 222.933 126.6 222.4 126.6C222.133 126.6 221.333 126.2 220 125.4C206.4 118.2 193.6 114.6 181.6 114.6C156.533 114.6 144 124.467 144 144.2C144 157.533 151.867 170.2 167.6 182.2C195.333 149.667 236.267 133.4 290.4 133.4C308.533 133.4 324.267 135.933 337.6 141C355.733 147.667 366.267 158.333 369.2 173C369.467 173.533 369.6 174.6 369.6 176.2C369.6 186.333 363.2 195.4 350.4 203.4C358.667 217.533 362.8 234.867 362.8 255.4C362.8 278.867 357.333 300.067 346.4 319C333.6 340.6 317.2 357.8 297.2 370.6C275.6 384.2 252.933 391 229.2 391ZM268.8 214.2C296.533 214.2 319.733 209.533 338.4 200.2C331.733 186.6 322.267 179.8 310 179.8C309.467 179.8 308.8 179.933 308 180.2C307.2 180.2 306.267 180.333 305.2 180.6C304.133 180.867 303.2 181 302.4 181C301.6 181 300.933 181 300.4 181C297.467 181 296 180.2 296 178.6C296 176.2 299.333 175 306 175C322 175 335.2 181.933 345.6 195.8C355.2 189.4 360 182.333 360 174.6C360 150.333 338.133 138.2 294.4 138.2C250.667 138.2 214.933 157 187.2 194.6C199.733 201 212.8 205.933 226.4 209.4C240 212.6 254.133 214.2 268.8 214.2ZM236 385C255.467 385 275.2 376.467 295.2 359.4C312 345 325.6 327.533 336 307C344 291 348 271.4 348 248.2C348 232.733 346 219.4 342 208.2C333.733 211.667 324.267 214.467 313.6 216.6C303.2 218.467 291.733 219.4 279.2 219.4C243.733 219.4 212.133 212.333 184.4 198.2C164.933 225.667 155.2 256.867 155.2 291.8C155.2 316.867 161.067 337.533 172.8 353.8C185.333 371.133 203.867 381.4 228.4 384.6C229.467 384.6 230.667 384.6 232 384.6C233.333 384.867 234.667 385 236 385Z" fill="#eaeaea" />
            <text x="0" y="150" font-size="16" fill="black"><textPath href="#spiral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, reiciendis libero. Earum, ullam dicta provident sapiente minima consectetur deleniti nulla quibusdam, voluptatum illo quisquam veniam molestiae commodi doloribus molestias sequi! Earum, ullam dicta provident sapiente minima consectetur deleniti nulla quibusdam, voluptatum illo quisquam veniam molestiae commodi doloribus molestias sequi!</textPath></text>
        </svg>
    </>)
}

export const Example11 = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
            <path id="thebigw" d="M37.5 159.5C149.1 158.7 179.333 324.5 180.5 407.5L239 90.5L312 407.5C308.667 319.833 325.7 147.5 420.5 159.5" stroke="#000" strokeWidth={2} />

            <text x="0" y="150" font-size="16" fill="black"><textPath href="#thebigw">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, reiciendis libero. Earum, ullam dicta provident sapiente minima consectetur deleniti nulla quibusdam, voluptatum illo quisquam veniam molestiae commodi doloribus molestias sequi! Earum, ullam dicta provident sapiente minima consectetur deleniti nulla quibusdam, voluptatum illo quisquam veniam molestiae commodi doloribus molestias sequi!</textPath></text>
        </svg>

    </>)
}

export const Example12 = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
            <path d="M37.5 159.5C149.1 158.7 179.333 324.5 180.5 407.5L239 90.5L312 407.5C308.667 319.833 325.7 147.5 420.5 159.5" stroke="#000" strokeWidth={2} />

            <text x="0" y="150" font-size="16" fill="black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, reiciendis libero. Earum, ullam dicta provident sapiente minima consectetur deleniti nulla quibusdam, voluptatum illo quisquam veniam molestiae commodi doloribus molestias sequi! Earum, ullam dicta provident sapiente minima consectetur deleniti nulla quibusdam, voluptatum illo quisquam veniam molestiae commodi doloribus molestias sequi!</text>
        </svg>

    </>)
}

export const Example13 = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
            <path id="thebigw" d="M37.5 159.5C149.1 158.7 179.333 324.5 180.5 407.5L239 90.5L312 407.5C308.667 319.833 325.7 147.5 420.5 159.5" stroke="none" />

            <text x="0" y="150" font-size="16" fill="black"><textPath href="#thebigw">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, reiciendis libero. Earum, ullam dicta provident sapiente minima consectetur deleniti nulla quibusdam, voluptatum illo quisquam veniam molestiae commodi doloribus molestias sequi! Earum, ullam dicta provident sapiente minima consectetur deleniti nulla quibusdam, voluptatum illo quisquam veniam molestiae commodi doloribus molestias sequi!</textPath></text>
        </svg>

    </>)
}

export const Example14 = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
            <path id="thebigw" d="M37.5 159.5C149.1 158.7 179.333 324.5 180.5 407.5L239 90.5L312 407.5C308.667 319.833 325.7 147.5 420.5 159.5" stroke="#000" strokeWidth={2} />

            <text x="0" y="150" font-size="16" fill="black"><textPath startOffset={"10%"} href="#thebigw">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, reiciendis libero. Earum, ullam dicta provident sapiente minima consectetur deleniti nulla quibusdam, voluptatum illo quisquam veniam molestiae commodi doloribus molestias sequi! Earum, ullam dicta provident sapiente minima consectetur deleniti nulla quibusdam, voluptatum illo quisquam veniam molestiae commodi doloribus molestias sequi!</textPath></text>
        </svg>

    </>)
}

export const Example15 = () => {
    return (<>
        <svg width="500" height="200" viewBox="0 0 500 200" fill="none">
            <text style={{ fontFamily: "serif" }} x="250" y="100" font-size="50" textAnchor={"middle"} dominantBaseline={"middle"} fill="black">css styling</text>
        </svg>

    </>)
}

export const Example16 = () => {
    return (<><svg width="500" height="200" viewBox="0 0 500 200">
        <text
            style={{ fontFamily: "serif", fontSize: "100px", fill: "#eaeaea", stroke: "#212121", strokeWidth: "2", fontWeight: "bold" }}
            x="250" y="100"
            text-anchor="middle" dominantBaseline={"middle"}>css styling</text>
    </svg></>)
}

export const FO = () => {
    return (<><svg width="500" height="500" viewBox="0 0 500 500">
        <foreignObject x="125" y="100" width="250" height="160">
            <div style={{ color: "#000000" }}>
                This is text that wraps. You need to put it in a <strong>foreignObject</strong> tag and include the namespace for it to work!
            </div>
        </foreignObject>
    </svg></>)
}