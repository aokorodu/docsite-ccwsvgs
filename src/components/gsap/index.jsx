"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./gsap.module.scss";
import "./gsap.css";

export const GsapDemo = () => {
  let textTween = null;

  useGSAP(() => {
    animate();
    spinCycle();
  }); // <-- scope for selector text (optional)

  const animate = () => {
    // creative-coding
    const dur = 0.7;
    const overlap = 0.55;
    textTween = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
    textTween
      .fromTo(
        "#creative-coding",
        { attr: { transform: "translate(-500,135)", opacity: 0 } },
        {
          attr: { transform: "translate(250,135)", opacity: 1 },
          duration: dur,
          ease: "back",
        },
      )
      .fromTo(
        "#s",
        {
          attr: {
            transform: "translate(-200,0), scale(.01) rotate(0)",
            opacity: 0,
          },
        },
        {
          attr: {
            transform: "translate(0,0), scale(1) rotate(720)",
            opacity: 1,
          },
          duration: dur,
          ease: "back",
        },
        `-=${overlap}`,
      )
      .fromTo(
        "#v",
        { attr: { transform: "scale(.01)", opacity: 0 } },
        {
          attr: { transform: "scale(1)", opacity: 1 },
          duration: dur,
          ease: "back",
        },
        `-=${overlap}`,
      )
      .fromTo(
        "#g",
        {
          attr: {
            transform: "translate(200,0), scale(.01) rotate(720)",
            opacity: 0,
          },
        },
        {
          attr: { transform: "translate(0,0),scale(1) rotate(0)", opacity: 1 },
          duration: dur,
          ease: "back",
        },
        `-=${overlap}`,
      )
      .fromTo(
        "#small-s",
        { attr: { transform: "scale(.01)", opacity: 0 } },
        {
          attr: { transform: "scale(1)", opacity: 1 },
          duration: dur,
          ease: "back",
        },
        `-=${overlap}`,
      )
      .fromTo(
        ".zuubaDigital",
        { attr: { transform: "translate(0,20)", opacity: 0 } },
        {
          attr: { transform: "translate(0,0)", opacity: 1 },
          duration: dur,
          stagger: 0.1,
        },
      );
  };

  const spinCycle = () => {
    gsap.to(".wave", {
      attr: {
        transform: "rotate(360)",
      },
      duration: 40,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".wave-2", {
      attr: {
        transform: "rotate(-360)",
      },
      duration: 50,
      repeat: -1,
      yoyo: true,
      ease: "linear",
    });
  };

  return (
    <svg width="500" height="500" viewBox="0 0 500 500">
      <defs>
        <clipPath id="everything-clip">
          <rect x="-250" y="0" width="1000" height="500" />
        </clipPath>
      </defs>
      <rect id="bg" x="-250" y="0" width="1000" height="500" fill="#212121" />

      <g clip-path="url(#everything-clip)">
        <g id="wave-holder" fill-opacity=".25" transform="translate(250,1450)">
          <rect
            className="wave"
            x="-1000"
            y="-1000"
            width="2000"
            height="2000"
            rx="700"
            ry="600"
            fill="violet"
          />
          <rect
            className="wave-2"
            x="-1000"
            y="-1000"
            width="2000"
            height="2000"
            rx="600"
            ry="700"
            fill="violet"
          />
        </g>
        <g id="creative-coding" transform="translate(250, 135)" fill="violet">
          <text
            className={styles.creative_coding}
            id="creative_coding"
            x="0"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
          >
            creative coding with
          </text>
        </g>
        <g
          id="SVG"
          fill="violet"
          transform="translate(-20 0)"
          stroke="white"
          stroke-width="7"
          stroke-opacity=".1"
        >
          <g transform="translate(125 250)">
            <text
              className={styles.svgText}
              id="s"
              x="0"
              y="0"
              font-size="190"
              font-weight="800"
              text-anchor="middle"
              dominant-baseline="middle"
            >
              S
            </text>
          </g>
          <g transform="translate(250 250)">
            <text
              className={styles.svgText}
              id="v"
              x="0"
              y="0"
              font-size="190"
              font-weight="800"
              text-anchor="middle"
              dominant-baseline="middle"
            >
              V
            </text>
          </g>
          <g transform="translate(378 250)">
            <text
              className={styles.svgText}
              id="g"
              x="0"
              y="0"
              font-size="190"
              font-weight="800"
              text-anchor="middle"
              dominant-baseline="middle"
            >
              G
            </text>
          </g>
          <g transform="translate(465 285)">
            <text
              className={styles.svgText}
              id="small-s"
              x="0"
              y="0"
              font-size="70"
              font-weight="800"
              text-anchor="middle"
              dominant-baseline="middle"
            >
              s
            </text>
          </g>
        </g>
        <g transform="translate(25, 335)" fill="violet">
          <text className="zuubaDigital" x="100" y="0">
            z
          </text>
          <text className="zuubaDigital" x="125" y="0">
            u
          </text>
          <text className="zuubaDigital" x="150" y="0">
            u
          </text>
          <text className="zuubaDigital" x="175" y="0">
            b
          </text>
          <text className="zuubaDigital" x="200" y="0">
            a
          </text>
          <text className="zuubaDigital" x="225" y="0">
            D
          </text>
          <text className="zuubaDigital" x="245" y="0">
            i
          </text>
          <text className="zuubaDigital" x="265" y="0">
            g
          </text>
          <text className="zuubaDigital" x="285" y="0">
            i
          </text>
          <text className="zuubaDigital" x="300" y="0">
            t
          </text>
          <text className="zuubaDigital" x="320" y="0">
            a
          </text>
          <text className="zuubaDigital" x="340" y="0">
            l
          </text>
        </g>
      </g>
    </svg>
  );
};

export const BasicToAnim = () => {
  const red = useRef(null);
  const green = useRef(null);
  const blue = useRef(null);

  useGSAP(() => {
    animate();
  }); // <-- scope for selector text (optional)

  const animate = () => {
    gsap.to([red.current, green.current, blue.current], {
      attr: {
        cx: 470,
      },
      duration: 2,
      repeat: -1,
    });
  };

  return (
    <svg width="500" height="500" viewBox="0 0 500 500">
      <circle ref={red} cx="30" cy="150" r="30" fill="red" />
      <circle
        ref={green}
        id="green"
        class="ball"
        cx="30"
        cy="250"
        r="25"
        fill="green"
      />
      <circle
        ref={blue}
        id="blue"
        class="ball"
        cx="30"
        cy="350"
        r="20"
        fill="blue"
      />
    </svg>
  );
};

export const BasicToAnim1A = () => {
  const red = useRef(null);
  const green = useRef(null);
  const blue = useRef(null);

  useGSAP(() => {
    animate();
  }); // <-- scope for selector text (optional)

  const animate = () => {
    gsap.to([red.current, green.current, blue.current], {
      attr: {
        cx: 470,
        r: 100,
        fill: "purple",
        opacity: 0.5,
      },
      duration: 2,
      repeat: -1,
    });
  };

  return (
    <svg width="500" height="500" viewBox="0 0 500 500">
      <circle ref={red} cx="30" cy="150" r="30" fill="red" />
      <circle
        ref={green}
        id="green"
        class="ball"
        cx="30"
        cy="250"
        r="25"
        fill="green"
      />
      <circle
        ref={blue}
        id="blue"
        class="ball"
        cx="30"
        cy="350"
        r="20"
        fill="blue"
      />
    </svg>
  );
};

export const BasicToAnim2 = () => {
  const red = useRef(null);
  const green = useRef(null);
  const blue = useRef(null);

  useGSAP(() => {
    animate();
  }); // <-- scope for selector text (optional)

  const animate = () => {
    gsap.to([red.current, green.current, blue.current], {
      attr: {
        cx: 470,
      },
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "back.inOut",
      stagger: 1,
    });
  };

  return (
    <svg width="500" height="500" viewBox="0 0 500 500">
      <circle ref={red} cx="30" cy="150" r="30" fill="red" />
      <circle
        ref={green}
        id="green"
        class="ball"
        cx="30"
        cy="250"
        r="25"
        fill="green"
      />
      <circle
        ref={blue}
        id="blue"
        class="ball"
        cx="30"
        cy="350"
        r="20"
        fill="blue"
      />
    </svg>
  );
};

export const BasicToAnim3 = () => {
  const red = useRef(null);
  const green = useRef(null);
  const blue = useRef(null);

  useGSAP(() => {
    animate();
  }); // <-- scope for selector text (optional)

  const animate = () => {
    gsap.to([red.current, green.current, blue.current], {
      attr: {
        cx: 470,
      },
      duration: 2,

      ease: "back.inOut",
      stagger: {
        each: 1,
        repeat: -1,
        yoyo: true, // Repeats immediately, not waiting for the other staggered animations to finish
      },
    });
  };

  return (
    <svg width="500" height="500" viewBox="0 0 500 500">
      <circle ref={red} cx="30" cy="150" r="30" fill="red" />
      <circle
        ref={green}
        id="green"
        class="ball"
        cx="30"
        cy="250"
        r="25"
        fill="green"
      />
      <circle
        ref={blue}
        id="blue"
        class="ball"
        cx="30"
        cy="350"
        r="20"
        fill="blue"
      />
    </svg>
  );
};

export const BasicFromAnim = () => {
  const red = useRef(null);
  const green = useRef(null);
  const blue = useRef(null);

  useGSAP(() => {
    animate();
  }); // <-- scope for selector text (optional)

  const animate = () => {
    gsap.from([red.current, green.current, blue.current], {
      attr: {
        cx: 470,
        cy: 250,
      },
      duration: 2,
      ease: "back.inOut",
      repeat: -1,
      yoyo: true,
    });
  };

  return (
    <svg width="500" height="500" viewBox="0 0 500 500">
      <circle ref={red} cx="30" cy="150" r="30" fill="red" />
      <circle
        ref={green}
        id="green"
        class="ball"
        cx="30"
        cy="250"
        r="25"
        fill="green"
      />
      <circle
        ref={blue}
        id="blue"
        class="ball"
        cx="30"
        cy="350"
        r="20"
        fill="blue"
      />
    </svg>
  );
};

export const BasicFromToAnim = () => {
  const red = useRef(null);
  const green = useRef(null);
  const blue = useRef(null);

  useGSAP(() => {
    animate();
  }); // <-- scope for selector text (optional)

  const animate = () => {
    gsap.fromTo(
      [red.current, green.current, blue.current],
      // from state
      {
        attr: {
          cx: 250,
          cy: 50,
          fill: "red",
        },
      },
      // to state
      {
        attr: {
          cx: 250,
          cy: 450,
          fill: "blue",
        },
        duration: 2,
        stagger: {
          each: 0.5,
          repeat: -1,
          yoyo: true,
        },

        ease: "back.inOut",
      },
    );
  };

  return (
    <svg width="500" height="500" viewBox="0 0 500 500">
      <circle ref={red} cx="30" cy="150" r="30" fill="red" />
      <circle
        ref={green}
        id="green"
        class="ball"
        cx="30"
        cy="250"
        r="25"
        fill="green"
      />
      <circle
        ref={blue}
        id="blue"
        class="ball"
        cx="30"
        cy="350"
        r="20"
        fill="blue"
      />
    </svg>
  );
};

export const GSAPMethods = () => {
  return (
    <>
      <iframe
        height="500px"
        style={{ width: "100%" }}
        title="GSAP to, from, fromTo"
        src="https://codepen.io/aokorodu/embed/preview/azorBvJ?default-tab=js%2Cresult&theme-id=dark"
        frameBorder="no"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/aokorodu/pen/azorBvJ">
          GSAP to, from, fromTo
        </a>{" "}
        by zuubaDigital (<a href="https://codepen.io/aokorodu">@aokorodu</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </>
  );
};

export const TimlineDemo = () => {
  let theTween = null;
  const dur = 1;

  useGSAP(() => {
    animate();
  }); // <-- scope for selector text (optional)

  const animate = () => {
    theTween = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });
    theTween
      .fromTo(
        "#bgHolder",
        { attr: { transform: "translate(250 -30) scale(.03)" } },
        {
          attr: { transform: "translate(250 250) scale(.03)" },
          duration: dur,
          stagger: 0.5,
          ease: "back",
        },
      )
      .fromTo(
        "#bgHolder",
        { attr: { transform: "translate(250 250) scale(.03)" } },
        {
          attr: { transform: "translate(250 250) scale(2)" },
          duration: dur,
          stagger: 0.5,
        },
      )
      .fromTo(
        "#lineHolder",
        { attr: { transform: "translate(250 250) scale(0 1)" } },
        {
          attr: { transform: "translate(250 250) scale(1 1)" },
          duration: dur,
          stagger: 0.5,
        },
      )
      .fromTo(
        ".letter",
        { attr: { y: 100, opacity: 1 } },
        {
          attr: { y: 0, opacity: 1 },
          duration: dur,
          stagger: 0.1,
          ease: "back",
        },
      );
  };

  return (
    <svg width="500" height="500" viewBox="0 0 500 500">
      <defs>
        <clipPath id="text-clip-path">
          <rect x="0" y="0" width="500" height="250" />
        </clipPath>
      </defs>
      <g id="bgHolder" transform="translate(250 250)">
        <circle cx="0" cy="0" r="400" fill="black" stroke="none" />
      </g>
      <g id="lineHolder" transform="translate(250 250) scale(1 1)">
        <path d="M-250,0 h500" stroke="white" stroke-width="2" />
      </g>
      <g id="holder" clip-path="url(#text-clip-path)">
        <g
          id="textHolder"
          transform="translate(80, 230)"
          fill="white"
          fontSize={35}
        >
          <text
            x="10"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter"
          >
            T
          </text>
          <text
            x="35"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter"
          >
            E
          </text>
          <text
            x="60"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter"
          >
            X
          </text>
          <text
            x="85"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter"
          >
            T
          </text>
          <text
            x="135"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter"
          >
            A
          </text>
          <text
            x="160"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter"
          >
            N
          </text>
          <text
            x="185"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter"
          >
            I
          </text>
          <text
            x="210"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter"
          >
            M
          </text>
          <text
            x="235"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter"
          >
            A
          </text>
          <text
            x="260"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter"
          >
            T
          </text>
          <text
            x="285"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter"
          >
            I
          </text>
          <text
            x="310"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter"
          >
            O
          </text>
          <text
            x="335"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter"
          >
            N
          </text>
        </g>
      </g>
    </svg>
  );
};

