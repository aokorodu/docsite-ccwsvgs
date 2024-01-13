'use client'

import { useEffect, useRef } from 'react'
import BGAnimation from '../components/bganimation'

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
      <BGAnimation ref={anim} />
    </>
  )
}
