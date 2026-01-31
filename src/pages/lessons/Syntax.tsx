import Blocks from "@/components/blocks";
import { Link } from "react-router-dom";
import SyntaxImage from "@/components/illustrations/SyntaxImage";

const Syntax = () => {
  return (
    <>
      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/GRemePr"}
        target="_blank"
        rel="noopener noreferrer"
      >
        {"SVG Syntax codepen practice page"}
      </a>

      <h1>SVG Syntax</h1>

      <SyntaxImage />

      <h2>Basic Syntax</h2>

      <h3>svg element</h3>

      <p>
        We've already discussed the basic svg element and the viewport in our{" "}
        <Link to={"/shapes"}>{"lesson on shapes"}</Link>. As a review, the
        viewport is simply the <strong>width</strong> and{" "}
        <strong>height</strong> of the svg on the page that contains it. If the
        viewport is not defined, the svg will scale to fit whatever contains it.
      </p>

      <Blocks>{`width="<width>" height="<height>"`}</Blocks>

      <Blocks>{`<svg width="500" height="500">
</svg>`}</Blocks>

      <h3>viewbox</h3>

      <p>
        Next we'll define the viewbox, which is the user-defined coordinate
        system of the viewport. SVGs use a coordinate system for the placement
        of visual elements. The viewbox defines that coordinate system
      </p>

      <p>
        The value for viewbox consists of four numbers:{" "}
        <strong>min-x, min-y, width</strong>, and <strong>height</strong>
      </p>

      <Blocks>{`viewbox="<min-x> <min-y> <width> <height>"`}</Blocks>

      <Blocks>{`<svg width="500" height="500" viewbox="0 0 500 500">
</svg>`}</Blocks>

      <img src="/syntax_viewbox.png" alt="viewbox" />

      <p>
        <strong>min-x, min-y</strong>
      </p>

      <p>
        We'll talk more about the min-x and min-y values below, but for now just
        know that they represent the origin point of the svg's coordinate
        system, and are generally set to zero.
      </p>

      <p>
        <strong>width and height</strong>
      </p>

      <p>
        The important thing to remember about the width and height values of the
        viewbox is that they have nothing to do with the <strong>actual</strong>{" "}
        width and height of the svg. The actual width and height is set by the{" "}
        <strong>width</strong> and <strong>height</strong> attributes.
      </p>

      <p>
        They only serve to define the <strong>coordinate space</strong> that
        will be used by the svg elements.
      </p>

      <p>
        Example: here's a 400 x 400 rectangle in an svg with a viewbox size of
        500 x 500. (We'll get into how to draw shape like circles and rectangles
        next chapter)
      </p>

      <Blocks caption={"viewbox 500x500"}>{`<svg width="500" height="500" viewbox="0 0 500 500">
   <rect x="50" y="50" width="400" height="400" />
</svg>`}</Blocks>


      <img src="/syntax_viewbox_500x500.png" alt="viewbox 500x500" />

      <p>
        Here's the same 400x400 rectangle, except this time I've changed the
        viewbox size to 1000 x 1000
      </p>

      <Blocks caption={"viewbox 1000x1000"}>{`<svg width="500" height="500" viewbox="0 0 1000 1000">
   <rect x="50" y="50" width="400" height="400" />
</svg>`}</Blocks>

      <img src="/syntax_viewbox_1000x1000.png" alt="viewbox 1000x1000" />

      <h3>aspect ratio</h3>

      <p>
        But what if the aspect ratio of the viewbox is different than that of
        the viewport? For example, what if the viewport is a 500x500 square but
        the viewbox is a 1000x500 rectangle?
      </p>

      <Blocks>{`<svg width="500" height="500" viewbox="0 0 1000 500">
</svg>`}</Blocks>

      <p>
        That scenario is handled with the <strong>preserveAspectRatio</strong>{" "}
        attribute. It can be kind of confusing, and a more detailed discussion
        of this attribute can be found in the{" "}
        <Link to={"/aspect-ratio"}>{"Aspect Ratio"} </Link> section. For now
        we're going to keep the aspect ratio of the viewport and viewbox the
        same.
      </p>

      <h3>moving min-x and min-y</h3>

      <p>
        As stated above, the min-x and min-y values represent the{" "}
        <strong>origin</strong> point of the svg - the minimum x and y values
        visible in the svg coordinate space.
      </p>

      <p>The min-x and min-y values are generally set to 0, as below:</p>

      <Blocks caption={"min-x = 0 min-y = 0"}>{`<svg width="500" height="500" viewbox="0 0 500 500">
</svg>`}</Blocks>

      <img src="/syntax_viewbox_0_0.png" alt="syntax_viewbox_0_0.png" />

      <p>Let's draw a rectangle and put it at the 0,0 point.</p>

      <Blocks caption={"rectangle at 0 x 0"}>{`<svg width="500" height="500" viewbox="0 0 500 500">
   <rect x="0" y="0" width="250" height="250" />
</svg>`}</Blocks>

      <img src="/syntax_rec_at_0x0.png" alt="syntax_rec_at_0x0.png" />

      <p>
        Now lets update the min-x and min-y to: <strong>-100, -100</strong>.
        Note that we haven't changed the position of the rectangle at all. Only
        the start position of the viewbox coordinate space has changed.
      </p>

      <Blocks caption={"rectangle still at 0 x 0"}>{`<svg width="500" height="500" viewbox="-100 -100 500 500">
   <rect x="0" y="0" width="250" height="250" />
</svg>`}</Blocks>

      <img src="/syntax_rec_moved_min.png" alt="syntax_rec_moved_min.png" />

      <h2>xmlns (namespace)</h2>

      <p>
        The final attribute we'll talk about is the namespace, which is only
        used with svg files, and not inline svgs. It essentially tells the
        browser that everything inside the file is an SVG, so that the browser
        knows what to do with it. Again, it's only needed for svg files, and not
        inline svgs, so we won't be discussing this during the course.
      </p>

      <Blocks>{`xmlns="http://www.w3.org/2000/svg"`}</Blocks>

      <Blocks
        caption={"xml namespace"}
      >{`<svg viewbox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"></svg>`}</Blocks>
    </>
  );
};

export default Syntax;
