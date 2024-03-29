"use client";

import React from "react";
import PVector from "../../utils/PVector";
//import bubble from "./bubble.png";

class BGParticle extends React.Component {
  constructor({ index }) {
    super();

    this.index = index;
    this.strokeWidth = 1;
    this.fillOpacity = 0.05;
    this.strokeOpacity = 1;
    this.rotationSpeed = Math.random() * 4 - 2;

    // boundary, position stuff;

    // physics vars
    this.physics = {
      minRadius: 12,
      radius: 2 + Math.round(Math.random() * 8),
      gravity: new PVector(0, 0.4),
      floatVelocity: new PVector(0, -0.1 - Math.random() * 2),
      acceleration: new PVector(0, 0.4),
      velocity: new PVector(0, 0),
      position: new PVector(
        Math.random() * 1000,
        Math.random() > 0.5 ? 20 : 1020
      ),
      boundary: {
        right: 1000,
        left: 0,
        top: 1000,
        bottom: 0,
      },
      flowStart: new PVector(500, 1000),
      initFlow: function () {
        this.acceleration = new PVector(0, 0.35);
        this.velocity = new PVector(0, 0);
      },
      resetFlow: function () {
        this.position = new PVector(this.flowStart.x, this.flowStart.y);
        this.velocity = new PVector(
          2 - Math.random() * 4,
          -14 - Math.random() * 12
        );
      },
      waterFlow: function () {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.restartFlowIfNeeded();
      },
      restartFlowIfNeeded: function () {
        if (this.position.y > this.boundary.top) {
          this.resetFlow();
          return;
        }
        if (this.position.x > this.boundary.right) {
          this.position.x = this.boundary.right;
          this.velocity.x *= -1;
        } else if (this.position.x < this.radius) {
          this.position.x = this.radius;
          this.velocity.x *= -1;
        }
      },
      float: function () {
        this.position.add(this.floatVelocity);
        this.restartFloatIfNeeded();
      },
      restartFloatIfNeeded: function () {
        if (this.position.y < this.boundary.bottom - this.radius) {
          this.position.y = this.boundary.top + this.radius;
          this.position.x = Math.random() * (1000 - this.radius);
          this.initFloatVelocity();
        }
      },
      initFloatVelocity: function () {
        this.floatVelocity = new PVector(0, -this.radius / 10);
      },
      orbit: function () {
        const targetV = new PVector(500, 500);
        targetV.sub(this.position);
        targetV.normalize();
        targetV.multiply(0.1);
        this.move(targetV);
        this.velocity.multiply(0.999);
      },
      move: function (newForce) {
        this.acceleration.add(newForce);
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration = new PVector(0, 0);
      },
    };

    // trig vars
    this.trig = {
      speed: 1,
      midline: 500,
      readyToStartSinFlow: false,
      isSin: Math.random() > 0.5 ? true : false,
      amplitude: Math.round(Math.random() * 200),
      radians: null,
      setRadians: function (newRadians) {
        this.radians = newRadians;
      },
      get ypos() {
        const pos = this.isSin
          ? this.midline + Math.sin(this.radians) * this.amplitude
          : this.midline + Math.cos(this.radians) * this.amplitude;
        return pos;
      },
      target: new PVector(0, 0),
      setTarget(newTarget) {
        this.target = newTarget;
      },
      inSinPosition: function (currentPos) {
        const dist = PVector.GetDistance(currentPos, this.target);
        const isClose = dist < 1 ? true : false;

        return isClose;
      },
      moveToSinPosition: function (currentPos) {
        const dx = this.target.x - currentPos.x;
        const moveX = dx / 10;
        currentPos.x += moveX;

        const dy = this.target.y - currentPos.y;
        const moveY = dy / 10;
        currentPos.y += moveY;
      },
      sinFlow: function (physics) {
        const currentPos = physics.position;
        const rad = physics.radius;
        if (!this.readyToStartSinFlow) {
          if (this.inSinPosition(currentPos)) {
            this.readyToStartSinFlow = true;
          } else {
            this.moveToSinPosition(currentPos);
            return;
          }
        }

        if (!this.readyToStartSinFlow) return;

        currentPos.x += this.speed;
        if (currentPos.x > 1000 + rad) currentPos.x = -rad;
        this.setRadians(Math.PI * 2 * (currentPos.x / 1000));

        currentPos.y = this.isSin
          ? this.midline + Math.sin(this.radians) * this.amplitude
          : this.midline + Math.cos(this.radians) * this.amplitude;
      },
    };

    // sin vars
    this.trig.setRadians(Math.PI * 2 * (this.physics.position.x / 1000));
    this.trig.setTarget(new PVector(this.physics.position.x, this.trig.ypos));

    // color vars
    this.hue = Math.round(Math.random() * 360);
    this.color = `hsl(${this.hue}, 50%, 80%)`;

    this.holder = null;
    this.spinner = null;

    this.flow = "sin";
  }

