import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Web Development Presentation | Futuristic Showcase',
  description: 'A mind-bending presentation on web development with 3D effects and cinematic animations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
