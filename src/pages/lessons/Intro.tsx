import Blocks from "@/components/blocks";

const Intro = () => {
  return (
    <>
      <h1>Intro</h1>

      <h2>What you'll learn:</h2>

      <p>By the end of this course, you will have a solid understanding of the intricacies and creative power of SVGs, and how to use them effectively in creative web development projects. Some of the things you will learn include:</p>

      <ul>
        <li>the <strong>elements</strong> and <strong>syntax</strong> of an SVG</li>
        <li>how to create svgs using free drawing tools like <strong>Figma</strong></li>
        <li>how to create svg graphics dynamically using <strong>JavaScript</strong></li>
        <li>Styling SVGs using <strong>presentation attributes</strong> and <strong>CSS</strong></li>
        <li>How to make SVGs <strong>interactive</strong></li>
        <li>How to <strong>animate</strong> SVGs</li>
      </ul>

      <br />
      <h2>Prerequisites</h2>

      <p>
        While this is a beginner's couse, you will need to have at least a basic understanding of the following:
      </p>

      <h3>HTML</h3>

      <p>A basic understanding of html, and the fundamental elements of an html page.</p>

      <h3>CSS</h3>

      <p>How to create and apply basic CSS styles</p>

      <h3>Javascript</h3>

      <p>A fundamental understanding of variables, functions, and event listeners.</p>

      <h2>Tools</h2>

      <ol>
        <li>A <strong>Code Editor</strong> like <strong>Visual Studio Code</strong></li>
        <li>A drawing program capable of exporting files in the SVG format, like <strong>Figma</strong>, <strong>Inkscape</strong> or <strong>Adobe Illustrator</strong>.</li>
      </ol>

      <h2>Code</h2>

      <p>Most pages will contain <strong>code snippets</strong> and a link to a <strong>codepen page</strong> that you can use to "code along" with the provided examples.</p>

      <Blocks
        caption={""}
        title={"SVG sample"}
        highlight=""
      >{`<svg width="362" height="362" viewBox="0 0 362 362" fill="none">
  <circle cx="181" cy="181" r="181" fill="#F3C729" />
  <circle cx="118.5" cy="140.5" r="12.5" fill="black" />
  <circle cx="243.5" cy="140.5" r="12.5" fill="black" />
  <path
    d="M80 224C121 271 241 276 291 224"
    stroke="black"
    stroke-width="13"
    stroke-linecap="round"
  />
</svg>`}</Blocks>

      <p>And here's a link to a <a href='https://codepen.io/aokorodu/pen/ExMwgxO' target='_blank' rel="noopener noreferrer">blank codepen page</a>.</p>

      <br />

      <p>Feel free to copy and paste the provided code snippets into the codepen so that you can experiment directly with the code. It's the best way to learn!</p>
    </>
  );
};

export default Intro;