  getShape() {
    const num = Math.floor(Math.random() * 4);
    switch (num) {
      case 0:
        return (
          <circle
            cx={0}
            cy={0}
            r={this.physics.radius}
            fill={this.color}
            fillOpacity={this.fillOpacity}
            stroke={this.color}
            strokeOpacity={this.strokeOpacity}
            strokeWidth={this.strokeWidth}
          ></circle>
        );

      case 1:
        return (
          <rect
            x={-this.physics.radius}
            y={-this.physics.radius}
            width={this.physics.radius * 2}
            height={this.physics.radius * 2}
            fill={this.color}
            fillOpacity={this.fillOpacity}
            stroke={this.color}
            strokeOpacity={this.strokeOpacity}
            strokeWidth={this.strokeWidth}
          ></rect>
        );

      case 2:
        return (
          <polygon
            points={`0, ${-this.physics.radius} ${this.physics.radius}, ${
              this.physics.radius
            } ${-this.physics.radius}, ${this.physics.radius}`}
            fill={this.color}
            fillOpacity={this.fillOpacity}
            stroke={this.color}
            strokeOpacity={this.strokeOpacity}
            strokeWidth={this.strokeWidth}
          ></polygon>
        );

      case 3:
        return (
          <path
            d={`M0,${-this.physics.radius / 2} v${this.physics.radius} M${
              -this.physics.radius / 2
            },0 h${this.physics.radius}`}
            fill={"none"}
            stroke={this.color}
            strokeOpacity={this.strokeOpacity}
            strokeWidth={this.strokeWidth * 2}
          ></path>
        );

      default:
        return (
          <circle
            cx={0}
            cy={0}
            r={this.physics.radius}
            fill={this.color}
            fillOpacity={this.fillOpacity}
            stroke={this.color}
            strokeOpacity={this.strokeOpacity}
            strokeWidth={this.strokeWidth}
          ></circle>
        );
    }
  }

  changeFlow(newFlow) {
    this.flow = newFlow;
    this.trig.readyToStartSinFlow = false;
    if (this.flow === "waterFlow") this.physics.initFlow();
  }

  update() {
    if (this.holder === null) {
      this.holder = document.querySelector(`#circ_${this.index}`);
      this.spinner = document.querySelector(`#spinner_${this.index}`);
    }

    switch (this.flow) {
      case "sin":
        this.trig.sinFlow(this.physics);
        break;

      case "waterFlow":
        this.physics.waterFlow();
        break;

      case "float":
        this.physics.float();
        break;

      case "orbit":
        this.physics.orbit();
        break;

      default:
        this.trig.sinFlow(this.physics);
        break;
    }

    this.draw();
  }

  draw() {
    this.holder.setAttribute(
      "transform",
      `translate(${this.physics.position.x} ${this.physics.position.y})`
    );

    this.spinner.setAttribute(
      "transform",
      `rotate(${this.physics.position.x * this.rotationSpeed})`
    );
  }

  render() {
    return (
      <>
        <g
          key={`g_${this.index}`}
          id={`circ_${this.index}`}
          transform={`translate(${this.physics.position.x} ${this.physics.position.y})`}
        >
          <g
            id={`spinner_${this.index}`}
            transform={`rotate(${this.physics.position.x})`}
          >
            {this.getShape()}
          </g>
        </g>
      </>
    );
  }
}

export default BGParticle;
