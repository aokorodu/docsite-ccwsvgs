import styles from './Intro.module.css'
import Nextbutton from '@/components/nextbutton'

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
        <div>
          Most chapters will contain a link to a <strong>codepen page</strong> so that you can "code along" with the examples and code snippets provided.
        </div>
      </div>
      <Nextbutton />
    </>
  )
}
