import styles from './Intro.module.css'
import Blocks from "@/components/blocks";

export default function Home() {

  return (
    <>
      <div><h1>Creative Coding with SVGs</h1></div>
      <br />
      <div className={styles.main}>
        <h2>What you'll learn:</h2>

        <ul className={styles.list}>
          <li>the elements and syntax of an SVG</li>
          {/* <li>
            how to create svgs using free drawing tools like Figma
          </li> */}
          <li>
            how to create svg graphics dynamically using JavaScript
          </li>
          <li>
            Styling SVGs using presentation attributes and CSS
          </li>
          <li>How to make SVGs interactive</li>
          <li> How to animate SVGs</li>
        </ul>

        <br />
        <h2>Prerequisites</h2>

        <ul className={styles.list}>
          <li><strong>HTML</strong> A basic understanding of html, and the fundamental elements of an html page.</li>
          <li><strong>CSS</strong> How to create and apply basic CSS styles</li>
          <li><strong>Javascript</strong> A fundamental understanding of variables, functions, and event listeners.</li>
        </ul>

        <br />
        <h2>Tools:</h2>

        <ul className={styles.list}>
          <li>A <strong>code editor</strong> like VS Code, Atom, Sublime Text, or even a simple text editor.</li>
          <li>A drawing program capable of exporting files in the SVG format, like <strong>Figma</strong> </li>
        </ul>

        <br />
        <h2>Note:</h2>


        <div> Most pages will contain <strong>code snippets</strong> and a link to a <strong>codepen page</strong> that you can use to "code along" with the provided examples.</div>

        <br />

        <div>Here's an example of a code snippet:</div>

        <Blocks caption={""} title={""} highlight=''>{`<svg width="362" height="362" viewBox="0 0 362 362" fill="none">
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

        <br />

        <div>And here's a link to a <a href='https://codepen.io/aokorodu/pen/ExMwgxO' target='_blank'><strong>blank codepen page</strong></a>.</div>

        <br />

        <div>Feel free to copy and paste the provided code snippets into the codepen so that you can experiment directly with the code. It's the best way to learn!</div>



      </div >
    </>
  )
}
