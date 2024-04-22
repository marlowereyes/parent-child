// app/layout.jsx
import { lexend } from '../fonts'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lexend.className}>
      <body>{children}</body>
    </html>
  )
}