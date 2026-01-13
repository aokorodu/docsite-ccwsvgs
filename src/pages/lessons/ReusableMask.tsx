import Blocks from "@/components/blocks";
import {
  MaskIntroExample,
  FinalExample,
} from "@/components/reusablemaskchapter";

const ReusableMask = () => {
  return (
    <>
      <h1>Masks</h1>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/ZEdqyNj"}
        target="_blank"
      >
        {"codepen practice page"}
      </a>

      <h2>the mask element</h2>

      <p>
        Like clipPaths, masks are used to reveal/hide parts of another image.
        Unlike clipPaths, which are either "on" or "off", a mask applies an
        alpha to the masked element. Everything under a white pixel is visible,
        while everything under a black pixel is invisible. The darker the shade
        of grey, the more transparent the masked element is.
      </p>

      <MaskIntroExample />

      <p>
        Masks are defined by the &lt;mask&gt; element, and applied to a group or
        shape element using the <strong>mask</strong> attribute. The element has
        an <strong>id</strong> attribute used to identify and apply the mask.
      </p>

      <pre>
        <code>{`<mask id="my-mask"...
...
<rect mask="url(#my-mask)" ...`}</code>
      </pre>

      <h2>mask gradient</h2>

      <p>
        Masks require a white-to-black gradient of some sort. The gradient
        should be defined in <strong>defs</strong> and given an{" "}
        <strong>id</strong> so that it can be used by the mask.
      </p>

      <Blocks>
        {`<defs>
    <radialGradient id="gradient">
    <stop offset="0%" stopColor="white" />
    <stop offset="100%" stopColor="black" />
</radialGradient>
</defs>`}
      </Blocks>

      <p>
        Once you have your gradient you can create your mask. Masks are also
        defined inside of the defs section, like all other reusable elements.
      </p>

      <Blocks>
        {`<defs>

    // radial gradient code

    <mask id="gradient_mask">
        <rect x="0" y="0"
        width="500" height="500"
        fill="url(#gradient)">
        </rect>
    </mask>

</defs>`}
      </Blocks>

      <p>
        Finally, you can apply the mask to a shape element or group by using
        it's <strong>id</strong>.
      </p>

      <Blocks>
        {`<defs>
    <radialGradient id="gradient">
        // radial gradient code
    </radialGradient>

    <mask id="gradient_mask">
        // mask code
    </mask>

</defs>

<rect
    mask="url(#gradient_mask)"
    x="0" y="0"
    width="500" height="500"
    fill="url(#simple_tile)">`}
      </Blocks>

      <FinalExample />
    </>
  );
};

export default ReusableMask;