export const GSAPTimelineStarter = () => {
  return (
    <>
      <iframe
        height="500px"
        style={{ width: "100%" }}
        title="GSAP - Timelines - Start"
        src="https://codepen.io/aokorodu/embed/preview/yyLNqoZ?default-tab=js%2Cresult&theme-id=dark"
        frameBorder="no"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/aokorodu/pen/yyLNqoZ">
          GSAP - Timelines - Start
        </a>{" "}
        by zuubaDigital (<a href="https://codepen.io/aokorodu">@aokorodu</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </>
  );
};

export const TimlineDemoError = () => {
  let theTween = null;
  const dur = 1;

  useGSAP(() => {
    animate();
  }); // <-- scope for selector text (optional)

  const animate = () => {
    theTween = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });
    theTween
      .fromTo(
        "#bgHolder_error",
        { attr: { transform: "translate(250 -30) scale(.03)" } },
        {
          attr: { transform: "translate(250 250) scale(.03)" },
          duration: dur,
          stagger: 0.5,
          ease: "back",
        },
      )
      .fromTo(
        "#bgHolder_error",
        { attr: { transform: "scale(.03)" } },
        {
          attr: { transform: "scale(1)" },
          duration: dur,
          stagger: 0.5,
        },
      );
  };

  return (
    <svg width="500" height="500" viewBox="0 0 500 500">
      <g id="bgHolder_error" transform="translate(250 250)">
        <circle cx="0" cy="0" r="400" fill="black" stroke="none" />
      </g>
      <g transform="translate(250 250) scale(1 1)">
        <path d="M-250,0 h500" stroke="white" stroke-width="2" />
      </g>
      <g clip-path="url(#text-clip-path)">
        <g
          id="textHolder"
          transform="translate(80, 230)"
          fill="white"
          fontSize={35}
        >
          <text x="10" y="0" text-anchor="middle" dominant-baseline="middle">
            T
          </text>
          <text x="35" y="0" text-anchor="middle" dominant-baseline="middle">
            E
          </text>
          <text x="60" y="0" text-anchor="middle" dominant-baseline="middle">
            X
          </text>
          <text x="85" y="0" text-anchor="middle" dominant-baseline="middle">
            T
          </text>
          <text x="135" y="0" text-anchor="middle" dominant-baseline="middle">
            A
          </text>
          <text x="160" y="0" text-anchor="middle" dominant-baseline="middle">
            N
          </text>
          <text x="185" y="0" text-anchor="middle" dominant-baseline="middle">
            I
          </text>
          <text x="210" y="0" text-anchor="middle" dominant-baseline="middle">
            M
          </text>
          <text x="235" y="0" text-anchor="middle" dominant-baseline="middle">
            A
          </text>
          <text x="260" y="0" text-anchor="middle" dominant-baseline="middle">
            T
          </text>
          <text x="285" y="0" text-anchor="middle" dominant-baseline="middle">
            I
          </text>
          <text x="310" y="0" text-anchor="middle" dominant-baseline="middle">
            O
          </text>
          <text x="335" y="0" text-anchor="middle" dominant-baseline="middle">
            N
          </text>
        </g>
      </g>
    </svg>
  );
};

