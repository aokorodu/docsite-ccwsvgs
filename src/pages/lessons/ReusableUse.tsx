import Blocks from "@/components/blocks";

const ReusableUse = () => {
  return (
    <>
      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/ZEdqyNj"}
        target="_blank"
      rel="noopener noreferrer"
      >
        {"codepen practice page"}
      </a>

      <h1>Use</h1>

      <h2>the use element</h2>

      <p>
        You don't always have to create new shapes from scratch. It's possible
        to re-use existing objects
      </p>

      <p>
        The use element allows you to "copy" and reuse other svg elements.
      </p>

      <Blocks>{`<circle id="dot" cx="100" cy="100" r="100" fill="#C4C4C4" />
<use href="#dot" x="250" y="250"></use>`}</Blocks>

      <img src="/reusable_use_intro.png" alt="reusable_use_intro.png" />

      <h3>use attributes</h3>

      <ul>
        <li>
          <strong>href</strong> the <strong>id</strong> of the object being used
          - in this case, the circle element.
        </li>
        <li>
          <strong>x, y</strong> The x and y attributes are required, and are
          used to set the position of the use element.
        </li>
      </ul>

      <p className="section">
        The confusing part: x and y don't designate the actual position of the
        graphic. The x and y attributes set the position of the origin (the 0,0
        point) of the <strong>&lt;use&gt;</strong> object's coordinate system.
        The origin of the <strong>&lt;use&gt;</strong> object is set to the 250,
        250 point of the svg's coordinate system.
      </p>

      <img src="/resuable_use_xy.png" alt="resuable_use_xy.png" />

      <p>
        You can also use presentation attributes to set the{" "}
        <strong>&lt;use&gt;</strong> element's appearance. You can't override
        the original presentation attributes, but you can set them if they
        haven't already been set.
      </p>

      <p>
        In the example below, the stroke and stroke-width attributes have been
        set in the original element, so they can't be changed in the{" "}
        <strong>&lt;use&gt;</strong> object. The fill attribute isn't used in
        the original, so it can be set in the <strong>&lt;use&gt;</strong>{" "}
        element.
      </p>

      <Blocks>{`<circle id="dot" cx="100" cy="100" r="100" stroke="black" stroke-width="4" />
<use href="#dot" x="250" y="250" fill="#0DD9F4"/>`}</Blocks>

      <img
        src="/reusable_use_no_override.png"
        alt="reusable_use_no_override.png"
      />

      <p>
        Attempts to override presentation attributes of the original are simply
        ignored by the browser.
      </p>
    </>
  );
};

export default ReusableUse;
