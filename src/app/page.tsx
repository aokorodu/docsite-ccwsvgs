'use client'

import { useEffect, useRef } from 'react'
import BGAnimation from '../components/bganimation'
import styles from './page.module.css'
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function Home() {
  const anim = useRef<BGAnimation>(null);

  useEffect(() => {
    if (anim.current) {
      const anims = ["waterFlow", "orbit", "float", "sin"][Math.round(Math.random() * 3)]
      anim.current.start();
      anim.current.changeFlow(anims)
    }
  }, [])
  return (
    <>


      <div className={styles.particleHolder}>
        <BGAnimation ref={anim} />
      </div>

      <div className={styles.holder}>
        <h1 style={{ color: "white" }}>Creative Coding with SVGs</h1>

        <div style={{ color: "white" }} className={styles.subheading}>Welcome to the world of SVGs - one of the most powerful and versatile visual formats on the web today. SVGs allow you to create all kinds of interesting visualizations - from simple images to interactive infographics, animations, and even games.</div>
        <Link href={"/intro"}>
          <Button variant="contained" color="secondary">
            Begin
          </Button>
        </Link>
      </div>
    </>
  )
}
