import Blocks from "@/components/blocks";
import { MultiParticleEmbedExample } from "@/components/matterjs";

const MatterjsParticlesMultiple = () => {
  return (
    <>
      <h1>Multiple Particles</h1>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/xxvgarN"}
        target="_blank"
      >
        {"MatterJS codepen practice page"}
      </a>

      <h2>Multiple Particle example</h2>

      <p>
        Now that we know the basics, let's create something with multiple
        particles. This won't require much of a change from our first example.
        The main difference is that we'll use an array to keep track of our
        particle graphics (particleGraphics) and our particle bodies
        (particleBodies). We'll also need a variable for the number of particles
        we want to create (numberOfParticles).
      </p>

      <Blocks>{`const { Engine, Body, Bodies, Composite } = Matter;
const engine = Engine.create();

// particle vars
const particleGraphics = [];
const particleBodies = [];
const numberOfParticles = 50;
`}</Blocks>

      <p>
        When creating the particle graphics we'll just use a loop and push the
        particles we create into the particleGraphics array.
      </p>

      <Blocks>{`function initParticleGraphics() {
  for (let i = numberOfParticles; i > 0; i--) {
    const particleGraphic = document.createElementNS(namespace, "circle");
    particleGraphic.setAttribute("cx", 0);
    particleGraphic.setAttribute("cy", 0);
    particleGraphic.setAttribute("r", particleRadius);
    particleGraphic.setAttribute("fill", getRandomColor());
    holder.appendChild(particleGraphic);
    particleGraphics.push(particleGraphic);
  }
}
`}</Blocks>

      <p>
        We'll do the same with the particle bodies as well - each body will be
        pushed into the particleBodies array:
      </p>

      <Blocks>{`function initParticleBodies() {
    for (let i = numberOfParticles; i > 0; i--) {
      const particleBody = Bodies.circle(0, 0, particleRadius, {
        id: "particleBody_" + i,
        friction: 0,
        restitution: 0.9
      });
      const xpos = w/3 + Math.random() * w/3;;
      const ypos = Math.random() * (-i * particleRadius*2);
      Body.setPosition(particleBody, { x: xpos, y: ypos });

      particleBodies.push(particleBody);
    }
  };
  `}</Blocks>

      <p>
        In the update function we'll just loop through all off the
        particleGraphics and set the position using the corresponding body in
        the particleBodies array:
      </p>

      <Blocks highlight="4,5,6,7,8,9">{`function update() {
    // update the engine
    Engine.update(engine);
    // look at the particleBody position and update graphic position accordingly.
    particleGraphics.forEach((pg, index) => {
      const pos = particleBodies[index].position;
      pg.setAttribute("cx", pos.x);
      pg.setAttribute("cy", pos.y);
    });

    window.requestAnimationFrame(update);
  };
  `}</Blocks>

      <p>
        You can check out and play around with the code{" "}
        <a href="https://codepen.io/aokorodu/pen/OJKXoBa" target="_blank">
          here
        </a>
        ..
      </p>

      <MultiParticleEmbedExample />
    </>
  );
};

export default MatterjsParticlesMultiple;
