import styles from './AspectRatio.module.scss';

type AspectRatioProp = {
    width: number,
    height: number;
    viewbox: string;
    aspectRatio: string;
}

export const DynamicAspectRatio = ({ width, height, viewbox, aspectRatio }: AspectRatioProp) => {
    return (<>
        <svg
            className={styles.svg}
            width={`${width}px`}
            height={`${height}px`}
            viewBox={viewbox}
            preserveAspectRatio={aspectRatio}>
            <g>
                <rect width="500" height="500" fill="white" />
                <rect width="500" height="500" fill="url(#paint0_linear_1061_4071)" />
                <g opacity="0.5">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M256.356 108.081C261.251 102.673 270.336 88.9388 277.225 87.0064C281.663 85.7617 280.369 98.6367 280.424 101.092C280.637 110.589 279.444 120.027 277.97 129.445C275.315 146.431 266.633 161.558 254.724 176.014C248.597 183.453 241.409 190.982 231.454 195.623C226.872 197.761 221.358 198.119 216.833 199.96C211.563 202.104 214.433 200.371 212.058 204.626C208.759 210.534 207.704 218.155 206.178 224.458C199.171 253.395 182.207 406.363 185.148 435.797C185.409 438.406 180.714 439.03 180.479 435.845C179.233 418.958 190.014 302.012 195.453 263.767C200.892 225.523 206.396 191.735 211.915 178.504C218.61 162.451 230.701 143.147 240.767 128.177C245.442 121.223 250.539 114.508 256.356 108.081Z" fill="#69A1AC" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M292.691 295.651C305.429 288.406 319.217 302.08 307.69 309.327C301.318 313.332 294.656 311.908 290.906 308.57C288.471 310.869 286.193 313.273 284.003 315.304C277.332 321.491 271.027 327.827 265.002 334.31C252.484 347.778 241.757 362.007 230.54 375.976C219.472 389.763 208.491 403.62 198.458 417.756C189.959 429.732 178.631 443.822 175.721 456.951C180.136 429.105 196.889 402.34 216.839 377.792C236.626 353.445 259.335 326.856 289.973 307.642C286.855 304.089 286.768 299.018 292.691 295.651Z" fill="#C1DEE2" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50.9786 227.748C58.1068 228.829 69.7541 241.322 75.6298 246.082C82.6127 251.738 88.9479 257.768 94.9196 264.085C107.775 277.682 119.273 292.139 129.049 307.214C144.988 331.791 157.756 357.02 167.023 383.782C172.696 400.164 176.368 417.144 178.545 434.005C178.956 437.185 183.259 461.701 177.059 462.362C171.482 462.957 173.205 443.746 172.936 441.133C169.894 411.652 160.784 382.967 148.112 355.18C145.352 349.127 142.787 341.712 138.373 336.265C135.194 332.342 138.35 333.71 132.764 332.225C127.967 330.949 122.502 331.261 117.59 329.699C106.919 326.309 98.3742 319.727 90.8845 313.106C76.3292 300.239 64.795 286.319 58.7826 269.833C55.4474 260.691 52.3825 251.496 50.6817 242.072C50.2417 239.637 46.3875 227.053 50.9786 227.748Z" fill="#69A1AC" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M79.108 19.879C105.958 55.9566 128.023 95.5868 142.27 135.726C150.902 160.046 156.938 185.002 162.936 209.778C172.223 248.14 181.007 286.499 183.506 325.543C186.02 364.813 190.991 410.106 174.394 447.929C182.684 409.528 174.791 368.654 173.394 330.015C172.726 311.569 170.791 293.304 168.252 274.966C165.789 257.177 161.764 239.473 158.016 221.824C156.19 213.229 154.273 204.647 152.321 196.069C151.738 193.51 151.492 185.916 149.396 184.168C147.288 182.408 136.528 181.69 133.15 180.399C126.348 177.798 119.949 174.104 114.287 170.201C103.431 162.719 93.9872 152.942 86.5334 143.304C69.2873 121.004 62.3923 93.7898 62.7408 67.9634C62.8078 62.9491 73.2161 8.95301 69.0359 8.20944C69.2876 7.98107 69.5257 7.74527 69.7502 7.5C72.9149 11.6054 76.0204 15.7385 79.108 19.879Z" fill="#89C5CC" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M368.911 150.001C369.326 149.538 372.022 146.318 370.664 146.523C373.429 146.105 366.862 150.075 373.75 147.639C370.48 150.032 372.367 153.141 372.411 156.362C372.482 161.591 371.353 166.778 370.081 171.895C368.073 179.984 365.08 187.848 360.737 195.372C351.27 211.767 335.195 227.551 316.11 237.801C306.689 242.862 297.456 244.586 286.71 246.915C279.923 248.387 279.385 251.108 275.783 256.21C268.282 266.838 260.916 277.428 254.301 288.414C246.403 301.533 238.735 314.667 231.503 328.017C207.138 372.986 187.307 419.574 176.892 467.789C176.637 439.376 185.121 410.113 195.822 383.031C203.617 363.3 213.765 344.28 224.588 325.452C227.211 320.891 231.185 315.023 232.299 309.988C233.079 306.459 230.695 303.066 229.603 299.349C225.347 284.875 225.652 268.659 229.389 254.108C233.51 238.062 245.427 230.615 265.586 228.342C272.959 227.511 282.329 227.815 289.09 225.38C296.455 222.728 299.493 214.01 303.681 208.414C314.931 193.381 328.296 178.964 343.644 166.298C347.894 162.79 352.464 159.555 357.312 156.555C360.369 154.663 366.828 152.332 368.911 150.001Z" fill="#89C5CC" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M137.246 443.037C136.66 439.956 139.022 437.102 142.158 437.102H215.111C218.247 437.102 220.609 439.956 220.022 443.036L214.799 470.48C213.003 479.914 204.755 486.74 195.152 486.74H162.117C152.513 486.74 144.266 479.914 142.47 470.48L137.246 443.037Z" fill="#C1DEE2" />
                </g>
                <g opacity="0.5">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M415.255 187.571C418.607 183.602 424.826 173.521 429.543 172.103C432.581 171.19 431.695 180.639 431.732 182.441C431.879 189.412 431.062 196.339 430.053 203.251C428.235 215.718 422.291 226.82 414.138 237.431C409.943 242.89 405.022 248.416 398.207 251.823C395.07 253.392 391.295 253.654 388.197 255.006C384.589 256.579 386.554 255.307 384.928 258.43C382.67 262.766 381.948 268.36 380.903 272.987C376.105 294.225 364.491 406.496 366.505 428.1C366.684 430.014 363.469 430.472 363.309 428.135C362.456 415.74 369.836 329.907 373.56 301.837C377.283 273.768 381.052 248.969 384.83 239.258C389.413 227.476 397.692 213.308 404.583 202.32C407.784 197.216 411.272 192.288 415.255 187.571Z" fill="#69A1AC" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M440.131 325.241C448.851 319.923 458.291 329.96 450.399 335.278C446.037 338.218 441.476 337.172 438.909 334.723C437.242 336.41 435.682 338.175 434.183 339.665C429.616 344.206 425.3 348.856 421.174 353.615C412.604 363.5 405.26 373.943 397.582 384.196C390.004 394.315 382.486 404.485 375.618 414.86C369.799 423.65 362.044 433.991 360.052 443.628C363.074 423.19 374.543 403.546 388.201 385.529C401.748 367.659 417.295 348.144 438.27 334.042C436.135 331.434 436.076 327.712 440.131 325.241Z" fill="#C1DEE2" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M274.651 275.401C279.531 276.194 287.505 285.363 291.527 288.857C296.308 293.009 300.645 297.434 304.733 302.07C313.535 312.05 321.406 322.661 328.099 333.726C339.011 351.764 347.752 370.28 354.097 389.923C357.98 401.946 360.495 414.409 361.985 426.784C362.266 429.118 365.212 447.112 360.967 447.597C357.149 448.033 358.329 433.933 358.144 432.016C356.062 410.378 349.825 389.325 341.15 368.93C339.26 364.487 337.504 359.046 334.482 355.047C332.306 352.168 334.467 353.172 330.642 352.082C327.358 351.146 323.617 351.375 320.254 350.228C312.948 347.74 307.099 342.909 301.971 338.05C292.006 328.606 284.11 318.39 279.993 306.289C277.71 299.58 275.612 292.831 274.447 285.914C274.146 284.127 271.508 274.891 274.651 275.401Z" fill="#69A1AC" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M293.908 122.836C312.29 149.315 327.396 178.402 337.15 207.862C343.06 225.712 347.192 244.029 351.299 262.213C357.656 290.369 363.67 318.523 365.381 347.179C367.102 376.001 370.505 409.244 359.143 437.004C364.818 408.82 359.415 378.82 358.458 350.461C358.001 336.923 356.676 323.517 354.938 310.058C353.251 297.002 350.496 284.008 347.93 271.054C346.68 264.746 345.367 258.447 344.031 252.151C343.632 250.273 343.463 244.699 342.029 243.416C340.585 242.124 333.219 241.598 330.906 240.65C326.249 238.741 321.869 236.03 317.992 233.165C310.56 227.673 304.095 220.498 298.992 213.424C287.185 197.057 282.465 177.083 282.703 158.127C282.749 154.447 289.875 114.816 287.013 114.271C287.185 114.103 287.348 113.93 287.502 113.75C289.668 116.763 291.795 119.797 293.908 122.836Z" fill="#89C5CC" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M492.312 218.339C492.596 217.999 494.442 215.636 493.512 215.787C495.405 215.479 490.909 218.393 495.625 216.605C493.386 218.362 494.678 220.643 494.708 223.007C494.757 226.846 493.984 230.652 493.113 234.408C491.738 240.345 489.69 246.117 486.716 251.639C480.235 263.673 469.229 275.257 456.164 282.78C449.714 286.495 443.393 287.76 436.036 289.47C431.39 290.55 431.021 292.546 428.555 296.292C423.42 304.092 418.377 311.864 413.848 319.928C408.441 329.557 403.192 339.196 398.24 348.995C381.56 382 367.983 416.193 360.853 451.58C360.679 430.727 366.487 409.249 373.813 389.373C379.149 374.891 386.097 360.931 393.506 347.112C395.302 343.764 398.023 339.458 398.786 335.762C399.32 333.172 397.687 330.682 396.94 327.954C394.026 317.33 394.235 305.429 396.793 294.749C399.614 282.972 407.773 277.506 421.574 275.838C426.622 275.228 433.037 275.451 437.665 273.664C442.708 271.717 444.788 265.318 447.655 261.211C455.356 250.178 464.507 239.596 475.014 230.3C477.923 227.726 481.052 225.351 484.371 223.15C486.464 221.761 490.886 220.05 492.312 218.339Z" fill="#89C5CC" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M333.98 434.931C333.436 431.868 335.792 429.057 338.903 429.057H385.188C388.299 429.057 390.655 431.868 390.111 434.931L387.616 448.985C385.921 458.533 377.621 465.489 367.924 465.489H356.168C346.471 465.489 338.171 458.533 336.476 448.985L333.98 434.931Z" fill="#C1DEE2" />
                </g>
                <g opacity="0.5">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M87.6956 350.579C89.616 348.632 93.1797 343.689 95.8827 342.993C97.6236 342.545 97.116 347.18 97.1375 348.063C97.2212 351.482 96.753 354.879 96.1749 358.269C95.1332 364.383 91.7271 369.828 87.0553 375.031C84.6513 377.709 81.8317 380.419 77.9263 382.09C76.1286 382.859 73.9656 382.988 72.1903 383.651C70.1227 384.422 71.2487 383.799 70.3169 385.33C69.0229 387.457 68.609 390.2 68.0103 392.469C65.2613 402.885 58.6061 457.945 59.7599 468.54C59.8623 469.479 58.0203 469.703 57.9284 468.557C57.4396 462.478 61.6689 420.384 63.8026 406.618C65.9364 392.852 68.0956 380.69 70.2607 375.928C72.8872 370.15 77.6309 363.201 81.5797 357.813C83.4139 355.309 85.4132 352.892 87.6956 350.579Z" fill="#69A1AC" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M101.95 418.095C106.947 415.487 112.356 420.409 107.834 423.018C105.334 424.46 102.721 423.947 101.25 422.745C100.295 423.573 99.4006 424.438 98.5416 425.169C95.9246 427.396 93.4511 429.677 91.0871 432.01C86.1764 436.858 81.968 441.98 77.5678 447.008C73.2254 451.971 68.9177 456.958 64.9818 462.047C61.6475 466.357 57.2033 471.429 56.0618 476.155C57.7938 466.132 64.3661 456.498 72.1926 447.662C79.9553 438.898 88.864 429.327 100.884 422.411C99.6604 421.133 99.6264 419.307 101.95 418.095Z" fill="#C1DEE2" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.12431 393.653C9.92073 394.041 14.4901 398.538 16.7951 400.252C19.5346 402.288 22.0199 404.458 24.3627 406.732C29.4061 411.626 33.9166 416.83 37.752 422.256C44.0048 431.102 49.014 440.183 52.6495 449.816C54.8749 455.713 56.3157 461.825 57.1696 467.894C57.3309 469.039 59.019 477.863 56.5865 478.101C54.3988 478.315 55.0745 471.4 54.969 470.46C53.7759 459.848 50.2019 449.523 45.2304 439.521C44.1476 437.342 43.1416 434.674 41.4098 432.713C40.1628 431.301 41.4009 431.793 39.2093 431.259C37.3275 430.799 35.1834 430.912 33.2563 430.349C29.07 429.129 25.718 426.76 22.7797 424.377C17.0695 419.745 12.5446 414.735 10.1859 408.801C8.87744 405.51 7.67506 402.201 7.0078 398.808C6.8352 397.932 5.32315 393.402 7.12431 393.653Z" fill="#69A1AC" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1598 318.831C28.6933 331.817 37.3494 346.082 42.9386 360.53C46.3251 369.284 48.6933 378.267 51.0463 387.184C54.6895 400.993 58.1356 414.8 59.1159 428.854C60.1021 442.989 62.0522 459.292 55.5412 472.906C58.7935 459.084 55.6971 444.371 55.1488 430.463C54.8868 423.824 54.1276 417.249 53.1317 410.649C52.1652 404.246 50.5863 397.873 49.116 391.521C48.3997 388.427 47.6475 385.337 46.8817 382.25C46.6531 381.329 46.5565 378.595 45.7345 377.966C44.9072 377.333 40.6861 377.074 39.3608 376.61C36.6923 375.674 34.1821 374.344 31.9606 372.939C27.7019 370.246 23.997 366.726 21.0728 363.257C14.307 355.23 11.6021 345.435 11.7388 336.139C11.7651 334.334 15.8483 314.898 14.2084 314.63C14.3072 314.548 14.4006 314.463 14.4886 314.375C15.7302 315.853 16.9485 317.34 18.1598 318.831Z" fill="#89C5CC" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M131.852 365.667C132.014 365.5 133.072 364.341 132.539 364.416C133.624 364.265 131.048 365.694 133.75 364.817C132.467 365.678 133.208 366.797 133.225 367.957C133.253 369.839 132.81 371.706 132.311 373.548C131.523 376.459 130.349 379.29 128.645 381.998C124.931 387.9 118.624 393.581 111.138 397.271C107.441 399.093 103.819 399.713 99.6038 400.551C96.9411 401.081 96.73 402.06 95.3167 403.897C92.3742 407.723 89.4842 411.534 86.8892 415.489C83.7907 420.211 80.7827 424.938 77.9454 429.744C68.3868 445.93 60.607 462.699 56.5212 480.054C56.4212 469.827 59.7493 459.294 63.9474 449.546C67.0055 442.444 70.9865 435.597 75.2327 428.82C76.2616 427.179 77.8209 425.067 78.2578 423.254C78.5638 421.984 77.6284 420.763 77.2001 419.425C75.5304 414.215 75.65 408.378 77.1162 403.14C78.7328 397.365 83.4079 394.684 91.3165 393.866C94.2088 393.567 97.8851 393.676 100.537 392.8C103.427 391.845 104.619 388.707 106.262 386.693C110.675 381.282 115.918 376.092 121.939 371.533C123.606 370.271 125.399 369.106 127.301 368.027C128.501 367.345 131.034 366.506 131.852 365.667Z" fill="#89C5CC" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M41.5401 473.906C41.0161 471.38 42.9448 469.01 45.5247 469.01H68.8843C71.4642 469.01 73.3929 471.38 72.8688 473.906L72.8132 474.174C71.2783 481.572 64.7604 486.877 57.2045 486.877V486.877C49.6486 486.877 43.1306 481.572 41.5958 474.174L41.5401 473.906Z" fill="#C1DEE2" />
                </g>
                <path d="M468.75 35.7328C394.58 32.2822 374.801 112.77 457.624 123.119C462.525 123.731 388.399 78.2755 468.75 35.7328Z" fill="#FFFDFD" fill-opacity="0.56" />
                <rect y="431" width="500" height="69" fill="#8B7878" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M96.5557 290.508C100.095 292.61 103.572 293.625 105.205 293.211C109.298 292.171 109.674 277.422 106.507 271.607C103.34 265.792 87.0582 263.257 86.2375 274.778C85.9527 278.777 87.6572 282.345 90.1757 285.257L85.6599 305.989H98.7772L96.5557 290.508Z" fill="#B28B67" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M101.326 265.274C99.5336 264.736 96.9317 264.553 95.8372 264.676C96.4598 263.207 96.7069 261.57 96.5054 259.976C96.3097 258.427 95.607 257.108 94.9572 255.726C94.6577 255.089 94.3182 254.456 93.8121 253.969C93.2965 253.472 92.6439 253.145 91.9596 252.988C91.2592 252.828 90.5269 252.842 89.8255 252.987C89.5152 253.051 89.2368 253.191 88.9325 253.269C88.6209 253.348 88.4697 253.156 88.2435 252.963C87.6984 252.498 86.8993 252.268 86.2097 252.186C85.436 252.094 84.6331 252.209 83.8952 252.459C83.177 252.703 82.487 253.099 81.9677 253.676C81.7365 253.933 81.5266 254.225 81.3902 254.548C81.3343 254.68 81.3251 254.759 81.1909 254.807C81.0668 254.852 80.9216 254.854 80.7936 254.896C79.5552 255.31 78.4963 256.252 77.9198 257.462C77.5835 258.168 77.4241 259.411 77.4678 260.804C77.5114 262.198 78.7885 265.833 79.9831 267.159C81.0493 268.342 82.6165 269.123 84.129 269.465C83.1251 270.595 82.4568 272.008 81.9626 273.444C81.4258 275.005 81.0936 276.626 80.971 278.278C80.8544 279.847 80.8436 281.507 81.2172 283.043C81.5666 284.48 82.314 285.658 83.5615 286.405C84.133 286.748 84.7478 287.005 85.3662 287.24C85.9757 287.472 86.587 287.697 87.2254 287.827C88.4336 288.073 89.8258 288.031 90.7565 287.084C91.0919 286.742 91.4608 286.313 91.7056 285.896C91.7935 285.746 91.8466 285.648 91.7397 285.501C91.6116 285.326 91.4045 285.191 91.24 285.054C90.3018 284.27 89.721 283.224 89.5746 281.982C89.4261 280.721 89.77 279.093 91.0146 278.543C92.5511 277.863 94.2431 278.643 95.6087 279.37C96.1891 277.352 97.3807 275.536 99.2491 274.61C101.316 273.586 103.688 273.467 105.812 272.588C106.365 272.359 106.929 272.099 107.337 271.633C107.507 271.438 107.707 271.185 107.775 270.927C107.864 270.589 107.642 270.305 107.471 270.041C106.563 268.641 103.118 265.812 101.326 265.274Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M81.834 349.057L101.855 417.011L111.271 468.032H120.723L111.288 349.057H81.834Z" fill="#997659" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M72.8364 349.057C74.2334 384.359 73.6825 403.613 73.3698 406.821C73.0571 410.028 71.2821 431.509 59.1868 469.109H69.0172C85.0356 433.038 90.6274 411.557 92.4646 406.821C94.3018 402.084 99.7278 382.829 107.65 349.057H72.8364Z" fill="#B28B67" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M81.4041 349.057C86.6118 372.44 95.6189 409.766 108.425 461.034H122.249C123.27 408.412 118.927 373.778 111.405 349.057H81.4041Z" fill="#69A1AC" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M72.7667 349.057C74.1348 384.359 70.5891 419.138 59.606 461.583H74.3554C90.4032 426.051 101.905 391.443 109.766 349.057H72.7667Z" fill="#89C5CC" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M57.7856 476.108L58.2498 468.737C58.29 468.099 58.9117 467.661 59.5435 467.759C64.2196 468.482 70.2611 466.418 70.2611 466.418C76.2579 470.602 84.6698 472.721 88.6361 473.54C89.8193 473.785 90.5762 474.985 90.242 476.146L89.788 477.723H70.2611H58.8705L57.7856 476.108Z" fill="#191847" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M109.162 476.108L109.626 468.737C109.666 468.099 110.288 467.661 110.919 467.759C115.596 468.482 121.637 466.418 121.637 466.418C127.634 470.602 136.046 472.721 140.012 473.54C141.195 473.785 141.952 474.985 141.618 476.146L141.164 477.723H121.637H110.246L109.162 476.108Z" fill="#191847" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M128.481 306.898L109.51 317.133L116.516 324.539L130.301 312.107C137.562 310.136 140.883 308.694 140.263 307.781C139.74 307.011 138.897 307.038 138.121 307.063C137.516 307.082 136.951 307.1 136.61 306.739C135.83 305.915 137.318 303.033 138.848 300.358C140.378 297.683 138.742 297.916 137.806 298.301C134.744 300.342 131.636 303.208 128.481 306.898ZM147.555 321.258L139.222 325.767L139.697 334.004C139.697 334.004 145.094 330.168 149.737 328.892C155.657 327.266 158.053 326.025 160.946 322.394C162.494 320.451 163.807 316.546 162.334 315.274C161.769 314.786 159.663 315.939 157.514 317.115C155.877 318.011 154.214 318.921 153.19 319.128C151.811 319.408 151.973 317.648 152.102 316.241C152.194 315.232 152.27 314.405 151.748 314.644C149.309 314.685 147.555 321.258 147.555 321.258Z" fill="#997659" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M100.271 314.852C106.916 314.783 115.777 313.401 125.232 307.489L128.945 315.645C122.423 322.02 113.253 327.258 105.235 327.036C98.9166 326.861 95.6873 319.333 100.271 314.852Z" fill="#2026A2" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M82.3503 370.73C76.0332 369.918 70.2287 369.173 66.7889 369.84C62.9294 357.494 66.1342 349.721 69.0927 342.545C70.8757 338.22 72.5693 334.112 72.5729 329.351C72.5835 315.486 83.886 294.145 85.5489 294.145H86.0263H99.2052H100.714C101.392 302.724 104.286 312.014 107.198 321.363C107.878 323.547 108.559 325.733 109.214 327.915C120.235 330.379 144.707 321.801 144.707 321.801C144.707 321.801 150.885 334.391 150.419 339.752C136.175 347.081 123.966 350.349 113.908 350.565C114.227 356.443 113.501 362.037 111.06 367.148C107.791 373.997 94.1729 372.248 82.3503 370.73Z" fill="#1F28CF" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M373.361 300.749C370.307 303.563 367.081 305.288 365.377 305.216C361.103 305.036 357.58 290.514 359.473 284.102C361.366 277.69 376.941 271.807 380.214 283.041C381.351 286.94 380.426 290.825 378.555 294.229L387.453 313.815L374.469 316.533L373.361 300.749Z" fill="#B28B67" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M380.106 296.587C380.195 289.105 383.787 283.265 382.389 280.221C380.991 277.178 377.753 277.043 377.753 277.043C377.753 277.043 374.799 271.047 366.348 273.805C357.896 276.562 353.377 281.208 357.34 288.521C359.437 288.082 361.808 286.805 365.585 287.352C367.382 287.613 368.783 290.631 368.783 290.631L370.365 290.3C370.365 290.3 371.857 286.057 374.311 286.585C376.764 287.113 376.373 291.215 376.373 291.215L378.423 296.939L380.106 296.587Z" fill="#1C0101" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M416.307 349.795L375.209 417.473L344.397 474.688H337.76L389.386 349.795L416.307 349.795Z" fill="#997659" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M346.041 471.799C347.127 471.384 348.392 471.849 348.759 472.951C349.08 473.916 349.383 475.008 349.383 475.7C349.383 477.174 348.885 480.001 348.885 480.001C347.149 480.001 317.689 480.001 317.689 480.001C317.689 480.001 316.473 476.041 319.093 475.726C321.713 475.41 323.446 475.156 323.446 475.156L337.533 468.97C338.045 468.745 338.642 468.983 338.858 469.499L339.614 471.306C339.614 471.306 342.039 472.42 343.555 472.42C344.23 472.42 345.187 472.126 346.041 471.799Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M352.954 465.526L340.156 461.713C340.156 461.713 348.567 436.946 360.774 407.202C372.98 377.458 386.993 349.795 386.993 349.795H423.141C423.141 349.795 407.562 384.788 390.109 413.386C372.657 441.984 352.954 465.526 352.954 465.526Z" fill="#DB2721" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M419.008 349.795C422.887 373.577 430.368 403.962 431.074 404.9C431.545 405.525 448.49 411.118 481.909 421.678L480.476 427.443C440.623 421.779 419.624 417.385 417.479 414.26C414.261 409.573 398.194 372.547 391.971 349.795H419.008Z" fill="#B28B67" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M470.162 416.695L467.637 425.979C437.829 428.555 419.566 426.694 412.846 420.398C406.126 414.101 398.467 390.567 389.87 349.795H424.339C429.786 383.182 432.831 400.576 433.475 401.978C434.118 403.379 446.347 408.285 470.162 416.695Z" fill="#FF4133" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M479.618 421.644C479.39 420.488 480.082 419.3 481.252 419.136C482.266 418.993 483.399 418.892 484.085 419.011C485.558 419.267 488.298 420.242 488.298 420.242C487.997 421.925 482.881 450.502 482.881 450.502C482.881 450.502 478.711 450.994 478.851 448.398C478.99 445.802 479.036 444.077 479.036 444.077L475.306 429.368C475.166 428.819 475.513 428.262 476.068 428.142L477.995 427.725C477.995 427.725 479.53 425.566 479.793 424.095C479.908 423.457 479.789 422.51 479.618 421.644Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M334.651 353.554L356.105 348.585L355.954 358.965L336.894 358.76C330.034 362.148 326.521 363.285 326.355 362.17C326.216 361.23 326.872 360.682 327.476 360.177C327.947 359.784 328.386 359.417 328.394 358.912C328.41 357.757 325.284 356.558 322.269 355.546C319.253 354.534 320.652 353.609 321.627 353.272C325.36 352.768 329.702 352.862 334.651 353.554ZM453.058 365.379C450.366 362.927 421.96 329.018 421.96 329.018L410.67 333.335C410.67 333.335 445.332 367.526 446.887 369.169C448.906 371.304 448.578 375.638 448.356 378.577C448.322 379.032 448.29 379.453 448.27 379.828C450.208 379.932 450.659 378.75 451.134 377.505C451.671 376.098 452.24 374.609 455.017 374.798C456.089 374.871 457.143 375.039 458.172 375.202C461.728 375.768 464.995 376.287 467.767 372.705C468.207 372.137 468.324 370.581 466.398 370.127C461.599 368.998 454.374 366.577 453.058 365.379Z" fill="#997659" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M377.224 305.407L368.598 309.335C373.989 329.589 366.896 346.352 338.687 352.25L344.906 378.607C370.99 372.374 388.966 354.333 383.092 326.109C381.572 318.803 379.699 311.309 377.224 305.407Z" fill="#AFB9C5" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M449.543 360.925C430.843 331.036 408.157 311.02 381.486 300.876L380.637 301.197L380.608 301.208L380.604 301.219L368.37 309.316C374.555 325.187 375.591 338.4 376.588 351.104C377.019 356.59 377.442 361.981 378.269 367.45L414.494 353.753C417.254 359.333 419.88 365.148 422.418 371.181L449.543 360.925Z" fill="#C5CFD6" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M414.494 353.754C408.875 342.393 402.698 332.007 395.57 322.744C400.586 333.636 406.161 347.392 407.131 356.538L414.494 353.754Z" fill="black" fill-opacity="0.1" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M263.87 304.024C265.693 307.56 268.034 310.168 269.6 310.655C273.527 311.878 281.57 299.882 282.001 293.466C282.432 287.051 270.307 276.676 263.59 285.778C261.258 288.938 260.796 292.753 261.351 296.44L246.752 311.274L257.591 317.945L263.87 304.024Z" fill="#B28B67" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M286.151 289.751C284.644 292.127 281.521 292.904 279.062 291.564C277.437 291.14 275.495 290.367 273.473 289.301C273.219 290.115 272.819 290.97 272.25 291.866C271.748 292.657 271.128 293.441 270.424 294.193C270.316 293.441 269.957 292.773 269.386 292.422C267.788 291.438 265.855 292.048 264.983 293.423C263.876 295.167 264.098 297.059 265.527 298.078C262.571 299.792 259.498 300.562 257.64 299.419C254.113 297.248 254.552 291.059 257.72 286.064C257.832 285.888 257.946 285.716 258.062 285.548C256.356 285.62 254.579 285.997 252.788 286.376C248.984 287.183 245.121 288.002 241.764 285.936C235.047 281.801 240.845 266.814 250.23 272.591C256.613 276.519 259.171 279.368 261.016 282.388C262.49 281.235 264.094 280.49 265.641 280.232C266.049 280.114 266.577 280.086 267.2 280.142C267.588 280.164 267.968 280.222 268.337 280.316C270.343 280.729 272.971 281.767 275.668 283.301C276.172 283.588 276.659 283.881 277.128 284.178C278.69 281.732 281.967 280.991 284.457 282.523C286.951 284.058 287.71 287.294 286.151 289.751Z" fill="#191847" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M202.464 403.807C202.464 403.807 221.627 409.086 235.53 409.086C249.434 409.086 261.358 400.956 261.358 400.956C261.358 400.956 242.606 395.537 230.471 395.537C218.337 395.537 202.464 403.807 202.464 403.807Z" fill="#1F28CF" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M246.589 414.16C246.466 413.977 246.362 413.779 246.28 413.564C244.572 409.116 217.22 361.129 214.495 352.355H245.29C247.361 359.026 256.686 400.886 257.999 409.238C262.139 422.412 270.665 465.078 271.753 468.034C272.898 471.143 266.456 474.382 264.739 470.56C262.008 464.477 255.5 447.647 252.602 437.371C249.885 427.737 247.673 419.07 246.589 414.16Z" fill="#997659" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M221.395 420.018C208.89 423.132 163.15 428.76 160.011 429.642C156.782 430.55 153.951 423.995 157.942 422.575C164.293 420.315 181.792 415.094 192.401 412.964C200.935 411.25 208.722 409.852 213.95 409.033C213.507 394.567 211.482 359.853 212.809 352.355H240.057C238.784 359.545 228.027 412.006 226.028 417.257C225.393 419.131 223.5 419.96 221.395 420.018V420.018Z" fill="#B28B67" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M158.846 423.187C159.069 422.031 158.378 420.842 157.208 420.681C156.252 420.55 155.204 420.461 154.561 420.573C153.142 420.819 150.504 421.757 150.504 421.757C150.794 423.378 155.72 450.893 155.72 450.893C155.72 450.893 159.735 451.367 159.601 448.867C159.467 446.367 159.422 444.706 159.422 444.706L163.005 430.582C163.144 430.033 162.797 429.476 162.242 429.356L160.425 428.962C160.425 428.962 158.946 426.883 158.693 425.467C158.586 424.872 158.69 424 158.846 423.187Z" fill="#363636" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M265.183 469.854C264.096 469.444 262.83 469.907 262.466 471.01C262.167 471.92 261.891 472.933 261.891 473.582C261.891 475 262.371 477.722 262.371 477.722C264.042 477.722 292.407 477.722 292.407 477.722C292.407 477.722 293.578 473.91 291.055 473.606C288.533 473.302 286.864 473.057 286.864 473.057L273.335 467.116C272.823 466.891 272.226 467.13 272.011 467.646L271.297 469.35C271.297 469.35 268.962 470.423 267.502 470.423C266.872 470.423 265.986 470.157 265.183 469.854Z" fill="#363636" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M212.898 352.356C212.898 352.356 230.908 347.281 246.98 352.356C250.708 369.109 259.766 375.758 261.358 401.443C243.252 410.304 220.886 395.123 202.247 403.764C196.921 391.677 204.377 362.566 212.898 352.356Z" fill="#2B44FF" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M282.005 382.274L273.195 363.416L265.41 369.62L276.741 383.662C278.193 390.748 279.39 394.025 280.333 393.494C281.128 393.046 281.159 392.237 281.187 391.492C281.209 390.911 281.23 390.369 281.609 390.067C282.476 389.377 285.218 390.997 287.754 392.643C290.289 394.29 290.171 392.708 289.855 391.786C288.048 388.716 285.431 385.545 282.005 382.274ZM191.328 370.548C193.919 368.188 209.939 341.689 209.939 341.689L220.313 345.657C220.313 345.657 198.766 372.616 197.27 374.198C195.326 376.253 195.641 380.427 195.855 383.256C195.888 383.694 195.918 384.1 195.938 384.461C194.072 384.56 193.638 383.423 193.18 382.224C192.663 380.869 192.116 379.436 189.442 379.618C188.409 379.688 187.394 379.849 186.403 380.007C182.98 380.551 179.835 381.051 177.165 377.603C176.742 377.056 176.629 375.557 178.484 375.121C183.104 374.033 190.061 371.702 191.328 370.548Z" fill="#B28B67" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M256.199 309.909L260.781 310.808C261.085 331.819 267.559 353.253 280.201 375.111L259.765 386.519C249.583 358.354 246.737 332.19 256.199 309.909Z" fill="#191847" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M216.72 356.039L255.002 370.514C255.002 370.514 254.115 333.622 262.794 311.352L251.907 305.291C237.228 316.237 227.767 332.968 216.72 356.039Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M193.021 365.621C215.339 320.68 251.653 305.196 251.653 305.196L251.659 305.208C251.662 305.206 251.664 305.204 251.667 305.201L252.42 305.486C253.756 306.044 256.477 307.21 256.477 307.21L256.207 316.12C251.051 330.652 238.814 375.972 238.814 375.972L213.757 366.498C213.021 368.51 212.327 370.57 211.68 372.676L193.021 365.621Z" fill="#2F3676" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M213.686 366.691C216.873 357.923 220.837 350.057 225.021 343.165C222.289 352.188 219.606 363.273 220.667 369.33L213.686 366.691Z" fill="black" fill-opacity="0.1" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M225.147 353.608L239.729 352.62L237.521 358.286L225.147 353.608Z" fill="white" fill-opacity="0.2" />
                <defs>
                    <linearGradient id="paint0_linear_1061_4071" x1="250" y1="0" x2="250" y2="500" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0084E4" />
                        <stop offset="1" stop-color="#9AEFFB" />
                    </linearGradient>
                </defs>
            </g>
        </svg></>)
}