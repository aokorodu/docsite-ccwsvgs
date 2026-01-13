import Blocks from "@/components/blocks";
import {
  SinglePolygonExample,
  SinglePolygonWithReplayExample,
} from "@/components/matterjs";

const MatterjsParticlesPolygons = () => {
  return (
    <>
      <h1>Polygons</h1>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/xxvgarN"}
        target="_blank"
      >
        {"MatterJS codepen practice page"}
      </a>

      <h2>Creating a polygon</h2>

      <p>
        The process for creating a polygon is similar to what we've seen in
        prior lessons. In this lesson we'll create a MatterJS polygon body, and
        then use that body to create the svg polygon graphic that we'll be
        animating. The Bodies module that we use to create polygons looks like
        this:
      </p>

      <pre>
        <code>{`Matter.Bodies.polygon(x, y, sides, radius)`}</code>
      </pre>

      <p>
        Polygons in MatterJS are similar to squares/rectangles in that the x and
        y properties represent the center of gravity of the polygon. The radius
        is the distance from the center of the polygon to each vertex. So if we
        were to draw a circle with the same radius, each vertex would lie on the
        edge of the circle.
      </p>

      <p>
        We'll just be creating a single polygon particle in this example, so the
        code will look similar to our first particle example. As you can recall,
        the first thing we need to do (after creating variables for the various
        modules we'll need) is to create variables for our particle.
      </p>

      <Blocks>{` // particle vars
let particleGraphic, particleBody;
const particleRadius = 25;
const particleHolder = document.querySelector("#particleHolder");`}</Blocks>

      <p>
        The <em>particleGraphic</em> and <em>particleBody</em> are our svg
        element and matterjs body, and the particleHolder is just a group in the
        svg that we'll add our particleGraphic to.
      </p>

      <p>Next we'll add all of our normal svg setup variables:</p>

      <Blocks highlight="6,7,8,9,10,11">{`// particle vars
let particleGraphic, particleBody;
const particleRadius = 25;
const particleHolder = document.querySelector("#particleHolder");

// svg variables
const viewportWidth = 400;
const viewportHeight = 400;
const w = 400;
const h = 400;
const namespace = "http://www.w3.org/2000/svg";`}</Blocks>

      <p>We'll next need variables for our boundaries:</p>

      <Blocks highlight="13,14,15">{`// particle vars
let particleGraphic, particleBody;
const particleRadius = 25;
const particleHolder = document.querySelector("#particleHolder");

// svg variables
const viewportWidth = 400;
const viewportHeight = 400;
const w = 400;
const h = 400;
const namespace = "http://www.w3.org/2000/svg";

// boundaries
let leftwall, rightwall, floor;
const wallThickness = 100;`}</Blocks>

      <p>
        Now let's create out methods. We'll need our usual functions to
        initialize our SVG and the renderer. These will be the same as we
        discussed <strong>before</strong>, so I won't go into detail here.
      </p>

      <Blocks highlight="17,19">{`// particle vars
let particleGraphic, particleBody;
const particleRadius = 25;
const particleHolder = document.querySelector("#particleHolder");

// svg variables
const viewportWidth = 400;
const viewportHeight = 400;
const w = 400;
const h = 400;
const namespace = "http://www.w3.org/2000/svg";

// boundaries
let leftwall, rightwall, floor;
const wallThickness = 100;

function initSVG() {...}

function initRenderer() {...}`}</Blocks>

      <p>
        Now we'll define our initParticle method. We'll start off by hard-coding
        some properties - the x and y position, number of sides for our polygon
        (which is 5, since we're going to draw a pentagon). We'll also need a
        restutution variable, which we'll set to 0.7. We'll also need to create
        our particle body using a getParticleBody method that we'll need to
        define.
      </p>

      <Blocks>{`function initParticle() {
  // dimensions, etc
  const xpos = w / 2;
  const ypos = 0;
  const sides = 5;
  const radius = particleRadius;
  const restitution = 0.7;
  const color = "red";
}
`}</Blocks>

      <p>
        Next we'll uset the polygon method of the Bodies module to produce our
        polygon.
      </p>

      <pre>
        <code>{`Matter.Bodies.polygon(x, y, sides, radius, [options])`}</code>
      </pre>

      <p>
        The options are the usual properties we set when creating a matterjs
        body - the id, friction, restitution, and the boolean 'isStatic'
        property, which is false.
      </p>

      <Blocks highlight="10,11,12,13,14,15">{`function initParticle() {
  // dimensions, etc
  const xpos = w / 2;
  const ypos = 0;
  const sides = 5;
  const radius = particleRadius;
  const restitution = 0.7;
  const color = "red";

  particleBody = Bodies.polygon(0, 0, sides, radius, {
    id: "polygon",
    friction: 1,
    restitution:restitution,
    isStatic: false});
  }
`}</Blocks>

      <p>
        Once we have the particlBody, we can use its <em>vertices</em> to create
        our svg polygon shape. A bodies vertices are simply an array of all the
        points that make up a body. For example, the vertices of a square
        polygon would look something like this:
      </p>

      <pre>
        <code>{`[{x:0, y:0}, {x:100, y:0}, {x:100, y:100}, {x:0, y:100}]`}</code>
      </pre>

      <Blocks highlight="17">{`function initParticle() {
  // dimensions, etc
  const xpos = w / 2;
  const ypos = 0;
  const sides = 5;
  const radius = particleRadius;
  const restitution = 0.7;
  const color = "red";

  particleBody = Bodies.polygon(0, 0, sides, radius, {
    id: "polygon",
    friction: 1,
    restitution:restitution,
    isStatic: false});
  }

  const vertices = particleBody.vertices;
`}</Blocks>

      <p>
        Next we'll create a method that takes the vertices and returns an svg
        polygon.
      </p>

      <pre>
        <code>{`function getPolygonGraphic(vertices, color = "black")`}</code>
      </pre>

      <p>
        The first thing we need to do is convert the vertices array into a
        string we can use for our polygon element. We create an empty "points"
        string, and then loop through the vertices and append each vertex{" "}
        <em>x,y</em> value to that string.
      </p>

      <Blocks>{`function getPolygonGraphic(vertices, color = "black") {
  let points = "";

  vertices.forEach((vertex) => {
    points = \`\${points} \${vertex.x},\${vertex.y}\`;
  });
}
`}</Blocks>

      <p>
        Once we have our string, we'll create our polygon element and
        setAttribute it's "points" attribute to our points string.
      </p>

      <Blocks highlight="8,9,10">{`function getPolygonGraphic(vertices, color = "black") {
  let points = "";

  vertices.forEach((vertex) => {
    points = \`\${points} \${vertex.x},\${vertex.y}\`;
  });

  const pg = document.createElementNS(namespace, "polygon");
  pg.setAttribute("points", points);
  pg.setAttribute("fill", color);
}
`}</Blocks>

      <p>
        Once we have our polygon all we need to do is add it to a group element,
        similar to how we did with our rectangle shape in the prior lesson, and
        then return the group. Because the vertices array of a matterjs polygon
        is automatically centered around 0,0, we won't have to
        transform/translate our polygon at all.
      </p>

      <Blocks highlight="11,12,13,14 ">{`function getPolygonGraphic(vertices, color = "black") {
  let points = "";

  vertices.forEach((vertex) => {
    points = \`\${points} \${vertex.x},\${vertex.y}\`;
  });

  const pg = document.createElementNS(namespace, "polygon");
  pg.setAttribute("points", points);
  pg.setAttribute("fill", color);
  const g = document.createElementNS(namespace, "g");
  g.appendChild(pg);

  return g;
}`}</Blocks>

      <p>
        Now that we have our method to create our SVG polygon from the vertices,
        let's use it in our initParticle method. Once we have our
        particleGraphic, add it to our particleHolder, which is just a group in
        the SVG. Finally we'll give our particleBody a random angle of rotation
        and set it's position.
      </p>

      <Blocks highlight="17,18,19,20,21,22,23">{`function initParticle() {
  // dimensions, etc
  const xpos = w / 2;
  const ypos = 0;
  const sides = 5;
  const radius = particleRadius;
  const restitution = 0.7;
  const color = "red";

  particleBody = Bodies.polygon(0, 0, sides, radius, {
    id: "polygon",
    friction: 1,
    restitution:restitution,
    isStatic: false});
  }

  const vertices = particleBody.vertices;
  particleGraphic = getPolygonGraphic(vertices, color);
  particleHolder.appendChild(particleGraphic);

Body.setAngle(particleBody, Math.random() * 2 * Math.PI);
Body.setPosition(particleBody, { x: xpos, y: ypos });
}
`}</Blocks>

      <p>
        Our next two methods should be familiar from our prior lessons. First,
        we'll create the walls and floor, and then we'll create our world and
        add all the bodies to it.
      </p>

      <Blocks>{`function initWallAndFloor() {
  floor = Bodies.rectangle(w / 2, h + wallThickness / 2, w, wallThickness, {
    isStatic: true,
    id: "floor"
  });

  leftwall = Bodies.rectangle(-wallThickness / 2, h / 2, wallThickness, h, {
    isStatic: true,
    id: "leftwall"
  });

  rightwall = Bodies.rectangle(w + wallThickness / 2, h / 2, wallThickness, h, {
    isStatic: true,
    id: "righttwall"
  });
};

function initWorld() {
  Composite.add(engine.world, [particleBody, leftwall, rightwall, floor]);
}`}</Blocks>

      <p>
        Now let's add our update method. As with our last lesson, we get our
        position and angle values from particleBody,convert our angle to degrees
        (from radians) and then use that data to transform our graphic.
      </p>

      <Blocks>{`function initSVG() {...}
function initRenderer() {...};
function initParticle() {...};
function getPolygonGraphic() {...};
function initWallAndFloor() {...};
function initWorld() {...}

function update() {
  Engine.update(engine);
  const pos = particleBody.position;
  const radians = particleBody.angle;
  const degrees = (radians * 180) / Math.PI;
  particleGraphic.setAttribute(
  "transform",
  \`translate(\${pos.x} \${pos.y}) rotate(\${degrees})\`
  );
  window.requestAnimationFrame(update);
}`}</Blocks>

      <p>
        The final step in creating our particle animation is to simply call the
        methods we created above:
      </p>

      <Blocks highlight="9,10,11,12,13,14">{`function initSVG() {...}
function initRenderer() {...};
function initParticle() {...};
function getPolygonGraphic() {...};
function initWallAndFloor() {...};
function initWorld() {...}
function update() {...}

initSVG();
initRenderer();
initParticle();
initWallAndFloor();
initWorld();
update();`}</Blocks>

      <p>And this is what it looks like!</p>

      <SinglePolygonExample />

      <p>
        The only annoying thing about this particular code sketch is that the
        polygon is always a pentagon, and that you have to refresh the page to
        see a new one. I created a new sketch with a replay button that allows
        you to see various types of polygons of different sizes and shapes.
      </p>

      <SinglePolygonWithReplayExample />
    </>
  );
};

export default MatterjsParticlesPolygons;
