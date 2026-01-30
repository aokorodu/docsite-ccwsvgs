import Blocks from "@/components/blocks";
import {
  Example_Still,
  Example_1,
  Example_Fill_Freeze,
  Example_End,
  MultipleAnim_Example,
  MultipleAnimSequ_Example,
} from "@/components/smil";

const SmilAnimation = () => {
  return (
    <>
      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/eYXRqdX"}
        target="_blank"
      rel="noopener noreferrer"
      >
        {"SMIL pt.1 practice page"}
      </a>

      <h1>SMIL Animation</h1>

      <h2>What is SMIL?</h2>

      <p>
        SMIL is an acronym for <strong>Synchronized Multimedia Integration Language</strong>.
        SMIL animation involves the use of animation elements inside the SVG.
        There are three types of animation elements:
      </p>

      <p><strong>&lt;animate&gt;</strong></p>

      <p><strong>&lt;animateTransform&gt;</strong></p>

      <p><strong>&lt;animateMotion&gt;</strong></p>

      <p>
        While not quite as powerful as Javascript, SMIL elements provide a
        declarative way to chain and sequence complex animations. They also
        allow you to avoid the inconsistencies that you often see with CSS
        transform animations.
      </p>

      <p>
        Unlike CSS and Javascript, which can be used to animate both HTML and
        SVG DOM elements, SMIL animations can only be used with SVGs.
      </p>

      <h2>animate</h2>

      <p>
        The <strong>&lt;animate&gt;</strong> element is used when you need to
        animate numeric attributes of an element, such as width, height, cx, cy,
        x, y, and fill.
      </p>

      <p>
        We'll start with something familiar. Again, we'll try to animate the
        circle from the top to the bottom of the svg using SMIL animations.
      </p>

      <Example_Still />

      <p>We start by adding an animate tag inside of the circle element.</p>

      <Blocks highlight="2,3,4">{`<svg width="200" height="300" viewBox="0 0 200 300">
  <circle cx="100" cy="20" r="10" fill="green">
    <animate />
  </circle>
</svg>`}</Blocks>

      <h3>attributeName</h3>

      <p>We'll add the name of the attribute that we want to animate - cy.</p>

      <Blocks highlight="3,4">{`<svg width="200" height="300" viewBox="0 0 200 300">
  <circle cx="100" cy="20" r="10" fill="green">
    <animate attributeName="cy" />
  </circle>
</svg>`}</Blocks>

      <h3>from, to, dur</h3>

      <p>
        Next we'll set the beginning and end values using the from and to
        attributes, and the duration (dur) of the animation.
      </p>

      <Blocks highlight="3,4,5,6">{`<svg width="200" height="300" viewBox="0 0 200 300">
  <circle cx="100" cy="20" r="10" fill="green">
    <animate
      attributeName="cy"
      from="20"
      to="230"
      dur="2s" />
  </circle>
</svg>`}</Blocks>

      <h3>values</h3>

      <p>
        Instead of using from and to/by to designate the beginning and end of
        the animation, we can use the values attribute, with the individual
        values separated by a semicolon. This is very useful when animating to
        several positions, instead of just two.
      </p>

      <Blocks>{`values="<value 1>; <value 2>;..."`}</Blocks>

      <Blocks highlight="5">{`<svg width="200" height="300" viewBox="0 0 200 300">
  <circle cx="100" cy="20" r="10" fill="green">
    <animate
      attributeName="cy"
      values="20; 230"
      dur="2s" />
  </circle>
</svg>`}</Blocks>

      <h3>repeatCount</h3>

      <p>
        The repeatCount attribute is used to specify the number of times the
        animation runs. Like with CSS animation-iteration-count, it can be a
        number, or it can be "indefinite" (infinite).
      </p>

      <Blocks>{`repeatCount="<number> | indefinite"`}</Blocks>

      <Blocks highlight="3,4,5,6,7">{`<svg width="200" height="300" viewBox="0 0 200 300">
  <circle cx="100" cy="20" r="10" fill="green">
    <animate
      attributeName="cy"
      from="20"
      to="230"
      dur="2s"
      repeatCount="indefinite" />
  </circle>
</svg>`}</Blocks>

      <Example_1 />

      <h3>fill</h3>

      <p>
        To prevent the circle from popping back to its original state, we'll
        need to set the fill attribute of the animate element to freeze, which
        is similar to CSS animation-fill-mode: forward, in that it defines the
        final state of the animation.
      </p>

      <Blocks>{`fill="freeze | remove (default)"`}</Blocks>

      <Blocks highlight="7,8">{`<svg width="200" height="300" viewBox="0 0 200 300">
  <circle cx="100" cy="20" r="10" fill="green">
    <animate
      attributeName="cy"
      from="20"
      to="230"
      dur="2s"
      repeatCount="3"
      fill="freeze" />
  </circle>
</svg>`}</Blocks>

      <Example_Fill_Freeze />

      <h3>begin</h3>

      <p>
        To delay the animation we can use the <strong>begin</strong> attribute
        and pass it a time value:
      </p>

      <Blocks>{`begin="<time in seconds> | click"`}</Blocks>

      <Blocks highlight="9">{`<svg width="200" height="300" viewBox="0 0 200 300">
  <circle cx="100" cy="20" r="10" fill="green">
    <animate
      attributeName="cy"
      from="20"
      to="230"
      dur="2s"
      repeatCount="3"
      fill="freeze"
      begin="2s" />
  </circle>
</svg>`}</Blocks>

      <Example_Fill_Freeze begin={"2s"} />

      <p className="section">Or we can set the begin to a when the user clicks the circle:</p>

      <Blocks highlight="9">{`<svg width="200" height="300" viewBox="0 0 200 300">
  <circle cx="100" cy="20" r="10" fill="green">
    <animate
      attributeName="cy"
      from="20"
      to="230"
      dur="2s"
      repeatCount="3"
      fill="freeze"
      begin="click" />
  </circle>
</svg>`}</Blocks>

      <div style={{ width: "100%" }}>
        <svg width="200" height="300" viewBox="0 0 200 300">
          <circle id="my-circle" cx="100" cy="20" r="10" fill="green"></circle>
          <animate
            href="#my-circle"
            attributeName="cy"
            from="20"
            to="230"
            dur="2s"
            repeatCount="3"
            fill="freeze"
            begin="click"
          />
          <text
            x="100"
            y="270"
            dominantBaseline="hanging"
            textAnchor="middle"
            fill="black"
          >
            {"click circle to begin"}
          </text>
        </svg>
      </div>

      <h3>end</h3>

      <p>
        To stop the animation after a set period of time we can use the end
        attribute. In the example below we'll set the repeatCount to indefinite,
        but then we'll also set an end time.
      </p>

      <Blocks>{`end="<time in seconds> | click"`}</Blocks>

      <Blocks highlight="9">{`<svg width="200" height="300" viewBox="0 0 200 300">
  <circle cx="100" cy="20" r="10" fill="green">
    <animate
      attributeName="cy"
      from="20"
      to="230"
      dur="1s"
      repeatCount="indefinite"
      fill="freeze"
      end="3.5s" />
  </circle>
</svg>`}</Blocks>

      <Example_End endvalue="3.5s" />

      <p className="section">
        Just like the begin attribute, we can end the animation when the circle
        is clicked. (I've slowed down the animtion to make the circle easier to
        click!)
      </p>

      <Blocks highlight="9">{`<svg width="200" height="300" viewBox="0 0 200 300">
  <circle cx="100" cy="20" r="10" fill="green">
    <animate
      attributeName="cy"
      from="20"
      to="230"
      dur="10s"
      repeatCount="indefinite"
      fill="freeze"
      end="click" />
  </circle>
</svg>`}</Blocks>

      <Example_End endvalue="click" />

      <h3>href</h3>

      <p>
        You've probably noticed that all of the animate elements in the examples
        have been "encapsulated" by the element we wish to animate.
      </p>

      <Blocks>{`<shape-element>
  <animate ... />
</shape-element>`}</Blocks>

      <p>
        If you want to keep them separate, all you have to do is pass the id of
        the element you wish to animate to the animate element via the{" "}
        <em>href</em> attribute
      </p>

      <Blocks>{`<circle id="my-circle" ... />
<animate href="#my-circle" ... />`}</Blocks>

      <h3>easing</h3>

      <p>
        Now for something a bit more complex. How do we add easing to the
        animation? Unfortunately we don't have pre-defined easing functions you
        find for CSS transition-timing-function or animation-timing-function.
      </p>

      <p>To add easing, we'll need to use three more attributes:</p>

      <p>
        <strong>calcMode</strong>, <strong>keyTimes</strong>, and{" "}
        <strong>keySplines</strong>
      </p>

      <div style={{ width: "100%" }}>
        <svg width="200" height="300" viewBox="0 0 200 300">
          <circle
            id="first-circle"
            cx="100"
            cy="20"
            r="10"
            fill="green"
            stroke="none"
          >
            <animate
              attributeName="cy"
              values="20; 280"
              dur="2s"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0 0 .5 1"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      <h3>calcMode</h3>

      <p>
        In order to use cubic-bezier curves within an animation, calcMode has to
        be set to "spline". (The default value is linear)
      </p>

      <Blocks>{`calcMode="spline | remove (default)"`}</Blocks>

      <Blocks highlight="7">{`<svg width="200" height="300" viewBox="0 0 200 300">
  <circle ...>
    <animate
      attributeName="cy"
      values="20; 280"
      dur="2s"
      calcMode="spline"
      keyTimes="0; 1"
      keySplines="0 0 .5 1"
      repeatCount="indefinite" />
  </circle>
</svg>`}</Blocks>

      <h3>keyTimes</h3>

      <p>
        The keyTimes attribute allows you to set the pacing of the animation.
        You need to have the same number of keyTimes as values. Each keytime is
        a value from 0 to 1, and represents the point in time when each value is
        reached. In this case it means that cy should be 20 at keytime 0 (the
        beginning of the animation) and 280 at keytime 1 (the end).
      </p>

      <Blocks>{`values="<value 1>; <value 2>; <value 3>; ..."
...
keyTimes="<time 1>; <time 2>; <time 3>; ..."`}</Blocks>

      <Blocks highlight="8">{`<svg width="200" height="300" viewBox="0 0 200 300">
  <circle ...>
    <animate
      attributeName="cy"
      values="20; 280"
      dur="2s"
      calcMode="spline"
      keyTimes="0; 1"
      repeatCount="indefinite" />
  </circle>
</svg>`}</Blocks>

      <p>
        It's easier to see the effect of keyTimes with multiple animation
        values. In this example, the cy is 20 at the 0 keytime, it's 250 at the
        .5 keyTime (50% of the duration) and it's 280 at the 1 keyTime (100% of
        the duration)
      </p>

      <Blocks highlight="5,8">{`<svg width="200" height="300" viewBox="0 0 200 300">
  <circle ...>
    <animate
      attributeName="cy"
      values="20;250;280"
      dur="2s"
      calcMode="spline"
      keyTimes="0; .5; 1"
      repeatCount="indefinite" />
  </circle>
</svg>`}</Blocks>

      <div style={{ width: "100%" }}>
        <svg width="200" height="300" viewBox="0 0 200 300">
          <circle cx="100" cy="20" r="10" fill="green">
            <animate
              attributeName="cy"
              values="20;250;280"
              dur="2s"
              calcMode="spline"
              keyTimes="0;0.5;1"
              keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      <h3>keySplines</h3>

      <p>
        The keySplines are the cubic bezier curves that define the motion,
        separated by a semicolon. In the example below, the first keySpline (0.5
        0 0.5 1) describes the cubic bezier curve between the 1st and 2nd values
        (50 and 150) and the second keySpline (also 0.5 0 0.5 1) describes the
        cubic bezier curve between the 2nd and 3rd values (150 and 280). You
        will always have ONE LESS keySpline than values.
      </p>

      <Blocks>{`values="<value 1>; <value 2>; <value 3>; ..."
...
keySplines="<bezier curve 1 to 2>; <bezier curve 2 to 3>;..."`}</Blocks>

      <Blocks highlight="5,9">{`<svg width="200" height="300" viewBox="0 0 200 300">
  <circle cx="100" cy="20" r="10" fill="green">
    <animate
      attributeName="cy"
      values="20; 150; 280"
      dur="2s"
      calcMode="spline"
      keyTimes="0; 0.5; 1"
      keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
      repeatCount="indefinite" />
  </circle>
</svg>`}</Blocks>

      <div style={{ width: "100%" }}>
        <svg width="200" height="300" viewBox="0 0 200 300">
          <circle cx="100" cy="20" r="10" fill="green">
            <animate
              attributeName="cy"
              values="20;150;280"
              dur="2s"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      <p>
        You can define your own bezier curves at{" "}
        <a href={"https://cubic-bezier.com/"} target="_blank" rel="noopener noreferrer">
          {"https://cubic-bezier.com/"}
        </a>
      </p>

      <h3>simultaneous animations</h3>

      <p>
        We can define multiple simultaneous animations for the same element.
        Here we'll animate cx, radius, and fill color.
      </p>

      <Blocks>{`<circle cx="50" cy="250" r="20" fill="#93C17E">
  <animate
    attributeName="cx"
    values="50; 450; 250"
    dur="2s"
    begin="0"
    fill="freeze" />
  <animate
    attributeName="r"
    values="20; 100"
    dur="2s"
    fill="freeze" />
  <animate
    attributeName="fill"
    values="#93C17E; #ff00ff; #009900"
    dur="4s"
    fill="freeze" />
</circle>`}</Blocks>

      <MultipleAnim_Example />

      <h3>sequential animations</h3>

      <p>
        We can also make the animations run sequentially by using the "begin"
        attribute and setting it to run at either the beginning or end of
        another animation. In order to do so we'll need to give each animate
        element an id:
      </p>

      <Blocks highlight="3,10,17">{`<circle cx="50" cy="250" r="20" fill="#93C17E">
  <animate
    id="slide"
    attributeName="cx"
    values="50; 450; 250"
    dur="2s"
    begin="0"
    fill="freeze" />
  <animate
    id="grow"
    attributeName="r"
    values="20; 100"
    dur="2s"
    fill="freeze" />
  <animate
    id="change"
    attributeName="fill"
    values="#93C17E; #ff00ff; #009900"
    dur="4s"
    fill="freeze" />
</circle>`}</Blocks>

      <p>
        To set an animation to run in coordination with another animation, you
        use the id of that other animation followed by a "." and either begin or
        end. The value can include a <em>time offset</em> as well.
      </p>

      <Blocks>{`begin="<animation name>.< begin | end> + <time offset>"`}</Blocks>

      <p>
        For example, I can set an animation to run 3 seconds after another
        animation ends as follows.
      </p>

      <Blocks>{`begin="some_animation.end + 3s"`}</Blocks>

      <p>
        So to get the "grow" animation to run after the "slide" animation, you'd
        use the following begin attribute in the "grow" animation:
      </p>

      <Blocks>{`begin="slide.end"`}</Blocks>

      <p>
        And to get the "change" animation to run half a second after the start
        of the "grow" animation, you'd use the following begin attribute in the
        "change" animation:
      </p>

      <Blocks>{`begin="grow.begin + 500ms"`}</Blocks>

      <Blocks highlight="4,14,21">{`<svg width="500" height="500" viewBox="0 0 500 500">
  <circle cx="50" cy="250" r="20" fill="#93C17E">
    <animate
      id="slide"
      attributeName="cx"
      values="50; 450; 250"
      dur="2s"
      begin="0"
      fill="freeze" />
    <animate
      id="grow"
      attributeName="r"
      values="20; 100"
      dur="2s"
      fill="freeze"
      begin="slide.end" />
    <animate
      attributeName="fill"
      values="#93C17E; #ff00ff; #009900"
      dur="4s"
      fill="freeze"
      begin="grow.begin + 500ms" />
  </circle>
</svg>`}</Blocks>

      <MultipleAnimSequ_Example />

      <h2>animateTransform</h2>

      <p>
        The animateTransform element is used only when you need to animate
        transformation attributes:
      </p>

      <ul>
        <li>translate,</li>
        <li>rotate,</li>
        <li>scale</li>
        <li>skewX, or skewY.</li>
      </ul>

      <p className="section">
        Otherwise the functionality of <strong>&lt;animateTransform&gt;</strong>{" "}
        is identical to <strong>&lt;animate&gt;</strong>. All the attributes -
        from, to, dur, fill, calcMode, etc. - have the same functionality.
      </p>

      <p>
        The only difference in the syntax of animateTransform from animate is
        that animateTransform has a <strong>type</strong> attribute, where you
        designate the type of transform animation to be performed.
      </p>

      <Blocks>{`type="translate | rotate | scale | skewX | skewY"`}</Blocks>

      <h3>translate</h3>

      <p>
        Let's start by creating a rectangle and animating it's transform-translate
        value. All we need are two positions - the "from" position and a "to"
        position.
      </p>

      <Blocks>{`from="<x>,<y>"
to=<x>,<y>"`}</Blocks>

      <p>You can also use the "value" attribute like so:</p>

      <Blocks>{`values="<x1>,<y1>;<x2>,<y2>;..."`}</Blocks>

      <p>
        I'll use <strong>values</strong> instead of <strong>from to</strong> so
        that I can make the animation bounce back and forth by setting the first
        and last value to the same x and y position. (SMIL doesn't have the
        equivalent to CSS <strong>animation-direction:alternate</strong>,
        unfortunately.)
      </p>

      <Blocks highlight="3,4,5,6,7,8,9,10,11">{`<svg width="500" height="500" viewBox="0 0 500 500">
  <rect x="0" y="0" rx="10" ry="10" width="200" height="200" fill="skyblue">
    <animateTransform
      attributeName="transform"
      type="translate"
      values="0,0;300,300;0,0"
      begin="0s"
      dur="3s"
      repeatCount="indefinite"
      autoReverse="true"
    ></animateTransform>
  </rect>
</svg>`}</Blocks>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <rect x="0" y="0" rx="10" ry="10" width="200" height="200" fill="skyblue">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0;300,300;0,0"
            begin="0s"
            dur="3s"
            repeatCount="indefinite"
            autoReverse="true"
          ></animateTransform>
        </rect>
      </svg>

      <h3>rotate</h3>

      <p>
        In this example, we're animating a rectangle's transform-rotate value
        from 0° to 360°. The first number in both the <em>from</em> and{" "}
        <em>to</em> attributes represents the angle, and the second and third
        represent the x and y position around which the rotation occurs.
      </p>

      <Blocks>{`from="<angle> <x> <y>"
to="<angle> <x> <y>"`}</Blocks>

      <Blocks highlight="3,4,5,6,7">{`<svg width="500" height="500" viewBox="0 0 500 500">
  <rect x="150" y="150" rx="10" ry="10" width="200" height="200" fill="skyblue">
    <animateTransform
      attributeName="transform"
      type="rotate"
      from="0 250 250"
      to="360 250 250"
      begin="0s"
      dur="3s"
      repeatCount="indefinite"></animateTransform>
  </rect>
</svg>`}</Blocks>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <rect x="150" y="150" rx="10" ry="10" width="200" height="200" fill="skyblue">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 250 250"
            to="360 250 250"
            begin="0s"
            dur="3s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
      </svg>

      <p>
        If you set the <em>transform-origin</em> presentation attribute to the
        point you want the rotation to occur around, you can dispense with the x
        and y values in the <em>from</em> and <em>to</em> attributes.
      </p>

      <Blocks highlight="2,6,7,8,9,10">{`<svg width="500" height="500" viewBox="0 0 500 500">
  <rect transform-origin="250 250" ...>
    <animateTransform
      attributeName="transform"
      type="rotate"
      from="0"
      to="360"
      begin="0s"
      dur="3s"
      repeatCount="indefinite"></animateTransform>
  </rect>
</svg>`}</Blocks>

      <p>
        For multiple rotations we can use the values attribute, with the angle
        values separated by a semicolon.
      </p>

      <Blocks highlight="6">{`<svg width="500" height="500" viewBox="0 0 500 500">
  <rect transform-origin="250 250" ...>
    <animateTransform
      attributeName="transform"
      type="rotate"
      values="0; 360; 180; 360"
      begin="0s"
      dur="3s"
      repeatCount="indefinite"></animateTransform>
  </rect>
</svg>`}</Blocks>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <rect
          x="150"
          y="150"
          rx="10"
          ry="10"
          width="200"
          height="200"
          fill="skyblue"
          transform-origin="250 250"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0; 360; 180; 360"
            begin="0s"
            dur="3s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
      </svg>

      <p>
        Note that the rotations can have different center points. Look what
        happens when we get rid of the transform-origin attribute and instead
        include a changing rotation point in the values attribute.
      </p>

      <Blocks highlight="6">{`<svg width="500" height="500" viewBox="0 0 500 500">
  <rect x="150" y="150" rx="10" ry="10" width="200" height="200" fill="red">
    <animateTransform
      attributeName="transform"
      type="rotate"
      values="0 250 250; 360 250 100; 180 250 400; 360 250 250"
      begin="0s"
      dur="3s"
      repeatCount="indefinite"></animateTransform>
  </rect>
</svg>`}</Blocks>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <rect x="150" y="150" rx="10" ry="10" width="200" height="200" fill="red">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 250 250; 360 250 100; 180 250 400; 360 250 250"
            begin="0s"
            dur="3s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
      </svg>

      <h3>scale</h3>

      <p>
        For the animateTransform <strong>scale</strong> type, if you want to
        scale the object from it's center, you have to make sure to set it's{" "}
        <strong>transform-origin</strong> attribute, as I've done below:
      </p>

      <Blocks highlight="2,4,5,6,7">{`<svg width="500" height="500" viewBox="0 0 500 500">
  <rect x="150" y="150" rx="10" ry="10" width="200" height="200" fill="blue" transform-origin="250 250">
    <animateTransform
      attributeName="transform"
      type="scale"
      values="1; 2; 1"
      begin="0s"
      dur="3s"
      repeatCount="indefinite"></animateTransform>
  </rect>
</svg>`}</Blocks>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <rect
          x="150"
          y="150"
          rx="10"
          ry="10"
          width="200"
          height="200"
          fill="blue"
          transform-origin="250 250"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1; 2; 1"
            begin="0s"
            dur="3s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
      </svg>

      <h3>skewX | skewY</h3>

      <p>
        Like the scale type, we can set the transform-origin property to control
        how the object skews during the animation. In the example below the
        transform-origin point is set at the upper left-hand corner of the
        square.
      </p>

      <Blocks highlight="2,4,5,6,7">{`<svg width="500" height="500" viewBox="0 0 500 500">
  <rect x="150" y="150" rx="10" ry="10" width="200" height="200" fill="orange" transform-origin="150 150">
    <animateTransform
      attributeName="transform"
      type="skewX"
      values="0; 30; 0"
      begin="0s"
      dur="3s"
      repeatCount="indefinite"></animateTransform>
  </rect>
</svg>`}</Blocks>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <rect
          x="150"
          y="150"
          rx="10"
          ry="10"
          width="200"
          height="200"
          fill="orange"
          transform-origin="150 150"
        >
          <animateTransform
            attributeName="transform"
            type="skewX"
            values="-30; 30; -30"
            begin="0s"
            dur="3s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
      </svg>

      <h3>additive animations</h3>

      <p>
        What if you want to perform multiple transform animations at the same
        time? For example, what if we want the square to both scale and rotate?
        Let's try to do so by adding multiple animateTransforms, one for scale
        and one for rotate.
      </p>

      <Blocks highlight="3,4,5,6,10,11,12,13">{`<svg width="500" height="500" viewBox="0 0 500 500">
  <rect x="200" y="200" rx="10" ry="10" width="100" height="100" fill="purple" transform-origin="250 250">
    <animateTransform
      attributeName="transform"
      type="scale"
      values="1;3;1"
      begin="0s"
      dur="3s"
      repeatCount="indefinite"></animateTransform>
    <animateTransform
      attributeName="transform"
      type="rotate"
      values="0;360;0"
      begin="0s"
      dur="3s"
      repeatCount="indefinite"></animateTransform>
  </rect>
</svg>`}</Blocks>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <rect
          x="200"
          y="200"
          rx="10"
          ry="10"
          width="100"
          height="100"
          fill="purple"
          transform-origin="250 250"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;3;1"
            begin="0s"
            dur="3s"
            repeatCount="indefinite"
          ></animateTransform>

          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0;360;0"
            begin="0s"
            dur="3s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
      </svg>

      <p>
        As you can see, only the rotate animation works. By default, animations
        to a particular property <strong>replace</strong> previous animations to
        that same property. Since both animateTransforms are animating the{" "}
        <em>transform</em> type, the second one (rotate) overwrites the first
        (scale).
      </p>

      <p>
        To avoid this, we'll need to use the <strong>additive</strong> property,
        which allows you to <em>combine</em> animations to the same property.
      </p>

      <Blocks>{`additive = "replace" | "sum"`}</Blocks>

      <Blocks highlight="3,4,5,6,7,8,11,12,13,14,15,16">{`<svg width="500" height="500" viewBox="0 0 500 500">
  <rect x="200" y="200" rx="10" ry="10" width="100" height="100" fill="purple" transform-origin="250 250">
    <animateTransform
      attributeName="transform"
      type="scale"
      values="1;3;1"
      begin="0s"
      dur="3s"
      repeatCount="indefinite"
      additive="sum"></animateTransform>
    <animateTransform
      attributeName="transform"
      type="rotate"
      values="0;360;0"
      begin="0s"
      dur="3s"
      repeatCount="indefinite"
      additive="sum"></animateTransform>
  </rect>
</svg>`}</Blocks>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <rect
          x="200"
          y="200"
          rx="10"
          ry="10"
          width="100"
          height="100"
          fill="purple"
          transform-origin="250 250"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;3;1"
            begin="0s"
            dur="3s"
            repeatCount="indefinite"
          ></animateTransform>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0;360;0"
            begin="0s"
            dur="3s"
            repeatCount="indefinite"
            additive="sum"
          ></animateTransform>
        </rect>
      </svg>
    </>
  );
};

export default SmilAnimation;
