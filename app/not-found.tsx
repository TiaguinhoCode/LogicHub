'use client'

// Next
import Link from 'next/link'

export default function NotFound() {

    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-[#111827]">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div className="bg-blue-500 text-white px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <Link
                href="/"
                // para external URLs você pode usar <a> puro ou Link; ambos funcionam :contentReference[oaicite:1]{index=1}
                className="mt-5 relative inline-block text-sm font-medium text-blue-500 group active:text-blue-500 focus:outline-none focus:ring"
            >
                <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-blue-500 group-hover:translate-y-0 group-hover:translate-x-0" />
                <span className="relative block px-8 py-3 text-white bg-[#1A2238] border border-current">
                    Voltar
                </span>
            </Link>
        </main>
    )
}
