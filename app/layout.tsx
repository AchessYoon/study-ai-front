import './globals.css'
import styles from './layout.module.css'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './Header'

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
        <Header />
        <main className={styles.main}>
            <Image
              src="/elicebot.png"
              alt="Background image"
              className={styles.backgroundImage}
              width={707}
              height={547}
            />
          {children}
        </main>
      </body>
    </html>
  )
}
