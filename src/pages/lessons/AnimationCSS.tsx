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
      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/OJqmeLy"}
        target="_blank"
        rel="noopener noreferrer"
      >
        {"CSS Animation codepen practice page"}
      </a>

      <h1>CSS Animation</h1>

      <h2>Applying CSS Animations</h2>

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

      <ol>
        <li>
          <strong>transition-property</strong>: The svg property you wish to
          animate. You can have multiple properties, separated by a comma.
        </li>

        <li>
          <strong>transition-duration</strong> - transition time in seconds (2s)
          or milliseconds (2000ms)
        </li>

        <li>
          <strong>transition-timing-function</strong> - defines the speed curve of the animation as it progresses. The timing functions are the same for both transitions and animations, and can be defined using either keywords or functions.
          <div><strong>keywords:</strong>
            <ul>
              <li>linear: the animation has a constant rate of speed</li>
              <li>ease: the animation starts slowly, accelerates in the middle, and slows down at the end</li>
              <li>ease-in: the animation starts slowly and accelerates towards the end</li>
              <li>ease-out: the animation starts quickly and decelerates towards the end</li>
              <li>ease-in-out: the animation starts and ends slowly, with a faster middle section</li>
            </ul>
          </div>
          <div><strong>functions:</strong> <i>(note: we'll go into more detail on timing functions in the animation section below).</i>
            <ul>
              <li>step()</li>
              <li>linear()</li>
              <li>cubic-bezier()</li>
            </ul>
          </div>
        </li>
        <li>
          <strong>transition-delay</strong> - delay in seconds (s) or milliseconds
          (ms).
        </li>
      </ol>

      <h3>structure of a css transition</h3>

      <p>
        Pure CSS transitions are usually triggered by some sort of user
        interaction - typically set up using the <strong>:hover</strong>: or{" "}
        <strong>:focus</strong>: pseudo-class on whatever element you wish to
        animate. In the following example, we'll set up a transition when the
        user <strong>hovers</strong> over a shape element.
      </p>

      <Blocks>{`.my-class {
    <some animatable property>: start-value;
    transition-property: animatable-property name;
    transition-duration: duration in seconds or ms;
    transition-timing-function: timing-function name;
    transition-delay: time in seconds or ms;
}

.my-class:hover {
    <some animatable property>: end-value;
}`}</Blocks>

      <h3>fill and stroke-width transitions</h3>

      <p>
        Let's open up our{" "}
        <a href={"https://codepen.io/aokorodu/pen/OJqmeLy"} target="_blank" rel="noopener noreferrer">
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
        black. <em>NOTE: since we're going to animate the stroke, make sure to set the <strong>pathLength</strong> attribute to 100 so that the stroke-dasharray and stroke-dashoffset properties work as expected in the next section.</em>
      </p>

      <Blocks>{`<svg width="300" height="300" viewbox="0 0 300 300">
  <circle id="my-circle" cx="250" cy="250" r="100" pathLength="100"></circle>
</svg>`}</Blocks>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <circle id="my-circle" cx="250" cy="250" r="100" pathLength="100"></circle>
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
          pathLength="100"
        ></circle>
      </svg>

      <p>
        Let's set up the transitions for both <strong>stroke-width</strong> and{" "}
        <strong>fill</strong>:
      </p>

      <Blocks highlight="5,6,7,8">{`#my-circle {
  fill: orange;
  stroke: black;
  stroke-width: 1;
  transition-property: stroke-width fill;
  transition-duration: 0.33s;
  transition-timing-function: linear;
  transition-delay: 0;
}`}</Blocks>

      <p>
        As a final step, we'll use the <strong>:hover</strong> pseudo-class to
        change the fill and stroke-width.
      </p>

      <Blocks highlight="10,11,12,13">{`#my-circle {
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
}`}</Blocks>

      <h4>hover over circle to see transition</h4>

      <HoverExample />

      <h3>stroke-dashoffset transitions</h3>

      <p>
        For this animation we'll create a circle with a stroke-dasharray, and
        set the stroke-dashoffset so that the stroke isn't visible.
      </p>

      <Blocks>{`#my-circle {
  fill: orange;
  stroke: black;
  stroke-width: 5;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
}`}</Blocks>

      <p>
        For this effect it's important to set the circle's{" "}
        <strong>pathLength</strong> attribute to "100".
      </p>

      <Blocks highlight="4">{`<svg width="500" height="500" viewbox="0 0 300 300">
  <circle id="my-circle" cx="150" cy="150" r="100" pathLength="100"></circle>
</svg>`}</Blocks>

      <StrokeDash />

      <p>
        Now let's add the transition for stroke-dashoffset and the{" "}
        <strong>:hover</strong> pseudo class:
      </p>

      <Blocks>{`#my-circle {
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
}`}</Blocks>

      <h4>hover over circle to see transition</h4>

      <StrokeDash hover={true} />

      <h4>hover your cursor over the box below to see a similar but more complex stroke animation using letters.</h4>

      <StrokeTextBetter />

      <h4>
        *See the text stroke animation example in{" "}
        <a href="https://codepen.io/aokorodu/pen/gONNpwN?editors=0100" target="_blank" rel="noopener noreferrer">
          codepen
        </a>
      </h4>

      <h3>geometric property transitions</h3>

      <p>Note the absence of geometric properties in the circle element below:</p>

      <Blocks>{`<svg width="500" height="500" viewbox="0 0 300 300">
  <circle id="my-circle" fill="orange"></circle>
</svg>`}</Blocks>

      <p>
        In this example all of the geometric properties (cx, cy, and r) are
        defined in the css.
      </p>

      <Blocks>{`#my-circle {
  cx: 250px;
  cy: 250px;
  r: 150px;
  transition-property: r cy;
  transition-duration: 0.33s;
}
#my-circle:hover {
  r: 200px;
  cy:225px
}`}</Blocks>

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

      <Blocks>{`@keyframes keyframes-name {
  0% {
    property-name: property-value;
  }

  percent value {
    property-name: property-value;
  }

  100% {
    property-name: property-value;
  }
}`}</Blocks>

      <p>
        After defining the keyframes, you apply them to a class using the
        animation properties.
      </p>

      <Blocks>{`.some-class {
  animation-name: keyframes-name;
  animation-duration: duration in seconds or ms;
  animation-timing-function: easing function;
  animation-iteration-count: some number|infinite;
  animation-direction: none|reverse|alternate|alternate-reverse;
  animation-fill-mode: none|forwards|backwards|both;
}`}</Blocks>

      <h3>animation example</h3>

      <p>
        Let's create a sample zoom animation to make an element move in a
        triangular pattern. First we define the keyframes.
      </p>

      <Blocks>{`@keyframes zoom {
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
}`}</Blocks>

      <p>Next we'll create a class that uses this animation.</p>

      <Blocks>{`.zoom-circle {
  animation-name: zoom;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
}`}</Blocks>

      <p>Now we can add the class to the svg element we wish to animate.</p>

      <Blocks>{`<circle class="zoom-circle" cx="50" cy="50" r="50" fill="black" stroke="none"></circle>`}</Blocks>

      <KeyframeExample />

      <h2>timing functions</h2>

      <p>
        Easing functions for both transitions and keyframe animations define how an object moves. In the example below, I've attempted to create an animation for a floating balloon. But there's something wrong: The balloon doesn't ease to a stop before changing direction - it looks more like it's bouncing up and down.
      </p>

      <Blocks>{`#balloon {
  animation-name: float;
  animation-duration: 2s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}`}</Blocks>

      <BalloonExample />

      <p>
        This animation uses the <strong>linear</strong> timing function keyword, causing it to move in a linear fashion. Its generally preferable to have animations move in a somewhat realistic way, as if the animated objects are bound by the laws of physics. Otherwise the animations can become jarring and distracting.
      </p>

      <p>
        We can fix this by using an <strong>ease-in-out</strong> timing function keyword:
      </p>

      <Blocks>{`#balloon {
  ...
  animation-timing-function: ease-in-out;
}`}</Blocks>

      <BalloonExample linear={false} />

      <h4>
        *See the balloon easing example in{" "}
        <a href="https://codepen.io/aokorodu/pen/OJeevOm" target="_blank" rel="noopener noreferrer">
          codepen
        </a>
      </h4>

      <h3>keywords vs. timing functions</h3>

      <p>
        There are two ways to define the pacing of an animation: using keywords or using custom timing functions.
      </p>

      <p>Keywords are predefined timing functions that can't be altered, whereas the timing functions - cubic-bezier(), linear(), and steps() - can be customized to create unique, custom pacing effects. We've already seen examples of the keyword timing functions in action: linear, ease, ease-in, ease-out, and ease-in-out. Let's go into more detail about the different timing functions.</p>

      <h3>keyword examples</h3>

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

      <h3>custom timing functions</h3>

      <p>
        You can define your own easing functions as well by using the <strong>linear()</strong>, <strong>cubic-bezier()</strong>, or <strong>steps()</strong> timing functions. The linear() functions move at a constant rate of speed. That speed might change during the course of the animation, but it does so instantly, without accelerating or slowing down.The cubic-bezier() functions allow for movent that speeds up and slows down at different rates over time. Finally, the step() function allows you to create an animation that jumps from one value to the next without any intermediate values.
      </p>

      <p>
        A fantastic interactive resource for visualizing and experimenting with both the linear() and cubic-bezier() easing curves is <a href="https://easingwizard.com/" target="_blank" rel="noopener noreferrer">
          easingwizard.com</a>. The bezier section provides an interactive bezier tool allowing you manipulate the control points to form the animation curve you want. Once you find something you like, just click the "copy to clipboard" button and paste the cubic-bezier function value into your CSS.
      </p>
      <img src="/easing_wizard_bezier_ss.png" />
      <img src="/easing_wizard_copy_clipboard.png" />

      <Blocks>{`animation-timing-function: cubic-bezier(0.13, 0.74, 0, 1);`}</Blocks>

      <EaseExample type={"custom"} />

      <p>
        You can also use the interactive sliders in the spring, bounce, wiggle and overshoot sections customize and tweak premade linear curves as you see fit. </p>

      <img src="/easing_wizard_linear_ss.png" />
      <p>As with the bezier tool, once you find something you like, just click the "copy to clipboard" button and paste the linear function value into your CSS.
      </p>

      <img src="/easing_wizard_copy_linear_clipboard.png" />

      <Blocks>{`animation-timing-function: linear(0, 0.223 11.7%, 0.392 18.4%, 0.619 24.8%, 0.999 33.3%, 0.748 40%, 0.691 42.7%, 0.672 45.3%, 0.69 47.8%, 0.743 50.4%, 0.999 57.7%, 0.883 61.8%, 0.856 63.6%, 0.848 65.3%, 0.855 67%, 0.879 68.8%, 0.999 74.5%, 0.953 77.5%, 0.94 80.2%, 0.95 82.7%, 1 88.2%, 0.987 91.9%, 1);`}</Blocks>

      <EaseExample type={"linear-custom"} />

      <p> We'll go into more detail about the steps() timing function in the section on Sprite animations.</p>

      <Blocks>{`animation-timing-function: steps(10, jump-none);`}</Blocks>

      <EaseExample type={"step"} />
    </>
  );
};

export default AnimationCSS;
