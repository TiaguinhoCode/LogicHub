// React
import { ComponentProps, ReactNode } from "react"

// Biblioteca
import { Button as Btn } from "@heroui/button"

// Tipagem
type ButtonProps = ComponentProps<typeof Btn> & {
    children: ReactNode
}

export function Button({ children, ...rest }: ButtonProps) {
    return (
        <Btn {...rest}>
            {children}
        </Btn>
    )
}