

import styles from './CSSAnim.module.scss';
import { useRef } from 'react'

export const HoverExample = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <circle className={styles.circle}
                id="my-circle"
                cx="250" cy="250"
                r="100"></circle>
        </svg>
    </>)
}

type strokedashprops = {
    hover?: boolean
}
export const StrokeDash = ({ hover = false }: strokedashprops) => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <circle className={!hover ? styles.strokeDash : styles.strokeDashHover}
                id="my-circle"
                cx="250" cy="250"
                r="100" pathLength={99} fill="orange" stroke="black" strokeWidth={5}></circle>
        </svg>
    </>)
}

export const GeoProperties = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <circle className={styles.geoPropAnimation}
                id="my-circle"
                fill="orange"></circle>
        </svg>
    </>)
}

export const KeyframeExample = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <circle r={50} className={styles.zoomCircle}></circle>
        </svg>
    </>)
}

type BalloonProps = {
    linear?: boolean
}

export const BalloonExample = ({ linear = true }: BalloonProps) => {
    return (<>
        <svg width="300" height="300" viewBox="0 0 500 500">
            <defs>
                <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop stop-color="#42D2FF" offset="0%" />
                    <stop stop-color="#DAF6FF" offset="100%" />
                </linearGradient>
            </defs>
            <rect x="0" y="0" width="500" height="500" fill="url(#sky)"></rect>
            <g className={styles.clouds}>
                <g opacity="0.5" fill="white">
                    <ellipse cx="198.987" cy="107.667" rx="37.9283" ry="36.6667" />
                    <ellipse cx="259.072" cy="107.667" rx="37.9283" ry="36.6667" />
                    <ellipse cx="214.759" cy="144.333" rx="37.9283" ry="36.6667" />
                    <ellipse cx="156.928" cy="132.6" rx="37.9283" ry="36.6667" />
                </g>
                <g opacity="0.5" fill="white">
                    <ellipse rx="30.6835" ry="19.6667" transform="matrix(-1 0 0 1 435.291 188.667)" />
                    <ellipse rx="30.6835" ry="19.6667" transform="matrix(-1 0 0 1 386.684 188.667)" />
                    <ellipse rx="30.6835" ry="19.6667" transform="matrix(-1 0 0 1 422.532 208.333)" />
                    <ellipse rx="30.6835" ry="19.6667" transform="matrix(-1 0 0 1 469.316 202.04)" />
                </g>
                <g opacity="0.5" fill="white">
                    <ellipse cx="44" cy="290" rx="25" ry="20" />
                    <ellipse cx="69" cy="314" rx="25" ry="20" />
                    <ellipse cx="22" cy="302.5" rx="22" ry="15.5" />
                    <ellipse cx="81" cy="294" rx="25" ry="20" />
                </g>
                <g opacity="0.5" fill="white">
                    <ellipse rx="25" ry="20" transform="matrix(1 0 0 -1 297 417)" />
                    <ellipse rx="25" ry="20" transform="matrix(1 0 0 -1 322 393)" />
                    <ellipse rx="22" ry="15.5" transform="matrix(1 0 0 -1 275 404.5)" />
                    <ellipse rx="25" ry="20" transform="matrix(1 0 0 -1 334 413)" />
                </g>
                <g opacity="0.5" fill="white">
                    <ellipse cx="698.987" cy="107.667" rx="37.9283" ry="36.6667" />
                    <ellipse cx="759.072" cy="107.667" rx="37.9283" ry="36.6667" />
                    <ellipse cx="714.759" cy="144.333" rx="37.9283" ry="36.6667" />
                    <ellipse cx="656.928" cy="132.6" rx="37.9283" ry="36.6667" />
                </g>
                <g opacity="0.5" fill="white">
                    <ellipse rx="30.6835" ry="19.6667" transform="matrix(-1 0 0 1 935.291 188.667)" />
                    <ellipse rx="30.6835" ry="19.6667" transform="matrix(-1 0 0 1 886.684 188.667)" />
                    <ellipse rx="30.6835" ry="19.6667" transform="matrix(-1 0 0 1 922.532 208.333)" />
                    <ellipse rx="30.6835" ry="19.6667" transform="matrix(-1 0 0 1 969.316 202.04)" />
                </g>
                <g opacity="0.5" fill="white">
                    <ellipse cx="544" cy="290" rx="25" ry="20" />
                    <ellipse cx="569" cy="314" rx="25" ry="20" />
                    <ellipse cx="522" cy="302.5" rx="22" ry="15.5" />
                    <ellipse cx="581" cy="294" rx="25" ry="20" />
                </g>
                <g opacity="0.5" fill="white">
                    <ellipse rx="25" ry="20" transform="matrix(1 0 0 -1 797 417)" />
                    <ellipse rx="25" ry="20" transform="matrix(1 0 0 -1 822 393)" />
                    <ellipse rx="22" ry="15.5" transform="matrix(1 0 0 -1 775 404.5)" />
                    <ellipse rx="25" ry="20" transform="matrix(1 0 0 -1 834 413)" />
                </g>
            </g>
            <g className={linear ? styles.balloon : styles.balloonEase}>
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M85.1286 39.9427C85.1286 54.8019 70.3959 73.3782 54.4949 84.6169C41.5326 84.4155 46.5612 84.355 31.8291 84.8384C14.6879 74.2724 0.875977 54.8563 0.875977 39.9427C0.875977 18.451 22.0542 -1.29145 43.4984 1.00907C64.8712 -1.73858 85.1286 18.451 85.1286 39.9427Z"
                    fill="#BA0505" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M71.3168 40.0881C71.3168 54.9567 60.5411 74.2361 52.3597 84.8516C42.386 84.8567 46.482 84.7969 35.7659 85.0034C27.7135 74.4052 14.2275 54.9789 14.2275 40.0881C14.2275 18.4807 29.4324 0.944168 44.3296 0.944168C56.9637 0.944371 67.5786 13.5576 70.518 30.5689C71.0399 33.6164 71.3168 36.8057 71.3168 40.0881Z"
                    fill="#FFC875" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M53.2365 39.9417C53.2365 54.6982 49.2728 73.8267 46.2588 84.3843C40.3832 84.4266 46.4122 84.3823 40.0929 84.4477C37.1286 73.8881 33.3359 54.679 33.3359 39.9417C33.3359 18.4691 37.7932 1.0423 43.2862 1.0423C48.7782 1.04179 53.2365 18.4691 53.2365 39.9417Z"
                    fill="#BA0505" />
                <path d="M32.5305 84.8257C34.4839 91.6416 36.0267 98.6478 37.0645 105.685"
                    stroke="#696767" />
                <path d="M39.4045 84.8235L41.8411 105.63" stroke="#696767" />
                <path d="M46.804 84.8477L45.7527 105.615" stroke="#696767" />
                <path d="M53.4461 84.8275C51.5633 91.9233 50.4269 98.7704 49.6846 105.645"
                    stroke="#696767" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M32.051 85.2125L31.354 84.3771L54.7107 84.4011L54.1917 85.3853L32.051 85.2125Z"
                    fill="#600070" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M34.3781 105.463C33.5465 105.463 32.8757 106.118 32.8757 106.923C32.8757 107.729 33.5465 108.383 34.3781 108.383H34.912C34.8861 108.554 34.8737 108.736 34.8737 108.947V115.895C34.8737 118.724 37.221 121 40.1303 121H47.0158C49.9251 121 52.2714 118.724 52.2714 115.895V108.947C52.2714 108.736 52.259 108.554 52.233 108.383H52.768C53.5985 108.383 54.2693 107.729 54.2693 106.923C54.2693 106.118 53.5985 105.463 52.768 105.463H34.3781V105.463Z"
                    fill="#431102" stroke="black" strokeWidth="0.0574834" stroke-linecap="round" />
            </g>
        </svg>
    </>)
}

