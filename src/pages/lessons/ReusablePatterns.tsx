import Blocks from "@/components/blocks";
import {
  IntroExample,
  TargetDesign,
  PatternFill,
  PUUserSpace_20,
  PCU_obb,
} from "@/components/reusablepatternschapter";

const ReusablePatterns = () => {
  return (
    <>
      <h1>Patterns</h1>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/ZEdqyNj"}
        target="_blank"
      >
        {"codepen practice page"}
      </a>

      <h2>the pattern element</h2>

      <p>
        A pattern is a design that is used repeatedly as a fill for another
        object. The object can be a simple shape element, or a complex group of
        shapes, lines and paths as in the example below. We'll do a quick
        overview of how it works before diving into the details.
      </p>

      <IntroExample />

      <h2>creating the pattern design</h2>

      <p>
        The repeating design used as the basis for a pattern is defined in{" "}
        <strong>&lt;defs&gt;</strong> section.
      </p>

      <p>
        First we'll create a simple design. We'll add a group tag with an id of
        "target" so that we can refer to and apply the design later.
      </p>

      <Blocks>
        {`<defs>
  <g id="target" stroke="black" fill="none">
    <rect x="0" y="0" width="50" height="50" />
    <circle cx="25" cy="25" r="25" />
    <circle cx="25" cy="25" r="20" />
    <circle cx="25" cy="25" r="15" />
    <circle cx="25" cy="25"r="10"
      fill="black"
      fill-opacity=".2"
      stroke="black"
    />
  </g>
</defs>`}
      </Blocks>

      <p>This is what our design looks like:</p>

      <TargetDesign />

      <h2>creating the pattern tile</h2>

      <p>
        Next we create the pattern tile using the <strong>&lt;pattern&gt;</strong>{" "}
        element. There are a lot of attributes to this element (patternUnits,
        width, height, etc.) which we'll go over later, but for now you should
        notice the <strong>id</strong>, which we'll use to apply the pattern as
        a fill, and the <strong>&lt;use&gt;</strong> element using the graphic
        we created earlier.
      </p>

      <Blocks>
        {`<defs>
  <g id="target" stroke="black" fill="none">
    // more code...
  </g>
  <pattern
    id="tile"
    x="0" y="0"
    width="50" height="50"
    patternUnits="userSpaceOnUse">
        <use href="#target" x="0" y="0" />
</pattern>
</defs>`}
      </Blocks>

      <p>Finally, the pattern tile is used as a fill by referencing its id.</p>

      <pre>
        <code>{`fill="url(#tile)"`}</code>
      </pre>

      <Blocks>
        {`<defs>
    <g id="target" stroke="black" fill="none">
        // graphics making up target
    </g>

    <pattern
        id="tile"
        x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
        <use href="#target" x="0" y="0"></use>
    </pattern>

</defs>

<rect x="0" y="0"
    width="500" height="300"
    fill="url(#tile)">
</rect>`}
      </Blocks>

      <PatternFill />

      <h2>pattern element attributes</h2>

      <p>
        <strong>id:</strong> Used to identify the pattern so it can be used as a
        fill or stroke of an object.
      </p>

      <p>
        <strong>width, height:</strong> The width and height are used to define
        the size of the pattern tile,
      </p>

      <p>
        <strong>patternUnits:</strong> defines the coordinate system used for
        the pattern's width and height. There are two possible values:
      </p>

      <ol>
        <li>
          <strong>userSpaceOnUse</strong>: the dimensions are based upon the
          viewbox coordinate space.
        </li>
        <li>
          <strong>objectBoundingBox</strong> the width and height are expressed
          as a fraction of the bounding box of the object to which the pattern
          is applied.
        </li>
      </ol>

      <br />

      <p>
        <strong>patternContentUnits:</strong> similar to patternUnits, except it
        defines the units of measure used when setting the geometric values of
        the pattern <strong>content</strong>.
      </p>

      <ol>
        <li>
          <strong>userSpaceOnUse</strong>: the pattern content uses the same
          coordinate system as the object being filled.
        </li>
        <li>
          <strong>objectBoundingBox</strong> the pattern content's geometric
          attributes are defined as percentage values of the bounding box of the
          object being filled.
        </li>
      </ol>

      <br />

      <h2>pattern units</h2>

      <p>
        Defines the unit of measure used when setting the geometric value of the
        pattern tile.
      </p>

      <h3>patternUnits - userSpaceOnUse</h3>

      <p>
        In this example we're using userSpaceOnUse as our pattern unit, so the
        pattern uses the same coordinate system as the rest of the SVG. Each
        tile is the same size as the graphic used in the tile. (50x50)
      </p>

      <pre>
        <code>{`<pattern ... patternUnits="userSpaceOnUse"`}</code>
      </pre>

      <Blocks>
        {`<circle id="circle_design"
    cx="25" cy="25" r="25"
    stroke="grey" fill="#eaeaea" />

<pattern
  id="circle_tile"
  x="0"
  y="0"
  width="50"
  height="50"
  patternUnits="userSpaceOnUse"
>
  <use href="#circle_design" x="0" y="0"></use>
</pattern>

<rect x="0" y="0" width="600" height="300" fill="url(#circle_tile)">
</rect>`}
      </Blocks>

      <img src="/patterns_50x50.png" alt="patterns_50x50.png" />

      <p>
        Now lets keep everything the same, but change the width and height of
        the pattern to 100x100.
      </p>

      <img src="/patterns_100x100.png" alt="patterns_100x100.png" />

      <p>
        Let's change the width and height of the pattern tile again - this time
        to 25x25.
      </p>

      <img src="/patterns_20x20.png" alt="patterns_20x20.png" />

      <h3>patternUnits - objectBoundingBox</h3>

      <p>
        When patternUnits is set to <strong>objectBoundingBox</strong> the tile
        width and height are defined as a percentage or fraction of the filled
        object's bounding box. In this example, width and height of the tile are
        20% of the width and height of the rectangle's bounding box. So .2 x 500
        = 100.
      </p>

      <pre>
        <code>{`<pattern ... patternUnits="objectBoundingBox"`}</code>
      </pre>

      <Blocks>
        {`<pattern
  id="tile"
  x="0" y="0"
  width=".2" height=".2"
  patternUnits="objectBoundingBox"
>
  // more code
</pattern>`}
      </Blocks>

      <img src="/patterns_obb_point_2.png" alt="patterns_obb_point_2.png" />

      <h2>patternContentUnits</h2>

      <p>
        Similar to patternUnits, except it defines the units of measure used
        when setting the geometric values of the actual pattern{" "}
        <strong>content</strong> - the width, height, etc of the paths, circles,
        rects and other elements used in the pattern design itself.
      </p>

      <h3>patternContentUnits - userSpaceOnUse</h3>

      <p>
        The size values for the content that defines the pattern uses the same
        coordinate system as the element that uses the pattern.
      </p>

      <Blocks>
        {`<pattern id="tile" x="0" y="0" width="50" height="50"
    patternUnits="userSpaceOnUse"
    patternContentUnits="userSpaceOnUse">
   <circle cx="25" cy="25" r="25" ... />
</pattern>`}
      </Blocks>

      <img
        src="/patterns_pcu_userSpace_1.png"
        alt="patterns_pcu_userSpace_1.png"
      />

      <h3>patternContentUnits - objectBoundingBox</h3>

      <p>
        The size values for the content are defined as percentage values of the
        object bounding box. So if we want to re-create the same pattern as
        directly above, we need to set the radius, cx and cy values to .05
      </p>

      <h4>
        (The rectangle being filled by the pattern is 500x500. 500 x .05 = 25 )
      </h4>

      <Blocks>
        {`<pattern id="tile" x="0" y="0" width="20" height="20"
    patternUnits="userSpaceOnUse"
    patternContentUnits="objectBoundingBox">
   <circle cx=".05" cy=".05" r=".05" ... />
</pattern>

<rect x="0" y="0"
    width="500" height="500"
    fill="url(#tile)"... />`}
      </Blocks>

      <p>
        Since the size of the pattern content is expressed as a percentage of
        the bounding box, it scales as the bounding box gets bigger or smaller.
      </p>

      <PCU_obb />
    </>
  );
};

export default ReusablePatterns;
