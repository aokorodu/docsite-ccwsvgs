import Blocks from "@/components/blocks";
import {
  ExampleIntro,
  LinearGradient,
  LG_offset_50,
  LG_offset_3Stops,
  RadialGradientIntro,
  RadialGradientOrientation,
  RadialGradientOrientation_2,
  RadialGradientRadius,
  RadialGradientRadius_2,
  StrokeLinearGradient,
  FillLinearGradient,
  LGChartOffset100,
  LGChartOffset50,
  LnearGradientExample,
  RadialGradientExample,
} from "@/components/reusegradientchapter";

const ReusableGradients = () => {
  return (
    <>
      <h1>Gradients</h1>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/ZEdqyNj"}
        target="_blank"
      >
        {"codepen practice page"}
      </a>

      <h2>types of gradients</h2>

      <p>
        A gradient occurs where one color blends into another, and can be
        applied to fills or strokes.
      </p>

      <p>SVGs support two types of gradients :</p>

      <ol>
        <li>
          <strong>linear</strong> (left) and
        </li>
        <li>
          <strong>radial</strong> (right)
        </li>
      </ol>

      <br />

      <ExampleIntro />

      <p>
        Gradients are defined in the <strong>&lt;defs&gt;</strong> section,
        making them reusable.
      </p>

      <h2>Creating linear gradients</h2>

      <p>
        A <strong>linearGradient</strong> is a gradient that occurs along a
        straight line. The image below is an example of a horizontal
        linearGradient.
      </p>

      <LinearGradient />

      <h3>The &lt;linearGradient /&gt; element</h3>

      <p>
        The <code>&lt;linearGradient /&gt;</code> element is used to define a
        linear gradient in an SVG. It is defined within the{" "}
        <code>&lt;defs&gt;</code> section.
      </p>

      <Blocks>{`<defs>
  <linearGradient></linearGradient>
</defs>`}</Blocks>

      <h3>id</h3>

      <p>
        In order to use the gradient as a fill or stroke color, we have to be
        able to reference it by it's <strong>id</strong>
      </p>

      <Blocks>{`<defs>
  <linearGradient id="linear_gradient_horiz"></linearGradient>
</defs>`}</Blocks>

      <p>
        There's nothing to this gradient yet, but to apply it as a fill we'll
        use the <code>fill</code> attribute with the gradient's id:
      </p>

      <Blocks>{`fill="url(#linear_gradient_horiz)"`}</Blocks>

      <Blocks>{`<defs>
  <linearGradient id="linear_gradient_horiz"></linearGradient>
</defs>
...
<rect x="0" y="0" width="500" height="500" fill="url(#linear_gradient_horiz)" />`}</Blocks>

      <h3>stop colors</h3>

      <p>
        Now let's add the colors, which are defined in the{" "}
        <strong>&lt;stop&gt;</strong> elements that are children of the{" "}
        <strong>&lt;linearGradient&gt;</strong> element.
      </p>

      <Blocks>{`<linearGradient id="linear_gradient_horiz">
  <stop offset="0%" stop-color="red" />
  <stop offset="95%" stop-color="blue" />
</linearGradient>`}</Blocks>

      <p>
        You'll notice that the stop element has two attributes -{" "}
        <strong>offset</strong> and <strong>stop-color</strong>.
      </p>

      <p>
        The <strong>offset</strong> is the position of the color in a range of
        0-100%. So 0% would be at the very beginning and 100% would be at the
        end of the gradient.
      </p>

      <p>
        The <strong>stop-color</strong> is the color at the offset position.
      </p>

      <LGChartOffset100 />

      <p>
        There's also a <strong>stop-opacity</strong> attribute not present here.
        It sets the opacity of the stop-color at the offset position. If omitted
        it defaults to 100%.
      </p>

      <p>Here the offset position for blue has been moved to 50%.</p>

      <Blocks>{`<linearGradient id="lin-grad_50">
  <stop offset="0%" stop-color="red" />
  <stop offset="50%" stop-color="blue" />
</linearGradient>`}</Blocks>

      <LGChartOffset50 />

      <h3>multiple stop colors</h3>

      <p>This gradient has three stop colors.</p>

      <Blocks>{`<linearGradient id="three_stops">
  <stop offset="00%" stop-color="red" />
  <stop offset="50%" stop-color="gold" />
  <stop offset="100%" stop-color="green" />
</linearGradient>`}</Blocks>

      <LG_offset_3Stops />

      <h3>changing the gradient direction</h3>

      <p>
        You can change the direction of the gradient by defining a line using
        the x1, y1, x2, y2 attributes. x1, y1 defines the starting point of the
        gradient within the bounding box, while x2, y2 defines the endpoint of
        the gradient within the bounding box.
      </p>

      <Blocks>{`<linearGradient id="linear_gradient" x1="0%" y1="0%" x2="100%" y2="100%">
  <stop offset="0%" stop-color="red" />
  <stop offset="100%" stop-color="blue" />
</linearGradient>`}</Blocks>

      <img src="/gradient_lin_diag.png" alt="gradient_lin_diag.png" />

      <p>
        You can play around with the linear gradients we just discussed at the
        codepen below.
      </p>

      <LnearGradientExample />

      <h2>radialGradient</h2>

      <p>
        A radialGradient is a gradient that progresses outwards in a circular
        pattern from a start point. The basic setup is the same as that of a
        linearGradient: the radialGradient element has an <strong>id</strong> to
        identify and apply the gradient to an element fill, and the element
        contains two or more <strong>stop</strong> elements to define the{" "}
        <strong>stop-colors</strong> and their <strong>offset</strong> positions.
      </p>

      <Blocks>{`<radialGradient id="radial_gradient">
  <stop offset="0%" stop-color="red" />
  <stop offset="100%" stop-color="blue" />
</radialGradient>`}</Blocks>

      <RadialGradientIntro />

      <p>Here the offset position of the first stop-color has been moved to 50%</p>

      <Blocks>{`<radialGradient id="radial_gradient">
  <stop offset="50%" stop-color="red" />
  <stop offset="100%" stop-color="blue" />
</radialGradient>`}</Blocks>

      <img src="/gradeint_rad_50.png" alt="gradeint_rad_50.png" />

      <h3>gradient orientation</h3>

      <p>
        You can change the orientation/direction of the radialGradient as well,
        using the following attributes:
      </p>

      <p>
        <strong>fx, fy</strong>: The focal point, which defines the center of
        the circle where the radialGradient begins
      </p>

      <p>
        <strong>cx, cy</strong>: The center point, which defines the center of
        the circle where the radialGradient ends
      </p>

      <br />

      <p>By default, both points are at the center of the bounding box</p>

      <Blocks>{`<radialGradient cx="50%" cy="50%" fx="50%" fy="50%" id="radial_gradient">
  <stop offset="0%" stop-color="red" />
  <stop offset="100%" stop-color="blue" />
</radialGradient>`}</Blocks>

      <img
        src="/gradient_rad_orientation_1.png"
        alt="gradient_rad_orientation_1.png"
      />

      <p>
        Lets move the focal point all the way to the left (fx="0%"). Notice how
        the gradient originates from the focal point
      </p>

      <Blocks>{`<radialGradient cx="50%" cy="50%" fx="0%" fy="50%" id="radial_gradient">
  <stop offset="0%" stop-color="red" />
  <stop offset="100%" stop-color="blue" />
</radialGradient>`}</Blocks>

      <RadialGradientOrientation />

      <br />
      <br />

      <p>
        One way to visualize the radial gradient is as a series of ever
        increasing circles transitioning from the inner "focal point" circle an
        outer circle with a center of cx, cy.
      </p>

      <img src="/gradient_rad_skel_1.png" alt="gradient_rad_skel_1.png" />

      <p>
        Now let's move the focal point back to the center, and move the center
        point to the right edge (cx="99%).
      </p>

      <Blocks>{`<radialGradient cx="99%" cy="50%" fx="50%" fy="50%" id="radial_gradient">
  <stop offset="0%" stop-color="red" />
  <stop offset="100%" stop-color="blue" />
</radialGradient>`}</Blocks>

      <RadialGradientOrientation_2 />

      <img src="/gradient_rad_skel_2.png" alt="gradient_rad_skel_2.png" />

      <p>
        You can also manipulate the gradient by changing the radius of the outer
        circle (which marks the outer edge of the gradient). By default it is
        50% width or height. So for a square with a width of 100, the r is 50.
        You can set the value of the r to whatever you want - even values
        greater than 100%
      </p>

      <Blocks>{`<radialGradient r="50%" id="radial_gradient">
  <stop offset="0%" stop-color="red" />
  <stop offset="100%" stop-color="blue" />
</radialGradient>`}</Blocks>

      <img
        src="/gradient_rad_radius_size_1.png"
        alt="gradient_rad_radius_size_1.png"
      />

      <p>
        Now let's see what the gradient looks like when we set the radius to 20%:
      </p>

      <Blocks>{`<radialGradient r="20%" id="radial_gradient">
  <stop offset="0%" stop-color="red" />
  <stop offset="100%" stop-color="blue" />
</radialGradient>`}</Blocks>

      <RadialGradientRadius />

      <p>
        You can set the value of the r to whatever you want - even values
        greater than 100%
      </p>

      <Blocks>{`<radialGradient r="120%" id="radial_gradient">
  <stop offset="0%" stop-color="red" />
  <stop offset="100%" stop-color="blue" />
</radialGradient>`}</Blocks>

      <RadialGradientRadius_2 />

      <p>
        You can also change the radius of the focal point circle. The
        radialGradient start point (stop offset="0%") is the edge of the focal
        circle. By default, the radius is 0%
      </p>

      <Blocks>{`<radialGradient r="50%" fr="0%" id="radial_gradient">
  <stop offset="0%" stop-color="red" />
  <stop offset="100%" stop-color="blue" />
</radialGradient>`}</Blocks>

      <img
        src="/gradient_rad_focal_radius_size_1.png"
        alt="gradient_rad_focal_radius_size_1.png"
      />

      <p>
        In this example below we've changed the radius of the focal point circle
        to 25%. So now, instead of the stop offset="0%" starting at the center
        of the circle, it starts at the edge of the focal circle
      </p>

      <Blocks>{`<radialGradient r="50%" fr="25%" id="radial_gradient">
  <stop offset="0%" stop-color="red" />
  <stop offset="100%" stop-color="blue" />
</radialGradient>`}</Blocks>

      <img
        src="/gradient_rad_focal_radius_size_2.png"
        alt="gradient_rad_focal_radius_size_2.png"
      />

      <p>
        You can see examples of all the radial gradients we discussed in the
        codepen below.
      </p>

      <RadialGradientExample />

      <h2>using a gradient as a fill</h2>

      <p>
        Once you've defined the gradeint, you can use it as a fill by simply
        passing in the gradient's id:
      </p>

      <Blocks>{`fill="url(#lin-grad_0)"`}</Blocks>

      <Blocks>{`<svg width="500" height="500" viewBox="0 0 500 500">
  <defs>
    <linearGradient id="lin-grad_0">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
  </defs>
  <circle cx="250" cy="250" r="200" fill="url(#lin-grad_0)" />
</svg>`}</Blocks>

      <FillLinearGradient />

      <h2>using a gradient as a stroke</h2>

      <p>You can also use the gradient as a stroke:</p>

      <Blocks>{`stroke="url(#lin-grad_0)"`}</Blocks>

      <Blocks>{`<svg width="500" height="500" viewBox="0 0 500 500">
  <defs>
    <linearGradient id="lin-grad_0">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
  </defs>
  <circle cx="250" cy="250" r="200" stroke="url(#lin-grad_0)" stroke-width="15" fill="none" />
</svg>`}</Blocks>

      <StrokeLinearGradient />
    </>
  );
};

export default ReusableGradients;
