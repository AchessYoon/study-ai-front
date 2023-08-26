import './globals.css'
import styles from './layout.module.css'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import FileContextProvider from './useFileContext'
import Header from './Header'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

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
        <FileContextProvider>
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
        </FileContextProvider>
      </body>
    </html>
  )
}
