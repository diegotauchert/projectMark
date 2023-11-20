import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import '@/assets/globals.css'

const archivo = Archivo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ProjectMark coding Challenge',
  description: 'Diego Tauchert attempt of ProjectMark coding Challenge',
  keywords: 'projectMark, coding challenge, Next Js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={archivo.className}>{children}</body>
    </html>
  )
}
