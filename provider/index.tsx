'use client'

// React
import { ReactNode } from "react";

// Bibliotecas
import { ToastProvider } from "@heroui/react";

export default function Provider({ children }: { children: ReactNode }) {
    return (
        <>
            {children}
            <ToastProvider placement="top-right" />
        </>
    )
}