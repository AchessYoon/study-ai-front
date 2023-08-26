import './globals.css'
import styles from './layout.module.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Study AI App',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
          <h1>Study with AI</h1>
          <nav>
            <span>Menu1</span>
          </nav>
        </header>
        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  )
}