type EaseType = {
    type: "ease-in-out" | "ease-in" | "ease-out" | "linear" | "default" | "custom"
}
export const EaseExample = ({ type }: EaseType) => {

    const getImage = () => {
        let path = "'";
        switch (type) {
            case "ease-in-out":
                path = "/css_anim_easing_in_out.png"
                break;

            case "ease-in":
                path = "/css_anim_easing_in.png"
                break;

            case "ease-out":
                path = "/css_anim_easing_out.png"
                break;

            case "custom":
                path = "/css_anim_easing_custom.png"
                break;

            default:
                path = "/css_anim_easing_linear.png"


        }

        return path;
    }

    const getEasing = () => {
        let ease = "";

        switch (type) {
            case "ease-in":
                ease = styles.easeIn;
                break;

            case "ease-out":
                ease = styles.easeOut;
                break;

            case "ease-in-out":
                ease = styles.easeInOut;
                break;

            case "linear":
                ease = styles.easeLinear;
                break;

            case "custom":
                ease = styles.easeCustom;
                break;

            case 'default':
                ease = styles.easeLinear;
                break;
        }

        return ease;
    }
    return (<>
        <img className={styles.exampleImage} src={getImage()} height="300px" alt="Easing curve diagram" />
        <svg width="200" height="300" viewBox="0 0 200 300">
            <circle className={getEasing()} cx="100" cy="250" r="10" fill="green" />
        </svg>
    </>)
}

