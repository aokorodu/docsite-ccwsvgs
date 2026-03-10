import Blocks from "@/components/blocks";
import {
  BackAndForthExample,
  FailExample,
  AnimationFrameExample,
  SimpleBounceExample,
  ComplexBounceExample,
  ParticleExample,
} from "@/components/animationJSII";

const AnimationJavascriptII = () => {
  return (
    <>
      <h1>Simple Particle Class</h1>

      <p>
        This is all well and good for one bouncing particle, but what if we
        wanted more? What if we wanted dozens, or even hundreds? We'll need to
        create a particle class for that.</p>

      <h2>The Constructor</h2>

      <p> Let's start with the constructor.
        We'll want to pass in several variables as parameters, the x and y
        position, the radius, and the width and height of the svg.
      </p>

      <Blocks>{`class Particle {
  constructor(x, y, r, w, h) {
    this.x = x; this.y = y; this.r = r;
    this.right = w - r;
    this.top = h - r;
    this.x_speed = Math.random() * 10 - 5;
    this.y_speed = Math.random() * 10 - 5;
    this.circ = null
  }
}`}</Blocks>

      <p>
        We used the w (width) and h (height) variables to create a{" "}
        <strong>right</strong> and <strong>top</strong> variable. These will be
        used for wall collision detection.
      </p>

      <h2>Dynamically Creating our Circle</h2>

      <p>
        Next, we'll create an init method where we'll dynamically create the
        circle element. We'll need to pass in the "container" - the element that
        will hold all the particles.
      </p>

      <Blocks>{`
class Particle {
  constructor(x, y, r, w, h) {
    this.x = x; this.y = y; this.r = r;
    this.right = w - r;
    this.top = h - r;
    this.x_speed = Math.random() * 10 - 5;
    this.y_speed = Math.random() * 10 - 5;
    this.circ = null
  }

  init(container){
    // ... initialization code will go here
  }
}
`}</Blocks>

      <p>
        Now we'll dynamically create a circle element, add some styling, and add
        it to the container using the techniques we learned in the{" "}
        <strong>Changing SVGs Dynamically</strong> section
      </p>

      <Blocks>{`
class Particle {
  constructor(x, y, r, w, h) {
    this.x = x; this.y = y; this.r = r;
    this.right = w - r;
    this.top = h - r;
    this.x_speed = Math.random() * 10 - 5;
    this.y_speed = Math.random() * 10 - 5;
    this.circ = null
  }

  init(container){
    const namespace = "http://www.w3.org/2000/svg";
    this.circ = document.createElementNS(namespace, "circle");
    this.circ.setAttribute("cx", this.x);
    this.circ.setAttribute("cy", this.y);
    this.circ.setAttribute("r", this.r);
    this.circ.setAttribute("fill", "orange");
    this.circ.setAttribute("stroke", "black");
    this.circ.setAttribute("stroke-width", "3");
    container.appendChild(this.circ);
  }
}
`}</Blocks>

      <h2>The Update Method</h2>
      <p>
        Now we'll add an "update" method that will be used to change the
        circle's position.
      </p>

      <Blocks>{`
class Particle {
  constructor(x, y, r, w, h) {
    this.x = x; this.y = y; this.r = r;
    this.right = w - r;
    this.top = h - r;
    this.x_speed = Math.random() * 10 - 5;
    this.y_speed = Math.random() * 10 - 5;
    this.circ = null
  }

  init(container){
    const namespace = "http://www.w3.org/2000/svg";
    this.circ = document.createElementNS(namespace, "circle");
    this.circ.setAttribute("cx", this.x);
    this.circ.setAttribute("cy", this.y);
    this.circ.setAttribute("r", this.r);
    this.circ.setAttribute("fill", "orange");
    this.circ.setAttribute("stroke", "black");
    this.circ.setAttribute("stroke-width", "3");
    container.appendChild(this.circ);
  }

  update() {
    this.x += this.x_speed;
    this.y += this.y_speed;
  }
}
`}</Blocks>

      <h2>Wall Collision Detection</h2>
      <p>
        Next we'll add the method we created earlier to bounce the particle off
        the walls.
      </p>

      <Blocks lang="javascript">{`
class Particle {
  constructor(x, y, r, w, h) {
    // constructor code
  }

  init(container){
    // init code
  }

  update() {
    this.x += this.x_speed;
    this.y += this.y_speed;
    this.bounceIfNeeded();
  }

  bounceIfNeeded() {
    if (this.x > this.right) {
      this.x = this.right;
      this.x_speed *= -1;
    } else if (this.x < this.r) {
      this.x = this.r;
      this.x_speed *= -1;
    }
    if (this.y > this.top) {
      this.y = this.top;
      this.y_speed *= -1;
    } else if (this.y < this.r) {
      this.y = this.r;
      this.y_speed *= -1;
    }
  }
}
`}</Blocks>

      <p>
        Note that we're using the <strong>right</strong> and <strong>top</strong>{" "}
        variables for collision detection. It's a lot cleaner and more readable
        to use variables than hard-coded values.
      </p>

      <Blocks>{`
class Particle {
  constructor(x, y, r, w, h) {
    // constructor code
  }

  init(container){
    // init code
  }

  update() {
    // update code
  }

  bounceIfNeeded() {
    // bounce code
  }

  draw(){
    this.circ.setAttribute("cx", this.x);
    this.circ.setAttribute("cy", this.y);
  }
}
`}</Blocks>

      <h2>Instantiating our Particles</h2>
      <p>
        Now let's put the particle class in action. We'll need an array to hold
        all the particles, a variable for the number of particles, and a
        reference to the svg
      </p>

      <Blocks lang="javascript">{`<body>
  <svg id="particle-holder" ...></svg>
</body>
<script>
  class Particle {
    // particle code
  }

  const particles = [];
  const num_particles = 30;
  const svg = document.querySelector("#particle-holder");
</script>`}</Blocks>

      <p>
        Let's initialize all of the particles. We'll pass each a starting x and
        y position (250, 250), a radius (15), and the size of the svg (500x500).
      </p>

      <Blocks lang="javascript">{`<body>
  <svg id="particle-holder" ...></svg>
</body>
<script>
  class Particle {
    // particle code
  }

  const particles = [];
  const num_particles = 30;
  const svg = document.querySelector("#particle-holder");

  initParticles();

  function initParticles() {
    for (let i = 0; i < num_particles; i++) {
      const part = new Particle(250, 250, 15, 500, 500);
      part.init(svg);
      particles.push(part)
    }
  }
</script>`}</Blocks>

      <h2>Moving our Particles</h2>
      <p>
        Finally we'll create a <strong>moveParticles</strong> method that will
        call each particle's <em>update()</em> method. Note that the
        moveParticles uses requestAnimationFrame to call itself every frame.
      </p>

      <Blocks lang="javascript">{`<body>
  <svg id="particle-holder" ...></svg>
</body>
<script>
  class Particle {
    // particle code
  }

  const particles = [];
  const num_particles = 30;
  const svg = document.querySelector("#particle-holder");

  initParticles();
  moveParticles();

  function initParticles() {
    for (let i = 0; i < num_particles; i++) {
      const part = new Particle(250, 250, 15, 500, 500);
      part.init(svg);
      particles.push(part)
    }
  }

  function moveParticles() {
    particles.forEach((part) => {
      part.update();
    })

    window.requestAnimationFrame(moveParticles)
  }
</script>`}</Blocks>

      <ParticleExample />

      <p className="section">
        Check out the full particle example on{" "}
        <a href="https://codepen.io/aokorodu/pen/RwzXrJx" target="_blank" rel="noopener noreferrer">
          codepen
        </a>
      </p>
    </>
  );
};

export default AnimationJavascriptII;
