import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600' , '700'],
  variable: '--font-poppins'
 })

export const metadata: Metadata = {
  title: 'Paper2Pixel',
  description: 'Welcome to Paper2Pixel, where traditional event hosting meets the dynamic world of digital experiences.',
  icons: {
    icon: 'favicon.ico?v=4'
},
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
