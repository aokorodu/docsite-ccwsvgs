const AnimationIntro = () => {
  return (
    <>
      <h1>Intro</h1>

      <h2>what is "animation?"</h2>

      <p>
        In order to animate an object, you must change some visual property of
        that object continuously and incrementally over time.
      </p>

      <img src="/animation_intro.png" alt="animation_intro.png" />

      <h2>why?</h2>

      <p>
        Animation can be used as a tool for many things - to focus the user's
        attention, to ease cognitive load by "revealing" elements of a page, or
        simply to capture the viewers imagination. SVGs are ideal for creating
        animations for several reasons:
      </p>

      <p>
        The <strong>SVG DOM</strong> which gives us the ability to dynamically
        create, update and alter the appearance of an SVG
      </p>

      <p>
        An SVG has its own <strong>coordinate system</strong>, which allows for
        pixel-perfect placement.
      </p>

      <p>
        The SVG has access to <strong>filters, patterns</strong> and{" "}
        <strong>masks</strong> that enable the creation of powerful visual
        effects
      </p>

      <h2>how?</h2>

      <p>
        While animation is a HUGE topic and worthy of its own class, I'll just
        touch upon a few different techniques that can be utilized to bring life
        to an SVG image.
      </p>

      <p>
        While there are MANY tools available to add animations to SVGs, we're
        going to focus primarily the tools that are already natively part of
        CSS, Javascript, and the SVG spec.
      </p>

      <h3>No Library needed:</h3>

      <ul>
        <li>
          <strong>CSS</strong>: transitions and keyframes
        </li>
        <li>
          <strong>Javascript</strong>: requestAnimationFrame and dynamically
          adding/removing CSS animation classes;
        </li>
        <li>
          <strong>SMIL</strong>: SVG's built in tool to declaratively add
          animations to SVG elements.
        </li>
      </ul>

      <p className="section">
        We'll also take a brief look at a few powerful animation libraries that
        we can utilize, if we so choose.
      </p>

      <h3>Library</h3>

      <ul>
        <li>
          <strong>GSAP</strong>: An extremely powerful and widly used Javascript
          library that allows you to build complex animations.
        </li>
        <li>
          <strong>Matter JS</strong>: Matter.js is a 2D physics engine for the
          web. While Matter JS has it's own rendering (via the canvas element),
          we can use it's physics engine to animate SVG elements.
        </li>
      </ul>

      <p>
        CDN for GSAP:{" "}
        <a
          href="https://cdnjs.com/libraries/gsap"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://cdnjs.com/libraries/gsap
        </a>
      </p>

      <p>
        GSAP install:{" "}
        <a
          href="https://gsap.com/docs/v3/Installation/?tab=npm&module=esm&method=private+registry&tier=free&club=false&require=false&trial=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://gsap.com/docs/v3/Installation/
        </a>
      </p>

      <p>
        CDN for MatterJS:{" "}
        <a
          href="https://cdnjs.com/libraries/matter-js"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://cdnjs.com/libraries/matter-js
        </a>
      </p>
    </>
  );
};

export default AnimationIntro;
