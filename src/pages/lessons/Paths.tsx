import Blocks from "@/components/blocks";
import QBezierDemo from "@/components/qbezierdemo";
import CBezierDemo from "@/components/cbezierdemo";
import TBezierDemo from "@/components/tbezierdemo";
import SBezierDemo from "@/components/sbezierdemo";
import LightBulb from "@/components/illustrations/LightBulb";
import Dog from "@/components/illustrations/Dog";

const Paths = () => {
  return (
    <>
      <h1>Paths</h1>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/xxoygPy"}
        target="_blank"
      >
        {"codepen practice page"}
      </a>

      <h2>The path element</h2>

      <p>
        The SVG <strong>&lt;path&gt;</strong> element is a versatile and
        powerful tool for creating complex shapes and curves. It utilizes a
        series of commands and coordinates within it's <strong>d</strong>{" "}
        attribute, and can be used to create virtually any shape, making it the
        most powerful and versatile of the shape elements.
      </p>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <LightBulb />
        <Dog />
      </div>
      <div className="attribution">Illustrations by by <strong>Ramy Wafaa</strong>. See more at&nbsp;
        <a className="attributionLink" href="https://www.getillustrations.com" target="_blank">getillustrations.com</a> </div>
      <h2>the d attribute</h2>

      <p>
        The <strong>d</strong> attribute is where all the magic happens. It
        contains numbers, which represent coordinates and distances, and
        letters, which specify the type of command. In this chapter I'll explain
        what these commands mean, and how they can be used.
      </p>

      <Blocks>{`<path d="M 397,319 c 0,177 -80,316 -178,319 C 90,643 -78,515 40,319 131,168 120,0 219,0 c 98,0 178,143 178,319 Z" fill="#EDE9E9"/>`}</Blocks>

      <h3>M or m - moveTo</h3>

      <p>
        The "M" command stands for <strong>moveto</strong>, and is used
        designate the starting point of the path.
      </p>

      <Blocks>{`<path d="M 100,100" />`}</Blocks>

      <p>
        In the example below, the starting point of the path is{" "}
        <strong>100,100</strong>. The <strong>M</strong> is always the first
        command. It can also be used throughout the path, wherever you wish to
        "pick up" your pen and start drawing from a different point.
      </p>

      <img src="/path_commands_M.png" alt="path commands M" />

      <h3>L or l - lineTo</h3>

      <p>
        This command draws a line from the previous point to the designated
        coordinate
      </p>

      <p>
        In the example below, we can draw to the <strong>absolute</strong> point
        of <strong>L 400,100</strong>, or we can use a <strong>relative</strong>{" "}
        path with <strong>l 300, 0</strong> (300 to the right and 0 down). We get
        the same result either way.
      </p>

      <ul>
        <li>
          <strong>L</strong> - draws a line to the <strong>absolute</strong>{" "}
          coordinate that follows the command.
        </li>
        <li>
          <strong>l</strong> - draws a line to the <strong>relative</strong>{" "}
          coordinate that follows the command.
        </li>
      </ul>

      <Blocks caption={"absolute path"}>{`<path
d="M 100,100 L400,100" />`}</Blocks>

      <Blocks caption={"relative path"}>{`<path
d="M 100,100 l300,0" />`}</Blocks>

      <img src="/path_commands_lineTo.png" alt="path commands lineTo" />

      <h3>V or v - vertical line</h3>

      <p>Draws a vertical line to the designated y position.</p>

      <p>
        In the example below we're drawing a vertical line to the{" "}
        <strong>absolute</strong> y position of 400 or the{" "}
        <strong>relative</strong> y position of 300 (300 down from the previous
        point)
      </p>

      <ul>
        <li>
          <strong>V</strong> - draws a line to an <strong>absolute</strong> y
          position.
        </li>
        <li>
          <strong>v</strong> - draws a line to an <strong>relative</strong> y
          position.
        </li>
      </ul>

      <Blocks caption={"absolute path"}>{`<path
d="... L400,100 V400" />`}</Blocks>

      <Blocks caption={"absolute path"}>{`<path
d="... L400,100 v300" />`}</Blocks>

      <img src="/path_commands_V.png" alt="path commands V" />

      <h3>H or h - horizontal line</h3>

      <p>Draws a horizontal line to the designated x position.</p>

      <p>
        In the example below we're drawing a horizontal line to the{" "}
        <strong>absolute</strong> x position of 100 or the{" "}
        <strong>relative</strong> x position of -300 (300 to the left of the
        previous point)
      </p>

      <ul>
        <li>
          <strong>H</strong> - draws a line to an <strong>absolute</strong> x
          position.
        </li>
        <li>
          <strong>h</strong> - draws a line to an <strong>relative</strong> x
          position.
        </li>
      </ul>

      <Blocks caption={"absolute path"}>{`<path
d="...  V400 H100" />`}</Blocks>

      <Blocks caption={"absolute path"}>{`<path
d="... v300 h-300" />`}</Blocks>

      <img src="/path_commands_H.png" alt="path commands H" />

      <h3>Z or z - close path</h3>

      <p>
        The z command draws a line from the "current" point to the start point,
        closing the path.
      </p>

      <ul>
        <li>
          <strong>Z or z</strong> - closes the path
        </li>
      </ul>

      <Blocks>{`<path
d="...  H100 Z" />`}</Blocks>

      <Blocks>{`<path
d="...  h-300 z" />`}</Blocks>

      <img src="/path_commands_Z.png" alt="path commands Z" />

      <h3>Bezier curves</h3>

      <p>
        The bezier curve commands uses a mathmatical function to create smooth,
        continuous curves from a <strong>start point</strong>, an{" "}
        <strong>end point</strong>, and one or two <strong>control points</strong>{" "}
        that define the shape of the curve.
      </p>

      <p>
        The actual bezier curve math is beyond the scope of this course, but you
        can think of the control point as exerting a gravitational force that
        bends the line.
      </p>

      <h3>Q or q - Quadratic Bezier curve</h3>

      <img src="/paths_bezier_intro.png" alt="paths bezier intro" />

      <p>
        Above is an example of a Quadratic Bezier curve, where a{" "}
        <strong>start point</strong>, an <strong>end point</strong>, and a
        single <strong>control point</strong> is used to bend the line.
      </p>

      <p>
        The start point is the coordinate before the Q (50, 250). The value pair
        after the <strong>Q</strong> (250, 120) is the control point. The
        capital <strong>Q</strong> signifies that the point is an absolute
        coordinate. The end point is the point that follows the control point
        (450,250)
      </p>

      <Blocks>{`<path
d="M 0,250 L 50,250 Q 250,120 450,250 L 500,250"
stroke="black"
fill="none"/>`}</Blocks>

      <p>
        Here's the same line using the lower case <strong>q</strong>, which uses
        relative positioning. With relative positioning the control point (200,
        -130) and the end point (400, 0) are described in terms of their
        distance (dx, dy) from the start point of the curve (50, 250). So the
        control point is 200 units to the right and -120 units up from the start
        point, and the end point is 400 units to the right and 0 units up from
        the start point.
      </p>

      <Blocks>{`<path
d="M 0,250 L 50,250 q 200,-130 400,0 L 500,250"
stroke="black"
fill="none"/>`}</Blocks>

      <img src="/paths_bezier_q.png" alt="paths bezier q" />

      <h3>Interactive Demo - Quadratic Bezier</h3>

      <QBezierDemo />

      <h3>C or c - cubic bezier curves</h3>

      <p>
        Cubic bezier curves use two control points to bend a line. The
        coordinate right before the <strong>C</strong> (50, 250) represents the
        start point of the curve. The two points after the <strong>C</strong>{" "}
        (200,125 and 300,425) represent the absolute coordinates of the control
        points, which are followed by the end point (450, 250) of the curve. The
        capital <strong>C</strong> signifies that the control points are
        absolute coordinates.
      </p>

      <Blocks>{`<path
d="M 0,250 L 50,250 C 200,125 300,425 450,250 L 500,250"
stroke="black"
fill="none"/>`}</Blocks>

      <p>
        And here is the same line using the lower case <strong>c</strong>, which
        uses relative positioning from the start point (50, 250) for the two
        control points( dx:150, dy:-125 and dx:250, dy:175) and the end point
        (dx:400, dy:0)
      </p>

      <Blocks>{`<path
d="M 0,250 L 50,250 c 150,-125 250,175 400,0 L 500,250"
stroke="black"
fill="none"/>`}</Blocks>

      <img src="/paths_bezier_C.png" alt="paths bezier C" />

      <h3>Interactive Demo - Cubic Bezier</h3>

      <CBezierDemo />

      <h3>T or t - smooth quadratic curves</h3>

      <p>
        The smooth quadratic command (T or t) draws a quadratic curve from the{" "}
        <strong>current point</strong> (the point prior to the command - in the
        example below, 250,250) to the point after the command, using an{" "}
        <strong>implied</strong> control point that is the REFLECTION of the{" "}
        <strong>previous control</strong> point (125, 100). So an implied
        control point that is the reflection of the prior control point would be
        375, 400.
      </p>

      <ul>
        <li>
          <strong>control point</strong> - the point directly after the{" "}
          <strong>Q</strong> (125,100).
        </li>
        <li>
          <strong>current point</strong> - the point after the control point and
          before the <strong>T</strong> (250,250).
        </li>
        <li>
          <strong>T</strong> - creates an <strong>implied</strong> control point
          that is the <strong>reflection</strong> of the control point.
        </li>
      </ul>

      <Blocks>{`<path
  d="M 0,250 Q 125,100 250,250 T 500,250"
  stroke="black"
  fill="none" />`}</Blocks>

      <p>Here's the same curve with the implied point written out:</p>

      <Blocks>{`<path
  d="M 0,250 Q 125,100 250,250 Q 375,400 500,250"
  stroke="black"
  fill="none" />`}</Blocks>

      <img src="/paths_bezier_T.png" alt="paths bezier T" />

      <h3>Interactive Demo - Smooth Quadratic</h3>

      <TBezierDemo />

      <h3>Smooth Cubic</h3>

      <p>
        The smooth cubic command (S or s) draws a cubic curve from the{" "}
        <strong>current</strong> point to the cubic control point{" "}
        <strong>after</strong> the command, assuming a cubic control point that
        is the reflection of the previous cubic control point.
      </p>

      <p>cubic control point - current point - (implied point) - control point</p>

      <Blocks>{`<path
  d="M 0,250 C 25,100 225,100 250,250 S 475,400 500,250"
  stroke="black"
  fill="none"/>`}</Blocks>

      <img src="/paths_bezier_S.png" alt="paths bezier S" />

      <h3>Interactive Demo - Smooth Cubic</h3>

      <SBezierDemo />
    </>
  );
};

export default Paths;
