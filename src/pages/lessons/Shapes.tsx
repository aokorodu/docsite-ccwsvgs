import Blocks from "@/components/blocks";
import { Link } from "react-router-dom";

const Shapes = () => {
  return (
    <>
      <h1>Shape Elements</h1>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/bGZWyaN"}
        target="_blank"
      >
        {"codepen practice page"}
      </a>

      <h2>intro: shape elements</h2>

      <p>
        The shape elements provide the foundational visual building blocks of an
        SVG. You can think of the shape elements as the raw material that we're
        going to use to create our images, graphics, animations, and interactive
        objects
      </p>

      <img src="/shapes.svg" alt="shapes" />

      <p>
        In this section we'll discuss the basic shape elements and their
        attributes.
      </p>

      <h2>svg element</h2>

      <p>
        Before we learn about the shape elements, let's create a basic SVG in
        our{" "}
        <a href={"https://codepen.io/aokorodu/pen/bGZWyaN"} target="_blank">
          {"starter codepen practice page"}
        </a>
        . We'll start with the <strong>&lt;svg&gt;</strong> element, which is
        the parent container for all our shape elements.
      </p>

      <Blocks>{`<svg>
</svg>`}</Blocks>

      <p>
        Now we'll define the <strong>viewport</strong>, which is just the{" "}
        <strong>width</strong> and <strong>height</strong> of the svg on the
        page that contains it.
      </p>

      <pre>
        <code>{`width="<width>" height="<height>"`}</code>
      </pre>

      <Blocks>{`<svg width="500" height="500">
</svg>`}</Blocks>

      <p>
        There are other attributes that we can add to our svg element, like{" "}
        <strong>viewbox</strong> and <strong>namespace</strong>, but this is all
        we need for now. We'll learn about some advanced svg attributes in our{" "}
        <a href={"/syntax"} target="_blank">
          {"syntax"}
        </a>{" "}
        chapter.
      </p>

      <h3>shape attributes</h3>

      <p>
        All shapes have a number of attributes that are used to define how they
        look. These attributes fall into one of two catagories:
      </p>

      <p>
        <strong>Geometric Attributes</strong>: These define the{" "}
        <strong>position, size, and shape</strong> of the element. So an
        attribute that sets the x and y coordinates, or the width and height
        would be considered a geometric attribute. Each shape has it's own
        specific set of geometric attributes.
      </p>

      <p>
        <strong>Presentation Attributes</strong>: These define the visual style
        of the SVG elements, such as color, stroke, fill, opacity, etc. These
        attributes are universal and can be used with any shape element.
      </p>

      <br />

      <p>
        In this section we'll focus on the <strong>geometric attributes</strong>{" "}
        for each shape. A more detailed discussion of the presentation
        attributes can be found{" "}
        <Link to={"/presentation-attributes"}>
          {"in the presentation attributes chapter"}{" "}
        </Link>
        .
      </p>

      <br />

      <hr />

      <h3>circle</h3>

      <ul>
        <li>
          <strong>cx, cy</strong>: the x and y coordinates of the center of the
          circle
        </li>
        <li>
          <strong>r</strong>: radius
        </li>
      </ul>

      <Blocks>{`<svg width="500" height="500" viewbox="0 0 500 500">
  <circle cx="250" cy="250" r="200" fill="orange" />
</svg>`}</Blocks>

      <img src="/shapes_circle.png" alt="shapes circle" />

      <hr />

      <h3>ellipse</h3>

      <ul>
        <li>
          <strong>cx, cy</strong>: the x and y coordinates of the center of the
          ellipse
        </li>
        <li>
          <strong>rx</strong>: the radius of the ellipse along the x axis
        </li>
        <li>
          <strong>ry</strong>: the radius of the ellipse along the y axis
        </li>
      </ul>

      <Blocks>{`<svg width="500" height="500" viewbox="0 0 500 500">
  <ellipse cx="250" cy="250" rx="200" ry="100" fill="orange" />
</svg>`}</Blocks>

      <img src="/shapes_ellipse.png" alt="shapes ellipse" />

      <hr />

      <h3>rectangle</h3>

      <ul>
        <li>
          <strong>x, y</strong>: the x and y coordinates of the upper left
          corner of the rectangle
        </li>
        <li>
          <strong>width</strong>: width
        </li>
        <li>
          <strong>height</strong>: height
        </li>
      </ul>

      <Blocks>{`<svg width="500" height="500" viewbox="0 0 500 500">
  <rect x="50" y="50" width="400" height="400" fill="orange"></rect>
</svg>`}</Blocks>

      <img src="/shapes_rect.png" alt="shapes rect" />

      <hr />

      <h3>rectangle (rounded)</h3>

      <ul>
        <li>
          <strong>x, y</strong>: the x and y coordinates of the upper left hand
          cornder of the rectangle
        </li>
        <li>
          <strong>width</strong>: width
        </li>
        <li>
          <strong>height</strong>: height
        </li>
        <li>
          <strong>rx, ry</strong>: the radius of the circle that defines the
          corners
        </li>
      </ul>

      <Blocks>{`<svg width="500" height="500" viewbox="0 0 500 500">
  <rect
    x="50"
    y="50"
    width="400"
    height="400"
    rx="20"
    ry="20"
    fill="orange"
  ></rect>
</svg>`}</Blocks>

      <img src="/shapes_round_rect.png" alt="shapes round rect" />

      <hr />

      <h3>line</h3>

      <ul>
        <li>
          <strong>x1, y1</strong>: the x and y coordinates of the starting point
        </li>
        <li>
          <strong>x2, y2</strong>: the x and y coordinates of the end point
        </li>
      </ul>

      <Blocks>{`<svg width="500" height="500" viewbox="0 0 500 500">
  <line x1="100" y1="100" x2="400" y2="400" stroke="black" />
</svg>`}</Blocks>

      <img src="/shapes_line.png" alt="shapes line" />

      <hr />

      <h3>polyline</h3>

      <ul>
        <li>
          <strong>points</strong>: the x and y coordinates for all the points
          that define the line
        </li>
      </ul>

      <Blocks caption="fill: none">{`<svg width="500" height="500" viewbox="0 0 500 500">
  <polyline
    points="60,60 90,390 140,70 190,414 240,70 290,350 340,60 390,265 440,80"
    stroke="black"
    fill="none"
  />
</svg>`}</Blocks>

      <img src="/shapes_polyline.png" alt="shapes polyline" />

      <Blocks caption="fill: orange">{`<svg width="500" height="500" viewbox="0 0 500 500">
  <polyline
    points="60,60 90,390 140,70 190,414 240,70 290,350 340,60 390,265 440,80"
    stroke="black"
    fill="orange"
  />
</svg>`}</Blocks>

      <img src="/shapes_polyline_filled.png" alt="shapes polyline filled" />

      <hr />

      <h3>polygon</h3>

      <ul>
        <li>
          <strong>points</strong>: the x and y coordinates for all the points
          that define the line
        </li>
        <li>
          <strong>stroke</strong>: the stroke color of the line
        </li>
      </ul>

      <Blocks>{`<svg width="500" height="500" viewbox="0 0 500 500">
  <polygon
    points="60,60 240,215 440,60 440,340 340,440 140,430 60,340"
    fill="none"
    stroke="black"
  />
</svg>`}</Blocks>

      <img src="/shapes_polygon.png" alt="shapes polygon" />

      <hr />

      <h3>image</h3>

      <p>
        The image element allows you to add bitmap images - pngs or jpegs - to
        your svg.
      </p>

      <ul>
        <li>
          <strong>href</strong>: the image path
        </li>
        <li>
          <strong>x</strong> horizontal position
        </li>
        <li>
          <strong>y</strong> vertical position
        </li>
        <li>
          <strong>width</strong>: width
        </li>
        <li>
          <strong>height</strong>: height
        </li>
      </ul>

      <Blocks>{`<svg width="500" height="500" viewbox="0 0 500 500">
  <image
      href="https://plus.unsplash.com/premium_vector-1724876723896..."
      x="50" y="50" height="400" width="400" />
</svg>`}</Blocks>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <image
          href="https://plus.unsplash.com/premium_vector-1724876723896-43f7b29c8e70?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          x="50"
          y="50"
          height="400"
          width="400"
        />
      </svg>

      <h3>*note</h3>

      <h4>
        The image element also has a <strong>preserveAspectRatio</strong>{" "}
        attribute that may affect it's appearance. Please refer to the{" "}
        <Link to={"/aspect-ratio"}>{"aspect ratio"}</Link> lesson for more
        information.
      </h4>

      <hr />

      <h3>path</h3>

      <p>
        The path is the most powerful shape element, allowing for the most
        visual complexity. We'll be exploring the path element in detail in the{" "}
        <Link to={"/paths"}>{"next section"}</Link>.
      </p>

      <img src="/shapes_path.png" alt="shapes path" />

      <hr />

      <h3>stacking order</h3>

      <p>Shapes are stacked in order of appearance, with later elements on top.</p>

      <Blocks caption="circle is stacked above rect">{`<svg width="500" height="500" viewbox="0 0 500 500">
  <rect x="200" y="100" width="200" height="200" fill="lightgrey"></rect>
  <circle cx="200" cy="300" r="100" fill="orange" />
</svg>`}</Blocks>

      <img src="/shapes_stacking.png" alt="shapes stacking" />
    </>
  );
};

export default Shapes;
