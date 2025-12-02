import type { Metadata } from 'next'
import { helveticaNeue } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Catalyx',
  description: 'The Supernode Built For Real Builders',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={`${helveticaNeue.className} antialiased`}>{children}</body>
    </html>
  )
}
