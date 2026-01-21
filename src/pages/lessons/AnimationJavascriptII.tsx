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
      <h2>Pure JavaScript animations</h2>

      <p>
        Next we'll create an animation without adding or removing css. Let's try
        to replicate the animation from the CSS animation section, where we
        simply move the circle up and down.
      </p>

      <BackAndForthExample />

      <p>
        We'll start off by getting a reference to the circle using
        querySelector.
      </p>

      <Blocks>{`<svg ...>
  <circle id="my-circle" cx="150" cy="150" r="10" fill="green" />
</svg>

<script>
  const circ = document.querySelector("#my-circle");
  let xpos = 50;
  for (let i = 0; i < 400; i++) {
    circ.setAttribute("cx", xpos);
    xpos += 1;
  }
</script>`}</Blocks>

      <p>
        You can probably guess that we'll be changing the position of the circle
        using the setAttribute method we demonstrated in the{" "}
        <strong>Changing SVGs Dynamically</strong> section.
      </p>

      <p>
        Let's say we just want to move the circle from the top of the SVG to the
        bottom. You might think that we can simply use a loop to increase the
        circle's cy attribute. It won't work. Why?
      </p>

      <Blocks highlight="7,8,9,10,11">{`<svg ...>
  <circle id="my-circle" cx="150" cy="150" r="10" fill="green" />
</svg>

<script>
  const circ = document.querySelector("#my-circle");
  let ypos = 0;
  for (let i = 0; i < 300; i++) {
    circ.setAttribute("cx", ypos);
    ypos += 1;
  }
</script>`}</Blocks>

      <FailExample />

      <br />

      <p>
        The circle's cy attribute is indeed being updated, but the browser runs
        through all of the loop iterations so fast you won't even see it. All
        you'll see is the green dot at the final cy position. In terms of the
        browsers frame rate, all of the animation occurs on a single frame.
      </p>

      <h3>requestAnimationFrame</h3>

      <p>
        In order to animate the circle, we'll need to update it's position once
        per frame. We do this using the browser's requestAnimationFrame()
        method.
      </p>

      <p>
        First, let's create a method that increments the circle's cy attribute:
      </p>

      <Blocks>{`const circ = document.querySelector("#my-circle");
let ypos = 10;

moveCircle();

function moveCircle(){
  circ.setAttribute("cy", ypos);
  ypos += 1;
}`}</Blocks>

      <p>
        As a reminder, the browser has a own frame rate of about 60 fps. This
        means that it <em>repaints</em> itself 60 times per second. The{" "}
        <strong>requestAnimationFrame</strong> method is used to call an
        animation function prior to "repainting" the screen. So you'll want to
        pass it a function that updates some visual aspect of the svg - in this
        case, the moveCircle() method.
      </p>

      <p>
        We'll recursively call the moveCircle method by adding the
        window.requestAnimationFrame to the end of the function. So the function
        runs, updates the cy value, and then calls itself to run again on the
        next frame. The method keeps going until cy {'>='} 290. Once it reaches that
        value, a return statement prevents the requestAnimationFrame method from
        being called again.
      </p>

      <Blocks>{`const circ = document.querySelector("#my-circle");
let ypos = 10;

moveCircle();

function moveCircle(){
  ypos += 1;
  circ.setAttribute("cy", ypos);

  if (ypos >= 290) return;

  window.requestAnimationFrame(moveCircle);
}`}</Blocks>

      <AnimationFrameExample />

      <p>
        Instead of just stopping, let's make the ball bounce off the wall and
        head the other direction. In order to do this, we'll need to create a{" "}
        <em>speed</em> variable.
      </p>

      <Blocks>{`let speed = 1;`}</Blocks>

      <Blocks highlight="3">{`const circ = document.querySelector("#my-circle");
let ypos = 10;
let speed = 1;

moveCircle();

function moveCircle(){
  ypos += 1;
  circ.setAttribute("cy", ypos);

  if (ypos >= 290) return;

  window.requestAnimationFrame(moveCircle);
}`}</Blocks>

      <p>
        Now let's update the <em>moveCircle</em> method so that when the ypos
        variable is greaterthan or equal to 290, whe change the speed variable
        so the ball heads in the opposite direction. An easy way to do this is
        to just multiply it by -1.
      </p>

      <Blocks highlight="11,12,13,14">{`const circ = document.querySelector("#my-circle");
let ypos = 10;
let speed = 1;

moveCircle();

function moveCircle(){
  ypos += 1;
  circ.setAttribute("cy", ypos);

  if(ypos >= 290){
    speed *= -1;
    ypos = 290;
  }

  window.requestAnimationFrame(moveCircle);
}`}</Blocks>

      <SimpleBounceExample />

      <br />

      <p>
        As you can see, the ball bounces off the bottom but not the top. We'll
        also need to reverse the speed when the circle hits the top edge of the
        svg (ypos &lt; 10).
      </p>

      <Blocks highlight="11,12,13,14,16,17,18,19">{`const circ = document.querySelector("#my-circle");
let ypos = 10;
let speed = 1;

moveCircle();

function moveCircle(){
  ypos += 1;
  circ.setAttribute("cy", ypos);

  if(ypos >= 290){
    speed *= -1;
    ypos = 290;
  }

  if(ypos < 10){
    speed *= -1;
    ypos = 10;
  }

  window.requestAnimationFrame(moveCircle);
}`}</Blocks>

      <SimpleBounceExample top={true} />

      <br />

      <p>
        Let's make this work in two dimensions by adding speed variables for
        both x and y, and updating the speed variables when the ball collides
        with ANY of the walls.
      </p>

      <Blocks highlight="2,3,4,5,10,11,12,13,15,16,17,18,19,20,21,23,24,25,26,27,28,29">{`const circ = document.querySelector("#my-circle");
let xpos = 100;
let ypos = 150;
let x_speed = 1;
let y_speed = 1;

moveCircle();

function moveCircle(){
  circ.setAttribute("cx", xpos);
  circ.setAttribute("cy", ypos);
  xpos += x_speed;
  ypos += y_speed;

  if(xpos > 190){
    xpos = 190;
    x_speed *= -1;
  } else if(xpos < 10){
    xpos = 10;
    x_speed *= -1;
  }

  if(ypos > 290){
    ypos = 290;
    y_speed *= -1;
  } else if(ypos < 10){
    ypos = 10;
    y_speed *= -1;
  }

  window.requestAnimationFrame(moveCircle);
}`}</Blocks>

      <ComplexBounceExample />

      <br />

      <p>
        With hard-coded speed variables, the animation is the same every time.
        We'll fix that by setting random values for x_speed and y_speed.
      </p>

      <Blocks highlight="5,6">{`<script>
  const circ = document.querySelector("#my-circle");
  let xpos = 100;
  let ypos = 150;
  let x_speed = Math.random() * 10 - 5;
  let y_speed = Math.random() * 10 - 5;

  moveCircle();

  function moveCircle(){
    circ.setAttribute("cx", xpos);
    circ.setAttribute("cy", ypos);
    xpos += x_speed;
    ypos += y_speed;

    if(xpos > 190){
      xpos = 190;
      x_speed *= -1;
    } else if(xpos < 10){
      xpos = 10;
      x_speed *= -1;
    }

    if(ypos > 290){
      ypos = 290;
      y_speed *= -1;
    } else if(ypos < 10){
      ypos = 10;
      y_speed *= -1;
    }

    window.requestAnimationFrame(moveCircle);
  }
</script>`}</Blocks>

      <ComplexBounceExample randomized={true} />

      <br />

      <p>
        Note: for the random speed values, I could have just multiplied a number
        by Math.random() like this:
      </p>

      <Blocks>{`let x_speed = Math.random() * 10;`}</Blocks>

      <p>
        The problem is that this would always result in a positive number. If I
        want to have a potential range of positive and negative values from x to
        -x, I need to do this
      </p>

      <Blocks>{`let value = Math.random() * <2x> - x;`}</Blocks>

      <p>So to get values from 5 to -5:</p>

      <Blocks>{`let x_speed = Math.random() * 10 - 5;`}</Blocks>

      <br />

      <p>
        *See the full example on{" "}
        <a
          href="https://codepen.io/aokorodu/pen/RwzzBZa?editors=0010"
          target="_blank"
        >
          codepen
        </a>
      </p>

      <h2>simple particles</h2>

      <p>
        This is all well and good for one bouncing particle, but what if we
        wanted more? What if we wanted dozens, or even hundreds? We'll need to
        create a particle class for that. Let's start with the constructor.
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

      <p>
        Next, we'll create an init method where we'll dynamically create the
        circle element. We'll need to pass in the "container" - the element that
        will hold all the particles.
      </p>

      <Blocks highlight="12-14">{`<script>
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
</script>`}</Blocks>

      <p>
        Now we'll dynamically create a circle element, add some styling, and add
        it to the container using the techniques we learned in the{" "}
        <strong>Changing SVGs Dynamically</strong> section
      </p>

      <Blocks highlight="12-22">{`<script>
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
</script>`}</Blocks>

      <p>
        Now we'll add an "update" method that will be used to change the
        circle's position.
      </p>

      <Blocks highlight="24-27">{`<script>
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
</script>`}</Blocks>

      <p>
        Next we'll add the method we created earlier to bounce the particle off
        the walls.
      </p>

      <Blocks highlight="14,17-32">{`<script>
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
</script>`}</Blocks>

      <p>
        Note that we're using the <strong>right</strong> and <strong>top</strong>{" "}
        variables for collision detection. It's a lot cleaner and more readable
        to use variables than hard-coded values.
      </p>

      <Blocks highlight="19-22">{`<script>
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
</script>`}</Blocks>

      <p>
        Now let's put the particle class in action. We'll need an array to hold
        all the particles, a variable for the number of particles, and a
        reference to the svg
      </p>

      <Blocks highlight="2,10-12">{`<body>
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

      <Blocks highlight="12,14-19">{`<body>
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

      <p>
        Finally we'll create a <strong>moveParticles</strong> method that will
        call each particle's <em>update()</em> method. Note that the
        moveParticles uses requestAnimationFrame to call itself every frame.
      </p>

      <Blocks highlight="13,21-27">{`<body>
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

      <br />

      <p>
        Check out the full particle example on{" "}
        <a href="https://codepen.io/aokorodu/pen/RwzXrJx" target="_blank">
          codepen
        </a>
      </p>
    </>
  );
};

export default AnimationJavascriptII;
