import Blocks from "@/components/blocks";
import {
  GsapDemo,
  BasicToAnim,
  BasicToAnim1A,
  BasicToAnim2,
  BasicToAnim3,
  BasicFromAnim,
  BasicFromToAnim,
  GSAPMethods,
} from "@/components/gsap";

const GreensockMethods = () => {
  return (
    <>
      <h1>Tweening</h1>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/JojPMMz"}
        target="_blank"
      >
        {"codepen practice page"}
      </a>

      <h2>Tween Methods</h2>

      <p>
        A <strong>tween</strong> is simply a method used to animate a property
        (or multiple properies) of an object over time. GSAP actually has three
        very descriptively named tween methods:
      </p>

      <p>
        <strong>gsap.to()</strong>: Tweens an object from it's current state to
        a different state.
      </p>

      <p>
        <strong>gsap.from()</strong>: Tweens an object from a state defined by
        the tween to it's current state
      </p>

      <p>
        <strong>gsap.fromTo()</strong>: Tweens an object from a state defined in
        the tween to a different state.
      </p>

      <h2>gsap.to()</h2>

      <p>
        As stated above, the <strong>gsap.to()</strong> method allows you to
        animate an object from its current state to a new state over a specified
        duration. Let's start with an example. In the HTML section of our
        practice codepen page you'll see three circles, each with a different id
        and a class of <em>ball</em>.
      </p>

      <Blocks>{`<circle id="red" class="ball" cx="30" cy="150" r="30" fill="red" />
<circle id="green" class="ball" cx="30" cy="250" r="25" fill="green" />
<circle id="blue" class="ball" cx="30" cy="350" r="20" fill="blue" />`}</Blocks>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <rect
          id="bg"
          x="0"
          y="0"
          width=""
          height=""
          fill="#eaeaea"
          stroke="black"
          strokeWidth="2"
        />
        <circle id="red" className="ball" cx="30" cy="150" r="30" fill="red" />
        <circle id="green" className="ball" cx="30" cy="250" r="25" fill="green" />
        <circle id="blue" className="ball" cx="30" cy="350" r="20" fill="blue" />
      </svg>

      <p>In the JS section let's create variables for the three circles:</p>

      <Blocks>{`const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");`}</Blocks>

      <p>
        In order to animate an element you'll need to change one or more of it's{" "}
        <strong>presentation attributes</strong> using the following syntax:
      </p>

      <Blocks>{`gsap.to(<object>, {
    attr: {
      <property>: <value>,
      <property>: <value>,
      ...
    },
    // other animation properties
  });`}</Blocks>

      <p>
        The <strong>attr</strong> object can be used to animte valid svg
        presentation attribue. Let's say we want to move the red ball
        horizontally across the screen. To do so we'll need to tween the{" "}
        <em>cx</em> value like so:
      </p>

      <Blocks>{`gsap.to(red, {
  attr: {
      cx: 470
  }
});`}</Blocks>

      <p>
        We can animate all of the circles if we pass an array of objects instead
        of a single objects:
      </p>

      <Blocks highlight="1">{`gsap.to([red, green, blue], {
  attr: {
    cx: 470
  }
});`}</Blocks>

      <p>
        We can also animate using id and class names. Here's an example
        animating by id:
      </p>

      <Blocks highlight="1">{`gsap.to("#red", {
  attr: {
    cx: 470
  }
});`}</Blocks>

      <p>
        And even more powerfully, animating by class. The following tween will
        animate all of the circles, similar to the array example above:
      </p>

      <Blocks highlight="1">{`gsap.to(".ball", {
  attr: {
    cx: 470
  }
});`}</Blocks>

      <p>
        The default duration of any tween is 0.5 seconds, but we can specify our
        own using the <strong>duration</strong> property. Let's set it to two
        seconds:
      </p>

      <Blocks highlight="5">{`gsap.to(".ball", {
  attr: {
      cx: 470
  },
  duration: 2
});`}</Blocks>

      <p>
        Right now the animation runs just one time, but we can change that using
        the <strong>repeat</strong> property and assigning a value. To get the
        animation to repeat infinitely, assign a value of -1.
      </p>

      <Blocks highlight="6">{`gsap.to(".ball", {
  attr: {
      cx: 470
  },
  duration: 2,
  repeat: -1
});`}</Blocks>

      <BasicToAnim />

      <p>
        We're not just limited to animating geometric properties. In the
        animation below we'll tween the fill , opacity and radius of each circle
        as well.
      </p>

      <Blocks>{`gsap.to(".ball", {
  attr: {
      cx: 470,
      r: 100,
      fill: "purple",
      opacity: 0.5,
  },
  duration: 2,
  repeat: -1
});`}</Blocks>

      <BasicToAnim1A />

      <h3>Tween properties</h3>

      <p>
        We can make our animation more interesting by adding special properties
        to our animation object. I've already shown you two - <em>duration</em>{" "}
        and <em>repeat</em>. Here are a few more that you'll probably use from
        time to time when using gsap.
      </p>

      <p>
        <strong>duration:</strong>
        <br />
        The duration of the animation from beginning to end
      </p>

      <p>
        <strong>repeat:</strong>
        <br />
        The number of times the animation repeats. A value of -1 makes the
        animation run indefinitely.
      </p>

      <p>
        <strong>yoyo:</strong>
        <br />
        This property is similar to the <em>alternate</em> CSS animation
        property, and it makes the animation run in the opposite direction every
        other time it repeats.
      </p>

      <p>
        <strong>ease:</strong>
        <br />
        This is basically the gsap version of the css timing function. You can
        find a number of interesting pre-defined easing functions and a
        visualizer for each function{" "}
        <a href="https://gsap.com/docs/v3/Eases/" target="_blank">
          here.
        </a>
      </p>

      <p>
        <strong>stagger:</strong>
        <br />
        When defining an animation for multiple objects, this property staggers
        the start time for each object by the designated amount.
      </p>

      <Blocks highlight="5-9">{`gsap.to([red, green, blue], {
  attr: {
    cx: 470,
  },
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "back.inOut",
  stagger: 1,
});`}</Blocks>

      <BasicToAnim2 />

      <p>
        <strong>stagger object:</strong>
        <br />
        You'll notice that the repeat only occurs after all three of the
        staggered animations have completed. What if you want each ball to
        repeat/yoyo right away, instead of waiting for thee others? You'll need
        to use the <strong>stagger object</strong>, which gives you more
        fine-tuned control over the animation.
      </p>

      <p>
        By using the stagger object and and defining the repeat and yoyo{" "}
        <em>inside</em> that object, you get a different result. The{" "}
        <em>each</em> property sets the delay in the start time for each
        sub-tween.
      </p>

      <Blocks highlight="7,8,9,10,11,12">{`gsap.to([red, green, blue], {
  attr: {
    cx: 470,
  },
  duration: 2,
  ease: "back.inOut",
  // Repeats immediately, not waiting for the other staggered animations to finish
  stagger: {
    each: 1,
    repeat: -1,
    yoyo: true,
  },
});`}</Blocks>

      <BasicToAnim3 />

      <h2>gsap.from()</h2>

      <p>
        The <em>from</em> method is used to animate an element <em>from</em> the
        designated state to it's current state. In the example below we're going
        to animate the balls from the same point. (470, 250).
      </p>

      <Blocks>{`gsap.to([red, green, blue], {
  attr: {
    cx: 470,
    cy: 250,
  },
  duration: 2,
  ease: "back.inOut",
  repeat: -1,
  yoyo: true,
});`}</Blocks>

      <BasicFromAnim />

      <h2>gsap.fromTo()</h2>

      <p>
        The <em>fromTo</em> method is used to animate elements from one state to
        another.
      </p>

      <Blocks>{`gsap.fromTo(
  [red, green, blue],
  // from state
  {
    attr: {
      cx: 250,
      cy: 50,
      fill: "red",
    },
  },
  // to state
  {
    attr: {
      cx: 250,
      cy: 450,
      fill: "blue",
    },
    duration: 2,
    stagger: {
      each: 0.5,
      repeat: -1,
      yoyo: true,
    },

    ease: "back.inOut",

}
);`}</Blocks>

      <BasicFromToAnim />

      <p>
        I've created a codepen containing all the methods we just discussed. Go
        ahead and modify the code, and see the results!
      </p>

      <GSAPMethods />
    </>
  );
};

export default GreensockMethods;
