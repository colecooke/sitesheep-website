import type { Metadata } from 'next'
import Script from 'next/script'
import { Suspense } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from './shared/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SiteSheep - Website Redesign. Days, Not Weeks.',
  description: 'Get your website redesigned in 3-5 days. Professional design, lightning-fast delivery, and a free homepage mockup in 24 hours. Transform your online presence with SiteSheep.',
  keywords: 'website redesign, fast website design, website development, web design agency, quick turnaround',
  metadataBase: new URL('https://sitesheep.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SiteSheep - Website Redesign. Days, Not Weeks.',
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
    title: 'SiteSheep - Website Redesign. Days, Not Weeks.',
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
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || 'G-PH15NZRM8E'
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {GA_ID ? (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                window.gtag = window.gtag || gtag;
                gtag('js', new Date());
                // Disable automatic page view for SPA; we handle it on route change
                gtag('config', '${GA_ID}', { send_page_view: false });
              `}
            </Script>
            <Suspense fallback={null}>
              <GoogleAnalytics />
            </Suspense>
          </>
        ) : null}
      </body>
    </html>
  )
}
