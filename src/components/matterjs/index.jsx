"use client";
import React from "react";
import Matter, { Body } from "matter-js";
import { useEffect, useRef } from "react";
import styles from "../ComponentStyles.module.scss";

export const EmbedExample = () => {
  return (
    <>
      <iframe
        height="700px"
        style={{ width: "100%" }}
        title="MatterJS - Single Particle"
        src="https://codepen.io/aokorodu/embed/preview/GRVrbjz?default-tab=result&theme-id=light"
        frameBorder="no"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/aokorodu/pen/GRVrbjz">
          MatterJS - Multiple Particles - Rectangles
        </a>{" "}
        by zuubaDigital (<a href="https://codepen.io/aokorodu">@aokorodu</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </>
  );
};

export const SingleParticleWidthRender = () => {
  return (
    <>
      <iframe
        height="1000px"
        style={{ width: "100%" }}
        title="MatterJS - Single Particle"
        src="https://codepen.io/aokorodu/embed/preview/WNVEQQK?default-tab=result&theme-id=light"
        frameBorder="no"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/aokorodu/pen/WNVEQQK">
          MatterJS - Single Particle Example w/ Render
        </a>{" "}
        by zuubaDigital (<a href="https://codepen.io/aokorodu">@aokorodu</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </>
  );
};

export const MatterDemo = () => {
  const { Engine, Bodies, Composite } = Matter;
  const engine = Engine.create();

  // particle vars
  const particleGraphics = useRef([]);
  const particleBodies = [];
  const numberOfParticles = 200;
  const particleWidth = 20;
  const particleHeight = 20;

  // boundaries
  let leftwall, rightwall, floor;

  // pegs
  const pegGraphics = useRef([]);
  let pegBodies = [];

  const w = 750;
  const h = 1000;

  // particle holder
  const holder = useRef(null);

  // ui
  const replayButton = useRef(null);

  // framecount - stop updating at a certain point
  let currentFrame = 0;
  let frameCount = 1000;

  useEffect(() => {
    initParticleBodies();
    initPegBodies();
    initWallAndFloor();
    makeWorld();
    initUI();
    update();
  }, []);

  const addToRefs = (el) => {
    if (el && !particleGraphics.current.includes(el)) {
      particleGraphics.current.push(el);
    }
  };

  const addToPegRefs = (el) => {
    if (el && !pegGraphics.current.includes(el)) {
      pegGraphics.current.push(el);
    }
  };

  const getGraphics = () => {
    const arr = [];
    for (let i = 0; i < numberOfParticles; i++) {
      arr.push(getRectGraphic());
    }

    return arr;
  };

  const getRectGraphic = () => {
    return (
      <g ref={addToRefs}>
        <rect
          x={-particleWidth / 2}
          y={-particleHeight / 2}
          width={particleWidth}
          height={particleHeight}
          fill="none"
          stroke={getRandomColor()}
          strokeWidth={3}
        />
      </g>
    );
  };

  // const getCircleGraphic = () => {
  //   return (
  //     <g ref={addToRefs}>
  //       <circle
  //         cx={0}
  //         cy={0}
  //         r={particleWidth}
  //         fill={getRandomColor()}
  //         stroke="none"
  //       />
  //     </g>
  //   );
  // };

  const getRandomColor = () => {
    return `hsl(${Math.round(Math.random() * 360)} 100% 50%)`;
  };

  const initParticleBodies = () => {
    for (let i = 0; i < numberOfParticles; i++) {
      const particleBody = getRectBody(i);
      const xpos = w / 3 + (Math.random() * w) / 3;
      const ypos = -i * 30;
      Matter.Body.setPosition(particleBody, { x: xpos, y: ypos });
      Matter.Body.rotate(particleBody, Math.random() * 2 * Math.PI);
      Matter.Body.setAngularSpeed(particleBody, 0.1);
      particleBodies.push(particleBody);
    }
  };

  const initPegBodies = () => {
    pegGraphics.current.forEach((peg, index) => {
      const xpos = peg.getAttribute("cx");
      const ypos = peg.getAttribute("cy");
      const r = peg.getAttribute("r");

      const pb = Bodies.circle(xpos, ypos, r, {
        id: `peg_${index}`,
        isStatic: true,
        friction: 0,
        restitution: 0.7,
      });

      pegBodies.push(pb);
    });
  };

  const getRectBody = (index) => {
    const particleBody = Bodies.rectangle(0, 0, particleWidth, particleHeight, {
      id: `particleBody_${index}`,
      isStatic: false,
      friction: 0,
      restitution: 0.1 + Math.random() * 0.6,
    });

    return particleBody;
  };

  const initWallAndFloor = () => {
    floor = Bodies.rectangle(w / 2, h + 50, w, 100, {
      isStatic: true,
      id: "floor",
    });

    leftwall = Bodies.rectangle(-50, h / 2, 100, h, {
      isStatic: true,
      id: "leftwall",
    });

    rightwall = Bodies.rectangle(w + 50, h / 2, 100, h, {
      isStatic: true,
      id: "righttwall",
    });
  };

  const makeWorld = () => {
    Composite.add(engine.world, [
      ...particleBodies,
      ...pegBodies,
      leftwall,
      rightwall,
      floor,
    ]);
  };

  const initUI = () => {
    replayButton.current.addEventListener("click", () => {
      if (currentFrame >= frameCount) {
        currentFrame = 0;
        update();
      } else {
        currentFrame = 0;
      }

      particleBodies.forEach((particleBody, index) => {
        const xpos = w / 3 + (Math.random() * w) / 3;
        const ypos = -index * 30;
        Matter.Body.setPosition(particleBody, { x: xpos, y: ypos });
        Matter.Body.setSpeed(particleBody, 0);
        Matter.Body.rotate(particleBody, 0.1);
        Matter.Body.setAngularSpeed(particleBody, 0.1);
      });
    });
  };

  const update = (e) => {
    // look at the particleBody position and update graphic position accordingly.
    if (currentFrame >= frameCount) return;
    currentFrame++;
    console.log(currentFrame);
    Matter.Engine.update(engine);
    particleGraphics.current.forEach((pg, index) => {
      const pos = particleBodies[index].position;
      const angle = particleBodies[index].angle;
      const degrees = (angle * 180) / Math.PI;
      pg.setAttribute(
        "transform",
        `translate(${pos.x} ${pos.y}) rotate(${degrees})`
      );
    });

    window.requestAnimationFrame(update);
  };

  return (
    <>
      <div className={styles.containerWithButton}>
        <svg width={w / 2} height={h / 2} viewBox={`0 0 ${w} ${h}`}>
          <rect x="0" y="0" width={w} height={h} fill="#212121" />{" "}
          <circle
            ref={addToPegRefs}
            cx={(w / 10) * 3.5}
            cy={h / 4}
            r={w / 10}
            fill="#800000"
            stroke="black"
            strokeWidth={5}
          />
          <circle
            ref={addToPegRefs}
            cx={(w / 10) * 6.5}
            cy={h / 4}
            r={w / 10}
            fill="#800000"
            stroke="black"
            strokeWidth={5}
          />
          <circle
            ref={addToPegRefs}
            cx={(w / 10) * 3.5}
            cy={(3 * h) / 4}
            r={w / 10}
            fill="#800000"
            stroke="black"
            strokeWidth={5}
          />
          <circle
            ref={addToPegRefs}
            cx={(w / 10) * 6.5}
            cy={(3 * h) / 4}
            r={w / 10}
            fill="#800000"
            stroke="black"
            strokeWidth={5}
          />
          <circle
            ref={addToPegRefs}
            cx={w / 2}
            cy={h / 2}
            r={w / 10}
            fill="#800000"
            stroke="black"
            strokeWidth={5}
          />
          <circle
            ref={addToPegRefs}
            cx={w / 5}
            cy={h / 2}
            r={w / 10}
            fill="#800000"
            stroke="black"
            strokeWidth={5}
          />
          <circle
            ref={addToPegRefs}
            cx={(4 * w) / 5}
            cy={h / 2}
            r={w / 10}
            fill="#800000"
            stroke="black"
            strokeWidth={5}
          />
          <g ref={holder}>{getGraphics()}</g>
        </svg>
        <button ref={replayButton}>replay</button>
      </div>
    </>
  );
};

export const MultiParticleEmbedExample = () => {
  return (
    <>
      <iframe
        height="700px"
        style={{ width: "100%" }}
        title="MatterJS - Single Particle"
        src="https://codepen.io/aokorodu/embed/preview/OJKXoBa?default-tab=result&theme-id=light"
        frameBorder="no"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/aokorodu/pen/OJKXoBa">
          MatterJS - Multiple Particles - Rectangles
        </a>{" "}
        by zuubaDigital (<a href="https://codepen.io/aokorodu">@aokorodu</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </>
  );
};

export const SquareNoRotateExample = () => {
  return (
    <>
      <iframe
        height="700px"
        style={{ width: "100%" }}
        title="MatterJS - Rectangular Particles"
        src="https://codepen.io/aokorodu/embed/preview/eYqvBxp?default-tab=result&theme-id=light"
        frameBorder="no"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/aokorodu/pen/eYqvBxp">
          MatterJS - Rectangular Particles
        </a>{" "}
        by zuubaDigital (<a href="https://codepen.io/aokorodu">@aokorodu</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </>
  );
};

export const SquareNoRotateWithRenderExample = () => {
  return (
    <>
      <iframe
        height="1000px"
        style={{ width: "100%" }}
        title="MatterJS - Multiple Particles - Rectangle no rotation with Renderer"
        src="https://codepen.io/aokorodu/embed/preview/rNXzVRb?default-tab=result&theme-id=light"
        frameBorder="no"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/aokorodu/pen/rNXzVRb">
          MatterJS - Multiple Particles - Rectangle no rotation with Renderer
        </a>{" "}
        by zuubaDigital (<a href="https://codepen.io/aokorodu">@aokorodu</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </>
  );
};

export const SquareRotateExample = () => {
  return (
    <>
      <iframe
        height="700px"
        style={{ width: "100%" }}
        title="MatterJS - Rectangular Particles"
        src="https://codepen.io/aokorodu/embed/preview/OJKXoqd?default-tab=result&theme-id=light"
        frameBorder="no"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/aokorodu/pen/OJKXoqd">
          MatterJS - Rectangular Particles
        </a>{" "}
        by zuubaDigital (<a href="https://codepen.io/aokorodu">@aokorodu</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </>
  );
};

export const WindSliderExample = () => {
  return (
    <>
      <iframe
        height="800px"
        style={{ width: "100%" }}
        title="MatterJS - Multiple Particles with wind force"
        src="https://codepen.io/aokorodu/embed/preview/jOgVRzv?default-tab=result&theme-id=light"
        frameBorder="no"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/aokorodu/pen/jOgVRzv">
          MatterJS - Multiple Particles with wind force
        </a>{" "}
        by zuubaDigital (<a href="https://codepen.io/aokorodu">@aokorodu</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </>
  );
};

export const PopcornExample = () => {
  return (
    <>
      <iframe
        height="800px"
        style={{ width: "100%" }}
        title="MatterJS - Multiple Particles-Forces-Popcorn"
        src="https://codepen.io/aokorodu/embed/preview/QWevjbR?default-tab=result&theme-id=light"
        frameBorder="no"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/aokorodu/pen/QWevjbR">
          MatterJS - Multiple Particles-Forces-Popcorn
        </a>{" "}
        by zuubaDigital (<a href="https://codepen.io/aokorodu">@aokorodu</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </>
  );
};
