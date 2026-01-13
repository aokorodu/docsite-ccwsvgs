import Blocks from "@/components/blocks";
import { Example1 } from "@/components/colorschapter";

const Colors = () => {
  return (
    <>
      <h1>Colors</h1>

      <a
        className="codepenLink"
        href="https://codepen.io/aokorodu/pen/XWLxgdV"
        target="_blank"
        rel="noopener noreferrer"
      >
        codepen practice page
      </a>

      <h2>css keywords</h2>

      <p>
        You can use all the CSS color keywords to set colors in your SVG. A{" "}
        <a href="https://www.w3.org/wiki/CSS/Properties/color/keywords">complete list</a> of these
        keywords can be found{" "}
        <a href="https://www.w3.org/wiki/CSS/Properties/color/keywords">here.</a>
      </p>

      <Blocks>{`<circle cx="250" cy="250" r="250"
    stroke="black"
    fill="seagreen" />`}</Blocks>

      <Example1 />

      <hr />

      <h2>hexadecimal values</h2>

      <p>
        A hexadecimal number is really three hexadecimal integers, one each for
        the Red, Green, and Blue color channels.
      </p>

      <p>#RRGGBB</p>

      <Blocks caption="here is the hex value for the seagreen color we used above">{`<circle cx="250" cy="250" r="250"
    stroke="black"
    fill="#2e8b57	" /> `}</Blocks>

      <hr />

      <h2>rgb values</h2>

      <p>
        rgb stands for <strong>Red, Green,</strong> and <strong>Blue</strong>.
        The range of values for each color channel: 0-255
      </p>

      <Blocks>{`<circle cx="250" cy="250" r="250"
    stroke="black"
    fill="rgb(46,139,87)" />`}</Blocks>

      <hr />

      <h2>hsl values</h2>

      <p>
        hsl stands for <strong>Hue Saturation</strong>, and{" "}
        <strong>Lightness</strong>
      </p>

      <ul>
        <li>hue: value from 0-360</li>
        <li>saturation: percentage value 0%-100%</li>
        <li>lightness: percentage value 0%-100%</li>
      </ul>

      <Blocks>{`<circle cx="250" cy="250" r="250"
    stroke="black"
    fill="hsl(146, 50%, 36%)" />`}</Blocks>
    </>
  );
};

export default Colors;
