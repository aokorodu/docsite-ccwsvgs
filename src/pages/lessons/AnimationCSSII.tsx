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
        rel="noopener noreferrer"
      >
        {"CSS Animation codepen practice page"}
      </a>

      <h1>CSS Animation Behaviors</h1>

      <h2>animation-direction</h2>

      <p>
        The animation-direction CSS property controls how an animation will
        play. There are four possible settings:
      </p>

      <ol>
        <li><p>
          <strong>normal</strong> (default) - the animation plays forwards
          (from-to, or 0% to 100%)
        </p></li>
        <li><p>
          <strong>reverse</strong> - the animation plays backwards (to-from, or
          100% to 0%)
        </p></li>
        <li><p>
          <strong>alternate</strong> - the animation plays forwards, then
          backwards
        </p></li>
        <li><p>
          <strong>alternate-reverse</strong> - the animation plays backwards, then
          forwards
        </p></li>
      </ol>

      <p>
        This is the animation we'll be applying different fill-directions and fill-modes to. It's a
        simple scaling of a rect element.
      </p>

      <Blocks>{`<style>
@keyframes grow {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(2.5);
  }
}
</style>`}</Blocks>

      <h3>normal</h3>

      <Blocks>{`<style>
@keyframes grow {...}

#normalAnimation {
  // animation duration, timing etc.
  animation-direction: normal;
}
</style>

<rect id="normalAnimation"... />`}</Blocks>

      <Blocks>{`animation-direction: normal;`}</Blocks>

      <AnimationDirection direction={"normal"} />

      <h3>reverse</h3>

      <Blocks>{`animation-direction: reverse;`}</Blocks>

      <AnimationDirection direction={"reverse"} />

      <h3>alternate</h3>

      <Blocks>{`animation-direction: alternate;`}</Blocks>

      <AnimationDirection direction={"alternate"} />

      <h3>alternate-reverse</h3>

      <h4>
        alternate-reverse looks identical to alternate for this particular
        example
      </h4>

      <Blocks>{`animation-direction: alternate-reverse;`}</Blocks>

      <AnimationDirection direction={"alternate-reverse"} />

      <h2>animation-fill-mode</h2>

      <p>
        The animation-fill-mode property defines how styles are applied to the
        styled object before and/or after the animation occurs. There are four
        possible values:
      </p>

      <Blocks>{`animation-fill-mode: none | forwards | backwards | both`}</Blocks>

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

      <Blocks>{`animation-fill-mode: none`}</Blocks>

      <AnimationFillMode mode={"none"} />

      <h3>forwards</h3>

      <p>
        When the animation competes, the object retains the styles as defined in
        the final keyframe of the animation. So the square stays blue and scaled
        to 4x.
      </p>

      <Blocks>{`animation-fill-mode: forwards`}</Blocks>

      <AnimationFillMode mode={"forwards"} />

      <h3>backwards</h3>

      <p>
        Before the animation runs, the object takes on the styles as defined in
        the first keyframe. So the square immediately takes on the styles as set
        forth at the start of the animation - red and a scale of 2x. After the
        animation is complete, all styles from the animation are removed.
      </p>

      <Blocks>{`animation-fill-mode:  backwards`}</Blocks>

      <AnimationFillMode mode={"backwards"} />

      <h3>both</h3>

      <p>
        The object takes on the styles as defined in the first keyframe prior to
        the animation running (red, 2x scale), and retains the styles as defined
        in the final keyframe after running (blue, 4x scale).
      </p>

      <Blocks>{`animation-fill-mode: both`}</Blocks>

      <AnimationFillMode mode={"both"} />

    </>
  );
};

export default AnimationCSSII;
