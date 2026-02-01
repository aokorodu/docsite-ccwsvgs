import exp from "constants";
import { useRef, useEffect } from "react";
import styles from "./Illustration.module.scss";

const FlowingLocs = () => {
  class LocCubic {
    constructor(path, x, y) {
      this.path = path;
      this.x = x;
      this.y = y;
      this.angle = Math.random() * 2 * Math.PI;
      this.angleIncrement = 0.005 + Math.random() * 0.005;
      this.maxAngle = Math.PI * 2;
      this.radius = 50;
      this.length = 250 + Math.random() * 200;
      this.control_1_position = {
        x: this.length / 4,
        y: 0,
        r: this.radius,
      };
      this.control_2_position = {
        x: (2 * this.length) / 3,
        y: 0,
        r: this.radius * 3,
      };
      this.control_3_position = {
        x: this.length,
        y: 0,
        r: this.radius * (2 + Math.random() * 2),
      };
    }

    init() {
      this.path.setAttribute("fill", "none");
      this.path.setAttribute("stroke", "black");
      this.path.setAttribute("stroke-width", 3 + Math.random() * 3);
      this.path.setAttribute("stroke-opacity", 0.2 + Math.random() * 0.5);
      this.path.setAttribute("transform", `translate(${this.x}, ${this.y})`);
      this.path.setAttribute("stroke-linecap", "round");
      //this.path.setAttribute("marker-end", "url(#ball)");
      //this.path.setAttribute("marker-mid", "url(#ball)");
      //marker-end="url(#arrowhead)"
    }

    draw() {
      // d="M 0,250 C 200,125 300,425 500,250"
      const pathStr = `M0,0 C${this.control_1_position.x},${this.control_1_position.y} ${this.control_2_position.x},${this.control_2_position.y} ${this.control_3_position.x},${this.control_3_position.y}`;
      this.path.setAttribute("d", pathStr);
    }

    updatePositions() {
      this.control_1_position.y =
        Math.sin(this.angle) * this.control_1_position.r + 0;
      this.control_2_position.y =
        Math.cos(this.angle) * this.control_2_position.r + 0;
      this.control_3_position.y =
        Math.sin(this.angle) * this.control_3_position.r + 0;
      this.control_3_position.x = this.length + Math.cos(this.angle) * 50;
    }

    updateAngle() {
      this.angle += this.angleIncrement;
      if (this.angle > this.maxAngle) {
        this.angle = this.angle - this.maxAngle;
      }
    }

    update() {
      this.updateAngle();
      this.updatePositions();
      this.draw();
    }
  }

  const namespace = "http://www.w3.org/2000/svg";
  const holderRef = useRef(null);
  const tendrils = [];

  function init() {
    initLocs();
  }

  function initLocs() {
    const num = 400;
    for (let i = 0; i < num; i++) {
      const p = document.createElementNS(namespace, "path");
      const angle = Math.random() * Math.PI * 2;
      const radius = 30 + Math.random() * 30;
      const x = 217 + radius * Math.cos(angle);
      const y = 239 + radius * Math.sin(angle);
      const t = new LocCubic(p, x, y);
      t.init();
      tendrils.push(t);
      holderRef.current.appendChild(p);
    }
  }

  function update() {
    tendrils.forEach((tendril) => {
      tendril.update();
    });
    window.requestAnimationFrame(update);
  }

  function start() {
    update();
  }

  useEffect(() => {
    init();
    start();
  }, []);

  return (
    <svg
      style={{ width: "100%", height: "fit-content" }}
      width="100%"
      height="100%"
      viewBox="0 0 700 500"
    >
      <defs>
        <marker
          id="ball"
          refX="2"
          refY="2"
          markerWidth="4"
          markerHeight="4"
          markerUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="2" fill="gold" fill-opacity=".5" />
        </marker>
        <linearGradient id="sunset_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#39010D" />
          <stop offset="100%" stop-color="#99221A" />
        </linearGradient>

        <linearGradient id="night_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#001222" />
          <stop offset="100%" stop-color="#014283" />
        </linearGradient>
        <clipPath id="clip_path">
          <rect x="0" y="0" width="700" height="500" />
        </clipPath>
      </defs>
      <g clipPath="url(#clip_path)">
        <rect
          id="bg"
          x="0"
          y="0"
          width="700"
          height="600"
          fill="url(#sunset_gradient)"
          stroke="none"
        />
        <circle
          cx="300"
          cy="275"
          r="220"
          stroke="none"
          fill="#C83F12"
          stroke-opacity=".2"
        />
        <image
          href="https://assets.codepen.io/256486/head_sillhouette.svg"
          x="0"
          y="30"
          height="500"
          width="700"
        />
        <g id="holder" ref={holderRef}></g>
      </g>
    </svg>
  );
};

export default FlowingLocs;
