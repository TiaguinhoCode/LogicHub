'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Script from 'next/script'

declare global {
    interface Window { dataLayer: any[]; gtag: (...args: any[]) => void }
}

export function GoogleAnalytics() {
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID!
    const pathname = usePathname()

    useEffect(() => {
        window.gtag('config', GA_ID, { page_path: pathname })
    }, [pathname, GA_ID])

    return (
        <>
            {/* carrega ANTES da hidratação, no <head> */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="beforeInteractive"
            />
            <Script id="gtag-init" strategy="beforeInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
        `}
            </Script>
        </>
    )
}
