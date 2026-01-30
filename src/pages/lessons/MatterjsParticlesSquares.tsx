import Blocks from "@/components/blocks";
import {
  SquareNoRotateExample,
  SquareNoRotateWithRenderExample,
  SquareRotateExample,
} from "@/components/matterjs";

const MatterjsParticlesSquares = () => {
  return (
    <>
      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/xxvgarN"}
        target="_blank"
      rel="noopener noreferrer"
      >
        {"MatterJS codepen practice page"}
      </a>

      <h1>Square Particles</h1>

      <h2>Square Particles</h2>

      <p>
        Let's update the example to use square instead of round particles. We'll
        need to change up both our <strong>initParticleGraphics</strong> and{" "}
        <strong>initParticleBodies</strong> slightly.
      </p>

      <p>
        As we discussed when making the floor body in a prior lesson, rectangles
        in MatterJS are created in such a way that the x and y represent the
        center of gravity, as opposed to an svg rectangle, where the x and y
        represent the upper-left-hand corner of the shape.
      </p>

      <img src="/rectPositioning.png" alt="Rectangle Positioning" />

      <p>
        To make them consistent, we'll create an svg rectangle and put it inside
        a group element, then shift the rectangle so that it's center lines up
        with the group element's origin.
      </p>

      <img src="/rectCentering.png" alt="Rectangle Centering" />

      <p>We'll need to create variables for the particles height and width:</p>

      <Blocks highlight="5,6">{`
  const particleGraphics = [];
  const particleBodies = [];
  const numberOfParticles = 50;
  const particleWidth = 40;
  const particleHeight = 40;
`}</Blocks>

      <p>
        In our <strong>initParticleGraphics</strong> method, we'll create a
        group element and our particle graphic. We'll set rectangle's x to
        -particleWidth/2, and the y to -particleHeight/2, so that it's center
        lines up with the center of it's parent group.
      </p>

      <Blocks>{`function initParticleGraphics() {
  for (let i = numberOfParticles; i > 0; i--) {
    const particleHolder = document.createElementNS(namespace, "g");
    const particleGraphic = document.createElementNS(namespace, "rect");
    particleGraphic.setAttribute("x", -particleWidth/2);
    particleGraphic.setAttribute("y", -particleHeight/2);
    particleGraphic.setAttribute("width", particleWidth);
    particleGraphic.setAttribute("height", particleHeight);
    particleGraphic.setAttribute("fill", getRandomColor());

    particleHolder.appendChild(particleGraphic);
    holder.appendChild(particleHolder);
    particleGraphics.push(particleHolder);
  }
};
`}</Blocks>

      <p>
        That <em>should</em> be it, right? But when we run our code, something
        looks a bit off:
      </p>

      <SquareNoRotateExample />

      <p>
        Here's a version with the renderer, so you can see how the square
        particles are supposed to act:
      </p>

      <SquareNoRotateWithRenderExample />

      <p>
        The svg rectangles aren't acting like real particles - they keep the
        same orientation, and don't bounce around and rotate like a real
        rectangular particle would. There's a reasonable explaination - we
        haven't wired up the particles to rotate at all. Fortunately the
        rotation information is easy to get from our particle body. When we
        translate our graphic, we'll just make sure to set the rotation as well.
        We'll just need to change our update method like this:
      </p>

      <Blocks>{`function update() {
  Engine.update(engine);
  // look at the particleBody position and update graphic position accordingly.
  particleGraphics.forEach((pg, index) => {
    const pos = particleBodies[index].position;
    const angle = particleBodies[index].angle;

    // the body angle property is in radians, so we need to convert it to degrees
    const degrees = (angle * 180) / Math.PI;
    pg.setAttribute(
      "transform",
      "translate(" + pos.x + " " + pos.y + ") rotate(" + degrees + ")"
    );});

window.requestAnimationFrame(update);
};`}</Blocks>

      <p>And now it works!</p>

      <SquareRotateExample />
    </>
  );
};

export default MatterjsParticlesSquares;
