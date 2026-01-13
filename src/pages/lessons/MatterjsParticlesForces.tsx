import Blocks from "@/components/blocks";
import {
  MultiParticleEmbedExample,
  SquareNoRotateExample,
  SquareRotateExample,
  WindSliderExample,
  PopcornExample,
} from "@/components/matterjs";

const MatterjsParticlesForces = () => {
  return (
    <>
      <h1>Appyling Forces</h1>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/xxvgarN"}
        target="_blank"
      >
        {"MatterJS codepen practice page"}
      </a>

      <h2>How do forces work?</h2>

      <p>
        A "force" is a push or pull on an object that can cause it to change its
        motion, speed, or direction. A force is a <em>vector</em>, meaning that
        it has <strong>magnitude</strong> and <strong>direction</strong>.
      </p>

      <blockquote>
        <p>
          <strong>vector</strong>: a quantity that has magnitude and direction
          and that is commonly represented by a directed line segment whose
          length represents the magnitude and whose orientation in space
          represents the direction.{" "}
          <a
            href="https://www.merriam-webster.com/dictionary/vector#:~:text=a,direction%20especially%20of%20an%20airplane"
            target="_blank"
          >
            Merriam-Webster Dictionary
          </a>
        </p>
      </blockquote>

      <img src="/vector_drawing.png" alt="Vector Drawing" />

      <p>
        So the force above with a magnitude of 10 and an angle of 60° will be
        represented as a vector like this:
      </p>

      <pre>
        <code>{`const someForce = {x:5, y:8.66}`}</code>
      </pre>

      <p>
        We can apply a force to an object using the Body modules{" "}
        <strong>applyForce</strong> module:
      </p>

      <pre>
        <code>{`Body.applyForce(body, position, someForce);`}</code>
      </pre>

      <p>
        Let's update our{" "}
        <a href="https://codepen.io/aokorodu/pen/OJKXoBa" target="_blank">
          MatterJS - Multiple Particles
        </a>{" "}
        codepen so that we can apply a wind force to our particles. First we'll
        need to create a variable for our force:
      </p>

      <Blocks>{`  // wind force
  let windForce = { x: 0, y: 0 };
  `}</Blocks>

      <p>
        The force of wind is a bit different than the force of a bat hitting a
        baseball, in that the force is applied over a longer period of time. So
        for this exercise we'll apply the force in our <strong>update</strong>{" "}
        method.
      </p>

      <Blocks highlight="5">{`  function update() {
  // look at the particleBody position and update graphic position accordingly.
  particleBodies.forEach((particleBody, index) => {
    const pos = particleBody.position;
    Matter.Body.applyForce(particleBody, pos, windForce);
    const particleGraphic = particleGraphics[index];
    particleGraphic.setAttribute("cx", pos.x);
    particleGraphic.setAttribute("cy", pos.y);
  });

window.requestAnimationFrame(update);
};`}</Blocks>

      <p>
        Since the windForce is essentially 0, you won't see any change in the
        way the particles move. Go ahead and set a <em>really</em> small value
        for x - something like 0.001. You'll see the particles look like they
        are being pushed to the right of our scene. Changing to a negative value
        pushes the particles to the left.
      </p>

      <p>
        I've created an interactive version that let's you adjust the wind force
        with an input slider:
      </p>

      <WindSliderExample />

      <p>
        Here's another example where I apply an upward force once the particle
        falls to a certain level. You'll notice that the force is much larger
        than the force applied in the wind example (0.2 for the popcorn example
        vs 0.005 maximum for the wind example). That's because the wind force is
        being applied every frame, which causes the particle to accelerate. If
        the force is to large, it ends up accelerating so fast that you can't
        even see it. In the "popcorn" force example, the force is only applied
        briefly, when it falls below a certain y threshold, so the particle
        doesn't continue to accelerate.
      </p>

      <Blocks highlight="7,8,9">{`  function update() {
  // update the engine
  Engine.update(engine);
  // look at the particleBody position and update graphic position accordingly.
  particleBodies.forEach((particleBody, index) => {
    const pos = particleBody.position;
    if (pos.y > h-50){
      Matter.Body.applyForce(particleBody, pos, popcornForce)
    }
    const particleGraphic = particleGraphics[index];
    particleGraphic.setAttribute("cx", pos.x);
    particleGraphic.setAttribute("cy", pos.y);
  });
  window.requestAnimationFrame(update);
};`}</Blocks>

      <PopcornExample />
    </>
  );
};

export default MatterjsParticlesForces;
