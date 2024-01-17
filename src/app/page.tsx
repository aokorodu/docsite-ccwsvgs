'use client'

import { useEffect, useRef } from 'react'
import BGAnimation from '../components/bganimation'
import styles from './page.module.css'

export default function Home() {
  const anim = useRef<BGAnimation>(null);

  useEffect(() => {
    if (anim.current) {
      anim.current.start();
      //anim.current.changeFlow("float")
    }
  }, [])
  return (
    <>
      <div><h1>Creative Coding with SVGs</h1></div>

      <div className={styles.particleHolder}>
        <BGAnimation ref={anim} />
      </div>

      <div className={styles.subheading}>Welcome to the world of SVGs - one of the most powerful and versatile visual formats on the web today. SVGs allow you to create all kinds of interesting visualizations - from simple images to interactive infographics, animations, and even games.</div>
      <div className={styles.main}>
        <strong>In this course, you'll learn:</strong>

        <ul className={styles.list}>
          <li>the elements and syntax of an SVG</li>
          <li>
            how to create svgs using free drawing tools like Figma
          </li>
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
        <strong>Prerequisites - a beginners level understanding of:</strong>

        <ul className={styles.list}>
          <li><strong>HTML</strong> A basic understanding of html, and the fundamental elements of an html page.</li>
          <li><strong>CSS</strong> How to create and apply CSS styles</li>
          <li><strong>Javascript</strong> A fundamental understanding of variables, functions, and event listeners.</li>
        </ul>






        <br />
        <strong>Tools:</strong>

        <ul className={styles.list}>
          <li>A <strong>code editor</strong> like VS Code, Atom, Sublime Text, or even a simple text editor.</li>
          <li>A drawing program capable of exporting files in the SVG format, like <strong>Figma</strong> </li>
        </ul>
      </div>
    </>
  )
}
