import Blocks from "@/components/blocks";
import {
  MarkerIntro,
  MarkerPosDemo,
  MarkerCrookedArrow,
  MarkerFixedArrow,
  MarkerAutoStartReverse,
  MarkerAngle,
  MarkerExamples,
} from "@/components/reusemarkerchapter";

const ReusableMarkers = () => {
  return (
    <>
      <h1>Markers</h1>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/ZEdqyNj"}
        target="_blank"
      >
        {"codepen practice page"}
      </a>

      <h2>the marker element</h2>

      <p>
        A marker is a reusable graphic typically used in charts, graphs, or
        arrows to indicate the beginning, middle, and end of a path, line,
        polygon, or polyline. In the image below, the square start point, the
        smaller circular polymarkers, and the arrow head are all markers.
      </p>

      <MarkerIntro />

      <h2>marker creation</h2>

      <p>
        Markers are re-usable elements, so they are usually defined in the defs
        section.
      </p>

      <pre>
        <code>{`<defs>
    <marker>
        // marker code goes here
    </marker>
</defs>`}</code>
      </pre>

      <p>
        The marker itself can be anything - a simple shape element or a complex
        group. The shape that we use must be defined as a child of the marker
        element. In this example we'll just use a circle as the marker
      </p>

      <h3>marker element</h3>

      <pre>
        <code>{`<marker>
    <circle cx="5" cy="5" r="2.5" fill="black" />
</marker>`}</code>
      </pre>

      <h3>marker id</h3>

      <p>
        The marker id is used to identify the marker to be used on the marked
        object. Here we'll just create an id of "ball"
      </p>

      <pre>
        <code>{`<marker id="ball">
    <circle cx="5" cy="5" r="2.5" fill="black" />
</marker>`}</code>
      </pre>

      <h3>refX, refY</h3>

      <p>
        The refX and refY attributes define the reference point of the marker.
        It's the point at which the line intersects with the marker. Since we
        want it to be attached to the center of the ball, we'll make refX = cx
        and refY = cy.
      </p>

      <pre>
        <code>{`<marker id="ball"
    refX="5" refY="5">
    <circle cx="5" cy="5" r="2.5" fill="black" />
</marker>`}</code>
      </pre>

      <h3>markerWidth, markerHeight</h3>

      <p>
        The markerWidth and markerHeight are the width and height of the marker.
        Usually the refX and refY points are at the center of the marker width
        and height values.
      </p>

      <pre>
        <code>{`<marker id="ball"
    refX="5" refY="5"
    markerWidth="10" markerHeight="10">
    <circle cx="5" cy="5" r="2.5" fill="black" />
</marker>`}</code>
      </pre>

      <h2>marker-positioning</h2>

      <p>
        Markers are attached using <strong>marker-start</strong> (the beginning
        of the polyline/polygon/etc), <strong>marker-mid</strong> (the middle
        points, if any), and <strong>marker-end</strong> (the end of the line)
        properties
      </p>

      <h3>marker-start</h3>

      <p>
        Attaches the marker with the designated id (<strong>url(#box)</strong>{" "}
        in this case) to the first point in a polyline.
      </p>

      <h4>
        points="<strong>50,150</strong> 150,150 250,150 350,150 450,150"
      </h4>

      <Blocks>
        {`<polyline
    marker-start="url(#box)"
    points="50,150 150,150 250,150 350,150 450,150"
    stroke="black" stroke-width="2" fill="none" />`}
      </Blocks>

      <MarkerPosDemo position={"start"} />

      <h3>marker-mid</h3>

      <p>
        Attaches a marker to all of the points between the start and end points
        of a polyline.
      </p>

      <Blocks>
        {`<polyline
    marker-mid="url(#ball)"
    points="50,150 150,150 250,150 350,150 450,150"
    stroke="black" stroke-width="2" fill="none" />`}
      </Blocks>

      <h4>
        points="50,150 <strong>150,100 250,200 350,150</strong> 450,150"
      </h4>

      <MarkerPosDemo position={"mid"} />

      <h3>marker-end</h3>

      <p>Attaches the marker to the last point of the polyline.</p>

      <Blocks>
        {`<polyline
    marker-end="url(#arrowhead)"
    points="50,150 150,150 250,150 350,150 450,150"
    stroke="black" stroke-width="2" fill="none" />`}
      </Blocks>

      <h4>
        points="50,150 150,150 250,150 350,150 <strong>450,150</strong>"
      </h4>

      <MarkerPosDemo position={"end"} />

      <Blocks>
        {`<polyline
    marker-start="url(#box)"
    marker-end="url(#arrowhead)"
    marker-mid="url(#ball)"
    points="50,150 150,150 250,150 350,150 450,150"
    stroke="black" stroke-width="2" fill="none"  />`}
      </Blocks>

      <MarkerPosDemo position={"all"} />

      <h2>marker orientation</h2>

      <p>
        Marker orientation is best explained with an example. Let's say we want
        to create an arrow that points to the upper right hand corner of the svg
      </p>

      <MarkerCrookedArrow />

      <p>
        The arrowhead is clearly pointing in the wrong direction. To get it
        pointed so that it is aligned with the arrow body, we have to use the{" "}
        <strong>orient</strong> attribute for the marker element.
      </p>

      <MarkerFixedArrow />

      <h3>orientation values</h3>

      <p>
        <strong>auto</strong> - marker is aligned with the line
      </p>

      <p>
        <strong>auto-start-reverse</strong> - for marker-start, the marker is
        aligned backwards.
      </p>

      <Blocks>
        {`<defs>
    <marker id="arrowhead"
        orient="auto-start-reverse"
        refX="5" refY="5"
        markerWidth="10" markerHeight="10">
        <polygon
            points="0,0 10,5 0,10" fill="black" stroke="black" />
    </marker>
</defs>
<polyline
    marker-start="url(#arrowhead)"
    marker-end="url(#arrowhead-3)"
    stroke="black" strokeWidth="2"
    fill="none"
    points="50, 250 450,50" />`}
      </Blocks>

      <MarkerAutoStartReverse />

      <br />
      <br />

      <p>
        <strong>degrees</strong> - the marker set at an angle of the specified
        number of degrees
      </p>

      <Blocks>
        {`<marker
    id="arrowhead"
    orient="25deg"
    refX="5" refY="5"
    markerWidth="10" markerHeight="10">`}
      </Blocks>

      <MarkerAngle />

      <p>
        You can see more marker examples in{" "}
        <a href="https://codepen.io/aokorodu/pen/wBvWXdR" target="_blank">
          this codepen
        </a>
        .
      </p>

      <MarkerExamples />
    </>
  );
};

export default ReusableMarkers;
