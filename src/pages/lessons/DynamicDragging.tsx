import Blocks from "@/components/blocks";
import {
  DraggingExample,
  DraggingExample2,
} from "@/components/dynamichapter";

const DynamicDragging = () => {
  return (
    <>
      <h1>Dragging Elements</h1>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/dPbjezY?editors=0010"}
        target="_blank"
      >
        {"Dragging Elements codepen practice page"}
      </a>

      <h2>DOM vs SVG coordinates</h2>

      <p>
        Dragging an SVG element is a relatively easy coding exercise with one
        complicating factor: The coordinate system of the SVG. For "normal" dom
        elements, all you really need to do is get the mouse position and place
        the element you want to drag accordingly.
      </p>

      <p>
        If you want to drag svg elements, you'll need to <em>translate</em> the
        mouse position to the svg coordinate system, and then position the svg
        element.
      </p>

      <p>
        The <em>Dragging Elements</em> codepen javascript section has variables
        for the svg and the "draggableElement", which contains whatever graphic
        we want to drag around. Let's add a <em>dragging</em> variable which
        we'll set to false.
      </p>

      <Blocks>{`const svg = document.querySelector("svg");
const draggableElement = document.querySelector("#draggableElement");
let dragging = false;`}</Blocks>

      <p>
        We'll start off by creating an <em>init</em> function with the mouse
        events we'll need to drag the draggableElement.
      </p>

      <Blocks>{`const svg = document.querySelector("svg");
const draggableElement = document.querySelector("#draggableElement");
let dragging = false;
function init() {
  draggableElement.addEventListener("mousedown", startDrag);
  svg.addEventListener("mousemove", drawDrag);
  svg.addEventListener("mouseup", stopDrag);
  svg.addEventListener("mouseout", stopDrag);
};`}</Blocks>

      <p>
        As you can see, I've added a "mousedown" listener on the draggableElement
        element, and added "startDrag" callback (which we'll create in a second).
      </p>

      <Blocks>{`svg.addEventListener("mousemove", drag)`}</Blocks>

      <p>
        I've also added a <em>"mousemove"</em> listener, but on the svg, and not
        the draggableElement element that we want to drag. Why wouldn't we have
        this listener on the draggableElement element as well? Think about it -
        if you're dragging an element, that element will be moving with the
        mouse - the mouse cursor won't be moving across the element, which is
        what we need in order for mousemove event to fire. The mousemove event
        listener has <em>"drawDrag"</em> as a callback, which we'll define below.
      </p>

      <p>
        The other event listeners in this method are the <em>"mouseup"</em> and{" "}
        <em>"mouseout"</em> events, which we'll also attach to the svg itself.
        Both of these events have a <em>"stopDrag"</em> callback.
      </p>

      <p>Now let's add the startDrag and stopDrag methods:</p>

      <Blocks>{`const svg = document.querySelector("svg");
const draggableElement = document.querySelector("#draggableElement");
let dragging = false;
function init() {
  draggableElement.addEventListener("mousedown", startDrag);
  svg.addEventListener("mousemove", drawDrag);
  svg.addEventListener("mouseup", stopDrag);
  svg.addEventListener("mouseout", stopDrag);
};
function startDrag() {
  dragging = true;
};
function stopDrag() {
  dragging = false;
};`}</Blocks>

      <p>
        The startDrag and stopDrag methods are simple - they just set{" "}
        <em>dragging</em> to <em>true</em> or <em>false</em>. We'll use the
        dragging variable in our drawDrag function (defined below).
      </p>

      <p>
        Now let's create our drawDrag method. Remember, this is the event
        handler method attached to the mousemove event we attached to the svg.
        Note that if dragging is false, nothing happens.
      </p>

      <Blocks>{`function drawDrag(mouseEvent) {
  if (!dragging) return;
  const mouseX = mouseEvent.clientX;
  const mouseY = mouseEvent.clientY;
};`}</Blocks>

      <p>
        Now that we have the page coordinates for the mouse point (mouseX,
        mouseY), we'll need to convert these coordinates to the coordinates on
        the SVG.
      </p>

      <p>
        We do this by using our mouse coordinate to create something called a
        DOMPoint. A DOMPoint is one of the Web APIs provided by modern browsers,
        and it contains a matrixTransform method that will allow us to do what
        we need to do. Here's a method I created that uses the DOMPoint to
        return our corresponding SVG coordinate:
      </p>

      <Blocks>{`function toSVGPoint(x, y, theSVG) {
  let p = new DOMPoint(x, y);
  return p.matrixTransform(theSVG.getScreenCTM().inverse());
};`}</Blocks>

      <p>Let's use this method in our drawDrag method:</p>

      <Blocks>{`function drawDrag(mouseEvent) {
  if (!dragging) return;
  const svgPoint = toSVGPoint(mouseEvent.clientX, mouseEvent.clientY, svg);
  draggableElement.setAttribute("transform", \`translate(\${svgPoint.x} \${svgPoint.y})\`);
};
function toSVGPoint(x, y, theSVG) {
  let p = new DOMPoint(x, y);
  return p.matrixTransform(theSVG.getScreenCTM().inverse());
};`}</Blocks>

      <p>
        As you can see, all we're doing is passing our mouse x and y points to
        the toSVGPoint method to get our SVG coordinates, then setting the
        transform attribute of our draggableElement to those coordinates.
      </p>

      <p>
        Now that we have all our methods, all we need to do is call our init()
        method.
      </p>

      <Blocks>{`const svg = document.querySelector("svg");
const draggableElement = document.querySelector("#draggableElement");
let dragging = false;
function init() {
  draggableElement.addEventListener("mousedown", startDrag);
  svg.addEventListener("mousemove", drawDrag);
  svg.addEventListener("mouseup", stopDrag);
  svg.addEventListener("mouseout", stopDrag);
};
function startDrag() {
  dragging = true;
};
function stopDrag() {
  dragging = false;
};
function drawDrag(mouseEvent) {
  if (!dragging) return;
  const svgPoint = toSVGPoint(mouseEvent.clientX, mouseEvent.clientY, svg);
  draggableElement.setAttribute("transform", \`translate(\${svgPoint.x} \${svgPoint.y})\`);
};
function toSVGPoint(x, y, theSVG) {
  let p = new DOMPoint(x, y);
  return p.matrixTransform(theSVG.getScreenCTM().inverse());
};

init()`}</Blocks>

      <p>And that's it!</p>

      <DraggingExample />

      <p>
        I've created another slightly more complex example where I create and
        position the draggable elements dynamically using the methods we studied
        in earlier lessons.
      </p>

      <DraggingExample2 />

      <p>And that's it!</p>
    </>
  );
};

export default DynamicDragging;
