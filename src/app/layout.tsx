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
      <head>
        {process.env.NODE_ENV == "production" && <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2619129408801252" crossOrigin="anonymous"></script>}
      </head>
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
