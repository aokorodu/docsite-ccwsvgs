import Blocks from "@/components/blocks";
import { NoClip, WithClip, StarClip } from "@/components/reusableclippath";

const ReusableClippath = () => {
  return (
    <>
      <h1>ClipPaths</h1>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/ZEdqyNj"}
        target="_blank"
      >
        {"codepen practice page"}
      </a>

      <h2>the clipPath element</h2>

      <p>
        A clipPath defines a region of an element thats visible. Once a clipPath
        has been applied, anything "outside" the clip path isn't drawn by the
        browser.
      </p>

      <p>Here's a pattern with no clip path applied:</p>

      <NoClip />

      <p>And here's the same pattern with a circular clip path applied:</p>

      <WithClip />

      <h2>The clipPath element</h2>

      <p>
        The clip path's shape is defined using the &lt;clipPath&gt; element, and
        the clip-path attribute, used by the element applying the clip path.
      </p>

      <Blocks>{`<defs>
  <clipPath id="circ_CP">
    <circle cx="250" cy="250" r="150" />
  </clipPath>
  ...
</defs>

<rect ... clip-path="url(#circ_CP)" />`}</Blocks>

      <h2>clipPath attributes</h2>

      <p>
        <strong>id</strong>: Used to identify and apply the clip path
      </p>

      <Blocks>{`<clipPath id="clip-path-id">`}</Blocks>

      <p>
        <strong>clip-path</strong>: Used to apply the clip path
      </p>

      <Blocks>{`<rect ... clip-path="url(#clip-path-id)" />`}</Blocks>

      <p>
        The clipPath element can contain simple shapes, paths, or a combination
        thereof.
      </p>

      <StarClip />
    </>
  );
};

export default ReusableClippath;
