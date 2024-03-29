export const SuperExample = () => {
    return (
        <>
            <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">

                <defs>
                    <g id="rocket" transform="rotate(90) translate(-10 -20)">
                        <path d="M9.98599 0L16.5744 40L9.98599 37.8295L3.39758 40L9.98599 0Z" fill="#EEE6E6" />
                        <path d="M10.045 20.3765L10.6359 37.2093L10.045 36.2959L9.45416 37.2093L10.045 20.3765Z"
                            fill="#D3CBCB" />
                        <path d="M12.9827 18.2195L20 31.853L17.5394 32.0958L15.6018 33.9309L12.9827 18.2195Z"
                            fill="#B70B0B" />
                        <path d="M7.01727 18.049L6.27483e-06 31.6825L2.46055 31.9253L4.3982 33.7604L7.01727 18.049Z"
                            fill="#B70B0B" />
                        <ellipse cx="10.045" cy="15.9468" rx="1.47721" ry="2.48062" fill="#0B0A0A" />
                    </g>
                    <g id="car" transform="translate(-25 -15)">
                        <path
                            d="M0 6.0402C0 3.81542 1.81533 2.01815 4.04 2.0404L46.04 2.4604C48.2334 2.48233 50 4.26667 50 6.4602V22.5398C50 24.7333 48.2334 26.5177 46.04 26.5396L4.04 26.9596C1.81534 26.9818 0 25.1846 0 22.9598V6.0402Z"
                            fill="#A50000" />
                        <path
                            d="M30.5 7.5L37.4275 4C39.7363 12.8342 39.3008 17.3136 37.4275 25L30 22C31.9406 13.9053 32.6638 15.8211 30.5 7.5Z"
                            fill="black" />
                        <path
                            d="M15 20.9762L10.1794 23C8.4478 15.8485 8.7744 12.2223 10.1794 6L15 8.42857C13.5446 14.9814 13.3771 14.2401 15 20.9762Z"
                            fill="black" />
                        <path d="M12 4H34L28.28 6H16.4L12 4Z" fill="black" />
                        <path d="M34 25H12L17.72 23H29.6L34 25Z" fill="black" />
                        <path d="M33.5 0H32V3H34.5L33.5 0Z" fill="#A50000" />
                        <path d="M33.5 29H32V26H34.5L33.5 29Z" fill="#A50000" />
                        <path
                            d="M48.9117 7.44174C48.963 7.18489 49.1885 7 49.4505 7V7C49.754 7 50 7.24602 50 7.54951V11.4505C50 11.754 49.754 12 49.4505 12V12C49.1885 12 48.963 11.8151 48.9117 11.5583L48.5784 9.89223C48.5267 9.63331 48.5267 9.36669 48.5784 9.10777L48.9117 7.44174Z"
                            fill="#E8E6E6" />
                        <path
                            d="M48.9117 17.4417C48.963 17.1849 49.1885 17 49.4505 17V17C49.754 17 50 17.246 50 17.5495V21.4505C50 21.754 49.754 22 49.4505 22V22C49.1885 22 48.963 21.8151 48.9117 21.5583L48.5784 19.8922C48.5267 19.6333 48.5267 19.3667 48.5784 19.1078L48.9117 17.4417Z"
                            fill="#E8E6E6" />

                    </g>
                </defs>
                <rect x="0" y="0" width="500" height="500" stroke="none" fill="#48723A" />
                <path id="pavement"
                    d="M48.6134 357.02C42.9511 318.141 38.8111 277.898 38.9996 244.642C39.1724 214.155 43.0516 177.556 48.3211 141.782C53.6135 105.853 98.4372 91.1159 125.593 121.258L176.447 177.707C215.769 221.354 284.231 221.354 323.553 177.707L374.261 121.421C401.423 91.2705 446.264 106.03 451.527 142.015C457.004 179.464 461.018 218.012 461 249.986C460.982 281.743 456.979 320.009 451.526 357.211C446.255 393.169 401.453 407.931 374.278 377.834L323.479 321.574C284.167 278.036 215.833 278.036 176.521 321.574L125.849 377.693C98.6623 407.802 53.8562 393.02 48.6134 357.02Z"
                    stroke="black" stroke-width="50" fill="none" />
                <path id="dashed-line"
                    d="M48.6134 357.02C42.9511 318.141 38.8111 277.898 38.9996 244.642C39.1724 214.155 43.0516 177.556 48.3211 141.782C53.6135 105.853 98.4372 91.1159 125.593 121.258L176.447 177.707C215.769 221.354 284.231 221.354 323.553 177.707L374.261 121.421C401.423 91.2705 446.264 106.03 451.527 142.015C457.004 179.464 461.018 218.012 461 249.986C460.982 281.743 456.979 320.009 451.526 357.211C446.255 393.169 401.453 407.931 374.278 377.834L323.479 321.574C284.167 278.036 215.833 278.036 176.521 321.574L125.849 377.693C98.6623 407.802 53.8562 393.02 48.6134 357.02Z"
                    stroke="#F4B30A" stroke-width="4" stroke-dasharray="20 20" stroke-opacity=".75" fill="none" />
                <use href="#car" x="0" y="0">
                    <animateMotion dur="20s" begin="0s" repeatCount="indefinite" rotate="auto" keyPoints="0;1"
                        keyTimes="0;1" calcMode="linear"
                        path="M48.6134 357.02C42.9511 318.141 38.8111 277.898 38.9996 244.642C39.1724 214.155 43.0516 177.556 48.3211 141.782C53.6135 105.853 98.4372 91.1159 125.593 121.258L176.447 177.707C215.769 221.354 284.231 221.354 323.553 177.707L374.261 121.421C401.423 91.2705 446.264 106.03 451.527 142.015C457.004 179.464 461.018 218.012 461 249.986C460.982 281.743 456.979 320.009 451.526 357.211C446.255 393.169 401.453 407.931 374.278 377.834L323.479 321.574C284.167 278.036 215.833 278.036 176.521 321.574L125.849 377.693C98.6623 407.802 53.8562 393.02 48.6134 357.02Z" />
                </use>

            </svg>
        </>
    )
}