import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SiteSheep - Website Redesign in Days, Not Weeks',
  description: 'Get your website redesigned in 3-5 days. Professional design, lightning-fast delivery, and a free homepage mockup in 24 hours. Transform your online presence with SiteSheep.',
  keywords: 'website redesign, fast website design, website development, web design agency, quick turnaround',
  metadataBase: new URL('https://sitesheep.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SiteSheep - Website Redesign in Days, Not Weeks',
    description: 'Get your website redesigned in 3-5 days with a free homepage mockup in 24 hours.',
    url: 'https://sitesheep.io',
    siteName: 'SiteSheep',
    type: 'website',
    images: [
      {
        url: '/logos/sheep-free-svgrepo-com.svg',
        width: 1200,
        height: 630,
        alt: 'SiteSheep Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SiteSheep - Website Redesign in Days, Not Weeks',
    description: 'Get your website redesigned in 3-5 days with a free homepage mockup in 24 hours.',
    images: ['/logos/sheep-free-svgrepo-com.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}