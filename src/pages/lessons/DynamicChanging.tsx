import Blocks from "@/components/blocks";

const DynamicChanging = () => {
  return (
    <>
      <h1>Changing SVGs Dynamically</h1>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/GRemaGb"}
        target="_blank"
      >
        {"Changing SVGs Dynamically codepen practice page"}
      </a>

      <h2>SVG DOM</h2>

      <p>
        SVGs have their own DOM (Document Object Model), which is simply a
        programming interface that allows the SVG, and elements contained within
        the SVG, to be controlled via code. Creation, removal, animation,
        changing shape and color - all are possible using JavaScript and CSS.
      </p>

      <h2>setAttribute</h2>

      <p>
        ALL attributes of an svg element - positioning, orientation, color, etc.
        - can be changed with javascript.
      </p>

      <p>
        For example, let's say we have a simple SVG that contains a purple
        circle. We can change the color of the circle from purple to green by
        changing the value of the fill attribute.
      </p>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <circle
          cx="250"
          cy="250"
          r="150"
          stroke="black"
          strokeOpacity=".5"
          strokeWidth="10"
          fill="purple"
        />
      </svg>

      <Blocks>
        {`<svg width="500" height="500" viewbox="0 0 500 500">
   <circle
    id="my_circle"
    cx="250" cy="250" r="150"
    stroke="black"
    stroke-opacity=".5"
    stroke-width="10"
    fill="purple" />
</svg>`}
      </Blocks>

      <p>
        In the <strong>JS</strong> section of{" "}
        <a href="https://codepen.io/aokorodu/pen/GRemaGb" target="_blank">
          our starter codepen
        </a>{" "}
        I've added the following reference to our circle element:
      </p>

      <Blocks>{`let my_circle = document.getElementById("my_circle");`}</Blocks>

      <p>
        You can then change an element's attributes using the{" "}
        <strong>setAttribute</strong> method.
      </p>

      <p>
        The setAttribute method has two parameters. The first is the{" "}
        <strong>name</strong> of the attribute you wish to change, and the
        second is the new <strong>value</strong> you wish to assign to the
        attribute.
      </p>

      <pre>
        <code>{`element.setAttribute(name, value)`}</code>
      </pre>

      <p>Now let's change the fill, stroke, stroke-width, and stroke-opacity:</p>

      <Blocks>
        {`let my_circle = document.getElementById("my_circle");
my_circle.setAttribute('fill', 'blue');
my_circle.setAttribute('stroke', 'orange');
my_circle.setAttribute('stroke-width', '20');
my_circle.setAttribute('stroke-opacity', '1');`}
      </Blocks>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <circle
          cx="250"
          cy="250"
          r="150"
          stroke="orange"
          strokeOpacity="1"
          strokeWidth="20"
          fill="blue"
        />
      </svg>

      <h2>setAttribute - text</h2>

      <p>
        The text element is no different from any of the other shape elements.
        Here we change a text element's fill from black to red and the font-size
        to 60.
      </p>

      <pre>
        <code>{`textElement.setAttribute(<attribute name>, <value>)`}</code>
      </pre>

      <Blocks caption="Only the code needed for this example is included here">
        {`<svg width="500" height="200" viewbox="0 0 500 200">
  <text
    id="my-text"
    fill="black"
    font-size="30"
    ...
  >
    hello world
  </text>
</svg>`}
      </Blocks>

      <svg width="500" height="200" viewBox="0 0 500 200">
        <text
          textAnchor="middle"
          dominantBaseline="middle"
          x="250"
          y="100"
          fill="black"
          fontSize="30"
        >
          {"hello world"}
        </text>
      </svg>

      <Blocks>
        {`const myText = document.getElementById("my-text");
myText.setAttribute("fill", "red");
myText.setAttribute("font-size", 60);`}
      </Blocks>

      <svg width="500" height="200" viewBox="0 0 500 200">
        <text
          textAnchor="middle"
          dominantBaseline="middle"
          x="250"
          y="100"
          fill="red"
          fontSize="60"
        >
          {"hello world"}
        </text>
      </svg>

      <p>
        Changing the text contained in a text element is quite simple, and
        virtually identical to how you would do so with ordinary html text.
        Simply create a reference to the text element and use{" "}
        <strong>firstChild.textContent</strong> to set the content. In this
        example, I've replaced the original "hello world" text with a different
        text string.
      </p>

      <pre>
        <code>{`textElement.firstChild.textContent = "new text"`}</code>
      </pre>

      <Blocks>
        {`const myText = document.getElementById("my-text");
myText.firstChild.textContent = "changing text";`}
      </Blocks>

      <svg width="500" height="200" viewBox="0 0 500 200">
        <text
          textAnchor="middle"
          dominantBaseline="middle"
          x="250"
          y="100"
          fill="red"
          fontSize="60"
        >
          {"changing text"}
        </text>
      </svg>

      <h2>getAttribute</h2>

      <p>
        What if you wanted to <em>retrieve</em> the value of an element
        attribute? You would use the <strong>getAttribute</strong> method.
      </p>

      <pre>
        <code>{`element.getAttribute("<name>")`}</code>
      </pre>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <circle
          cx="250"
          cy="250"
          r="150"
          stroke="black"
          strokeWidth="10"
          fill="purple"
        />
      </svg>

      <p>Let's get the value of the fill for the circle above:</p>

      <Blocks>
        {`let my_circle = document.getElementById("my_circle");
let fill_value = my_circle.getAttribute("fill");

// fill_value = "purple"`}
      </Blocks>

      <p>
        The getAttribute method is particularly useful when animating elements,
        as we'll see later in the course
      </p>
    </>
  );
};

export default DynamicChanging;
