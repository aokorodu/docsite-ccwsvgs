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
        title="MatterJS - Multiple Particles - Rectangles"
        src="https://codepen.io/aokorodu/embed/preview/OJKXoqd?default-tab=result&theme-id=light"
        frameBorder="no"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/aokorodu/pen/OJKXoqd">
          MatterJS - Multiple Particles - Rectangles
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
  const numberOfParticles = 100;
  const particleWidth = 20;
  const particleHeight = 20;

  // boundaries
  let leftwall, rightwall, floor;

  // pegs
  const peg = useRef(null);
  let pegBodies = [];

  const w = 1000;
  const h = 1000;

  // particle holder
  const holder = useRef(null);

  // ui
  const replayButton = useRef(null);

  useEffect(() => {
    initParticleBodies();
    initPegBodies(0);
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
          fill={getRandomColor()}
          stroke="none"
        />
      </g>
    );
  };

  const getCircleGraphic = () => {
    return (
      <g ref={addToRefs}>
        <circle
          cx={0}
          cy={0}
          r={particleWidth}
          fill={getRandomColor()}
          stroke="none"
        />
      </g>
    );
  };

  const getRandomColor = () => {
    return `hsl(${Math.round(Math.random() * 360)} 50% 50%)`;
  };

  const initParticleBodies = () => {
    for (let i = 0; i < numberOfParticles; i++) {
      const particleBody = getRectBody(i);
      const xpos = 400 + Math.random() * (w - 800);
      const ypos = -i * 30;
      Matter.Body.setPosition(particleBody, { x: xpos, y: ypos });
      Matter.Body.rotate(particleBody, Math.random() * 2 * Math.PI);
      Matter.Body.setAngularSpeed(particleBody, 0.1);
      particleBodies.push(particleBody);
    }
  };

  const initPegBodies = (index) => {
    const xpos = peg.current.getAttribute("cx");
    const ypos = peg.current.getAttribute("cy");
    const r = peg.current.getAttribute("r");

    const pb = Bodies.circle(xpos, ypos, r, {
      id: `peg_${index}`,
      isStatic: true,
      friction: 0,
      restitution: 0.7,
    });

    pegBodies.push(pb);
  };

  const getRectBody = (index) => {
    const particleBody = Bodies.rectangle(0, 0, particleWidth, particleHeight, {
      id: `particleBody_${index}`,
      isStatic: false,
      friction: 0,
      restitution: 0.7,
    });

    return particleBody;
  };

  const initWallAndFloor = () => {
    floor = Bodies.rectangle(500, 1050, 1000, 100, {
      isStatic: true,
      id: "floor",
    });

    leftwall = Bodies.rectangle(-50, 500, 100, 1000, {
      isStatic: true,
      id: "leftwall",
    });

    rightwall = Bodies.rectangle(1050, 500, 100, 1000, {
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
      particleBodies.forEach((particleBody, index) => {
        const xpos = 400 + Math.random() * (w - 800);
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
        <svg width="500" height="500" viewBox={`0 0 ${w} ${h}`}>
          <circle
            ref={peg}
            cx={w / 2}
            cy={h / 2}
            r={h / 5}
            fill="#eaeaea"
            stroke="none"
          />
          <g ref={holder}>{getGraphics()}</g>
        </svg>
        <button ref={replayButton}>replay</button>
      </div>
    </>
  );
};
