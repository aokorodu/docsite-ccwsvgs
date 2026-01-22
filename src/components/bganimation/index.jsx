"use client";

import React from "react";
import styles from "./BGAnimation.module.css";
import BGParticle from "./BGParticle";

class BGAnimation extends React.Component {
  constructor() {
    super();
    this.holder = null;
    this.numberOfParticles = 200;
    this.particles = React.createRef([]);
    this.particles.current = [];
    this.running = false;
  }

  componentWillUnmount() {
    this.stop();
  }

  buildParticles = () => {
    const arr = [];
    for (let i = 0; i < this.numberOfParticles; i++) {
      arr.push(<BGParticle ref={this.addToRefs} key={i} index={i} />);
    }

    return arr;
  };

  changeFlow(newFlow) {
    console.log("changeFlow to ", newFlow);
    this.particles.current.map((particle) => {
      particle.changeFlow(newFlow);
    });
  }

  testFunction() {
    console.log("testFunction");
  }

  addToRefs = (el) => {
    this.particles.current.push(el);
  };

  draw = () => {
    if (!this.running) return;

    for (let i = 0; i < this.numberOfParticles; i++) {
      this.particles.current[i].update();
    }
    this.animFrameID = window.requestAnimationFrame(this.draw);
  };

  start = () => {
    console.log("start");
    if (this.running) return;
    this.running = true;
    this.draw();
  };

  stop = () => {
    console.log("stop");
    if (!this.running) return;
    window.cancelAnimationFrame(this.animFrameID);
    this.running = false;
  };

  render() {
    return (
      <div className={styles.svgHolder}>
        <svg
          width="100%"
          height={"100%"}
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
        >
          <g style={{ opacity: 0.6 }}>{this.buildParticles()}</g>
        </svg>
      </div>
    );
  }
}

export default BGAnimation;
