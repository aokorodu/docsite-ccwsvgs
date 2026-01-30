import Blocks from "@/components/blocks";
import {
  FrameRateExample,
  ToggleClassWithJS,
  ToggleKeyframeAnimBroke,
  AnimEnd,
  BitterEnd,
} from "@/components/animationJS";

const AnimationJavascript = () => {
  return (
    <>
      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/VwRbJYO"}
        target="_blank"
      rel="noopener noreferrer"
      >
        {"JavaScript Animation codepen practice page"}
      </a>

      <h1>JavaScript Animation</h1>

      <h2>JavaScript vs CSS Animations</h2>

      <p>
        Using javascript to animate an svg is recommended for more complex,
        dynamic animations. Javascript allows you to animate a wider range of
        svg attributes and elements, like the viewbox and filters, making it
        much more powerful option than CSS animations.
      </p>

      <h2>framerates</h2>

      <p>
        Animation is an illusion created by showing a series of slightly
        different still images in rapid succession. If the images change slowly
        we won't perceive the images as animation. We'll just perceive a series
        of still pictures. The faster the images change, the smoother and more
        fluid the motion appears.
      </p>

      <img
        src="/javascript_anim_race_horse.gif"
        alt="javascript_anim_race_horse.gif"
      />

      <p>
        The rate at which the images change is called the frame rate. The faster
        the frame rate, the smoother the animation.
      </p>

      <FrameRateExample />

      <p>
        Browsers optimally render at a frame rate of about 60 fps, but the
        framerate can be affected by lots of factors.
      </p>

      <h2>Using JavaScript to toggle CSS animations</h2>

      <h3>toggling transitions</h3>

      <p>
        One way to using javascript is to dynamically add and/or remove css
        transition or animation classes.
      </p>

      <p>For example, let's add a rotation animation to this square</p>

      <Blocks>{`<svg width="500" height="500" viewbox="0 0 500 500">
  <g transform="translate(250 250)">
    <rect class="square" x="-150" y="-150" width="300" height="300" fill="cornflowerblue" rx="10" ry="10" />
  </g>
</svg>`}</Blocks>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <g id="holder" transform="translate(250 250)">
          <rect
            id="square"
            className="square-style"
            x="-150"
            y="-150"
            width="300"
            height="300"
            rx="10"
            ry="10"
            fill="cornflowerblue"
          />
        </g>
      </svg>

      <p>
        First, let's set up a style that sets up the initial rotation transform
        and the transition properties (<strong>square</strong>). We'll create a
        second class, (<strong>spin-style-transition</strong>), that we'll apply
        to the element dynamically using javascript.
      </p>

      <Blocks>{`.square {
  transform: rotate(0deg);
  transition: 500ms ease-in-out;
}
.spin-style-transition {
  transform: rotate(360deg);
}`}</Blocks>

      <p>We'll use querySelector to get a reference to the square using it's id:</p>

      <Blocks>{`const square = document.querySelector(".square");`}</Blocks>

      <p>Next we'll add a click event listener to the square.</p>

      <Blocks highlight="2-4">{`const square = document.querySelector(".square");
square.addEventListener("click", () => {
  // code goes here
})`}</Blocks>

      <p>
        Finally we'll use the <strong>classList</strong> property that returns a{" "}
        <strong>DOMTokenList</strong> of classes currently applied to an
        element. The DomTokenList has a <strong>contains</strong> method that we
        can use to see if the <em>spin-style-transition</em> class is part of
        the classlist. If so, we'll remove it. If not, we'll add it.
      </p>

      <Blocks highlight="3-7">{`const square = document.querySelector(".square");
square.addEventListener("click", () => {
  const list = square.classList;
  list.contains("spin-style-transition")
    ? square.classList.remove("spin-style-transition")
    : square.classList.add("spin-style-transition");
});`}</Blocks>

      <ToggleClassWithJS />

      <h3>toggling keyframe animations</h3>

      <p>We can also toggle keyframe animations.</p>

      <Blocks>{`.square {
  transform: rotate(0deg);
}
.spin-style-animation {
  animation: spin 1s ease-in-out;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`}</Blocks>

      <Blocks highlight="3-7">{`const square = document.querySelector("#square");
square.addEventListener("click", () => {
  const list = square.classList;
  list.contains("spin-style-animation")
    ? square.classList.remove("spin-style-animation")
    : square.classList.add("spin-style-animation")
})`}</Blocks>

      <p>
        If we simply try to swap out the transitions for the keyframe animation,
        the animation doesn't toggle like it did with the transitions. The first
        click works, but nothing seems to happen with the second click. Why?
      </p>

      <ToggleKeyframeAnimBroke />

      <p>
        Removing the animation class doesn't trigger a transition - the element
        just reverts back to what it was before. On the second click, the
        animation class is removed, and it reverts to the original transform
        rotation, which is 0. But it doesn't transition to the original value,
        it just "pops" back into place.
      </p>

      <p>
        The solution: we swap animation classes. Let's create the forwards
        (spin) and backwards (spinBack) animations:
      </p>

      <Blocks highlight="7,8,9,18-25">{`.square {
  transform: rotate(0deg);
}
.spin-style-animation {
  animation: spin 1s ease-in-out;
}
.spin-back-style-animation {
  animation: spinBack 1s ease-in-out;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes spinBack {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}`}</Blocks>

      <p>Now we'll use javascript to swap them out.</p>

      <Blocks>{`square.addEventListener("click", () => {
  const list = square.classList;
  if(list.contains("spin-style-animation")){
    square.classList.remove("spin-style-animation")
    square.classList.add("spin-back-style-animation")
  } else {
    square.classList.add("spin-style-animation")
    square.classList.remove("spin-back-style-animation")
  }
})`}</Blocks>

      <p>Now it works!</p>

      <ToggleClassWithJS />

      <h3>animationend event</h3>

      <p>
        Another tool we can use to make css animations more robust is the
        "animationend" event. It allows us to listen for the end of css
        animations using javascript.
      </p>

      <p>
        In the following example we'll listen for the end of one animation and
        trigger the next when it occurs. Here's the animation CSS classes and
        keyframes. <strong>TLDR;</strong> the <strong>shrinkAnimation</strong>{" "}
        shrinks the cube and the <strong>expandAnimation</strong> expands it.
      </p>

      <Blocks>{`.shrinkAnimation {
  animation-name: shrink;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
@keyframes shrink {
  from {
    transform: scale(1);
    fill: conflowerblue;
  }
  to {
    transform: scale(0.5);
    fill: red;
  }
}
.expandAnimation {
  animation-name: expand;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
}
@keyframes expand {
  from {
    transform: scale(0.5);
    fill: red;
  }
  to {
    transform: scale(1);
    fill: cornflowerblue;
  }
}`}</Blocks>

      <p>
        First we'll add a click event handler to the square, and use it to add
        the shrink animation.
      </p>

      <Blocks>{`const square = document.querySelector("#square");

square.addEventListener("click", () => {
  square.classList.add("shrinkAnimation")
})`}</Blocks>

      <p>
        Next we'll add an "animationend" event listener to the square, and use
        it to both remove the shrinkAnimation class and add the expandAnimation:
      </p>

      <Blocks highlight="7,8,9,10">{`const square = document.querySelector("#square");

square.addEventListener("click", () => {
  square.classList.add("shrinkAnimation")
})

square.addEventListener('animationend', () => {
  square.classList.remove("shrinkAnimation")
  square.classList.add("expandAnimation")
});`}</Blocks>

      <AnimEnd />

      <h2>Finishing up...</h2>

      <p>
        You may have noticed that you have to click the "reset" button in order
        to run through the animation again. Why can't we just click the square
        to have the animation repeat? Well, after the animation shrinks and
        expands the first time the square still has the "expandAnimation" class
        as part of it's classList. When you click the square the second time,
        you add the shrinkAnimation class, but it's cancelled out by the
        expandAnimation class. In order to repeat the shrinkAnimation, we'll
        need to remove the expandAnimation class first:
      </p>

      <Blocks highlight="4,5,6">{`const square = document.querySelector("#square");

square.addEventListener("click", () => {
  if(square.classList.contains("expandAnimation")){
    square.classList.remove("expandAnimation");
  }
  square.classList.add("shrinkAnimation")
})

square.addEventListener('animationend', () => {
  square.classList.remove("shrinkAnimation")
  square.classList.add("expandAnimation")
});`}</Blocks>

      <BitterEnd />

      <h4>
        *Check out this example in{" "}
        <a href="https://codepen.io/aokorodu/pen/zYVVWyV" target="_blank" rel="noopener noreferrer">
          codepen
        </a>
      </h4>
    </>
  );
};

export default AnimationJavascript;
