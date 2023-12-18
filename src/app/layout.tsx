import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import Navigation from '@/components/navigation';
import styles from './layout.module.scss';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Creative Coding with SVGs DocSite',
  description: 'Creative Coding with SVGs DocSite',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.holder}>
          <Navigation />
          <div>{children}</div>
        </div>
      </body>

    </html>
  )
}
