// Bibliotecas
import { Input as Inpt } from "@heroui/input"

// React
import { ComponentProps } from "react"

// Tipagem
type InputProps = ComponentProps<typeof Inpt>

export default function Input({ ...rest }: InputProps) {
    return (
        <Inpt
            classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm",
            }}
            labelPlacement="outside"
            {...rest}
        />
    )
}