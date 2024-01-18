import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css';
import Navigation from '@/components/navigation';
import styles from './layout.module.scss';
import AppHeader from '@/components/appheader';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Creative Coding with SVGs DocSite',
  description: 'Creative Coding with SVGs DocSite',
}

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (


    <div className={styles.holder}>
      <Navigation />
      <div className={styles.contentHolder}>{children}</div>
    </div>



  )
}