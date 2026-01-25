import Blocks from "@/components/blocks";
import {
  DropShadowExample,
  DistortionExample,
  BlurExample,
  ColorSaturation,
  HueRotate,
  RedMatrix,
  GreenMatrix,
  RedShift,
  GreenShift,
  TurbulenceExample,
  DropShadowCuttoff,
} from "@/components/reusablefilterchapter";

const ReusableFilter = () => {
  return (
    <>
      <h1>Filter</h1>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/ZEdqyNj"}
        target="_blank"
      >
        {"codepen practice page"}
      </a>

      <h2>overview</h2>

      <p>
        SVG filters are extremely powerful, and allow you to apply photoshop
        level visual effects to SVG graphics.
      </p>

      <img
        src="/reusable_filter_comparison.png"
        alt="reusable_filter_comparison.png"
      />

      <p>
        Because of the power and potential complexity of filters, it's possible
        to devote an entire course to filters alone. In this class I'll provide
        a basic overview of filters, and how they can be applied to SVGs or
        other HTML elements.
      </p>

      <h2>the filter element</h2>

      <p>
        Filters are reusable elements, like gradients and patterns, and are
        generally defined in the &lt;defs&gt; section. Note: filters aren't
        rendered directly, so they don't have to live in &lt;defs&gt;, but it
        makes for cleaner, more readable code if all reusable elements are kept
        in the same place.
      </p>

      <p>
        Filters are defined with the &lt;filter&gt; element. Each filter has an{" "}
        <strong>id</strong>, so that it can be applied to a visual element.
      </p>

      <Blocks>{`<filter id="drop_shadow">...`}</Blocks>

      <Blocks>{`<defs>
  <filter id="drop_shadow">
    <!-- filter code goes here -->
  </filter>
</defs>

<image filter="url(#drop_shadow)" ...></image>`}</Blocks>

      <DropShadowExample />

      <h2>filter primitives</h2>

      <p>
        Each filter element contains one or more <strong>filter primitives</strong>.
        Each filter primitive performs a single graphical operation. In the
        example above we uses the <strong>feDropShadow</strong> filter primitive
        to create the drop shadow.
      </p>

      <p>
        <em>
          We'll explain all the filter primitive attributes later on in the
          lesson.
        </em>
      </p>

      <Blocks>{`<filter id="shadow">
  <feDropShadow...>
    // filter primitive code goes here..."
  </feDropShadow>
</filter>`}</Blocks>

      <p>
        In the next we use two filter primitives, <strong>feTurbulence</strong>{" "}
        and <strong>feDisplacementMap</strong> to create a distortion effect.
      </p>

      <Blocks>{`<filter id="turb-displace-filter">
  <feTurbulence ... />
  <feDisplacementMap ... />
</filter>`}</Blocks>

      <DistortionExample />

      <p>In this course, we'll learn about 5 different filter primitives:</p>

      <ol>
        <li>feDropShadow</li>
        <li>feGaussianBlur</li>
        <li>feColorMatrix</li>
        <li>feTurbulence</li>
        <li>feDisplacementMap</li>
      </ol>

      <h2>feDropShadow</h2>

      <h3>attributes</h3>

      <br />

      <ul>
        <li>
          <strong>dx</strong>: the horizontal offset of the shadow
        </li>
        <li>
          <strong>dy</strong>: the vertical offset of the shadow
        </li>
        <li>
          <strong>stdDeviation</strong>: sets the amount of the "blurriness" of
          the shadow. The higher the number, the softer the edge of the shadow
        </li>
        <li>
          <strong>flood-color</strong>: the color of the shadow
        </li>
        <li>
          <strong>flood-opacity</strong>: the opacity of the shadow at its most
          opaque point.
        </li>
      </ul>

      <Blocks>{`<filter id="shadow">
  <feDropShadow
    dx="15" dy="15"
    stdDeviation="5"
    flood-color="black"
    flood-opacity=".5" />
</filter>`}</Blocks>

      <DropShadowExample />

      <h2>feGaussianBlur</h2>

      <h3>attributes</h3>

      <ul>
        <li>
          <strong>stdDeviation</strong>: sets the amount of the "blurriness" on
          both the x and y axis.
        </li>
      </ul>

      <br />

      <p>
        You can set different values for both the x and y axis by using two
        numbers. In the example below we'll only blur along the x axis.
      </p>

      <Blocks>{`<filter id="blur-filter">
  <feGaussianBlur stdDeviation="10 0" />
</filter>`}</Blocks>

      <br />

      <BlurExample />

      <h2>feColorMatrix</h2>

      <p>
        The feColorMatrix allows you to manipulate the colors of a graphical
        item by using a matrix to transform each pixel's color channel (Red
        Green Blue Alpha, or RGBA for short) to a new color value.
      </p>

      <img
        src="/reusable_feColorMatrix_demo.png"
        alt="reusable_feColorMatrix_demo.png"
      />

      <p>We're going to discuss three color matrix types:</p>

      <ol>
        <li>
          <strong>saturation</strong> (feColorMatrix type="saturate" )
        </li>
        <li>
          <strong>hue-rotation</strong> (feColorMatrix type="rotation")
        </li>
        <li>
          <strong>matrix</strong> (feColorMatrix type="matrix")
        </li>
      </ol>

      <h3>feColorMatrix type="saturate"</h3>

      <p>
        The "saturate" colorMatrix type changes the color saturation of the
        graphic. A saturation value of "1" is the default value, and leaves the
        image unchanged.
      </p>

      <Blocks>{`<filter id="color-matrix">
  <feColorMatrix type="saturate" values="1" />
</filter>`}</Blocks>

      <ColorSaturation value="1" />

      <p>
        A saturation value higher than 1 increases the color saturation of the
        image. Here's what the same image looks like with a color saturation
        value="2"
      </p>

      <Blocks>{`<filter id="color-matrix">
  <feColorMatrix type="saturate" values="2" />
</filter>`}</Blocks>

      <ColorSaturation value="2" />

      <p>
        A saturation value less than 1 decreases the color. To make a grayscale
        image, set the value="0"
      </p>

      <Blocks>{`<filter id="color-matrix">
  <feColorMatrix type="saturate" values="0" />
</filter>`}</Blocks>

      <ColorSaturation value="0" />

      <h3>feColorMatrix type="hueRotate"</h3>

      <p>
        The hueRotate type is used to shift an object's hue. Values are in
        degrees, and can be from 0 to 360.
      </p>

      <Blocks>{`<filter id="color-matrix">
  <feColorMatrix type="hueRotate" values="60" />
</filter>`}</Blocks>

      <HueRotate value="60" />

      <Blocks>{`<filter id="color-matrix">
  <feColorMatrix type="hueRotate" values="300" />
</filter>`}</Blocks>

      <HueRotate value="300" />

      <p>
        The <strong>hueRotate</strong> type utilizes a color wheel to change a
        pixels hue. For example, if the pixel is red, and the hueRotate value is
        120 degrees, the red pixel's color will shift to green.
      </p>

      <img src="/reusable_color_wheel.png" alt="reusable_color_wheel.png" />

      <h2>feColorMatrix type="matrix"</h2>

      <p>
        To get really granular control over color manipulation, we can use a the matrix type. A matrix uses matrix math to change each pixel's color value. Every pixel's color value is made up of four color channels: Red, Green, Blue and Alpha (RGBA for short). Each channel has a value from 0 to 255. The matrix type allows us to manipulate each of these color channels individually.
      </p>

      <p>A matrix looks something like this:</p>

      <Blocks>{`<filter id="identity_matrix">
  <feColorMatrix in="SourceGraphic" type="matrix"
    values="1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 1 0"
  />
</filter>`}</Blocks>

      <p>
        Each row in the matrix corresponds to a new color channel value. The
        first row is the new Red channel value, the second row is the new Green
        channel value, the third row is the new Blue channel value, and the
        fourth row is the new Alpha channel value. Each column corresponds to the
        original color channel values, plus a "shift" value at the end.
      </p>
      <p>To get the new color channel value, you multiply each original color channel value by the corresponding matrix value, then add the shift value.</p>

      <Blocks>{`            R  G  B  A  shift
new R   =   r1 r2 r3 r4 r5
new G   =   g1 g2 g3 g4 g5
new B   =   b1 b2 b3 b4 b5
new A   =   a1 a2 a3 a4 a5`}</Blocks>


      <div
        className="filterDiagram"
      >
        <div >r1 * R</div>
        <div >+</div>
        <div >r2 * G</div>
        <div >+</div>
        <div >r3 * B</div>
        <div >+</div>
        <div >r4 * A</div>
        <div >+</div>
        <div >r5 * shift</div>
        <div >=</div>
        <div style={{ fontWeight: 600 }}>new R</div>

        <div >g1 * R</div>
        <div >+</div>
        <div >g2 * G</div>
        <div >+</div>
        <div >g3 * B</div>
        <div >+</div>
        <div >g4 * A</div>
        <div >+</div>
        <div >g5 * shift</div>
        <div >=</div>
        <div style={{ fontWeight: 600 }}>new G</div>

        <div >b1 * R</div>
        <div >+</div>
        <div >b2 * G</div>
        <div >+</div>
        <div >b3 * B</div>
        <div >+</div>
        <div >b4 * A</div>
        <div >+</div>
        <div >b5 * shift</div>
        <div >=</div>
        <div style={{ fontWeight: 600 }}>new B</div>

        <div >a1 * R</div>
        <div >+</div>
        <div >a2 * G</div>
        <div >+</div>
        <div >a3 * B</div>
        <div >+</div>
        <div >a4 * A</div>
        <div >+</div>
        <div >a5 * shift</div>
        <div >=</div>
        <div style={{ fontWeight: 600 }}>new A</div>
      </div>

      <p>The matrix above is called the "identity matrix", and leaves the image unchanged. Here's how the calculations work for the red channel value:</p>

      <Blocks>{`R G B A shift
1 0 0 0 0   R = 1*R + 0*G + 0*B + 0*A + 0*shift  = R
0 1 0 0 0   G = 0*R + 1*G + 0*B + 0*A + 0*shift  = G
0 0 1 0 0   B = 0*R + 0*G + 1*B + 0*A + 0*shift  = B
0 0 0 1 0   A = 0*R + 0*G + 0*B + 1*A + 0*shift  = 1`}</Blocks>

      <p>Let's look at an example with a "red channel only" matrix filter:</p>

      <Blocks>{`R G B A shift
1 0 0 0 0   R = 1*R + 0*G + 0*B + 0*A + 0*shift  = R
0 0 0 0 0   G = 0*R + 0*G + 0*B + 0*A + 0*shift  = 0
0 0 0 0 0   B = 0*R + 0*G + 0*B + 0*A + 0*shift  = 0
0 0 0 1 0   A = 0*R + 0*G + 0*B + 1*A + 0*shift  = 1`}</Blocks>

      <p>Here we're keeping the red channel value of every pixel, and setting the green and blue channel values to zero. For example, if the filter comes across a pixel with a value of rgb(125, 50, 100), it would change it to rgb(125, 0, 0).</p>

      <RedMatrix />

      <p>Now let's look at a "green channel only" matrix filter:</p>

      <Blocks>{`R G B A shift
0 0 0 0 0   R = 0*R + 0*G + 0*B + 0*A + 0*shift  = 0
0 1 0 0 0   G = 0*R + 1*G + 0*B + 0*A + 0*shift  = G
0 0 0 0 0   B = 0*R + 0*G + 0*B + 0*A + 0*shift  = 0
0 0 0 1 0   A = 0*R + 0*G + 0*B + 1*A + 0*shift  = 1`}</Blocks>

      <p>Here we're keeping the green channel value of every pixel, and setting the red and blue channel values to zero. For example, if the filter comes across a pixel with a value of rgb(125, 50, 100), it would change it to rgb(0, 50, 0).</p>

      <GreenMatrix />


      <p>
        The <strong>shift</strong> value is the amount you want to shift the
        color of every pixel in the image. In the example below, we're shifting the red value of every pixel to the maximum value of 255.
      </p>

      <Blocks>{`R G B A shift
1 0 0 0 1   R = 1*R + 0*G + 0*B + 0*A + 1*shift  = R Maximum (255)
0 1 0 0 0   G = 0*R + 1*G + 0*B + 0*A + 0*shift  = 0
0 0 1 0 0   B = 0*R + 0*G + 1*B + 0*A + 0*shift  = 0
0 0 0 1 0   A = 0*R + 0*G + 0*B + 1*A + 0*shift  = 1`}</Blocks>

      <p>In this if the filter comes across a pixel with a value of rgb(125, 50, 100), it would change it to rgb(255, 50, 100).</p>

      <RedShift />

      <p>And here we're shifting the value of every pixel to the maximum green value.</p>

      <Blocks>{`R G B A shift
1 0 0 0 0   R = 1*R + 0*G + 0*B + 0*A + 0*shift  = 0
0 1 0 0 1   G = 0*R + 1*G + 0*B + 0*A + 1*shift  = G Maximum (255)
0 0 1 0 0   B = 0*R + 0*G + 1*B + 0*A + 0*shift  = 0
0 0 0 1 0   A = 0*R + 0*G + 0*B + 1*A + 0*shift  = 1`}</Blocks>

      <GreenShift />

      <h2>Distortion effect with feTurbulence and feColorMatrix</h2>

      <DistortionExample />

      <p>
        The distortion effect requires chaining together two separate filter
        primitives: <strong>feTurbulence</strong> and{" "}
        <strong>feDisplacementMap</strong>.
      </p>

      <h2>feTurbulence</h2>

      <p>
        feTurbulence is used to create random, fluctuating noise patterns, and
        can be used to generate textures like clouds or blobs.
      </p>

      <Blocks>{`<filter id="turbulence">
  <feTurbulence baseFrequency=".01" numOctaves="1" seed="5"/>
</filter>

<rect filter="url(#turbulence)" ... />`}</Blocks>

      <TurbulenceExample />

      <p>
        The noise is generated under the hood by the{" "}
        <strong>Perlin Turbulence Function</strong> (the inner workings of which
        are well beyond the scope of this course), and can be altered using the
        following attributes:
      </p>

      <ul>
        <li>
          <strong>baseFrequency</strong>
        </li>
        <li>
          <strong>numOctaves</strong>
        </li>
        <li>
          <strong>seed</strong>
        </li>
        <li>
          <strong>result</strong>
        </li>
      </ul>

      <br />

      <img
        src="/reusable_turbulence_examples.png"
        alt="reusable_turbulence_examples.png"
      />

      <h2>feDisplacementMap</h2>

      <p>
        A displacement map uses the pixels of one image as a map to shift the
        pixels of another image.
      </p>

      <img
        src="/reusable_filters_combo_illustration.png"
        alt="reusable_filters_combo_illustration.png"
      />

      <Blocks>{`<defs>
  <filter id="turb-displace-filter">
    <feTurbulence
      type="turbulence"
      baseFrequency="0.05"
      numOctaves="5"
      seed="0"
      result="turbulence" />
    <feDisplacementMap
      in="SourceGraphic"
      in2="turbulence"
      xChannelSelector="R"
      yChannelSelector="G"
      scale="30" />
  </filter>
</defs>

<image filter="url(#turb-displace-filter)" ...>`}</Blocks>

      <DistortionExample />

      <h2>The filter region</h2>

      <p>
        Filters by default are 120% of the width and height of the bounding box
        of the graphic being filtered. If the filter extends beyond this region,
        you'll notice that the effect gets cut off.
      </p>

      <DropShadowCuttoff cuttoff={true} />

      <p>
        You can redefine the filter region using the x, y, width and height
        filter attributes.
      </p>

      <Blocks>{`<defs>
  <filter x="-20%" y="-20%" width="140%" height="140%" id="big_shadow">
    <feDropShadow ... />
  </filter>
</defs>`}</Blocks>

      <DropShadowCuttoff cuttoff={false} />
    </>
  );
};

export default ReusableFilter;
