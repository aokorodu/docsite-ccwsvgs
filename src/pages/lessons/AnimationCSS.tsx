import Blocks from "@/components/blocks";
import {
  HoverExample,
  StrokeDash,
  StrokeTextBetter,
  GeoProperties,
  KeyframeExample,
  BalloonExample,
  EaseExample,
} from "@/components/animationcss";

const AnimationCSS = () => {
  return (
    <>
      <h1>CSS Animation</h1>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/OJqmeLy"}
        target="_blank"
      >
        {"CSS Animation codepen practice page"}
      </a>

      <h2>applying css animations</h2>

      <p>
        The process for applying CSS animations to SVG elements is the same as
        that for HTML elements. Note that not all svg attributes are
        animateable. For example, while it's possible to use CSS animations with
        SVG presentation attributes like fill and stroke, you may not be able to
        use CSS animations with geometric properties (properties that control
        the position and width of elements) with the current version of the SVG
        specification (1.1). A future version of the SVG specification, SVG 2,
        will make it possible to animate geometric properties as well.
        Unfortunately, at this time, browser implementation of the SVG 2 spec is
        hit or miss, so be careful!
      </p>

      <h2>transitions</h2>

      <p>
        CSS transitions allow you to define an animation when a CSS property
        changes from one value to another. For example, with html buttons it
        makes sense to define a different state for the button when the mouse
        pointer is hovering above it, so that the user knows that they can
        interact with it. Sudden changes in appearance of UI elements can seem
        jarring for the user, so transition animations are a useful technique
        for easing the change and enhancing the user's experience.
      </p>

      <p>
        If you've ever applied a CSS transition to an html element, you already
        know how this works. In your stylesheet, you need to define the
        following properties for the id/class you wish to animate.
      </p>

      <h3>transition properties</h3>

      <p>
        <strong>transition-property</strong>: The svg property you wish to
        animate. You can have multiple properties, separated by a comma.
      </p>

      <p>
        <strong>transition-duration</strong> - transition time in seconds (2s)
        or milliseconds (2000ms)
      </p>

      <p>
        <strong>transition-timing-function</strong>
      </p>

      <ul>
        <li>linear</li>
        <li>ease</li>
        <ul>
          <li>ease-in</li>
          <li>ease-out</li>
          <li>ease-in-out</li>
        </ul>
        <li>step</li>
        <li>cubic-bezier</li>
      </ul>

      <br />

      <p>
        <strong>transition-delay</strong> - delay in seconds (s) or milliseconds
        (ms).
      </p>

      <h3>structure of a css transition</h3>

      <p>
        Pure CSS transitions are usually triggered by some sort of user
        interaction - typically set up using the <strong>:hover</strong>: or{" "}
        <strong>::focus</strong>: pseudo-class on whatever element you wish to
        animate. In the following example, we'll set up a transition when the
        user <strong>hovers</strong> over a shape element.
      </p>

      <pre>
        <code>{`.my-class {
    <some animatable property>: start-value;
    transition-property: animatable-property name;
    transition-duration: duration in seconds or ms;
    transition-timing-function: timing-function name;
    transition-delay: time in seconds or ms;
}

.my-class:hover {
    <some animatable property>: end-value;
}`}</code>
      </pre>

      <h3>fill and stroke-width transitions</h3>

      <p>
        Let's open up our{" "}
        <a href={"https://codepen.io/aokorodu/pen/OJqmeLy"} target="_blank">
          starter codepen page
        </a>{" "}
        so we can try out some transitions. We'll need to create a class for the
        property that we wish to animate, along with all the transition
        properties. Let's create a transistion that will change the fill and
        stroke of a circle.
      </p>

      <p>
        We'll start off with a circle element with an id of "my-circle". Since
        there's no presentation attribute for fill the circle will show up
        black.
      </p>

      <Blocks>
        {`<svg width="300" height="300" viewbox="0 0 300 300">
   <circle
    id="my-circle"
    cx="250" cy="250"
    r="100"></circle>
</svg>`}
      </Blocks>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <circle id="my-circle" cx="250" cy="250" r="100"></circle>
      </svg>

      <p>In the css section we'll add style to change the fill and stroke.</p>

      <Blocks>{`#my-circle {
  fill: orange;
  stroke: black;
  stroke-width: 1;
}`}</Blocks>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <circle
          id="my-circle"
          fill="orange"
          stroke="black"
          cx="250"
          cy="250"
          r="100"
        ></circle>
      </svg>

      <p>
        Let's set up the transitions for both <strong>stroke-width</strong> and{" "}
        <strong>fill</strong>:
      </p>

      <Blocks highlight="5,6,7,8">
        {`#my-circle {
  fill: orange;
  stroke: black;
  stroke-width: 1;
  transition-property: stroke-width fill;
  transition-duration: 0.33s;
  transition-timing-function: linear;
  transition-delay: 0;
}`}
      </Blocks>

      <p>
        As a final step, we'll use the <strong>:hover</strong> pseudo-class to
        change the fill and stroke-width.
      </p>

      <Blocks highlight="10,11,12,13">
        {`#my-circle {
  fill: orange;
  stroke: black;
  stroke-width: 1;
  transition-property: stroke-width fill;
  transition-duration: 0.33s;
  transition-timing-function: linear;
  transition-delay: 0;
}
#my-circle:hover {
  stroke-width: 10;
  fill: red;
}`}
      </Blocks>

      <h4>hover over circle to see transition</h4>

      <HoverExample />

      <h3>stroke-dashoffset transitions</h3>

      <p>
        For this animation we'll create a circle with a stroke-dasharray, and
        set the stroke-dashoffset so that the stroke isn't visible.
      </p>

      <Blocks highlight="5,9,10">
        {`#my-circle {
  fill: orange;
  stroke: black;
  stroke-width: 5;
  transition-property: stroke-dashoffset;
  transition-duration: 0.33s;
  transition-timing-function: linear;
  transition-delay: 0;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
}`}
      </Blocks>

      <p>
        For this effect it's important to set the circle's{" "}
        <strong>pathLength</strong> attribute to "100".
      </p>

      <Blocks highlight="4">{`<svg width="500" height="500" viewbox="0 0 300 300">
  <circle id="my-circle"
    cx="150" cy="150" r="100"
    pathLength="100"></circle>
</svg>`}</Blocks>

      <StrokeDash />

      <p>
        Now let's add the transition for stroke-dashoffset and the{" "}
        <strong>:hover</strong> pseudo class:
      </p>

      <Blocks>
        {`#my-circle {
  fill: orange;
  stroke: black;
  stroke-width: 5;
  transition-property: stroke-dashoffset;
  transition-duration: 0.33s;
  transition-timing-function: linear;
  transition-delay: 0;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
}
#my-circle:hover {
  stroke-dashoffset: 0;
}`}
      </Blocks>

      <h4>hover over circle to see transition</h4>

      <StrokeDash hover={true} />

      <h4>hover to see a similar but more complex stroke animation using letters.</h4>

      <StrokeTextBetter />

      <h4>
        *See the text stroke animation example in{" "}
        <a href="https://codepen.io/aokorodu/pen/gONNpwN?editors=0100" target="_blank">
          codepen
        </a>
      </h4>

      <h3>geometric property transitions</h3>

      <p>Note the absence of geometric properties in the circle element below:</p>

      <Blocks>
        {`<svg width="500" height="500" viewbox="0 0 300 300">
  <circle id="my-circle" fill="orange"></circle>
</svg>`}
      </Blocks>

      <p>
        In this example all of the geometric properties (cx, cy, and r) are
        defined in the css.
      </p>

      <Blocks>
        {`#my-circle {
  cx: 250px;
  cy: 250px;
  r: 150px;
  transition-property: r cy;
  transition-duration: 0.33s;
}
#my-circle:hover {
  r: 200px;
  cy:225px
}`}
      </Blocks>

      <h4>hover over circle to see transition</h4>

      <GeoProperties />

      <p>
        <strong>
          NOTE: You'll need to use 'px' units with geometric props in your
          styles to use them with your CSS at all.
        </strong>{" "}
        If you don't, your animations <strong>may not work</strong>, depending
        on your browser!!
      </p>

      <h2>keyframe animations</h2>

      <p>
        CSS keyframe animations are used when you want to create relatively
        complex css animations. The first step in creating a keyframe animation
        is to actually create the keyframes in CSS.
      </p>

      <p>
        You can have as many 'interim' steps as you want, or you can just have a
        beginning value (0%) and and end value (100%)
      </p>

      <pre>
        <code>{`@keyframes keyframes-name {
  0% {
    property-name: property-value;
  }

  percent value {
    property-name: property-value;
  }

  100% {
    property-name: property-value;
  }
}`}</code>
      </pre>

      <p>
        After defining the keyframes, you apply them to a class using the
        animation properties.
      </p>

      <pre>
        <code>{`.some-class {
  animation-name: keyframes-name;
  animation-duration: duration in seconds or ms;
  animation-timing-function: easing function;
  animation-iteration-count: some number|infinite;
  animation-direction: none|reverse|alternate|alternate-reverse;
  animation-fill-mode: none|forwards|backwards|both;
}`}</code>
      </pre>

      <h3>animation example</h3>

      <p>
        Let's create a sample zoom animation to make an element move in a
        triagular pattern. First we define the keyframes.
      </p>

      <Blocks>
        {`@keyframes zoom {
   0% {
       fill: red;
       cx: 250px;
       cy:125px;
   }
   33% {
       cx: 375px;
       cy:375px;
   }
   66% {
       cx: 125px;
       cy:375px;
   }
   100% {
       fill: blue;
       cx: 250px;
       cy:125px;
   }
}`}
      </Blocks>

      <p>Next we'll create a class that uses this animation.</p>

      <Blocks>
        {`.zoom-circle {
    animation-name: zoom;
    animation-duration: 5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
}`}
      </Blocks>

      <p>Now we can add the class to the svg element we wish to animate.</p>

      <Blocks>
        {`<circle
    class="zoom-circle"
    cx="50" cy="50" r="50"
    fill="black"
    stroke="none"></circle>`}
      </Blocks>

      <KeyframeExample />

      <h2>timing functions</h2>

      <p>
        Easing functions for both transitions and keyframe animations define how
        an object moves. In the example at below, I've attempted to create an
        animation for a floating balloon. But there's something wrong: The
        balloon doesn't ease to a stop before changing direction - it looks more
        like it's bouncing up and down.
      </p>

      <Blocks>
        {`#balloon {
   animation-name: float;
   animation-duration: 2s;
   animation-direction: alternate;
   animation-iteration-count: infinite;
   animation-timing-function: linear;
}`}
      </Blocks>

      <BalloonExample />

      <p>
        This animation has a <strong>linear</strong> timing function, causing it
        to move in a linear fashion. Its generally preferable to have animations
        move in a somewhat realistic way, as if the animated objects are bound
        by the laws of physics. Otherwise the animations can become jarring and
        distracting.
      </p>

      <p>
        We can fix this by using an <strong>ease-in-out</strong> animation
        timing function:
      </p>

      <Blocks>
        {`#balloon {
   ...
   animation-timing-function: ease-in-out;
}`}
      </Blocks>

      <BalloonExample linear={false} />

      <h4>
        *See the balloon easing example in{" "}
        <a href="https://codepen.io/aokorodu/pen/OJeevOm" target="_blank">
          codepen
        </a>
      </h4>

      <h3>the different timing functions:</h3>

      <ol>
        <li>
          <strong>linear</strong> - constant rate of speed
        </li>
        <li>
          easing-functions - speeds up/slows down over time
          <ul>
            <li>
              <strong>ease-in</strong> (starts slowly)
            </li>
            <li>
              <strong>ease-out</strong> (ends slowly)
            </li>
            <li>
              <strong>ease-in-out</strong> (starts and ends slowly, more
              pronounced than ease)
            </li>
          </ul>
        </li>
        <li>
          <strong>cubic-bezier</strong>
        </li>
        <li>
          <strong>step</strong>
        </li>
      </ol>

      <h3>cubic-bezier timing functions</h3>

      <p>
        ALL of the easing options are actually defined by cubic-bezier
        functions, in which two "control points" are used to change the shape of
        the animation curve. The graphs help to visualize how the shape of the
        curve affects the pace of the animation.
      </p>

      <p>
        <strong>linear</strong>
      </p>

      <EaseExample type={"linear"} />

      <p>
        <strong>ease-in</strong>
      </p>

      <EaseExample type={"ease-in"} />

      <p>
        <strong>ease-out</strong>
      </p>

      <EaseExample type={"ease-out"} />

      <p>
        <strong>ease-in-out</strong>
      </p>

      <EaseExample type={"ease-in-out"} />

      <h3>custom cubic-bezier timing functions</h3>

      <p>
        You can define your own easing functions as well by using a custom
        cubic-bezier easing curve.
      </p>

      <p>
        A fantastic interactive resource for visualizing and experimenting with
        easing curves is{" "}
        <a href="https://cubic-bezier.com" target="_blank">
          cubic-bezier.com
        </a>
        . Once you manipulate the control points to form the curve you want, you
        can see how your animation compares to the standard predefined animation
        curves. Once you find something you like, just click the copy and paste
        the cubic-bezier value into your CSS.
      </p>

      <pre>
        <code>{`animation-timing-function: cubic-bezier(0.13, 0.74, 0, 1);`}</code>
      </pre>

      <EaseExample type={"custom"} />
    </>
  );
};

export default AnimationCSS;
