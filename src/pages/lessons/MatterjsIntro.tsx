import Blocks from "@/components/blocks";
import { EmbedExample, MatterDemo } from "@/components/matterjs";

const MatterjsIntro = () => {
  return (
    <>
      <h1>2D Physics</h1>

      <h2>Matter.js</h2>

      <MatterDemo />

      <p>
        Matter.JS is a popular javascript library used to simulate
        two-dimensional physics on web pages. While the library typically uses
        it's built-in renderer to draw graphics using the canvas element, we can
        also use it's physics engine to animate individual SVG elements.
      </p>

      <h2>Matter.JS modules</h2>

      <p>
        We'll use Matter JS to create " rigid bodies" - two-dimensional objects
        posessing size, shape, elasticity (bounciness), friction etc. Then we'll
        use these matterjs bodies to animate our svg elements.
      </p>

      <h3>Matter.Bodies</h3>

      <p>
        The <strong>Bodies</strong> module allows us to create simpe shapes,
        like circles or rectangle, or complex shapes like polygons using a
        collection of points (vertices). Each body we create will have
        properties like position, speed, rotation, and velocity that we'll use
        to position our svg elements.
      </p>

      <h3>Matter.Body</h3>

      <p>
        The <strong>Body</strong> module has methods that we can use to update
        the individual Bodies we create with the Matter.Bodies module. We can
        use it to do things like change a body's position and orientation, apply
        forces, and set velocities.
      </p>

      <h3>Matter.Composite</h3>

      <p>
        Once we define the bodies we'll use the Composite module to put them in
        a matter.js <strong>world</strong>, which can be thought of as a
        container for all of our rigid bodies.
      </p>

      <h3>Matter.Engine</h3>

      <p>
        This is where the magic happens. The engine calculates physical
        properties for all bodies contained in a world - properties like
        position, speed, velocity, and rotation - based on the world each body
        is contained in, and interactions with other bodies in that world.
      </p>

      <h3>Matter.Event</h3>

      <p>
        Event module allows us to listen for important events, like collisions.
        For example, if you're building a game where you are trying to shoot
        down some flying objects, you'll need to be able to detect when the
        collision between your projectile and your target occurs.
      </p>

      <h3>Matter.Runner</h3>

      <p>
        The Runner module is used to create an automatic update loop with the
        engine. Similar to window.requestAnimationFrame, it prompts the engine
        to re-calculate the position and orientation of each body in a world
        based upon a time delta. Since we can also just update the engine
        directly in the request animation frame, the Runner is optional.
      </p>

      <h3>Matter.Render</h3>

      <p>
        "The Matter.Render module is a lightweight, optional utility which
        provides a simple canvas based renderer for visualising instances of
        Matter.Engine"
      </p>
    </>
  );
};

export default MatterjsIntro;
