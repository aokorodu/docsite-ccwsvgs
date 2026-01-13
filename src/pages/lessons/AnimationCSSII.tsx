import Blocks from "@/components/blocks";
import {
  AnimationDirection,
  AnimationFillMode,
} from "@/components/animationcssII";

const AnimationCSSII = () => {
  return (
    <>
      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/OJqmeLy"}
        target="_blank"
      >
        {"CSS Animation codepen practice page"}
      </a>

      <h2>animation-direction</h2>

      <p>
        The animation-direction CSS property controls how an animation will
        play. There are four possible settings:
      </p>

      <p>
        <strong>normal</strong> (default) - the animation plays forwards
        (from-to, or 0% to 100%)
      </p>

      <p>
        <strong>reverse</strong> - the animation plays backwards (to-from, or
        100% to 0%)
      </p>

      <p>
        <strong>alternate</strong> - the animation plays forwards, then
        backwards
      </p>

      <p>
        <strong>alternate-reverse</strong> - the animation plays backwards, then
        forwards
      </p>

      <h2>animation-fill-mode</h2>

      <p>
        This is the animation we'll be applying different fill-modes to. It's a
        simple scaling of a rect element.
      </p>

      <Blocks>
        {`<style>
  @keyframes grow {
      from {
        transform: scale(1);
      }
      to {
        transform: scale(2.5);
      }
  }
</style>`}
      </Blocks>

      <h3>normal</h3>

      <Blocks>
        {`<style>
  @keyframes grow {...}

  #normalAnimation {
      // animation duration, timing etc.
      animation-direction: normal;
  }
</style>

<rect id="normalAnimation"... />`}
      </Blocks>

      <pre>
        <code>{`animation-direction: normal;`}</code>
      </pre>

      <AnimationDirection direction={"normal"} />

      <h3>reverse</h3>

      <pre>
        <code>{`animation-direction: reverse;`}</code>
      </pre>

      <AnimationDirection direction={"reverse"} />

      <h3>alternate</h3>

      <pre>
        <code>{`animation-direction: alternate;`}</code>
      </pre>

      <AnimationDirection direction={"alternate"} />

      <h3>alternate-reverse</h3>

      <h4>
        alternate-reverse looks identical to alternate for this particular
        example
      </h4>

      <pre>
        <code>{`animation-direction: alternate-reverse;`}</code>
      </pre>

      <AnimationDirection direction={"alternate-reverse"} />

      <h2>animation-fill-mode</h2>

      <p>
        The animation-fill-mode property defines how styles are applied to the
        styled object before and/or after the animation occurs. There are four
        possible values:
      </p>

      <pre>
        <code>{`animation-fill-mode: none | forwards | backwards | both`}</code>
      </pre>

      <p>
        The examples below are all identical other than their fill-mode setting
        - after a delay of 1 second the square scales from 2x to 4x and turns
        from red to blue. See if you can notice how the fill-mode affects the
        animation!
      </p>

      <h3>none</h3>

      <p>
        The animation styles are only applied during the animation. So the
        square stays grey and it's normal size during the delay. When the delay
        is over, the styles defined in the first keyframe are applied (red fill,
        2x scale). When the animation is over, all styles from the animation are
        removed and the square returns to it's pre-animation state.
      </p>

      <pre>
        <code>{`animation-fill-mode: none`}</code>
      </pre>

      <AnimationFillMode mode={"none"} />

      <h3>forwards</h3>

      <p>
        When the animation competes, the object retains the styles as defined in
        the final keyframe of the animation. So the square stays blue and scaled
        to 4x.
      </p>

      <pre>
        <code>{`animation-fill-mode: forwards`}</code>
      </pre>

      <AnimationFillMode mode={"forwards"} />

      <h3>backwards</h3>

      <p>
        Before the animation runs, the object takes on the styles as defined in
        the first keyframe. So the square immediately takes on the styles as set
        forth at the start of the animation - red and a scale of 2x. After the
        animation is complete, all styles from the animation are removed.
      </p>

      <pre>
        <code>{`animation-fill-mode:  backwards`}</code>
      </pre>

      <AnimationFillMode mode={"backwards"} />

      <h3>both</h3>

      <p>
        The object takes on the styles as defined in the first keyframe prior to
        the animation running (red, 2x scale), and retains the styles as defined
        in the final keyframe after running (blue, 4x scale).
      </p>

      <pre>
        <code>{`animation-fill-mode: both`}</code>
      </pre>

      <AnimationFillMode mode={"both"} />

      <h2>CSS transform danger</h2>

      <p>
        Due to the way browsers have implemented CSS transforms with SVGs, it
        can be difficult at times to predict what the user will see when
        animating the transform property.
      </p>

      <p>
        For example, here's a video of a simple animation that moves circle from
        one side of the svg to another.
      </p>

      <Blocks>
        {`@keyframes slide {
      from {
          transform: translateX(0px);
      }
      to {
          transform: translateX(400px);
      }
    }`}
      </Blocks>

      <p>
        When we change the zoom settings on our browser, the animation looks
        just fine - at least with current mac versions of Chrome and Firefox.
      </p>

      <video width="400" height="400" controls loop>
        <source src="/css_trans_chrome.mov" type="video/mp4" />
      </video>

      <p>
        But look what happens to the animation when we change the browsers zoom
        settings in Safari - the animation doesn't go all the way to the edge
        anymore! The example below has the zoom settings set to 200%
      </p>

      <video width="400" height="400" controls loop>
        <source src="/css_trans_safari.mov" type="video/mp4" />
      </video>

      <p>
        So Chrome and FireFox both require the use of units for CSS translations
        - px or % - which they then ignore in favor of the SVG's coordinate
        system. Safari, on the other hand, takes the unit designation seriously,
        and will translate the circle the distance specified - at least at the
        time of this writing.
      </p>

      <p>
        Here's another example. This time we'll create a simple animation to
        spin a square.
      </p>

      <Blocks>
        {`<style>
  #spinner {
    animation-name: spin;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration: infinite;
    transform-box: fill-box;
    transform-origin: center;
  }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

</style>`}
      </Blocks>

      <p>
        To rotate the cube around its center point, we can add set transform-box
        to fill-box and transform-origin to "center".
      </p>

      <video width="400" height="400" controls loop>
        <source src="/css_trans_chrome_rotate.mov" type="video/mp4" />
      </video>

      <p>
        While everything looks fine in Chrome and Firefox, things start to get
        weird in Safari when you change the zoom settings. The video below is of
        the same animation running in Safari with the zoom settings at 200%
      </p>

      <video width="400" height="400" controls loop>
        <source src="/css_trans_safari_rotate.mov" type="video/mp4" />
      </video>

      <p>
        In conclusion: CSS animations are great for SVGs unless you need to
        animate a transform property. Due to the inconsistent and downright
        buggy browser implementation for CSS transforms with SVGs, it's best to
        use JavaScript to dynamically update the transform presentation
        attributes over time, as we'll see in the following section.
      </p>
    </>
  );
};

export default AnimationCSSII;
