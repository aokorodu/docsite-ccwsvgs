import Blocks from "@/components/blocks";
import { Example1 } from "@/components/transformschapter";
import { Link } from "react-router-dom";

const Transforms = () => {
  return (
    <>
      <h1>transforms</h1>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/bGPmRvB"}
        target="_blank"
      >
        {"codepen practice page"}
      </a>

      <h2>What is a transform?</h2>

      <p>
        A transform is simply a <strong>geometric change</strong> of an object.
        There are four types of transforms:
      </p>

      <ol>
        <li>translate (movement horizontally or vertically)</li>
        <li>rotate</li>
        <li>scale</li>
        <li>skew</li>
      </ol>

      <br />

      <p>
        Transforms can be applied via the transform presentation attribute or
        CSS.
      </p>



      <h2>How do SVG and HTML transforms differ?</h2>

      <p>
        Transforms applied to svg elements are different from transforms applied
        to html elements. Each svg element - every shape, line, group, etc. -
        has its own coordinate system. When you apply a transform to an SVG
        element, you're actually applying it to that element's coordinate
        system, and relative to the 0,0 point of that system.
      </p>

      <p>
        This is different from transforms applied to HTML elements, where the
        transform is applied relative to the center of the HTML element's
        bounding box. As a result, applying transforms to SVG elements can
        sometimes lead to unexpected results for those used to transforms of
        HTML.
      </p>



      <h2>translate</h2>

      <p>
        A translate transform simply moves a shape (or group) the specified
        distance along the x and/or y axis. The value can be positive or
        negative.
      </p>

      <Blocks>{`<circle ...transform="translate(100 0)" />`}</Blocks>

      <img src="/transform_translate_x.png" alt="transform_translate_x.png" />



      <h2>rotate</h2>

      <p>
        A rotates transform rotates a shape (or group) the specified number of
        degrees.
      </p>

      <p>
        If just one value - i.e. rotate(25), the rotation occurs around the
        (0,0) point of the element's coordinate system.
      </p>

      <Blocks>{`<rect ... transform="rotate(25)" />`}</Blocks>

      <img
        src="/transform_rotation_start.png"
        alt="transform_rotation_start.png"
      />

      <img src="/transform_rotation_end.png" alt="transform_rotation_end.png" />

      <p>
        If three values - i.e. rotate(25 250 250), the first number represents
        the angle (25), and the second and third represent the point around
        which the rotation occurs. (250 250).
      </p>

      <img
        src="/transform_rotation_point.png"
        alt="transform_rotation_point.png"
      />



      <h2>scale</h2>

      <p>The scale transform scales the entire coordinate system of the element.</p>

      <p>
        If one value - i.e. scale(2), the element is scaled equally in the x and
        y dimensions
      </p>

      <img
        src="/transsform_scale_no_scale.png"
        alt="transsform_scale_no_scale.png"
      />

      <img
        src="/transsform_scale_scaled.png"
        alt="transsform_scale_scaled.png"
      />

      <p>
        If two values - i.e. scale(2 1), the element is scaled differently in
        the x and y dimensions.
      </p>

      <img
        src="/transform_scale_scale_2_1.png"
        alt="transform_scale_scale_2_1.png"
      />



      <h2>skewX, skewY</h2>

      <p>The skew transform "tilts" the object along the x or y axis.</p>

      <img src="/transform_skew_intro.png" alt="transform_skew_intro.png" />

      <p>
        Like all other transforms, the skew transform scales the entire
        coordinate system of the element
      </p>

      <Blocks caption="no skew">{`<rect x="100" y="100" width="200" height="200" fill="grey"/>`}</Blocks>

      <img src="/transform_skew_none.png" alt="transform_skew_none.png" />

      <Blocks caption="skewX">{`<rect ... transform="skewX(25)" />`}</Blocks>

      <img
        src="/transform_skew_skewX_25.png"
        alt="transform_skew_skewX_25.png"
      />

      <p>
        Check out this{" "}
        <a href={"https://codepen.io/aokorodu/pen/vYqwgmy"}>
          {"interactive example on codepen,"}
        </a>{" "}
        where you'll be able to play around with some of the transform
        presentation attributes
      </p>



      <h2>CSS transforms</h2>

      <p>
        Like presentation attribute transforms, CSS transforms occur relative to
        the 0,0 point of the svg element coordinate system, which is different
        from how CSS transforms are applied to HTML elements.
      </p>

      <h3>CSS transforms - translate</h3>

      <p>
        Just like the presentation attribute translate transform, the css
        translate transform simply moves a shape (or group) the specified
        distance along the x and/or y axis.
      </p>

      <Blocks caption="css translate">{`<style>
#my-circle {
  transform: translate(100 0);
}
</style>

// more code

<circle id="my-circle" ... transform="translate(100 0)" />`}</Blocks>

      <img src="/transform_translate_x.png" alt="transform_translate_x.png" />

      <h3>CSS transforms - translateX, translateY</h3>

      <p>
        CSS svg translate transforms differ from their svg presentation
        attribute counterpart in that CSS also offers separate translateX and
        translateY transforms.
      </p>

      <Blocks caption="css translateX example">{`<style>
#my-circle {
  transform: translateX(100);
}
</style>

// more code`}</Blocks>

      <Blocks caption="css translateY negative example">{`<style>
#my-circle {
  transform: translateY(-100);
}
</style>

// more code`}</Blocks>

      <img
        src="/transform_translateY_negative.png"
        alt="transform_translateY_negative.png"
      />

      <h3>CSS transforms - rotate</h3>

      <p>
        A rotate transform rotates an element the specified number of degrees.
        Unlike rotation transforms on HTML elements, SVG CSS rotations occur
        relative to the 0,0 point of the elements coordinate system. Note: You
        must include <strong>'deg'</strong> after the unit number.
      </p>

      <Blocks caption="css rotate example">{`<style>
#my-square {
  transform: rotate(25deg);
}
</style>

<rect ... id="my-square" />`}</Blocks>

      <img src="/transform_rotation_end.png" alt="transform_rotation_end.png" />

      <h3>CSS transforms - scale</h3>

      <p>
        As with the transform scale presentation attribute, the CSS scale
        transform scales the entire coordinate system of the element.
      </p>

      <p>
        If one value - i.e. scale(2), the element is scaled equally in the x and
        y dimensions
      </p>

      <Blocks>{`<style>
#my-square {
  transform: scale(2);
}
</style>

<rect ... id="my-square" />`}</Blocks>

      <img
        src="/transsform_scale_scaled.png"
        alt="transsform_scale_scaled.png"
      />

      <p>As with translate, CSS offers separate scaleX and scaleY transforms</p>

      <Blocks>{`<style>
#my-square {
  transform: scaleX(2);
}
</style>

<rect ... id="my-square" />`}</Blocks>

      <img
        src="/transform_scale_scale_2_1.png"
        alt="transform_scale_scale_2_1.png"
      />

      <h3>CSS transforms - skew</h3>

      <Blocks>{`<style>
#my-square {
  transform: skew(25deg, 15deg);
}
</style>

<rect ... id="my-square" />`}</Blocks>

      <img src="/transform_skew_X_Y.png" alt="transform_skew_X_Y.png" />

      <p>
        You can skew both the x and y axis at the same time, or separately using
        skewX or skewY.
      </p>

      <Blocks>{`<style>
#my-square {
  transform: skewX(25deg);
}
</style>

<rect ... id="my-square" />`}</Blocks>

      <img
        src="/transform_skew_skewX_25.png"
        alt="transform_skew_skewX_25.png"
      />

      <h3>CSS transforms - transform-box</h3>

      <p>
        The CSS property transform-box is used to set the coordinate system in
        which transforms occur. Transforms are usually applied to the entire
        coordinate system of the object being transformed, as stated earlier.
      </p>

      <ul>
        <li>
          <strong>view-box</strong> (default value) - the viewport of the SVG is
          used as the bounding box for the transformation
        </li>
        <li>
          <strong>fill-box</strong> - the bounding box of the object is used for
          the transformation
        </li>
      </ul>

      <br />

      <p>
        For example, if we wanted to apply a transform scale to this rect
        element, the rect's entire coordinate system would be transformed. As a
        result, the rect is pushed downward and to the right.
      </p>

      <Blocks>{`<style>
#my-square {
  transform: scale(1.5);
}
</style>

<rect ... id="my-square" />`}</Blocks>

      <img
        src="/transform_transform-box_1.png"
        alt="transform_transform-box_1.png"
      />

      <img
        src="/transform_transform-box_2.png"
        alt="transform_transform-box_2.png"
      />

      <p>
        But what if we just want to scale the box in place? We can use set the
        object's CSS transform-box property to <strong>fill-box</strong>. The
        transform scale will now be applied relative to the object's{" "}
        <strong>bounding box</strong>.
      </p>

      <Blocks>{`<style>
#my-square {
  transform-box: fill-box;
  transform: scale(1.5);
}
</style>

<rect ... id="my-square" />`}</Blocks>

      <h4>before</h4>

      <img
        src="/transform_transform-box_3.png"
        alt="transform_transform-box_3.png"
      />

      <h4>after</h4>

      <img
        src="/transform_transform-box_4.png"
        alt="transform_transform-box_4.png"
      />

      <h3>CSS transforms - transform-origin</h3>

      <p>
        But what if I want the box to scale on all sides, instead of down and to
        the right? I'd have to change the <strong>transform-origin</strong>{" "}
        property to move the objects origin from the default location in the
        upper-left corner to it's center.
      </p>

      <Blocks>{`<style>
#my-square {
  transform-box: fill-box;
  transform-origin: 50% 50%;
  transform: scale(1.5);
}
</style>

<rect ... id="my-square" />`}</Blocks>

      <h4>before</h4>

      <img
        src="/transform_transform-box_3.png"
        alt="transform_transform-box_3.png"
      />

      <h4>after</h4>

      <img
        src="/transform_transform-box_5.png"
        alt="transform_transform-box_5.png"
      />



      <h2>transform order</h2>

      <p>
        The order of transforms matters! In the example below the individual
        transforms (translate, rotate) have the same values, but the results are
        very different!
      </p>

      <ol>
        <li>
          translate(200px, 100px) rotate(15deg) <strong>(blue square)</strong>
        </li>
        <li>
          rotate(15deg) translate(200px, 100px) <strong>(red square)</strong>
        </li>
      </ol>

      <Blocks>{`<style>
.translateFirst {
  fill: blue;
  transform: translate(200px, 100px) rotate(15deg);
}

.rotateFirst {
  fill: red;
  transform: rotate(15deg) translate(200px, 100px);
}
</style>`}</Blocks>

      <Example1 />
    </>
  );
};

export default Transforms;