export const TimlineDemoErrorFix = () => {
  let theTween = null;
  const dur = 1;

  useGSAP(() => {
    animate();
  }); // <-- scope for selector text (optional)

  const animate = () => {
    theTween = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });
    theTween
      .fromTo(
        "#bgHolder_fix",
        { attr: { transform: "translate(250 -30) scale(.03)" } },
        {
          attr: { transform: "translate(250 250) scale(.03)" },
          duration: dur,
          stagger: 0.5,
          ease: "back",
        },
      )
      .fromTo(
        "#bgHolder_fix",
        { attr: { transform: "translate(250 250) scale(.03)" } },
        {
          attr: { transform: "translate(250 250) scale(2)" },
          duration: dur,
          stagger: 0.5,
        },
      );
  };

  return (
    <svg width="500" height="500" viewBox="0 0 500 500">
      <g id="bgHolder_fix" transform="translate(250 250)">
        <circle cx="0" cy="0" r="400" fill="black" stroke="none" />
      </g>
      <g transform="translate(250 250) scale(1 1)">
        <path d="M-250,0 h500" stroke="white" stroke-width="2" />
      </g>
      <g clip-path="url(#text-clip-path)">
        <g
          id="textHolder"
          transform="translate(80, 230)"
          fill="white"
          fontSize={35}
        >
          <text x="10" y="0" text-anchor="middle" dominant-baseline="middle">
            T
          </text>
          <text x="35" y="0" text-anchor="middle" dominant-baseline="middle">
            E
          </text>
          <text x="60" y="0" text-anchor="middle" dominant-baseline="middle">
            X
          </text>
          <text x="85" y="0" text-anchor="middle" dominant-baseline="middle">
            T
          </text>
          <text x="135" y="0" text-anchor="middle" dominant-baseline="middle">
            A
          </text>
          <text x="160" y="0" text-anchor="middle" dominant-baseline="middle">
            N
          </text>
          <text x="185" y="0" text-anchor="middle" dominant-baseline="middle">
            I
          </text>
          <text x="210" y="0" text-anchor="middle" dominant-baseline="middle">
            M
          </text>
          <text x="235" y="0" text-anchor="middle" dominant-baseline="middle">
            A
          </text>
          <text x="260" y="0" text-anchor="middle" dominant-baseline="middle">
            T
          </text>
          <text x="285" y="0" text-anchor="middle" dominant-baseline="middle">
            I
          </text>
          <text x="310" y="0" text-anchor="middle" dominant-baseline="middle">
            O
          </text>
          <text x="335" y="0" text-anchor="middle" dominant-baseline="middle">
            N
          </text>
        </g>
      </g>
    </svg>
  );
};

