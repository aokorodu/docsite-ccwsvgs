'use client'

import { useEffect, useRef } from 'react'
import BGAnimation from '../components/bganimation'
import styles from './page.module.css'

export default function Home() {
  const anim = useRef<BGAnimation>(null);

  useEffect(() => {
    if (anim.current) {
      anim.current.start();
    }

    return () => {
      anim.current?.stop()
    }

  }, [])
  return (
    <>
      <div><h1>Creative Coding with SVGs</h1></div>

      <div className={styles.particleHolder}>
        <BGAnimation ref={anim} />
      </div>

      <p>Welcome to the world of SVGs - one of the most powerful and versatile visual format on the web today. SVGs allow you to create all kinds of interesting visualizations - from simple images to interactive infographics, animations, and even games.</p>
      <p>
        In this course, you'll learn:
        the elements and syntax of an SVG
        creating SVGs:
        <ul>
          <li>
            using free drawing tools like Figma
          </li>
          <li>
            "by hand" (in code using SVG markup)
          </li>
          <li>
            dynamically using JavaScript
          </li>
          <li>
            Styling SVGs using presentation attributes and CSS

          </li>
          <li>How to make SVGs interactive</li>
          <li> How to animate SVGs</li>
        </ul>





      </p>
    </>
  )
}
