import Blocks from "@/components/blocks";
import {
  BackAndForthExample,
  FailExample,
  AnimationFrameExample,
  SimpleBounceExample,
  ComplexBounceExample,
} from "@/components/animationJSII";

const AnimationJavascriptII = () => {
  return (
    <>
      <h1>Single Particle Animation</h1>

      <p>
        Next we'll create an animation without adding or removing css. Let's try
        to replicate the animation from the CSS animation section, where we
        simply move the circle up and down.
      </p>

      <BackAndForthExample />

      <p>
        We'll start off by getting a reference to the circle using
        getElementById.
      </p>

      <Blocks>{`<svg ...>
  <circle id="my-circle" cx="150" cy="150" r="10" fill="green" />
</svg>`}</Blocks>

      <Blocks lang="javascript">{`const circ = document.getElementById("my-circle");`}</Blocks>


      <h2>Moving our Particle</h2>
      <p>
        You can probably guess that we'll be changing the position of the circle
        using the setAttribute method we demonstrated in the{" "}
        <strong>Changing SVGs Dynamically</strong> section.
      </p>

      <p>
        Let's say we just want to move the circle from the top of the SVG to the
        bottom. You might think that we can simply use a loop to increase the
        circle's cy attribute. It won't work. Why?
      </p>

      <Blocks lang="javascript">{`
  const circ = document.querySelector("#my-circle");
  let ypos = 0;
  for (let i = 0; i < 300; i++) {
    circ.setAttribute("cy", ypos);
    ypos += 1;
  }`}</Blocks>

      <FailExample />

      <p className="section">
        The circle's cy attribute is indeed being updated, but the browser runs
        through all of the loop iterations so fast you won't even see it. All
        you'll see is the green dot at the final cy position. In terms of the
        browsers frame rate, all of the animation occurs on a single frame.
      </p>

      <h2>Request Animation Frame</h2>

      <p>
        In order to animate the circle, we'll need to update it's position once
        per frame. We do this using the browser's requestAnimationFrame()
        method.
      </p>

      <p>
        First, let's create a method that increments the circle's cy attribute:
      </p>

      <Blocks>{`const circ = document.querySelector("#my-circle");
let ypos = 10;

moveCircle();

function moveCircle(){
  circ.setAttribute("cy", ypos);
  ypos += 1;
}`}</Blocks>

      <p>
        As a reminder, the browser has a own frame rate of about 60 fps. This
        means that it <em>repaints</em> itself 60 times per second. The{" "}
        <strong>requestAnimationFrame</strong> method is used to call an
        animation function prior to "repainting" the screen. So you'll want to
        pass it a function that updates some visual aspect of the svg - in this
        case, the moveCircle() method.
      </p>

      <p>
        We'll recursively call the moveCircle method by adding the
        window.requestAnimationFrame to the end of the function. So the function
        runs, updates the cy value, and then calls itself to run again on the
        next frame. The method keeps going until cy {'>='} 290. Once it reaches that
        value, a return statement prevents the requestAnimationFrame method from
        being called again.
      </p>

      <Blocks>{`const circ = document.querySelector("#my-circle");
let ypos = 10;

moveCircle();

function moveCircle(){
  ypos += 1;
  circ.setAttribute("cy", ypos);

  if (ypos >= 290) return;

  window.requestAnimationFrame(moveCircle);
}`}</Blocks>

      <AnimationFrameExample />

      <h2>Bouncing off the Walls</h2>
      <p>
        Instead of just stopping, let's make the ball bounce off the wall and
        head the other direction. In order to do this, we'll need to create a{" "}
        <em>speed</em> variable.
      </p>

      <Blocks>{`let speed = 1;`}</Blocks>

      <Blocks>{`const circ = document.querySelector("#my-circle");
let ypos = 10;
let speed = 1;

moveCircle();

function moveCircle(){
  ypos += 1;
  circ.setAttribute("cy", ypos);

  if (ypos >= 290) return;

  window.requestAnimationFrame(moveCircle);
}`}</Blocks>

      <p>
        Now let's update the <em>moveCircle</em> method so that when the ypos
        variable is greaterthan or equal to 290, we change the speed variable
        so the ball heads in the opposite direction. An easy way to do this is
        to just multiply it by -1.
      </p>

      <Blocks>{`const circ = document.querySelector("#my-circle");
let ypos = 10;
let speed = 1;

moveCircle();

function moveCircle(){
  ypos += 1;
  circ.setAttribute("cy", ypos);

  if(ypos >= 290){
    speed *= -1;
    ypos = 290;
  }

  window.requestAnimationFrame(moveCircle);
}`}</Blocks>

      <SimpleBounceExample />

      <p className="section">
        As you can see, the ball bounces off the bottom but not the top. We'll
        also need to reverse the speed when the circle hits the top edge of the
        svg (ypos &lt; 10).
      </p>

      <Blocks lang="javascript">{`const circ = document.querySelector("#my-circle");
let ypos = 10;
let speed = 1;

moveCircle();

function moveCircle(){
  ypos += 1;
  circ.setAttribute("cy", ypos);

  if(ypos >= 290){
    speed *= -1;
    ypos = 290;
  }

  if(ypos < 10){
    speed *= -1;
    ypos = 10;
  }

  window.requestAnimationFrame(moveCircle);
}`}</Blocks>

      <SimpleBounceExample top={true} />

      <p className="section">
        Let's make this work in two dimensions by adding speed variables for
        both x and y, and updating the speed variables when the ball collides
        with ANY of the walls.
      </p>

      <Blocks lang="javascript">{`const circ = document.querySelector("#my-circle");
let xpos = 100;
let ypos = 150;
let x_speed = 1;
let y_speed = 1;

moveCircle();

function moveCircle(){
  circ.setAttribute("cx", xpos);
  circ.setAttribute("cy", ypos);
  xpos += x_speed;
  ypos += y_speed;

  if(xpos > 190){
    xpos = 190;
    x_speed *= -1;
  } else if(xpos < 10){
    xpos = 10;
    x_speed *= -1;
  }

  if(ypos > 290){
    ypos = 290;
    y_speed *= -1;
  } else if(ypos < 10){
    ypos = 10;
    y_speed *= -1;
  }

  window.requestAnimationFrame(moveCircle);
}`}</Blocks>

      <ComplexBounceExample />

      <h2>Some Enhancements</h2>

      <p className="section">
        With hard-coded speed variables, the animation is the same every time.
        We'll fix that by setting random values for x_speed and y_speed.
      </p>

      <Blocks lang="javascript">{`const circ = document.querySelector("#my-circle");
let xpos = 100;
let ypos = 150;
let x_speed = Math.random() * 10 - 5;
let y_speed = Math.random() * 10 - 5;

moveCircle();

function moveCircle(){
  circ.setAttribute("cx", xpos);
  circ.setAttribute("cy", ypos);
  xpos += x_speed;
  ypos += y_speed;

  if(xpos > 190){
    xpos = 190;
    x_speed *= -1;
  } else if(xpos < 10){
    xpos = 10;
    x_speed *= -1;
  }

  if(ypos > 290){
    ypos = 290;
    y_speed *= -1;
  } else if(ypos < 10){
    ypos = 10;
    y_speed *= -1;
  }

  window.requestAnimationFrame(moveCircle);
}
`}</Blocks>

      <ComplexBounceExample randomized={true} />

      <p className="section">
        Note: for the random speed values, I could have just multiplied a number
        by Math.random() like this:
      </p>

      <Blocks>{`let x_speed = Math.random() * 10;`}</Blocks>

      <p>
        The problem is that this would always result in a positive number. If I
        want to have a potential range of positive and negative values from x to
        -x, I need to do this
      </p>

      <Blocks>{`let value = Math.random() * <2x> - x;`}</Blocks>

      <p>So to get values from 5 to -5:</p>

      <Blocks>{`let x_speed = Math.random() * 10 - 5;`}</Blocks>

      <p className="section">
        *See the full example on{" "}
        <a
          href="https://codepen.io/aokorodu/pen/RwzzBZa?editors=0010"
          target="_blank"
          rel="noopener noreferrer"
        >
          codepen
        </a>
      </p>
    </>
  );
};

export default AnimationJavascriptII;
