import Blocks from "@/components/blocks";
import QBezierDemo from "@/components/qbezierdemo";
import CBezierDemo from "@/components/cbezierdemo";
import TBezierDemo from "@/components/tbezierdemo";
import SBezierDemo from "@/components/sbezierdemo";

const Paths = () => {
  return (
    <>
      <h1>Paths</h1>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/xxoygPy"}
        target="_blank"
      >
        {"codepen practice page"}
      </a>

      <h2>The path element</h2>

      <p>
        The SVG <strong>&lt;path&gt;</strong> element is a versatile and
        powerful tool for creating complex shapes and curves. It utilizes a
        series of commands and coordinates within it's <strong>d</strong>{" "}
        attribute, and can be used to create virtually any shape, making it the
        most powerful and versatile of the shape elements.
      </p>

      <svg width="600" height="600" viewBox="0 0 800 800" fill="none">
        <g>
          <rect width="800" height="800" fill="white" />
          <rect width="800" height="800" fill="url(#paint0_linear_814_337)" />
          <g opacity="0.5">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M410.17 172.928C418.002 164.276 432.537 142.301 443.561 139.209C450.661 137.218 448.591 157.817 448.678 161.745C449.02 176.942 447.11 192.042 444.752 207.111C440.504 234.288 426.612 258.491 407.559 281.621C397.755 293.523 386.255 305.57 370.327 312.996C362.995 316.416 354.173 316.988 346.933 319.935C338.5 323.365 343.093 320.592 339.293 327.4C334.015 336.852 332.327 349.047 329.885 359.132C318.674 405.431 291.531 650.18 296.236 697.275C296.654 701.449 289.142 702.447 288.767 697.351C286.773 670.331 304.022 483.218 312.724 422.026C321.427 360.835 330.233 306.775 339.063 285.605C349.775 259.921 369.122 229.034 385.227 205.082C392.708 193.955 400.862 183.211 410.17 172.928Z"
              fill="#69A1AC"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M468.305 473.044C488.686 461.451 510.747 483.33 492.304 494.924C482.109 501.333 471.45 499.053 465.45 493.713C461.554 497.391 457.908 501.238 454.405 504.487C443.732 514.387 433.644 524.524 424.003 534.897C403.974 556.446 386.811 579.213 368.865 601.563C351.155 623.622 333.586 645.793 317.534 668.41C303.935 687.573 285.81 710.116 281.154 731.124C288.218 686.57 315.023 643.746 346.942 604.469C378.602 565.514 414.936 522.971 463.957 492.229C458.968 486.544 458.829 478.43 468.305 473.044Z"
              fill="#C1DEE2"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M81.5658 364.397C92.9708 366.126 111.607 386.115 121.008 393.731C132.18 402.781 142.317 412.428 151.871 422.535C172.441 444.291 190.836 467.422 206.479 491.543C231.98 530.865 252.41 571.231 267.237 614.051C276.313 640.263 282.189 667.43 285.672 694.408C286.33 699.495 293.215 738.722 283.294 739.779C274.372 740.731 277.127 709.994 276.697 705.813C271.831 658.643 257.255 612.747 236.979 568.288C232.563 558.602 228.46 546.74 221.397 538.024C216.311 531.746 221.361 533.936 212.422 531.56C204.747 529.519 196.003 530.017 188.143 527.519C171.07 522.094 157.399 511.563 145.415 500.97C122.127 480.383 103.672 458.111 94.0522 431.732C88.7158 417.106 83.812 402.394 81.0907 387.316C80.3867 383.418 74.2199 363.284 81.5658 364.397Z"
              fill="#69A1AC"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M126.573 31.8063C169.533 89.5305 204.836 152.939 227.632 217.162C241.443 256.074 251.102 296.004 260.698 335.645C275.557 397.024 289.612 458.399 293.609 520.868C297.632 583.7 305.585 656.169 279.03 716.686C292.294 655.245 279.666 589.846 277.43 528.023C276.362 498.51 273.265 469.286 269.203 439.945C265.262 411.483 258.822 383.157 252.825 354.919C249.904 341.166 246.837 327.435 243.713 313.71C242.781 309.616 242.387 297.465 239.034 294.668C235.66 291.852 218.445 290.705 213.04 288.639C202.156 284.478 191.919 278.567 182.858 272.322C165.49 260.35 150.38 244.707 138.453 229.287C110.86 193.606 99.8277 150.064 100.385 108.741C100.492 100.719 117.146 14.3248 110.457 13.1351C110.86 12.7697 111.241 12.3924 111.6 12C116.664 18.5686 121.633 25.1817 126.573 31.8063Z"
              fill="#89C5CC"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M590.258 240.001C590.921 239.26 595.235 234.108 593.063 234.438C597.486 233.767 586.979 240.119 598 236.222C592.767 240.051 595.787 245.025 595.857 250.178C595.971 258.546 594.164 266.844 592.13 275.032C588.916 287.974 584.128 300.557 577.179 312.595C562.032 338.828 536.311 364.082 505.776 380.482C490.702 388.58 475.929 391.337 458.737 395.065C447.877 397.42 447.016 401.772 441.252 409.936C429.251 426.941 417.465 443.885 406.881 461.463C394.244 482.454 381.976 503.467 370.404 524.827C331.42 596.777 299.691 671.319 283.028 748.462C282.62 703.001 296.193 656.181 313.315 612.85C325.787 581.28 342.023 550.848 359.341 520.723C363.537 513.425 369.897 504.037 371.679 495.98C372.926 490.335 369.112 484.906 367.365 478.959C360.555 455.8 361.043 429.855 367.022 406.573C373.616 380.9 392.683 368.984 424.938 365.347C436.734 364.017 451.727 364.505 462.543 360.608C474.328 356.364 479.189 342.416 485.89 333.462C503.889 309.41 525.274 286.342 549.83 266.076C556.63 260.465 563.942 255.287 571.699 250.488C576.591 247.461 586.924 243.731 590.258 240.001Z"
              fill="#89C5CC"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M218.916 705.298C218.329 702.217 220.691 699.363 223.828 699.363H347.802C350.938 699.363 353.3 702.217 352.714 705.298L341.821 762.524C340.025 771.959 331.777 778.785 322.174 778.785H249.456C239.852 778.785 231.604 771.959 229.809 762.524L218.916 705.298Z"
              fill="#C1DEE2"
            />
          </g>
          <g opacity="0.5">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M664.408 300.114C669.771 293.763 679.721 277.635 687.268 275.366C692.129 273.904 690.712 289.023 690.772 291.906C691.006 303.06 689.698 314.143 688.084 325.203C685.176 345.149 675.665 362.913 662.621 379.89C655.909 388.625 648.036 397.467 637.131 402.917C632.112 405.427 626.072 405.848 621.115 408.01C615.342 410.528 618.486 408.493 615.885 413.489C612.272 420.427 611.116 429.377 609.444 436.779C601.769 470.761 583.186 650.395 586.408 684.96C586.694 688.024 581.551 688.756 581.294 685.016C579.929 665.185 591.738 527.852 597.696 482.94C603.653 438.029 609.682 398.352 615.728 382.813C623.061 363.963 636.307 341.293 647.332 323.714C652.454 315.547 658.036 307.661 664.408 300.114Z"
              fill="#69A1AC"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M704.209 520.386C718.162 511.877 733.265 527.935 720.639 536.445C713.659 541.149 706.362 539.475 702.254 535.556C699.587 538.256 697.091 541.079 694.693 543.463C687.386 550.73 680.479 558.17 673.879 565.783C660.167 581.599 648.417 598.309 636.131 614.713C624.006 630.903 611.978 647.176 600.989 663.776C591.679 677.84 579.27 694.386 576.083 709.804C580.919 677.104 599.27 645.673 621.122 616.845C642.797 588.254 667.672 557.03 701.232 534.467C697.817 530.294 697.722 524.339 704.209 520.386Z"
              fill="#C1DEE2"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M439.441 440.643C447.249 441.912 460.008 456.583 466.444 462.173C474.093 468.815 481.032 475.895 487.573 483.314C501.655 499.281 514.249 516.258 524.959 533.962C542.417 562.823 556.404 592.45 566.555 623.877C572.768 643.116 576.791 663.055 579.176 682.855C579.626 686.59 584.339 715.38 577.547 716.156C571.439 716.854 573.326 694.295 573.031 691.226C569.7 656.606 559.721 622.921 545.839 590.289C542.816 583.181 540.007 574.474 535.172 568.077C531.69 563.47 535.147 565.076 529.028 563.333C523.773 561.834 517.786 562.201 512.406 560.367C500.717 556.385 491.358 548.656 483.153 540.881C467.21 525.771 454.575 509.425 447.99 490.064C444.336 479.329 440.979 468.531 439.116 457.464C438.634 454.604 434.412 439.826 439.441 440.643Z"
              fill="#69A1AC"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M470.254 196.537C499.665 238.904 523.834 285.443 539.44 332.58C548.895 361.139 555.508 390.446 562.078 419.54C572.25 464.59 581.872 509.636 584.609 555.486C587.363 601.601 592.808 654.79 574.628 699.207C583.709 654.112 575.064 606.112 573.533 560.737C572.801 539.076 570.681 517.627 567.901 496.092C565.202 475.202 560.794 454.412 556.688 433.687C554.688 423.593 552.588 413.514 550.45 403.441C549.811 400.436 549.542 391.518 547.246 389.465C544.936 387.399 533.151 386.556 529.45 385.04C521.999 381.986 514.991 377.648 508.788 373.064C496.897 364.277 486.552 352.796 478.387 341.478C459.496 315.291 451.944 283.332 452.325 253.004C452.399 247.115 463.8 183.706 459.221 182.833C459.497 182.565 459.757 182.288 460.003 182C463.47 186.821 466.872 191.675 470.254 196.537Z"
              fill="#89C5CC"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M787.7 349.343C788.154 348.799 791.107 345.018 789.62 345.26C792.648 344.768 785.455 349.43 793 346.569C789.417 349.38 791.485 353.031 791.533 356.813C791.611 362.954 790.374 369.045 788.981 375.054C786.781 384.553 783.503 393.789 778.745 402.624C768.375 421.877 750.767 440.413 729.862 452.45C719.542 458.393 709.428 460.417 697.658 463.153C690.224 464.881 689.634 468.076 685.688 474.068C677.472 486.549 669.403 498.984 662.157 511.886C653.506 527.292 645.107 542.715 637.185 558.392C610.495 611.201 588.773 665.91 577.365 722.53C577.086 689.164 586.378 654.8 598.1 622.997C606.639 599.826 617.754 577.49 629.61 555.38C632.483 550.024 636.837 543.134 638.057 537.22C638.911 533.077 636.299 529.092 635.104 524.727C630.442 507.73 630.775 488.687 634.869 471.599C639.383 452.756 652.437 444.011 674.519 441.342C682.595 440.365 692.859 440.723 700.264 437.863C708.332 434.748 711.66 424.511 716.248 417.939C728.57 400.286 743.211 383.356 760.022 368.481C764.677 364.363 769.683 360.563 774.994 357.041C778.343 354.818 785.418 352.081 787.7 349.343Z"
              fill="#89C5CC"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M533.743 692.366C533.199 689.303 535.555 686.492 538.666 686.492H619.881C622.992 686.492 625.347 689.303 624.804 692.366L618.427 728.28C616.732 737.827 608.432 744.783 598.735 744.783H559.811C550.114 744.783 541.814 737.827 540.119 728.28L533.743 692.366Z"
              fill="#C1DEE2"
            />
          </g>
          <g opacity="0.5">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M140.313 560.926C143.386 557.811 149.088 549.901 153.412 548.788C156.198 548.072 155.386 555.486 155.42 556.9C155.554 562.37 154.805 567.806 153.88 573.23C152.213 583.012 146.763 591.724 139.289 600.049C135.442 604.334 130.931 608.67 124.682 611.343C121.806 612.574 118.345 612.78 115.504 613.84C112.196 615.075 113.998 614.077 112.507 616.527C110.437 619.93 109.774 624.319 108.817 627.949C104.418 644.614 93.7698 732.711 95.6158 749.663C95.7797 751.165 92.8325 751.525 92.6854 749.69C91.9034 739.965 98.6702 672.614 102.084 650.588C105.498 628.562 108.953 609.103 112.417 601.483C116.62 592.238 124.21 581.121 130.528 572.499C133.462 568.494 136.661 564.627 140.313 560.926Z"
              fill="#69A1AC"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M163.12 668.952C171.115 664.779 179.77 672.654 172.535 676.827C168.535 679.134 164.354 678.314 162 676.391C160.471 677.715 159.041 679.1 157.667 680.269C153.479 683.833 149.522 687.482 145.74 691.215C137.882 698.972 131.149 707.167 124.109 715.212C117.161 723.152 110.268 731.132 103.971 739.273C98.6361 746.171 91.5255 754.285 89.699 761.847C92.4702 745.81 102.986 730.395 115.508 716.258C127.929 702.236 142.183 686.923 161.414 675.857C159.457 673.811 159.402 670.89 163.12 668.952Z"
              fill="#C1DEE2"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.3989 629.845C15.8732 630.467 23.1841 637.662 26.8722 640.403C31.2553 643.661 35.2319 647.133 38.9803 650.771C47.0498 658.602 54.2665 666.928 60.4032 675.61C70.4076 689.764 78.4225 704.294 84.2392 719.707C87.7998 729.142 90.1051 738.92 91.4714 748.631C91.7294 750.462 94.4304 764.582 90.5385 764.962C87.0381 765.305 88.1192 754.241 87.9504 752.736C86.0415 735.758 80.323 719.238 72.3687 703.234C70.6361 699.748 69.0265 695.478 66.2558 692.341C64.2604 690.081 66.2414 690.869 62.7349 690.014C59.7239 689.28 56.2934 689.459 53.2101 688.56C46.512 686.607 41.1488 682.816 36.4475 679.003C27.3113 671.593 20.0713 663.577 16.2974 654.081C14.2039 648.817 12.2801 643.521 11.2125 638.094C10.9363 636.691 8.51705 629.444 11.3989 629.845Z"
              fill="#69A1AC"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29.0556 510.129C45.9093 530.907 59.7589 553.731 68.7017 576.848C74.12 590.854 77.9092 605.226 81.674 619.495C87.5032 641.589 93.017 663.68 94.5854 686.166C96.1633 708.782 99.2835 734.867 88.8658 756.65C94.0695 734.534 89.1153 710.994 88.2381 688.741C87.8189 678.118 86.6041 667.599 85.0106 657.038C83.4643 646.793 80.938 636.597 78.5855 626.433C77.4395 621.483 76.236 616.54 75.0107 611.6C74.6448 610.126 74.4903 605.753 73.1751 604.746C71.8514 603.732 65.0977 603.319 62.9773 602.575C58.7076 601.078 54.6914 598.95 51.1369 596.702C44.323 592.393 38.3952 586.762 33.7165 581.212C22.8912 568.369 18.5633 552.696 18.782 537.822C18.8241 534.934 25.3573 503.837 22.7334 503.409C22.8914 503.277 23.0409 503.141 23.1818 503C25.1682 505.364 27.1175 507.745 29.0556 510.129Z"
              fill="#89C5CC"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M210.963 585.068C211.223 584.802 212.915 582.947 212.063 583.066C213.798 582.825 209.676 585.111 214 583.708C211.947 585.086 213.132 586.877 213.159 588.732C213.204 591.744 212.495 594.731 211.697 597.678C210.436 602.336 208.558 606.865 205.832 611.198C199.889 620.641 189.799 629.731 177.82 635.634C171.906 638.549 166.111 639.541 159.366 640.883C155.106 641.731 154.768 643.297 152.507 646.236C147.799 652.357 143.175 658.456 139.023 664.783C134.065 672.339 129.252 679.902 124.713 687.591C109.419 713.489 96.9711 740.32 90.4339 768.088C90.2739 751.724 95.5989 734.871 102.316 719.275C107.209 707.911 113.578 696.957 120.372 686.114C122.019 683.487 124.513 680.108 125.212 677.207C125.702 675.175 124.205 673.221 123.52 671.081C120.849 662.745 121.04 653.406 123.386 645.025C125.972 635.784 133.453 631.495 146.106 630.186C150.734 629.708 156.616 629.883 160.859 628.481C165.483 626.953 167.39 621.932 170.019 618.709C177.08 610.052 185.469 601.749 195.103 594.454C197.77 592.434 200.639 590.571 203.682 588.843C205.601 587.754 209.655 586.411 210.963 585.068Z"
              fill="#89C5CC"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M66.0871 756.43C65.4432 753.326 67.813 750.415 70.9829 750.415H112.072C115.241 750.415 117.611 753.326 116.967 756.43L115.591 763.065C113.665 772.347 105.488 779.002 96.008 779.002H87.0465C77.5667 779.002 69.3891 772.347 67.4635 763.065L66.0871 756.43Z"
              fill="#C1DEE2"
            />
          </g>
          <path
            d="M750 57.1724C631.328 51.6515 599.682 180.433 732.198 196.99C740.039 197.97 621.439 125.241 750 57.1724Z"
            fill="#FFFDFD"
            fillOpacity="0.56"
          />
          <rect y="731" width="800" height="69" fill="#8B7878" />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_814_337"
            x1="400"
            y1="0"
            x2="400"
            y2="800"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0084E4" />
            <stop offset="1" stopColor="#9AEFFB" />
          </linearGradient>
        </defs>
      </svg>

      <h2>the d attribute</h2>

      <p>
        The <strong>d</strong> attribute is where all the magic happens. It
        contains numbers, which represent coordinates and distances, and
        letters, which specify the type of command. In this chapter I'll explain
        what these commands mean, and how they can be used.
      </p>

      <Blocks>{`<path d="M 397,319 c 0,177 -80,316 -178,319 C 90,643 -78,515 40,319 131,168 120,0 219,0 c 98,0 178,143 178,319 Z" fill="#EDE9E9"/>`}</Blocks>

      <h3>M or m - moveTo</h3>

      <p>
        The "M" command stands for <strong>moveto</strong>, and is used
        designate the starting point of the path.
      </p>

      <Blocks>{`<path d="M 100,100" />`}</Blocks>

      <p>
        In the example below, the starting point of the path is{" "}
        <strong>100,100</strong>. The <strong>M</strong> is always the first
        command. It can also be used throughout the path, wherever you wish to
        "pick up" your pen and start drawing from a different point.
      </p>

      <img src="/path_commands_M.png" alt="path commands M" />

      <h3>L or l - lineTo</h3>

      <p>
        This command draws a line from the previous point to the designated
        coordinate
      </p>

      <p>
        In the example below, we can draw to the <strong>absolute</strong> point
        of <strong>L 400,100</strong>, or we can use a <strong>relative</strong>{" "}
        path with <strong>l 300, 0</strong> (300 to the right and 0 down). We get
        the same result either way.
      </p>

      <ul>
        <li>
          <strong>L</strong> - draws a line to the <strong>absolute</strong>{" "}
          coordinate that follows the command.
        </li>
        <li>
          <strong>l</strong> - draws a line to the <strong>relative</strong>{" "}
          coordinate that follows the command.
        </li>
      </ul>

      <Blocks caption={"absolute path"}>{`<path
d="M 100,100 L400,100" />`}</Blocks>

      <Blocks caption={"relative path"}>{`<path
d="M 100,100 l300,0" />`}</Blocks>

      <img src="/path_commands_lineTo.png" alt="path commands lineTo" />

      <h3>V or v - vertical line</h3>

      <p>Draws a vertical line to the designated y position.</p>

      <p>
        In the example below we're drawing a vertical line to the{" "}
        <strong>absolute</strong> y position of 400 or the{" "}
        <strong>relative</strong> y position of 300 (300 down from the previous
        point)
      </p>

      <ul>
        <li>
          <strong>V</strong> - draws a line to an <strong>absolute</strong> y
          position.
        </li>
        <li>
          <strong>v</strong> - draws a line to an <strong>relative</strong> y
          position.
        </li>
      </ul>

      <Blocks caption={"absolute path"}>{`<path
d="... L400,100 V400" />`}</Blocks>

      <Blocks caption={"absolute path"}>{`<path
d="... L400,100 v300" />`}</Blocks>

      <img src="/path_commands_V.png" alt="path commands V" />

      <h3>H or h - horizontal line</h3>

      <p>Draws a horizontal line to the designated x position.</p>

      <p>
        In the example below we're drawing a horizontal line to the{" "}
        <strong>absolute</strong> x position of 100 or the{" "}
        <strong>relative</strong> x position of -300 (300 to the left of the
        previous point)
      </p>

      <ul>
        <li>
          <strong>H</strong> - draws a line to an <strong>absolute</strong> x
          position.
        </li>
        <li>
          <strong>h</strong> - draws a line to an <strong>relative</strong> x
          position.
        </li>
      </ul>

      <Blocks caption={"absolute path"}>{`<path
d="...  V400 H100" />`}</Blocks>

      <Blocks caption={"absolute path"}>{`<path
d="... v300 h-300" />`}</Blocks>

      <img src="/path_commands_H.png" alt="path commands H" />

      <h3>Z or z - close path</h3>

      <p>
        The z command draws a line from the "current" point to the start point,
        closing the path.
      </p>

      <ul>
        <li>
          <strong>Z or z</strong> - closes the path
        </li>
      </ul>

      <Blocks>{`<path
d="...  H100 Z" />`}</Blocks>

      <Blocks>{`<path
d="...  h-300 z" />`}</Blocks>

      <img src="/path_commands_Z.png" alt="path commands Z" />

      <h3>Bezier curves</h3>

      <p>
        The bezier curve commands uses a mathmatical function to create smooth,
        continuous curves from a <strong>start point</strong>, an{" "}
        <strong>end point</strong>, and one or two <strong>control points</strong>{" "}
        that define the shape of the curve.
      </p>

      <p>
        The actual bezier curve math is beyond the scope of this course, but you
        can think of the control point as exerting a gravitational force that
        bends the line.
      </p>

      <h3>Q or q - Quadratic Bezier curve</h3>

      <img src="/paths_bezier_intro.png" alt="paths bezier intro" />

      <p>
        Above is an example of a Quadratic Bezier curve, where a{" "}
        <strong>start point</strong>, an <strong>end point</strong>, and a
        single <strong>control point</strong> is used to bend the line.
      </p>

      <p>
        The start point is the coordinate before the Q (50, 250). The value pair
        after the <strong>Q</strong> (250, 120) is the control point. The
        capital <strong>Q</strong> signifies that the point is an absolute
        coordinate. The end point is the point that follows the control point
        (450,250)
      </p>

      <Blocks>{`<path
d="M 0,250 L 50,250 Q 250,120 450,250 L 500,250"
stroke="black"
fill="none"/>`}</Blocks>

      <p>
        Here's the same line using the lower case <strong>q</strong>, which uses
        relative positioning. With relative positioning the control point (200,
        -130) and the end point (400, 0) are described in terms of their
        distance (dx, dy) from the start point of the curve (50, 250). So the
        control point is 200 units to the right and -120 units up from the start
        point, and the end point is 400 units to the right and 0 units up from
        the start point.
      </p>

      <Blocks>{`<path
d="M 0,250 L 50,250 q 200,-130 400,0 L 500,250"
stroke="black"
fill="none"/>`}</Blocks>

      <img src="/paths_bezier_q.png" alt="paths bezier q" />

      <h3>Interactive Demo - Quadratic Bezier</h3>

      <QBezierDemo />

      <h3>C or c - cubic bezier curves</h3>

      <p>
        Cubic bezier curves use two control points to bend a line. The
        coordinate right before the <strong>C</strong> (50, 250) represents the
        start point of the curve. The two points after the <strong>C</strong>{" "}
        (200,125 and 300,425) represent the absolute coordinates of the control
        points, which are followed by the end point (450, 250) of the curve. The
        capital <strong>C</strong> signifies that the control points are
        absolute coordinates.
      </p>

      <Blocks>{`<path
d="M 0,250 L 50,250 C 200,125 300,425 450,250 L 500,250"
stroke="black"
fill="none"/>`}</Blocks>

      <p>
        And here is the same line using the lower case <strong>c</strong>, which
        uses relative positioning from the start point (50, 250) for the two
        control points( dx:150, dy:-125 and dx:250, dy:175) and the end point
        (dx:400, dy:0)
      </p>

      <Blocks>{`<path
d="M 0,250 L 50,250 c 150,-125 250,175 400,0 L 500,250"
stroke="black"
fill="none"/>`}</Blocks>

      <img src="/paths_bezier_C.png" alt="paths bezier C" />

      <h3>Interactive Demo - Cubic Bezier</h3>

      <CBezierDemo />

      <h3>T or t - smooth quadratic curves</h3>

      <p>
        The smooth quadratic command (T or t) draws a quadratic curve from the{" "}
        <strong>current point</strong> (the point prior to the command - in the
        example below, 250,250) to the point after the command, using an{" "}
        <strong>implied</strong> control point that is the REFLECTION of the{" "}
        <strong>previous control</strong> point (125, 100). So an implied
        control point that is the reflection of the prior control point would be
        375, 400.
      </p>

      <ul>
        <li>
          <strong>control point</strong> - the point directly after the{" "}
          <strong>Q</strong> (125,100).
        </li>
        <li>
          <strong>current point</strong> - the point after the control point and
          before the <strong>T</strong> (250,250).
        </li>
        <li>
          <strong>T</strong> - creates an <strong>implied</strong> control point
          that is the <strong>reflection</strong> of the control point.
        </li>
      </ul>

      <Blocks>{`<path
  d="M 0,250 Q 125,100 250,250 T 500,250"
  stroke="black"
  fill="none" />`}</Blocks>

      <p>Here's the same curve with the implied point written out:</p>

      <Blocks>{`<path
  d="M 0,250 Q 125,100 250,250 Q 375,400 500,250"
  stroke="black"
  fill="none" />`}</Blocks>

      <img src="/paths_bezier_T.png" alt="paths bezier T" />

      <h3>Interactive Demo - Smooth Quadratic</h3>

      <TBezierDemo />

      <h3>Smooth Cubic</h3>

      <p>
        The smooth cubic command (S or s) draws a cubic curve from the{" "}
        <strong>current</strong> point to the cubic control point{" "}
        <strong>after</strong> the command, assuming a cubic control point that
        is the reflection of the previous cubic control point.
      </p>

      <p>cubic control point - current point - (implied point) - control point</p>

      <Blocks>{`<path
  d="M 0,250 C 25,100 225,100 250,250 S 475,400 500,250"
  stroke="black"
  fill="none"/>`}</Blocks>

      <img src="/paths_bezier_S.png" alt="paths bezier S" />

      <h3>Interactive Demo - Smooth Cubic</h3>

      <SBezierDemo />
    </>
  );
};

export default Paths;
