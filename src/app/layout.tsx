import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import styles from './layout.module.scss';
import AppHeader from '@/components/appheader';
import { Analytics } from '@vercel/analytics/react';

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
          <AppHeader />
          <div className={styles.contentHolder}>
            {children}
            <Analytics />
          </div>
        </div>
      </body>

    </html>
  )
}
