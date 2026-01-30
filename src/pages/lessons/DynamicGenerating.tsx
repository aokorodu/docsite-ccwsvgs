import Blocks from "@/components/blocks";
import {
  AppendLeafExample,
  GenerateLeafs,
  DynamicLeavesExample,
} from "@/components/dynamichapter";

const DynamicGenerating = () => {
  return (
    <>
      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/WbNxopB"}
        target="_blank"
      rel="noopener noreferrer"
      >
        {"codepen practice page"}
      </a>

      <h1>Generating Elements</h1>

      <h2>createElementNS</h2>

      <p>
        You can <em>create</em> an svg element using the{" "}
        <strong>createElementNS</strong> method.
      </p>

      <Blocks>{`document.createElementNS(<namespace>, <element name>)`}</Blocks>

      <p>
        You may be familiar with the similarly named <strong>createElement</strong>{" "}
        method, used to create HTML elements. Why can't we just use that?
        Because the SVG "namespace" isn't the same as the HTML namespace. If you
        try to create an svg "circle" element with createElement, the browser
        won't know what to do with it because it thinks it's just an unknown
        html element. By passing the SVG namespace, you're telling the browser
        that you want to create an SVG element, and NOT an HTML element.
      </p>

      <Blocks>{`namespace = "http://www.w3.org/2000/svg"`}</Blocks>

      <p>
        So let's create a circle element and add it to our{" "}
        <a href={"https://codepen.io/aokorodu/pen/JojPMMz"} target="_blank" rel="noopener noreferrer">
          {"practice page"}
        </a>
      </p>

      <p>First we'll create the circle element</p>

      <Blocks>{`const namespace = "http://www.w3.org/2000/svg";
let my_circle = document.createElementNS(namespace, "circle");`}</Blocks>

      <p>
        Next, we'll add the presentation attributes to style the circle using{" "}
        <strong>setAttribute</strong>.
      </p>

      <Blocks>{`const namespace = "http://www.w3.org/2000/svg"
let my_circle = document.createElementNS(namespace, "circle");
my_circle.setAttribute('cx', 150);
my_circle.setAttribute('cy', 150);
my_circle.setAttribute('r', 100);
my_circle.setAttribute('fill', purple);
my_circle.setAttribute('stroke', none);`}</Blocks>

      <h4>still nothing!</h4>

      <svg id="my-svg" width="300" height="300" viewBox="0 0 300 300"></svg>

      <p>
        The SVG is still blank! We still need to <em>append</em> the circle to
        the svg using <strong>appendChild</strong>:
      </p>

      <Blocks>{`element.appendChild(<another_element>)`}</Blocks>

      <Blocks>{`const namespace = "http://www.w3.org/2000/svg"
let my_circle = document.createElementNS(namespace, "circle");
my_circle.setAttribute('cx', 150);
my_circle.setAttribute('cy', 150);
my_circle.setAttribute('r', 100);
my_circle.setAttribute('fill', purple);
my_circle.setAttribute('stroke', none);
my_svg.appendChild(my_circle)`}</Blocks>

      <svg width="300" height="300" viewBox="0 0 300 300">
        <circle id="my_circle" cx="150" cy="150" r="100" fill="purple" />
      </svg>

      <h2>generating elements</h2>

      <p>
        Creating simple shapes and paths is easy enough, but what if you want to
        create something a bit more complex? One way to do so is to replicate
        objects defined in the defs section.
      </p>

      <p>
        For example suppose you created a leaf graphic in Figma, and you wanted
        to create multiple copies of it.
      </p>

      <svg width="300" height="300" viewBox="0 0 300 300">
        <g transform="translate(120 115)">
          <path
            d="M28.817 0C6.04933 16.1538 -22.6636 70 28.817 70C85.8145 70 51.5847 30.5128 28.817 0Z"
            fill="#06B943"
          />
          <path
            d="M27.3982 10.3379L29.8304 65.4764H27.3982V10.3379Z"
            fill="#280505"
          />
          <path
            d="M39.1777 38.1504L28.926 51.876L27.3982 49.598L39.1777 38.1504Z"
            fill="#280505"
          />
          <path
            d="M16.4536 45.1719L29.185 55.4583L27.5264 57.5996L16.4536 45.1719Z"
            fill="#280505"
          />
          <path
            d="M21.3179 33.2305L29.023 41.4565L27.4858 42.8802L21.3179 33.2305Z"
            fill="#280505"
          />
          <path
            d="M34.1602 26.4414L28.4894 36.54L27.3982 35.3383L34.1602 26.4414Z"
            fill="#280505"
          />
          <path
            d="M23.75 22.1055L28.0837 28.1223L27.6937 28.4724L23.75 22.1055Z"
            fill="#280505"
          />
        </g>
      </svg>

      <p>
        I've created a{" "}
        <a href={"https://codepen.io/aokorodu/pen/zxYBoaZ"} target="_blank" rel="noopener noreferrer">
          {"practice page"}
        </a>{" "}
        with a sample leaf graphic defined in the defs section, and added it to
        a "leafholder" group.
      </p>

      <Blocks>{`<svg width="500" height="500" viewBox="0 0 500 500">
  <defs>
    <g id="leaf">
      <path id="surface" fill="#06B943" d="M28.817 0C6.04933 16.1538 -22.6636 70 28.817 70C85.8145 70 51.5847 30.5128 28.817 0Z" />
      ... more leaf code ...
    </g>
  </defs>
  <g id="leafHolder"></g>
</svg>`}</Blocks>

      <p>
        To place the leaf dynamically, we can create the &lt;use&gt; element and
        pass in the leaf id as the href value. We'll need variables for the svg
        namespace, the leaf definition (in defs) and the leafHolder:
      </p>

      <Blocks>{`const namespace = "http://www.w3.org/2000/svg";
const leafDef = document.querySelector("#leaf");
const leafHolder = document.querySelector("#leafHolder");`}</Blocks>

      <p>
        Next, we'll create a &lt;use&gt; element and pass in the id of the leaf
        graphic in &lt;defs&gt;
      </p>

      <Blocks>{`let my_leaf = document.createElementNS(namespace, "use");
my_leaf.setAttribute('href', '#leaf');`}</Blocks>

      <p>Finally, we'll append the &lt;use&gt; element to the svg:</p>

      <Blocks>{`element.appendChild(<element>);`}</Blocks>

      <Blocks>{`const namespace = "http://www.w3.org/2000/svg";
const leafDef = document.querySelector("#leaf");
const leafHolder = document.querySelector("#leafHolder");
let my_leaf = document.createElementNS(namespace, "use");
my_leaf.setAttribute('href', '#leaf');
leafHolder.appendChild(my_leaf);`}</Blocks>

      <AppendLeafExample />

      <p>We can change the leaf's position by adding x and y values.</p>

      <Blocks>{`const namespace = "http://www.w3.org/2000/svg";
const leafDef = document.querySelector("#leaf");
const leafHolder = document.querySelector("#leafHolder");
let my_leaf = document.createElementNS(namespace, "use");
my_leaf.setAttribute('href', '#leaf');
my_leaf.setAttribute("x", 220);
my_leaf.setAttribute("y", 220);
leafHolder.appendChild(my_leaf);`}</Blocks>

      <AppendLeafExample x={120} y={115} />

      <p>
        Instead of just placing one leaf, let's use a loop to create a bunch of
        leaves and position them randomly. We'll create random <strong>x</strong>{" "}
        and <strong>y</strong> positions using <strong>Math.random()</strong>{" "}
        (We'll multiply Math.random() x 500 to make sure we have x and y points
        that fit inside the 500x500 svg).
      </p>

      <Blocks>{`const namespace = "http://www.w3.org/2000/svg";
const leafDef = document.querySelector("#leaf");
const leafHolder = document.querySelector("#leafHolder");
function buildLeaves() {
  const num = 80;
  for (let i = 0; i!=num; i++) {
    const my_leaf = document.createElementNS(namespace, "use");
    my_leaf.setAttribute("href", "#leaf");
    const xpos = String(Math.random() * 500); // value between 0-500
    const ypos = String(Math.random() * 500); // value between 0-500
    my_leaf.setAttribute("x", xpos);
    my_leaf.setAttribute("y", ypos);
    leafHolder.appendChild(my_leaf);
  }
};`}</Blocks>

      <GenerateLeafs rotate={false} />

      <p>Now we'll rotate the leaves to make for a more realistic scatter</p>

      <GenerateLeafs rotate={true} />

      <p>
        What if we wanted to change the color of each leaf? Let's do that by
        setting each leaf element's fill.
      </p>

      <p>
        When we try changing the color of each leaf from green to orange by
        setting the fill, nothing happens. Why?
      </p>

      <p>
        The "surface" path (which defines the leaf surface) already has a fill
        attribute defined. Remember from our lesson on groups - presentation
        attributes defined on child elements override those set on the group.
      </p>

      <p>
        If we want to set the fill dynamically on the group level, we need to
        delete the fill defined on the surface path
      </p>

      <GenerateLeafs rotate={true} color={"orange"} />

      <p>
        Just for fun, let's set the leaves to random colors. I've created a{" "}
        <strong>getColor()</strong> function that returns an hsl color string we
        can use with the <strong>setAttribute</strong> method to set the fill
        color.
      </p>

      <GenerateLeafs rotate={true} color={"random"} />

      <h2>removing elements</h2>

      <p>
        Removing elements is even easier. Just use the DOM's{" "}
        <strong>element.remove()</strong> method. Let's add a click event
        handler to each leaf to do just that.
      </p>

      <Blocks>{`for (let i = 0; i != num; i++) {
    // ...
    my_leaf.addEventListener("click", () => {
        my_leaf.remove();
    });
    // ...
}`}</Blocks>

      <h4>click on the leaves to remove them!</h4>

      <GenerateLeafs rotate={true} color={"random"} canremove={true} />

      <p>You can check out the final version in this codepen example:</p>

      <DynamicLeavesExample />
    </>
  );
};

export default DynamicGenerating;
