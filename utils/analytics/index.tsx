'use client'

// React
import { useEffect } from 'react'

// Next
import { usePathname } from 'next/navigation'
import Script from 'next/script'

// Tipagem
declare global {
    interface Window { dataLayer: any[]; gtag: (...args: any[]) => void }
}

export function GoogleAnalytics() {
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID!
    const pathname = usePathname()

    // Dispara um pageview sempre que a rota muda
    useEffect(() => {
        window.gtag('config', GA_ID, { page_path: pathname })
    }, [pathname, GA_ID])

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
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
