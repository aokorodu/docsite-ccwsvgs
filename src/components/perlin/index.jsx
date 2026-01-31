import { createNoise3D } from "simplex-noise";
import { useEffect, useRef } from "react";

const mapRange = (value, inMin, inMax, outMin, outMax) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

class Worm {
  constructor(noise, holder, x, y, num, dx, upperRange, lowerRange) {
    this.noise = noise;
    this.holder = holder;
    this.x = x;
    this.y = y;
    this.num = num;
    this.dx = dx;
    this.p = null;
    this.namespace = "http://www.w3.org/2000/svg";
    this.upperRange = upperRange;
    this.lowerRange = lowerRange;
  }

  build() {
    this.p = document.createElementNS(this.namespace, "polyline");
    this.p.setAttribute("stroke", "hsl(150, 100%, 50%)");
    this.p.setAttribute("stroke-width", 1);
    this.p.setAttribute("fill", "none");
    this.holder.appendChild(this.p);
  }

  draw(tick) {
    let pointString = ``;
    for (let i = 0; i <= this.num; i++) {
      let xpos = this.x + i * this.dx;
      let dy = this.noise(xpos / 200, this.y / 200, tick);
      let ypos = this.y + mapRange(dy, -1, 1, this.lowerRange, this.upperRange);
      pointString += `${xpos},${ypos} `;
    }

    this.p.setAttribute("points", pointString);
  }
}

export const PerlinDemo = () => {
  let holder = useRef(null);

  useEffect(() => {
    const worms = [];
    const numWorms = 20;
    const numPoints = 40;
    const dx = 750 / numPoints;
    const dy = 80 / numWorms;
    const noise = createNoise3D();
    let tick = 0;

    for (let i = 0; i < numWorms; i++) {
      let y = 100 + i * dy;
      let worm = new Worm(noise, holder.current, 0, y, numPoints, dx, 50, -50);
      worm.build();
      worms.push(worm);
    }

    const animate = () => {
      tick += 0.01;
      worms.forEach((worm) => {
        worm.draw(tick);
      });
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Cleanup if necessary
    };
  }, []);

  return (
    <svg id="svg" viewBox="0 0 750 300">
      <g ref={holder}>
        <rect id="bg" x="0" y="0" width="750" height="300" fill="#000" />
      </g>
    </svg>
  );
};

export const PerlineWaveDemo = () => {
  return (
    <>
      <iframe
        height="500px"
        style={{ width: "100%" }}
        scrolling="no"
        title="RandomVsPerlineNoise using simplex-noise BLANK"
        src="https://codepen.io/aokorodu/embed/preview/QwEQoNy?default-tab=js%2Cresult&theme-id=dark"
        frameBorder="no"
        loading="lazy"
        allowTransparency="true"
      >
        See the Pen{" "}
        <a href="https://codepen.io/aokorodu/pen/QwEQoNy">
          RandomVsPerlineNoise using simplex-noise BLANK
        </a>{" "}
        by zuubaDigital (<a href="https://codepen.io/aokorodu">@aokorodu</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </>
  );
};

export const PerlineColorDemo = () => {
  return (
    <>
      <iframe
        style={{ width: "100%", height: "500px" }}
        scrolling="no"
        title="Coloring Book"
        src="https://codepen.io/aokorodu/embed/preview/LEZdRLP?default-tab=js%2Cresult&theme-id=dark"
        frameborder="no"
        loading="lazy"
        allowtransparency="true"
      >
        See the Pen{" "}
        <a href="https://codepen.io/aokorodu/pen/LEZdRLP">Coloring Book</a> by
        zuubaDigital (<a href="https://codepen.io/aokorodu">@aokorodu</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </>
  );
};
