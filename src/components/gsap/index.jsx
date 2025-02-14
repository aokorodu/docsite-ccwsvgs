"use client";
import React, { useRef } from "react";
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
        }
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
        `-=${overlap}`
      )
      .fromTo(
        "#v",
        { attr: { transform: "scale(.01)", opacity: 0 } },
        {
          attr: { transform: "scale(1)", opacity: 1 },
          duration: dur,
          ease: "back",
        },
        `-=${overlap}`
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
        `-=${overlap}`
      )
      .fromTo(
        "#small-s",
        { attr: { transform: "scale(.01)", opacity: 0 } },
        {
          attr: { transform: "scale(1)", opacity: 1 },
          duration: dur,
          ease: "back",
        },
        `-=${overlap}`
      )
      .fromTo(
        ".zuubaDigital",
        { attr: { transform: "translate(0,20)", opacity: 0 } },
        {
          attr: { transform: "translate(0,0)", opacity: 1 },
          duration: dur,
          stagger: 0.1,
        }
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
      <rect id="bg" x="0" y="0" width="500" height="500" fill="#212121" />
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
      }
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
