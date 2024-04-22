// app/layout.js or app/layout.jsx
import { Lexend } from 'next/font/google'

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '600', '700']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lexend.className}>
      <body>{children}</body>
    </html>
  )
}