import Blocks from "@/components/blocks";
import {
  Exampleone,
  Exampletwo,
  Example3,
  ExampleFour,
  Example5,
  Example6,
  Example7,
  Example8,
  Example9,
  Example10,
  Example11,
  Example12,
  Example13,
  Example14,
  Example15,
  Example16,
  FO,
} from "@/components/textchapter";

const Text = () => {
  return (
    <>
      <h1>Text</h1>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/VwJEbxx"}
        target="_blank"
      >
        {"codepen practice page"}
      </a>

      <h2>The text element</h2>

      <p>
        You can add text to your SVG using… the text element. In the example
        below the browser will apply the font-family css styles defined for the
        containing page.
      </p>

      <Blocks>{`<svg
    width="500"
    height="500"
    viewBox="0 0 500 500"
    <text x="50" y="250">This is the text element</text>
</svg>`}</Blocks>

      <Exampleone />

      <hr />

      <h2>font-size, font-family, and font-weight</h2>

      <p>
        The SVG font-size, font-family, and font-weight attributes should be
        familiar to anyone who has used CSS. We can, in fact use CSS instead of
        presentation attributes to style text elements, if we so choose. We'll
        discuss that in a later section.
      </p>

      <Blocks>
        {`<text
    x="65"
    y="250"
    font-size="50"
    font-family="IBM Plex Sans, sans-serif"
    font-weight="normal">
    The text element
</text>`}
      </Blocks>

      <Exampletwo />

      <hr />

      <h2>y, dominant-baseline</h2>

      <p>
        The <strong>y</strong> attribute is used to position the text relative
        to its <strong>dominant-baseline</strong>, which is, by default,
        directly under the text. In the image below the dominant baseline is
        represented by the black line.
      </p>

      <Blocks>
        {`<text
    x="65" y="100"
    dominant-baseline="auto"
    fill="black"
    font-family="Arial" font-size="32">
    The text element
</text>`}
      </Blocks>

      <img src="/text_x_y.png" alt="text x y" />

      <p>
        There are three possible values for dominant-baseline:{" "}
        <strong>auto</strong> (baseline is at the bottom),{" "}
        <strong>middle</strong> (baseline is in the middle), and{" "}
        <strong>hanging</strong> (baseline is at the top). In this example I've
        created horizontal lines at the same y value as the text to show how
        dominant-baseline affects the text position.
      </p>

      <pre>
        <code>{`dominant-baseline: "auto" (under the text) | "middle" | "hanging"`}</code>
      </pre>

      <Example3 />

      <hr />

      <h2>x, text-anchor</h2>

      <p>
        The <strong>text-anchor</strong> attribute is used to set the{" "}
        <strong>horizontal</strong> alignment of the text element. By default
        the <strong>x</strong> attribute positions the text element horizontally
        using it's left edge. Each of the three text elements below has the same
        x position (250, the middle of the svg), but different text-anchor
        positions.
      </p>

      <pre>
        <code>{`text-anchor: "auto" (start) | "middle" | "end`}</code>
      </pre>

      <Blocks>{`<text
    x="250" y="250"
    fill="black"
    fontSize="30"
    text-anchor="middle">
    text-anchor middle
</text>`}</Blocks>

      <ExampleFour />

      <hr />

      <h2>tspan</h2>

      <p>
        The tspan element allows you apply formatting or change the position of
        individual sections of text within the text element.
      </p>

      <Blocks>{`<text
    x="250" y="250"
    text-anchor="middle"
    font-size="35"
    fill="black">
    styling
    <tspan fill="red" fontSize="45">
        with
    </tspan>
    tspan
</text>`}</Blocks>

      <Example5 />

      <hr />

      <h3>tspan - x, y</h3>

      <p>
        The x, y attributes allow for "absolute" positioning of the tspan.
        However, you'll need to be careful - any text that follows the tspan
        will also have this new positioning, as TSPAN has in the example below,
        even though it sits outside the tspan element!
      </p>

      <Blocks>{`<text
    x="250" y="250"
    text-anchor="middle"
    font-size="35"
    fill="black">
    styling
    <tspan
        x="100" y="50"
        fill="red">
        with
    </tspan>
    TSPAN
</text>`}</Blocks>

      <Example6 />

      <h3>tspan dx, dy</h3>

      <p>
        The dx, dy attributes relatively moves tspan text from where it would
        normally be. In this example below the text has been shifted vertically
        from the rest of the text element.
      </p>

      <Blocks>{`<text
    x="250" y="250"
    text-anchor="middle"
    font-size="35"
    fill="black" >
    styling
        <tspan
            dx="0" dy="100"
            fill="red">
            with
        </tspan>
    TSPAN
</text>`}</Blocks>

      <Example7 />

      <h3>tspan - rotate</h3>

      <p>The rotate attribute allows for the rotation of the tspan text.</p>

      <Blocks>{`<text
    x="250" y="250"
    text-anchor="middle"
    font-size="35"
    fill="black" >
    styling
    <tspan
        fill="red"
        rotate="25">
            with
    </tspan>
    TSPAN
</text>`}</Blocks>

      <Example8 />

      <p>
        You can rotate individual characters by passing in a series of rotation
        values. Make sure to pass in the same number of values as there are
        characters in the tspan.
      </p>

      <Blocks>{`<text
    x="250" y="250"
    text-anchor="middle"
    font-size="35"
    fill="black" >
    styling
    <tspan
        fill="red"
        rotate="-25 0 25 90">
            with
    </tspan>
    TSPAN
</text>`}</Blocks>

      <Example9 />

      <hr />

      <h2>textpath</h2>

      <p>
        The textpath element allows you to connect your text to the shape of a
        path.
      </p>

      <Example10 />

      <p>
        First, you'll need a path you want your text to wrap around, and some
        text.
      </p>

      <Blocks caption="path element">
        {`<path
    d="M37.5 159.5C149.1 158.7 179.333 324.5 180.5 407.5L239 90.5L312 407.5C308.667 319.833 325.7 147.5 420.5 159.5"
    stroke="#000"
    stroke-width="2" />`}
      </Blocks>

      <Blocks caption="text element">
        {`<text
    x="0"
    y="150"
    font-size="16"
    fill="black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit..
</text>`}
      </Blocks>

      <Example12 />

      <p>
        Give the path element an id - we'll use <strong>mypath</strong> for this
        example.
      </p>

      <pre>
        <code>{`<path
    id="mypath"
    d="M37.5 159.5C149.1...`}</code>
      </pre>

      <p>
        Enclose the text you want to wrap in the textPath element, and pass in
        the id of the path in the <strong>href</strong> attribute. It will look
        something like this:
      </p>

      <pre>
        <code>{`<text>
  <textpath href="#mypath">
    Lorem ipsum dolor sit amet consectetur adipisicing elit..
  </textpath>
</text>`}</code>
      </pre>

      <Example11 />

      <p>
        You can hide the path by just setting the <strong>stroke</strong>{" "}
        attribute to "none"
      </p>

      <Blocks caption="hiding the path">
        {`<path
  id="mypath"
  d="M37.5 159.5C149.1 158.7 179.333 324.5 180.5 407.5L239 90.5L312 407.5C308.667 319.833 325.7 147.5 420.5 159.5"
  stroke="none"
/>`}
      </Blocks>

      <Example13 />

      <h3>startOffset</h3>

      <p>
        You can change the start point of the text along the path by using the
        startOffset attribute, and passing in a percentage value. (The
        percentage is that of the total length of the path)
      </p>

      <Blocks caption="startOffset">
        {`<textPath
  startOffset="10%"
  href="#thebigw">sample text...</textPath>`}
      </Blocks>

      <Example14 />

      <h2>CSS styling</h2>

      <p>
        Setting the font-family of svg text is no different than doing so for
        any other text in your html page. For example, if you set the body text
        for your document to serif, it will also be applied to your svg text
      </p>

      <Blocks title="css example">
        {`body {
   font-family: serif;
}`}
      </Blocks>

      <Example15 />

      <Blocks title="css svg text element selector">
        {`text {
   font-family: serif;
}`}
      </Blocks>

      <Blocks title="css svg text element selector">
        {`<svg width="500" height="200" viewbox="0 0 500 200">

   <style>
       .text-style {
           font-family: serif;
           font-size: 100px;
           font-weight: bold;
           fill: #eaeaea;
           stroke: #212121;
           stroke-width: 2;
       }
   </style>

   <text
    class="text-style"
    x="250" y="100"
    text-anchor="middle">css styling</text>
</svg>
`}
      </Blocks>

      <Example16 />

      <hr />

      <h2>foreignObject</h2>

      <p>
        SVG text doesn't wrap. You can solve this by wrapping html text with{" "}
        <strong>foreignObject</strong> element within your svg.
      </p>

      <Blocks>
        {`<svg width="500" height="500" viewbox="0 0 500 500">
 <foreignObject x="125" y="100" width="250" height="160">
   <div xmlns="http://www.w3.org/1999/xhtml">
This is text that wraps. You need to put it in a <strong>foreignObject</strong> tag and include the namespace for it to work!
   </div>
 </foreignObject>
</svg>`}
      </Blocks>

      <FO />
    </>
  );
};

export default Text;
