"use client"

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

/**
 * Sends GA4 page_view events on client-side route changes.
 * Requires NEXT_PUBLIC_GOOGLE_ANALYTICS_ID to be set at build time.
 */
export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
    if (!id) return

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')

    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      // GA4 page view for SPA navigations
      // Ref: https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications
      ;(window as any).gtag('event', 'page_view', {
        page_path: url,
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [pathname, searchParams])

  return null
}
