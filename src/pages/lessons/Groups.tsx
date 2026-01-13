import Blocks from "@/components/blocks";
import { Example1, Example2 } from "@/components/groupschapter";

const Groups = () => {
  return (
    <>
      <h1>Groups</h1>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/eYwPRdG"}
        target="_blank"
      >
        {"codepen practice page"}
      </a>

      <h2>the group element</h2>

      <p>
        The group element acts as a container for other elements (or groups),
        similar to a div in html.
      </p>

      <h3>groups and presentation attributes</h3>

      <p>
        Presentation attributes (fills, strokes, etc.) applied to the group are
        inherited by the children, as long as that child doesn't have the same
        presentation attribute defined.
      </p>

      <p>
        For example, here I can define the fill, stroke, and stroke-width for
        the two circles at the group level.
      </p>

      <Blocks>{`<g fill="orange" stroke="red" stroke-width="7">
    <rect x="25" y="25" width="200" height="200" />
    <rect x="275" y="25" width="200" height="200" />
</g>`}</Blocks>

      <Example1 />

      <p>
        Child presentation attributes override group presentation attributes. So
        if one of the child circles has, for example, a fill attribute, the
        group level fill won't be applied to that circle
      </p>

      <Blocks>{`<g fill="orange" stroke="red" stroke-width="7">
    <rect x="25" y="25" width="200" height="200" />
    <rect fill="purple" x="275" y="25" width="200" height="200" />
</g>`}</Blocks>

      <Example2 />

      <p>
        Note how the group level stroke and stroke-width are still applied to
        the child element.
      </p>

      <p>
        <strong>Transforms</strong> are a bit different, in that transforms set
        on a group are applied to all the child elements. The transforms are{" "}
        <strong>cumulative</strong>, and aren't overridden like presentation
        attributes.
      </p>

      <Blocks caption="translates are cumulative">{`<g transform="translate(100, 0)" fill="orange" >
   <circle
    transform="translate(100, 0)"
    cx="145" cy="250" r="50" />
</g>`}</Blocks>

      <img src="/groups_translate.png" alt="viewbox" />

      <h3>groups and readability</h3>

      <p>
        Groups also make svg code more readable by allowing for the collection
        of logically related elements.
      </p>

      <Blocks caption="grouping of related elements">{`<g id="tree">
   <g id="leaves" fill="green">
       <circle cx="145" cy="250" r="10"/>
       <circle cx="115" cy="250" r="20"/>
       <!-- more leaves -–>
   </g>
   <g id="branches">
      <!-- more branches -–>
   </g>
</g>`}</Blocks>

      <img src="/groups_tree.png" alt="viewbox" />
    </>
  );
};

export default Groups;
