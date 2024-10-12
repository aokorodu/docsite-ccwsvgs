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
  const { Engine, Runner, Bodies, Composite, World } = Matter;
  const engine = Engine.create();
  const runner = Runner.create();

  // particle vars

  const particleGraphics = useRef([]);
  const particleBodies = [];
  const numberOfParticles = 100;
  const particleWidth = 5;
  const particleHeight = 100;

  // boundaries
  let leftwall, rightwall, floor;

  const namespace = "http://www.w3.org/2000/svg";
  const w = 1000;
  const h = 1000;

  // particle holder
  const holder = useRef(null);

  // ui
  const replayButton = useRef(null);

  useEffect(() => {
    initParticleBodies();
    initWallAndFloor();
    makeWorld();
    initRunner();
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
      console.log("i:", i);

      arr.push(
        <g ref={addToRefs}>
          <rect
            x={-particleWidth / 2}
            y={-particleHeight / 2}
            width={particleWidth}
            height={particleHeight}
            fill={getRandomColor()}
            stroke="black"
          />
        </g>
      );
    }

    return arr;
  };

  const getRandomColor = () => {
    return `hsl(${Math.round(Math.random() * 360)} 50% 50%)`;
  };

  const initParticleBodies = () => {
    for (let i = 0; i < numberOfParticles; i++) {
      console.log("init body: ", i);
      const particleBody = Bodies.rectangle(
        0,
        0,
        particleWidth,
        particleHeight,
        {
          id: `particleBody_${i}`,
          isStatic: false,
          ifriction: 0,
          restitution: 0.7,
        }
      );
      const xpos = 200 + Math.random() * (w - 400);
      const ypos = -i * 30;
      Matter.Body.setPosition(particleBody, { x: xpos, y: ypos });
      Matter.Body.rotate(particleBody, Math.random() * 2 * Math.PI);
      Matter.Body.setAngularSpeed(particleBody, 0.1);
      particleBodies.push(particleBody);
    }
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
      leftwall,
      rightwall,
      floor,
    ]);
  };

  const initRunner = () => {
    //Runner.run(runner, engine);
  };

  const initUI = () => {
    replayButton.current.addEventListener("click", () => {
      particleBodies.forEach((particleBody, index) => {
        const xpos = 200 + Math.random() * (w - 400);
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
          <g ref={holder}>{getGraphics()}</g>
        </svg>
        <button ref={replayButton}>replay</button>
      </div>
    </>
  );
};
