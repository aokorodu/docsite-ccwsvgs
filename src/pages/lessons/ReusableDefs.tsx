import Blocks from "@/components/blocks";
import { DefsExample, DefsSmileExample } from "@/components/reusablechapter";

const ReusableDefs = () => {
  return (
    <>
      <h1>defs</h1>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/ZEdqyNj"}
        target="_blank"
      >
        {"codepen practice page"}
      </a>

      <h2>the defs element</h2>

      <p>
        While it's acceptable to <strong>use</strong> a visible object, the
        better practice is to define reusable objects in the{" "}
        <strong>defs</strong> section. You can think of <strong>defs</strong> as
        a storage place for graphical objects. Elements defined in{" "}
        <strong>defs</strong> aren't rendered directly - they are only rendered
        when referred to by the <strong>use</strong> element.
      </p>

      <Blocks>{`<svg width="500" height="500" viewbox="0 0 500 500">

    <defs>
        <circle id="dot"
            cx="0" cy="0" r="100"
            fill="purple" />
    </defs>

    <use
        href="#dot"
        x="250" y="250">
    </use>

</svg>`}</Blocks>

      <DefsExample />

      <p>
        A defs object can be a single shape element like a circle, rectangle, or
        a path, or it can be multiple elements that are grouped &lt;g&gt;.
      </p>

      <Blocks>{`<svg width="500" height="500" viewbox="0 0 500 500">

    <defs>
        <circle id="dot"
            cx="0" cy="0" r="100"
            fill="purple" />
    </defs>

    <use
        href="#dot"
        x="250" y="250">
    </use>

</svg>`}</Blocks>

      <DefsSmileExample />

      <Blocks>{`<svg width="500" height="500" viewbox="0 0 500 500">

    <defs>
        <g id="smiley-face">
            <circle cx="118.5" cy="140.5" r="12.5" fill="black" />
            <circle cx="243.5" cy="140.5" r="12.5" fill="black" />

            // more code
        </g>
    </defs>

    <use
        href="#smiley-face"
        x="0" y="0">
    </use>

</svg>`}</Blocks>
    </>
  );
};

export default ReusableDefs;
