import Blocks from "@/components/blocks";
import {
  GsapDemo,
  SimplePropertyAnimation,
  FlowerPropertyAnimation,
  Expressions,
} from "@/components/gsap";

const GreensockObjectProperties = () => {
  return (
    <>
      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/JojPMMz"}
        target="_blank"
      rel="noopener noreferrer"
      >
        {"codepen practice page"}
      </a>

      <h1>Tweening object properties</h1>

      <h2>Intro</h2>

      <p>
        One of the most interesting aspects of GSAP tweens and timelines is that
        they can be used to tween numeric properties of generic objects. For
        example, imagine you have a simple object with numeric x and y property.
      </p>

      <Blocks>{`let propertyObject = {
  x: 240,
  y:0,
};`}</Blocks>

      <p>
        Since x and y are numeric properties we can use gsap to tween their
        values.
      </p>

      <Blocks>{`function animate() {
  const propertyTween = gsap.timeline();
  propertyTween.to(propertyObject, { x: 260, y: 500, duration: 2.5 });
}`}</Blocks>

      <p>
        That's great, but how can we use this? One way is to use the onUpdate
        method and use the updated property values in some way. For example we
        could use the new x and y values to define the control point of a
        Quadratic Bezier curve. We'll need to use the <strong>onUpdate</strong>{" "}
        property and create a callback method to update the path on every
        animation frame.
      </p>

      <Blocks highlight="2">{`function animate() {
  const propertyTween = gsap.timeline({ onUpdate: update, repeat: -1, yoyo: true });
  propertyTween.to(propertyObject, {
    x: 260,
    y: 500,
    duration: 2.5,
  });
}`}</Blocks>

      <p>
        Next we'd use something like the <strong>update</strong> method below to
        modify the a path.
      </p>

      <Blocks>{`function update() {
  const pathString = \`M-10,250 Q\${propertyObject.x},\${propertyObject.y} 510,250\`;
  thePath.setAttribute("d", pathString);
}`}</Blocks>

      <SimplePropertyAnimation />

      <p>
        You can see the full code for the example above{" "}
        <a href="https://codepen.io/aokorodu/pen/EaxyoOa" target="_blank" rel="noopener noreferrer">
          here.
        </a>
      </p>

      <p>
        Below is a slightly more complex animation where I'm animating an object
        that represents the endpoint of a path. I've attached a{" "}
        <em>marker-end</em> to the path (the flower petals), and the end result
        is a flower that looks like it's swaying in the breeze. The codepen for
        the flower example can be found{" "}
        <a href="https://codepen.io/aokorodu/pen/ogNvZJN" target="_blank" rel="noopener noreferrer">
          here.
        </a>
      </p>

      <FlowerPropertyAnimation />

      <p>
        The final codepen below is a much more complex example, where I'm
        tweening the numeric properties of a number of objects - each
        representing path variables for a different facial feature - in order to
        create a series of facial expressions. Feel free to play around with the
        variable to see what you can come up with!
      </p>

      <Expressions />
    </>
  );
};

export default GreensockObjectProperties;
