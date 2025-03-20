'use client'

// Componentes
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";

// Bibliotecas
import { FaUser } from "react-icons/fa";
import { MdEmail, MdSave } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaShop } from "react-icons/fa6";
import { db } from "@/settings/firebase/index"
import { collection, addDoc } from "firebase/firestore";
import { Alert } from "@heroui/alert";

// React
import { SyntheticEvent, useState } from "react";
import { toast } from "react-toastify";

export default function FormContacts() {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [company, setCompany] = useState<string>('')
    const [error, setError] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    async function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()
        setLoading(true)

        if (name === '' && email === '' && phone === '' && company === '') {
            toast.error("Por favor, preencha todos os campos obrigatórios.")
            setError(true)
            setLoading(false)
        } else {
            const data = {
                name: name,
                email: email,
                phone: phone,
                company: company,
                createdAt: new Date(),
            };

            try {
                const docRef = await addDoc(collection(db, "contacts"), data);
                toast.success("Contato registrado! Retornaremos em breve. 📩")

                setName('')
                setEmail('')
                setPhone('')
                setCompany('')
                setError(false)
                setLoading(false)
            } catch (err) {
                console.error("Erro ao salvar os dados:", error);
                toast.error("Ocorreu um erro, tente novamente.");
            }
        }

        setLoading(false)
    }

    return (
        <div className="bg-white shadow-xl rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Fale com um especialista</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
                <Input
                    variant="bordered"
                    label="Nome completo*"
                    type="text"
                    placeholder="Ex.: Tiago Rafael dos Santos Olveira"
                    startContent={<FaUser className="text-xl text-default-400 pointer-events-none flex-shrink-0" />}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    isInvalid={error}
                />
                <Input
                    variant="bordered"
                    label="Email*"
                    type="email"
                    placeholder="Ex.: setor@empresa.com"
                    startContent={<MdEmail className="text-xl text-default-400 pointer-events-none flex-shrink-0" />}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isInvalid={error}
                />
                <Input
                    variant="bordered"
                    label="Celular*"
                    type="text"
                    placeholder="Ex.: (85) 98780-5592"
                    startContent={<IoMdPhonePortrait className="text-xl text-default-400 pointer-events-none flex-shrink-0" />}
                    onChange={(e) => {
                        const rawValue = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
                        let formattedValue = rawValue;

                        if (rawValue.length > 2) {
                            formattedValue = `(${rawValue.slice(0, 2)}) ${rawValue.slice(2)}`;
                        }
                        if (rawValue.length > 7) {
                            formattedValue = `(${rawValue.slice(0, 2)}) ${rawValue.slice(2, 7)}-${rawValue.slice(7, 11)}`;
                        }

                        setPhone(formattedValue);
                    }}
                    value={phone}
                    isInvalid={error}
                />

                <Input
                    variant="bordered"
                    label="Nome da Empresa*"
                    type="text"
                    placeholder="Ex.: LogicHub"
                    startContent={<FaShop className="text-xl text-default-400 pointer-events-none flex-shrink-0" />}
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    isInvalid={error}
                />
                <Button
                    type="submit"
                    color="success"
                    size="lg"
                    className="w-full text-white font-bold transition duration-200 hover:bg-green-600"
                    endContent={<MdSave className="text-xl text-white pointer-events-none flex-shrink-0" />}
                    isLoading={loading}
                >
                    Enviar
                </Button>
            </form>
        </div>
    );
}