export const StrokeTextBetter = () => {
    return (
        <svg width="500" height="250" viewBox="0 0 500 250">

            <g fill="none" strokeWidth="2" className={styles.letter}>
                <rect x="-20" y="-20" width="540" height="290" fill="#fff" stroke="none" />
                <path className={styles.s} pathLength="100" d="M134.183 96.1445C133.786 91.1698 131.922
    87.2896 128.592 84.5038C125.311 81.718 120.316 80.3251 113.607
    80.3251C109.332 80.3251 105.828 80.8474 103.095 81.8921C100.411 82.887
    98.4226 84.2551 97.1304 85.9962C95.8381 87.7373 95.1672 89.7272 95.1175
    91.9658C95.018 93.8064 95.3411 95.4729 96.0866 96.9653C96.8819 98.4079
    98.1244 99.7262 99.8143 100.92C101.504 102.064 103.666 103.109 106.3
    104.054C108.935 104.999 112.066 105.845 115.694 106.591L128.219
    109.278C136.668 111.068 143.9 113.431 149.914 116.366C155.928 119.302
    160.848 122.759 164.675 126.739C168.502 130.669 171.311 135.096 173.1
    140.021C174.939 144.946 175.883 150.318 175.933 156.139C175.883 166.188
    173.373 174.694 168.403 181.659C163.433 188.623 156.325 193.921 147.081
    197.553C137.886 201.184 126.827 203 113.905 203C100.634 203 89.0538 201.035
    79.1631 197.105C69.3221 193.175 61.668 187.131 56.2008 178.972C50.7833
    170.764 48.0497 160.268 48 147.483H87.3639C87.6125 152.159 88.7805 156.089
    90.8679 159.273C92.9554 162.457 95.8878 164.869 99.6652 166.511C103.492
    168.153 108.04 168.973 113.308 168.973C117.732 168.973 121.435 168.426
    124.417 167.332C127.399 166.237 129.66 164.72 131.201 162.78C132.742 160.84
    133.537 158.626 133.587 156.139C133.537 153.801 132.767 151.761 131.276
    150.02C129.834 148.229 127.449 146.637 124.119 145.244C120.789 143.802
    116.29 142.459 110.624 141.215L95.4157 137.932C81.8967 134.997 71.2357
    130.097 63.4325 123.231C55.679 116.317 51.8271 106.89 51.8768
    94.9506C51.8271 85.25 54.4116 76.7682 59.6303 69.5052C64.8987 62.1925 72.18
    56.4965 81.4743 52.4173C90.8182 48.338 101.529 46.2984 113.607
    46.2984C125.933 46.2984 136.594 48.3629 145.59 52.4919C154.586 56.6208
    161.519 62.4412 166.39 69.9529C171.311 77.4149 173.796 86.1454 173.845
    96.1445H134.183Z" stroke="black" />
                <path className={styles.v} pathLength="100" d="M211.953 50.1791L243.265 157.93H244.458L275.77 50.1791H322.59L272.192 203H215.531L165.134 50.1791H211.953Z" stroke="black" />

                <path className={styles.g} pathLength="100" d="M408.252 98.5323C407.606 95.8958 406.587 93.5825 405.195 91.5927C403.803 89.5531 402.064 87.8368 399.976 86.4439C397.939 85.0013 395.553 83.9317 392.819 83.2353C390.135 82.4891 387.178 82.116 383.948 82.116C376.989 82.116 371.05 83.7825 366.129 87.1155C361.259 90.4485 357.531 95.249 354.946 101.517C352.412 107.785 351.144 115.347 351.144 124.202C351.144 133.156 352.362 140.817 354.797 147.184C357.233 153.552 360.861 158.427 365.682 161.81C370.503 165.193 376.492 166.884 383.649 166.884C389.962 166.884 395.205 165.964 399.38 164.123C403.605 162.282 406.761 159.671 408.848 156.288C410.936 152.905 411.979 148.926 411.979 144.349L419.137 145.095H384.246V115.546H451.94V136.738C451.94 150.667 448.983 162.581 443.068 172.481C437.203 182.33 429.102 189.892 418.764 195.165C408.475 200.388 396.671 203 383.351 203C368.49 203 355.444 199.841 344.211 193.523C332.978 187.205 324.206 178.201 317.894 166.511C311.631 154.82 308.5 140.916 308.5 124.798C308.5 112.163 310.414 100.97 314.241 91.2196C318.117 81.4693 323.485 73.2362 330.344 66.5204C337.203 59.7549 345.13 54.6559 354.126 51.2234C363.122 47.7411 372.765 46 383.053 46C392.099 46 400.498 47.2934 408.252 49.8802C416.055 52.4173 422.939 56.0488 428.903 60.7747C434.917 65.4509 439.763 70.9976 443.441 77.4149C447.119 83.8322 449.355 90.8713 450.151 98.5323H408.252Z" stroke="black" />
            </g>
        </svg>
    )
}