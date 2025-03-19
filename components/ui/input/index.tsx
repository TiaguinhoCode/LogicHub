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
                input: "text-sm",
                innerWrapper: "",
                inputWrapper: "h-11 min-h-11 border border-gray-300 rounded-md data-[hover=true]:border-gray-400 focus:border-[#006fee] group-data-[focus=true]:border-[#006fee]"
            }}
            labelPlacement="outside"
            {...rest}
        />
    )
}