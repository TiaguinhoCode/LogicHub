'use client'
import { animate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

type AnimatedCounterProps = {
    to: number
    duration?: number
    suffix?: string
}

export function AnimatedCounter({
    to,
    duration = 2,
    suffix = ''
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true })

    useEffect(() => {
        if (!inView) return
        const node = ref.current!
        node.textContent = '0'  // Começa do 0
        const controls = animate(0, to, {
            duration,
            onUpdate(value) {
                node.textContent = Math.round(value).toString() + suffix
            }
        })
        return () => controls.stop()
    }, [inView, to, duration, suffix])

    return <span ref={ref} />
}