export const TimlineDemoNoClip = () => {
  let theTween = null;
  const dur = 1;

  useGSAP(() => {
    animate();
  }); // <-- scope for selector text (optional)

  const animate = () => {
    theTween = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });
    theTween
      .fromTo(
        "#bgHolder_noclip",
        { attr: { transform: "translate(250 -30) scale(.03)" } },
        {
          attr: { transform: "translate(250 250) scale(.03)" },
          duration: dur,
          stagger: 0.5,
          ease: "back",
        },
      )
      .fromTo(
        "#bgHolder_noclip",
        { attr: { transform: "translate(250 250) scale(.03)" } },
        {
          attr: { transform: "translate(250 250) scale(2)" },
          duration: dur,
          stagger: 0.5,
        },
      )
      .fromTo(
        "#lineHolder_noclip",
        { attr: { transform: "translate(250 250) scale(0 1)" } },
        {
          attr: { transform: "translate(250 250) scale(1 1)" },
          duration: dur,
          stagger: 0.5,
        },
      )
      .fromTo(
        ".letter_noclip",
        { attr: { y: 100, opacity: 1 } },
        {
          attr: { y: 0, opacity: 1 },
          duration: dur,
          stagger: 0.1,
          ease: "back",
        },
      );
  };

  return (
    <svg width="500" height="500" viewBox="0 0 500 500">
      <defs>
        <clipPath id="text-clip-path">
          <rect x="0" y="0" width="500" height="250" />
        </clipPath>
      </defs>
      <g id="bgHolder_noclip" transform="translate(250 250)">
        <circle cx="0" cy="0" r="400" fill="black" stroke="none" />
      </g>
      <g id="lineHolder_noclip" transform="translate(250 250) scale(1 1)">
        <path d="M-250,0 h500" stroke="white" stroke-width="2" />
      </g>
      <g id="holder">
        <g
          id="textHolder"
          transform="translate(80, 230)"
          fill="white"
          fontSize={35}
        >
          <text
            x="10"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter_noclip"
          >
            T
          </text>
          <text
            x="35"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter_noclip"
          >
            E
          </text>
          <text
            x="60"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter_noclip"
          >
            X
          </text>
          <text
            x="85"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter_noclip"
          >
            T
          </text>
          <text
            x="135"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter_noclip"
          >
            A
          </text>
          <text
            x="160"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter_noclip"
          >
            N
          </text>
          <text
            x="185"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter_noclip"
          >
            I
          </text>
          <text
            x="210"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter_noclip"
          >
            M
          </text>
          <text
            x="235"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter_noclip"
          >
            A
          </text>
          <text
            x="260"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter_noclip"
          >
            T
          </text>
          <text
            x="285"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter_noclip"
          >
            I
          </text>
          <text
            x="310"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter_noclip"
          >
            O
          </text>
          <text
            x="335"
            y="0"
            text-anchor="middle"
            dominant-baseline="middle"
            class="letter_noclip"
          >
            N
          </text>
        </g>
      </g>
    </svg>
  );
};

