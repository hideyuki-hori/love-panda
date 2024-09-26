import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '♡♥🐼♥♡',
  description: 'love panda',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      <body>
        {children}
      </body>
    </html>
  )
}
