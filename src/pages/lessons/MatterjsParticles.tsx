import Blocks from "@/components/blocks";
import {
  EmbedExample,
  SingleParticleWidthRender,
  MatterDemo,
} from "@/components/matterjs";

const MatterjsParticles = () => {
  return (
    <>
      <h1>Creating Particles</h1>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/xxvgarN"}
        target="_blank"
      >
        {"MatterJS codepen practice page"}
      </a>

      <h3>Installing the library</h3>

      <p>
        The most basic way to import the MatterJS library is via the script tag.
        (CDN information)
      </p>

      <Blocks>{`<script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.20.0/matter.min.js"></script>`}</Blocks>

      <p>
        (I've created a codepen that imports the library that you can use{" "}
        <a href="https://codepen.io/aokorodu/pen/xxvgarN" target="_blank">
          here.
        </a>
        )
      </p>

      <h3>Set up the SVG</h3>

      <p>
        The first thing we'll need to do is set up our svg. I've created a group
        with an id of "holder" that will contain the particle graphic we'll
        eventually create. You'll notice that I've intentionally left the values
        for width, height, and viewBox blank - I'll be setting those values
        later with javascript.
      </p>

      <Blocks>{`<svg width="" height="" viewBox="">
  <g id="particleHolder"></g>
</svg>`}</Blocks>

      <h3>Create aliases for the modules</h3>

      <p>
        Now let's use javascript destructuring to create variables for all the
        MatterJS modules that we'll need for this lesson.
      </p>

      <Blocks>{`  const { Engine, Body, Bodies, Composite } = Matter;`}</Blocks>

      <h3>Create the engine</h3>

      <p>
        Next we'll create the physics engine. Again, the engine is responsible
        for all the physics calculations.
      </p>

      <Blocks highlight="2,3">{`  const { Engine, Body, Bodies, Composite } = Matter;
  const engine = Engine.create();`}</Blocks>

      <h3>Create the particle graphic and the MatterJS particle body.</h3>

      <p>
        We'll need variables for particle body and the particle graphic. The
        particle body is a MatterJS object that will contain all the properties
        we'll need to animate the particle graphic. We'll also need a variable
        for the particle radius (particleRadius).
      </p>

      <p>
        We'll be appending the dynamically created particle graphic to the group
        with an id of "particleHolder" in the svg, so we'll also need a variable
        for that.
      </p>

      <Blocks highlight="4,5,6,8,9">{`  const { Engine, Body, Bodies, Composite } = Matter;
  const engine = Engine.create();

  // particle vars
let particleGraphic, particleBody;
const particleRadius = 20;

// holder variable
const particleHolder = document.querySelector("#particleHolder");
`}</Blocks>

      <p>
        I'm also setting up variables for the svg properties - viewport width
        and height (viewportWidth, viewportHeight), and the viewBox width and
        height (w, h). I could just hard-code these values, but I like setting
        them dynamically - it makes it easier to change things around and
        experiment.
      </p>

      <Blocks highlight="11,12,13,14,15,16">{`  const { Engine, Body, Bodies, Composite } = Matter;
  const engine = Engine.create();

  // particle vars
let particleGraphic, particleBody;
const particleRadius = 20;

// holder variable
const particleHolder = document.querySelector("#particleHolder");

// svg variables
const viewportWidth = 500;
const viewportHeight = 500;
const w = 500;
const h = 500;
const namespace = "http://www.w3.org/2000/svg";
`}</Blocks>

      <p>
        The first thing we need is a method to set up our SVG viewport and
        viewBox.
      </p>

      <Blocks highlight="9,10,11,12,13,14">{`  const { Engine, Body, Bodies, Composite } = Matter;
  const engine = Engine.create();
// particle vars
...
// holder variable
...
// svg variables
...
function initSVG() {
  const svg = document.querySelector("svg");
  svg.setAttribute("width", \`\${viewportWidth}\`);
  svg.setAttribute("height", \`\${viewportHeight}\`);
  svg.setAttribute("viewBox",  \`0 0  \${w} \${h}\`);
}`}</Blocks>

      <p>
        We'll need a method to create the particle graphic using the dynamic
        element creation skills we learned in an earlier lesson. The{" "}
        <strong>initParticleGraphic</strong> method below creates a circle with
        a radius of 50. The cx/cy position doesn't really matter right now, as
        we'll be positioning the particle later.
      </p>

      <Blocks highlight="11,12,13,14,15,16,17,18">{`  const { Engine, Body, Bodies, Composite } = Matter;
  const engine = Engine.create();
  // particle vars
  ...
  // holder variable
  ...
  // svg variables
  ...
  function initSVG() { ...}

  function initParticleGraphic() {
    particleGraphic = document.createElementNS(namespace, "circle");
    particleGraphic.setAttribute("cx", "0");
    particleGraphic.setAttribute("cy", "0");
    particleGraphic.setAttribute("r", particleRadius);
    particleGraphic.setAttribute("fill", "black");
    particleHolder.appendChild(particleGraphic);
}`}</Blocks>

      <p>
        Now let's create the body. The MatterJS <strong>Bodies</strong> module
        has a circle method that we'll use to create a 2D body that's the same
        size and shape as the particle graphic. It looks like this:
      </p>

      <pre>
        <code>{`Bodies.circle(x, y, radius, [options]);`}</code>
      </pre>

      <p>
        The options object is used to set all kinds of physical properties on a
        MatterJS body. We'll just be setting three - <strong>id</strong>,{" "}
        <strong>friction</strong> and <strong>restitution</strong>.
      </p>

      <p>
        <strong>id</strong>: A unique name that the engine needs to keep track
        of the body within the world. The id <em>must</em> be unique. It's not a
        big deal for this example, since we'll only have one particle, but it's{" "}
        <strong>super</strong> important when you have multiple particles to
        make sure they all have unique IDs. If not,{" "}
        <em>all sorts of buggieness</em> will ensue, as we'll see in a later
        lesson!
      </p>

      <p>
        <strong>friction</strong>: A number between 0-1 that defines the
        friction of the body.
      </p>

      <p>
        <strong>restitution</strong>: A number between 0-1 that defines the
        elasticity (bounciness) of the object
      </p>

      <Blocks highlight="13,14,15,16,17,18,19,20">{`  const { Engine, Body, Bodies, Composite } = Matter;
  const engine = Engine.create();
  // particle vars
  ...
  // holder variable
  ...
  // svg variables
  ...
  function initSVG() { ...}

  function initParticleGraphic() {...};

  function initParticleBody() {
    particleBody = Bodies.circle(0, 0, particleRadius, {
      id: \`particleBody\`,
      friction: 0,
      restitution: 0.99
    });
  Body.setPosition(particleBody, { x: w/2, y: particleRadius })
  };
  `}</Blocks>

      <p>
        Once we create the particle body, we use the{" "}
        <strong>setPosition</strong> method of the Body module to position the
        body at the top of the SVG.
      </p>

      <pre>
        <code>{`Body.setPosition(body, { x: number, y: number });`}</code>
      </pre>

      <p>
        Remember, the MatterJS body <em>isn't actually rendered at all</em>.
        Think of it as existing in a virtual world that we'll refer to every
        frame, and use it's position and orientation to position our graphic.
      </p>

      <h3>Create the floor</h3>

      <p>
        To prevent our particle from just falling in infinite space, we'll need
        to create some sort of floor body. We want this floor to be different
        than our particle - it needs to be completely stationary and unaffected
        by gravity. We'll do this by creating a <strong>static</strong> body.
      </p>

      <p>
        We'll use the Bodies <strong>rectangle</strong> method to create the
        floor;
      </p>

      <pre>
        <code>{`Bodies.rectangle(x, y, radius, height, [options]);`}</code>
      </pre>

      <Blocks highlight="8,9,10,21,22,23,24,25,26,27">{`  const { Engine, Body, Bodies, Composite } = Matter;
  const engine = Engine.create();
  // particle vars
  ...
  // holder variable
  ...

  // floor variables
  let floor;
  const floorThickness = 100;

  // svg variables
  ...

  function initSVG() { ...}

  function initParticleGraphic() {...};

  function initParticleBody() {...};

  function initFloor() {
    floor = Bodies.rectangle(w/2, h + floorThickness/2, w, floorThickness, {
        isStatic: true,
        id: "floor"
      });
    }
`}</Blocks>

      <p>
        You might be confused by the values we have for the x and y position
        (x:w/2, y:h + floorThickness/2). If we're creating the floor at the
        bottom of the space, shouldn't x=0 and y = h (the height of the space)?
        Well, the way MatterJS defines rectangles is a bit different than how
        they're defined in SVGs, in that the x and y position represent the{" "}
        <em>center of gravity</em> of the body, and not the upper right hand
        corner. For rectangles, and circles, the center of gravity is always in
        the middle of the body. For irregularly shaped objects, the center can
        be elswhere, as we'll see in a later lesson.
      </p>

      <p>
        In this example, since the "room" is 500 units wide (w), to have it span
        the entire width of the space we'll need to also make the floor 500
        units wide, and place it horizontally at 250 (w/2). Since it's 100 units
        tall (floorThickness=100), and we want the top of the floor to line up
        with the bottom of the space, we'll need to place it vertically at h +
        floorThickness/2.
      </p>

      <h4>Position the floor using it's center of gravity as it's x,y position.</h4>

      <img src="/MatterJS_floor_body.png" alt="Drag Racing" />

      <p>
        As you can see, instead of an eleasticity property the floor has a
        boolean <strong>isStatic</strong> property that is set to <em>true</em>.
        As a result, the floor isn't effected by gravity, and remains
        stationary.
      </p>

      <h3>Creating the MatterJS world and everything in it</h3>

      <p>
        Now we have to create the world, and put the particle and floor in it
        using the <strong>Composite</strong> module:
      </p>

      <pre>
        <code>{`Composite.add(composite, [objects])`}</code>
      </pre>

      <p>
        A Composite is just a container for a collection of objects. In this
        case we'll use the pre-defined <strong>engine.world</strong> as our
        composite, and add the particle and floor as an array of objects:
      </p>

      <Blocks highlight="23,24,25">{`  const { Engine, Body, Bodies, Composite } = Matter;
  const engine = Engine.create();
  // particle vars
  ...
  // holder variable
  ...

  // floor variables
  let floor;
  const floorThickness = 100;

  // svg variables
  ...

  function initSVG() { ...}

  function initParticleGraphic() {...};

  function initParticleBody() {...};

  function initFloor() {...};

  function makeWorld() {
    Composite.add(engine.world, [particleBody, floor]);
  }
`}</Blocks>

      <h3>Adding the game loop</h3>

      <p>
        Now it's time to animate our graphic using our trusted
        update/requestAnimationFrame method.
      </p>

      <Blocks highlight="24,25,26,27,28,29,30,31,32">{`  const { Engine, Body, Bodies, Composite } = Matter;
  const engine = Engine.create();
  // particle vars
  ...
  // holder variable
  ...

  // floor variables
  ...

  // svg variables
  ...

  function initSVG() { ...}

  function initParticleGraphic() {...};

  function initParticleBody() {...};

  function initFloor() {...};

  function makeWorld() {...}

  function update() {
    // update the engine.
    Engine.update(engine);
    // look at the particleBody position and update graphic position accordingly.
    const pos = particleBody.position;
    particleGraphic.setAttribute("cx", pos.x);
    particleGraphic.setAttribute("cy", pos.y);
    window.requestAnimationFrame(update);
  };
`}</Blocks>

      <p>
        The update loop is pretty simple. First we call the update method on our
        engine, which will advance it one "frame".
      </p>

      <pre>
        <code>{`Engine.update(engine);`}</code>
      </pre>

      <p>
        Then we get the position data from the particleBody, and set the cx and
        cy attributes of the particle accordingly. We then call
        requestAnimationFrame to continue the loop.
      </p>

      <h3>Final step</h3>

      <p>
        Now all we need to do to kick things off is call all the methods we
        created above:
      </p>

      <Blocks highlight="34,35,36,37,38,39">{`  const { Engine, Body, Bodies, Composite } = Matter;
  const engine = Engine.create();
  // particle vars
  ...
  // holder variable
  ...

  // floor variables
  ...

  // svg variables
  ...

  function initSVG() { ...}

  function initParticleGraphic() {...};

  function initParticleBody() {...};

  function initFloor() {...};

  function makeWorld() {...}

  function update() {
    // update the engine.
    Engine.update(engine);
    // look at the particleBody position and update graphic position accordingly.
    const pos = particleBody.position;
    particleGraphic.setAttribute("cx", pos.x);
    particleGraphic.setAttribute("cy", pos.y);
    window.requestAnimationFrame(update);
  };

  initParticleGraphic();
  initParticleBody();
  initFloor();
  makeWorld();
  initUI();
  update();
`}</Blocks>

      <p>
        You can check out and play around with the code for this lesson{" "}
        <a href="https://codepen.io/aokorodu/pen/GRVrbjz" target="_blank">
          at this codepen
        </a>
        . There are a few minor differences to the code apove - I've added a{" "}
        <strong>replay</strong> button, for example - but for all intents and
        purposes it's identical to what we've just discussed.
      </p>

      <EmbedExample />

      <h2>Using the renderer</h2>

      <p>
        Sometimes it can be useful to see what's going on in the MatterJS world
        as we're buiding out the svg graphics that we'll be animating,
        especially when we're creating complex rigid body shapes (as we'll do in
        an upcoming lesson). Activating the renderer only takes a few lines of
        code.
      </p>

      <p>
        With our HTML, we'll need to create a div that we can attach the
        renderer to:
      </p>

      <Blocks highlight="6">{`<div class="visHolder">
  <svg id="svg" width="" height="" viewBox="">
  <rect id="bg" x="0" y="0" width="" height="" />
  <g id="particleHolder"></g>
</svg>
  <div id="rendererHolder"></div>
</div>`}</Blocks>

      <p>
        In our code we need to make sure that we're importing the Render module:
      </p>

      <Blocks>{`const { Engine, Render, Body, Bodies, Composite } = Matter;`}</Blocks>

      <p>Next we'll create the renderer using the Render.create method:</p>

      <pre>
        <code>{` Render.create({
    element: someHTMLElement,
    engine: engine,
    options: {
      width: someWidthValue,
      height: someHeightValue,
      showAngleIndicator: true
    }
  })`}</code>
      </pre>

      <p>
        The options are pretty self-explanitory for the most part. The{" "}
        <em>width</em> and <em>height</em> properties should match the viewBox
        values. The <em>showAngleIndicator</em> indicator is a boolean value,
        and it makes the renderer draw a red tick mark on our objects so we can
        see their rotation. After we create the renderer we just need to
        actually tell it to start running:
      </p>

      <pre>
        <code>{`Render.run(rendererName)`}</code>
      </pre>

      <p>
        Here's the actual method I use in the example below to create the
        renderer:
      </p>

      <Blocks highlight="1-16,19">{`function initRenderer() {
  // create renderer
  const rendererHolder = document.querySelector("#rendererHolder");
  const render = Render.create({
    element: rendererHolder,
    engine: engine,
    options: {
      width: w,
      height: h,
      showAngleIndicator: true
    }
  });

    Render.run(render);

}

initSVG();
initRenderer();
initParticleGraphic();
initParticleBody();
initFloor();
makeWorld();
initUI();
update();
`}</Blocks>

      <p>
        And that's it! You can check out what the render actually looks like in
        the codepen below. I'd absolutely recommend using the render while
        you're figuring out how to create svg elements that correspond to the
        MatterJS bodies. It can be tricky sometimes, and having a visual of
        what's really happening in the MatterJS world can be helpful.
      </p>

      <SingleParticleWidthRender />
    </>
  );
};

export default MatterjsParticles;