export const GSAPTimelineEnder = () => {
  return (
    <>
      <iframe
        height="500px"
        style={{ width: "100%" }}
        title="GSAP - Timelines - FINAL"
        src="https://codepen.io/aokorodu/embed/preview/gbOpjoX?default-tab=js%2Cresult&theme-id=dark"
        frameBorder="no"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/aokorodu/pen/gbOpjoX">
          GSAP - Timelines - FINAL
        </a>{" "}
        by zuubaDigital (<a href="https://codepen.io/aokorodu">@aokorodu</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </>
  );
};

export const GSAPPlaybackStarter = () => {
  return (
    <>
      <iframe
        height="500px"
        style={{ width: "100%", height: "800px" }}
        title="GSAP - PLAYBACK CONTROL - START"
        src="https://codepen.io/aokorodu/embed/preview/xbxGEWp?default-tab=js%2Cresult&theme-id=dark"
        frameBorder="no"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/aokorodu/pen/xbxGEWp">
          GSAP - PLAYBACK CONTROL - START
        </a>{" "}
        by zuubaDigital (<a href="https://codepen.io/aokorodu">@aokorodu</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </>
  );
};

export const PlaybackControlsNoScrub = () => {
  return (
    <>
      <iframe
        height="500px"
        style={{ width: "100%", height: "800px" }}
        title="GSAP - PLAYBACK CONTROL - NO SCRUB FINAL"
        src="https://codepen.io/aokorodu/embed/preview/ogNjdQE?default-tab=js%2Cresult&theme-id=dark"
        frameBorder="no"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/aokorodu/pen/ogNjdQE">
          GSAP - PLAYBACK CONTROL - NO SCRUB FINAL
        </a>{" "}
        by zuubaDigital (<a href="https://codepen.io/aokorodu">@aokorodu</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </>
  );
};

export const PlaybackControlsScrub = () => {
  return (
    <>
      <iframe
        height="500px"
        style={{ width: "100%", height: "800px" }}
        title="GSAP - PLAYBACK CONTROL - FINAL"
        src="https://codepen.io/aokorodu/embed/preview/dPyYPqK?default-tab=js%2Cresult&theme-id=dark"
        frameBorder="no"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/aokorodu/pen/dPyYPqK">
          GSAP - PLAYBACK CONTROL - FINAL
        </a>{" "}
        by zuubaDigital (<a href="https://codepen.io/aokorodu">@aokorodu</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </>
  );
};

export const SimplePropertyAnimation = () => {
  const thePath = useRef(null);
  let propertyTween = null;
  let propertyObject = {
    x: 240,
    y: 0,
  };

  useGSAP(() => {
    animate();
  });

  function animate() {
    propertyTween = gsap.timeline({ onUpdate: update, repeat: -1, yoyo: true });
    propertyTween.to(propertyObject, {
      x: 260,
      y: 500,
      duration: 2.5,
      ease: "power1.inOut",
    });
  }

  function update() {
    const pathString = `M-10,250 Q${propertyObject.x},${propertyObject.y} 510,250`;
    thePath.current.setAttribute("d", pathString);
  }

  return (
    <svg width="500" height="500" viewBox="0 0 500 500">
      <rect
        id="bg"
        x="0"
        y="0"
        width="500"
        height="500"
        fill="#121212"
        stroke="black"
        stroke-width="2"
      />
      <path
        ref={thePath}
        d="M-10,250 Q250,250 510,250"
        stroke="white"
        stroke-width="5"
        stroke-linecap="round"
        fill="none"
      />
      <text
        id="myText"
        x="10"
        y="10"
        text-anchor="left"
        dominant-baseline="hanging"
        font-size="20"
        fill="#eaeaea"
      ></text>
    </svg>
  );
};

export const FlowerPropertyAnimation = () => {
  const thePath = useRef(null);
  // tween variable
  let pointTween = null;
  let obj = {
    x: 200,
    y: 150,
  };

  useGSAP(() => {
    animate();
  });

  function animate() {
    pointTween = gsap.to(obj, {
      x: 300,
      y: 150,
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: "sine.inOut",
      onUpdate: () => {
        updatePath(obj.x, obj.y);
      },
    });
  }

  function updatePath(newX, newY) {
    const pathString = `M 250,500 Q 250,350 ${newX},${newY}`;
    thePath.current.setAttribute("d", pathString);
  }

  return (
    <svg width="500" height="500" viewBox="0 0 500 500">
      <defs>
        <marker
          id="flower"
          refX="25"
          refY="25"
          markerWidth="50"
          markerHeight="50"
          orient="auto"
        >
          <path
            fill="gold"
            fill-rule="evenodd"
            d="M25 0c3 0 5 14 5 20 6 0 20 2 20 5s-14 5-20 5c0 6-2 20-5 20s-5-14-5-20c-6 0-20-2-20-5s14-5 20-5c0-6 2-20 5-20Zm0 25Z"
            clip-rule="evenodd"
          />
          <path
            fill="orange"
            fill-rule="evenodd"
            d="M25 17C20 14 9 5 7 7s7 13 11 18C14 29 6 41 8 43c3 2 13-6 17-10 5 4 16 13 18 11s-7-14-10-18c3-5 11-16 9-19-2-2-13 7-17 10Zm0 9Z"
            clip-rule="evenodd"
          />
          <ellipse cx="25.4" cy="25" fill="#8C8989" rx="4.4" ry="4.6" />
        </marker>
        <marker id="leaf" refX="10" refY="6" markerWidth="20" markerHeight="6">
          <path
            fill="#09C01B"
            d="m0 0 10 3c0 2 0 2-2 3L0 0Zm20 0-8 6c-2-1-2-1-2-3l10-3Z"
          />
        </marker>
      </defs>
      <rect
        id="bg"
        x="0"
        y="0"
        width="500"
        height="500"
        fill="#212121"
        stroke="black"
        stroke-width="2"
      />
      <path
        ref={thePath}
        marker-start="url(#leaf)"
        marker-end="url(#flower)"
        d="M 250,500 Q 250,250 250,100"
        stroke="green"
        stroke-width="2"
        fill="none"
      />
    </svg>
  );
};

export const Expressions = () => {
  return (
    <>
      <iframe
        height="500px"
        style={{ width: "100%", height: "800px" }}
        title="GSAP - animating properties - EXPRESSIONS - FINAL"
        src="https://codepen.io/aokorodu/embed/preview/dPyXdqm?default-tab=js%2Cresult&theme-id=dark"
        frameBorder="no"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/aokorodu/pen/dPyXdqm">
          GSAP - animating properties - EXPRESSIONS - FINAL
        </a>{" "}
        by zuubaDigital (<a href="https://codepen.io/aokorodu">@aokorodu</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </>
  );
};
