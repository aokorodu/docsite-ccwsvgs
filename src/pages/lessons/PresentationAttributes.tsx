import Blocks from "@/components/blocks";
import {
  Example1,
  Example2,
  Example3,
  Example4,
  Example5,
  Example6,
  Example7,
  Example8,
  Example9,
  Example10,
  Example11,
  Example12,
  Example13,
} from "@/components/pattributechapter";

const PresentationAttributes = () => {
  return (
    <>
      <h1>Presentation attributes</h1>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/ZEdqyEK"}
        target="_blank"
      >
        {"codepen practice page"}
      </a>

      <h2>the basics</h2>

      <p>
        Presentation attributes are CSS properties used as attributes on svg
        elements to set the color, opacity, stroke color, etc.
      </p>



      <h2>fill</h2>

      <p>
        The fill is simply the internal color of the element. You can use CSS
        color names, hex values, rgb values, and hsl values for the fill color
        (or any color presentation attribute)
      </p>

      <pre>
        <code>{`<circle fill="orange"  />`}</code>
      </pre>

      <Blocks>
        {`<circle
    cx="250" cy="150" r="100"
    fill="orange"  />`}
      </Blocks>

      <Example1 />



      <h2>fill-opacity</h2>

      <p>
        The fill-opacity is the opacity of the fill - a numerical value between
        0 and 1.
      </p>

      <Blocks>
        {`<circle
  cx="250"
  cy="150"
  r="100"
  fill="orange"
  fill-opacity="0.2"
/>`}
      </Blocks>

      <Example2 />



      <h2>stroke</h2>

      <p>The outline color of the shape or line.</p>

      <Blocks>
        {`<circle
    cx="250" cy="150" r="100"
    fill="orange" fill-opacity="0.2"
    stroke="black"
/>`}
      </Blocks>

      <Example3 />



      <h2>stroke-width</h2>

      <p>The thickness of the stroke. It defaults to "1".</p>

      <Blocks>
        {`<circle
    cx="250" cy="150" r="100"
    fill="orange" fill-opacity="0.2"
    stroke="black"
    stroke-width="3"
/>`}
      </Blocks>

      <Example4 />



      <h2>stroke-opacity</h2>

      <p>The opacity of the stroke - numerical value between 0-1.</p>

      <Blocks>
        {`<circle
    cx="250" cy="150" r="100"
    fill="orange" fill-opacity="0.2"
    stroke="black" stroke-width="3"
    stroke-opacity=".2"
/>`}
      </Blocks>

      <Example5 />



      <h2>stroke-dasharray</h2>

      <p>
        Used to create dashed lines. The array defines the dash length and the
        space length. You can define a series of different dash and space
        lengths, but the number of values should be even. If it's not even, the
        browser simply repeats the array so that it ends up with an even number
      </p>

      <Blocks caption="with single value dash and space are the same">
        {`<circle
    cx="250" cy="150" r="100"
    fill="orange" fill-opacity="0.2"
    stroke="black" stroke-width="3"
    stroke-opacity=".2"
    stroke-dasharray="10"
/>`}
      </Blocks>

      <Example6 />

      <Blocks caption="1st number: dash size, 2nd: space size">
        {`<circle
    cx="250" cy="150" r="100"
    fill="orange" fill-opacity="0.2"
    stroke="black" stroke-width="3"
    stroke-dasharray="40 5"
/>`}
      </Blocks>

      <Example7 />

      <Example8 />



      <h2>stroke-dashoffset</h2>

      <p>
        Setting the dashoffset to 25 shifts everything by 25 units, so part of
        the first dash is hidden, and part of the dash on the right that was
        "cut off" is revealed.
      </p>

      <Example9 />



      <h2>pathlength</h2>

      <p>
        The pathlength attribute allows you to specify your own unit length for
        a path. For example, lets draw a circle.
      </p>

      <Example10 />

      <p>
        Now lets use stroke-dasharray so that the dash forms a semicircle. You
        could use math to calculate the circumfereance of the circle, and then
        set your dasharray accordingly. So for a circle with a radius of 100,
        the circumfereance is 628, so to make a semicirlce your dasharray would
        have to be "314 314"
      </p>

      <pre>
        <code>{`stroke-dasharray="314 314"`}</code>
      </pre>

      <p>
        Who wants to do all that? It's much easier to set the circle's{" "}
        <strong>pathlength</strong> to 100, and set the dasharray value to 50
      </p>

      <pre>
        <code>{`stroke-dasharray="50"`}</code>
      </pre>

      <Blocks caption="pathlength = 100">
        {`<circle
    cx="250"
    cy="150"
    r="100"
    fill="none"
    stroke="black"
    stroke-width="3"
    stroke-dasharray="50"
    pathLength="100"
/>`}
      </Blocks>

      <Example11 />



      <h2>stroke-linecap</h2>

      <p>The stroke-linecap attribute defines the shape of the end of a path.</p>

      <Blocks>
        {`<path
    d="M 50,100 h 400"
    stroke="black"
    stroke-width="30"
    stroke-linecap="butt"
/>`}
      </Blocks>

      <Example12 />

      <p>
        All of the lines above are 400 units long. The difference in their
        actual length is due to the type of linecap.
      </p>

      <p>
        <strong>butt</strong> - the stroke does not extend beyond its endpoint.
      </p>

      <p>
        <strong>round</strong> - the stroke is extended by a half circle with a
        diameter equal to the stroke width
      </p>

      <p>
        <strong>square</strong> - the stroke is extended by a rectangle with the
        same height as the stroke width and whose width is half of the stroke
        width
      </p>



      <h2>stroke-linejoin</h2>

      <p>
        Defines how lines should look where they are joined together, forming a
        corner. The default value is "miter"
      </p>

      <Blocks>
        {`<path
    d="M70 138L247 23L420.5 138"
    stroke="black"
    stroke-width="40"
    stroke-linejoin="miter"
/>`}
      </Blocks>

      <Example13 />
    </>
  );
};

export default PresentationAttributes;
