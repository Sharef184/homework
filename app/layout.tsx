import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Components
import Navbar from './components/navbar/page'
import Footer from './components/footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Homework',
  description: 'My MSD homework',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className='h-screen'>{children}</main>
        <Footer /> 
      </body>
    </html>
  )
}


// Hay mtel sf7et el _app.js mn el video
