'use client'

// Bibliotecas
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { FaHotel, FaPhone, FaUser } from "react-icons/fa";
import { MdEmail, MdSave } from "react-icons/md";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/config/firebase";

// React
import { SyntheticEvent, useState } from "react";

export default function Contacts() {
    const [name, setName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [phone, setPhone] = useState<string>()
    const [company, setCompany] = useState<string>()
    const [error, setError] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    async function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()
        setLoading(true)

        if (name === '' || email === '' || phone === '' || company === '') {
            toast.error("Por favor, preencha todos os campos obrigatórios.")
            setError(true)
            setLoading(false)
            return;
        }

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


        setLoading(false)
    }

    return (
        <form onSubmit={handleSubmit} className="bg-gray-900 py-12">
            <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="mb-4 text-4xl font-extrabold text-center text-white">
                    Fale com um especialista
                </h2>
                <p className="mb-8 text-center text-gray-400 sm:text-lg">
                    Interessado em soluções de TI para sua empresa? Preencha seu nome, e-mail e telefone, e entraremos em contato.
                </p>
                <main className="space-y-6">
                    <div>
                        <label htmlFor="name" className={error ? "block text-sm text-red-500 font-bold" : "block text-sm font-medium text-gray-300"}>
                            Nome Completo *
                        </label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Ex.: Tiago Rafael dos Santos Oliveira"
                            className="mt-1 block w-full"
                            startContent={<FaUser className="text-xl text-default-400 pointer-events-none flex-shrink-0" />}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className={error ? "block text-sm text-red-500 font-bold" : "block text-sm font-medium text-gray-300"}>
                            E-mail*
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Ex.: seuemail@doamin.com"
                            className="mt-1 block w-full"
                            startContent={<MdEmail className="text-xl text-default-400 pointer-events-none flex-shrink-0" />}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="celphone" className={error ? "block text-sm text-red-500 font-bold" : "block text-sm font-medium text-gray-300"}>
                            Celular*
                        </label>
                        <Input
                            id="celphone"
                            type="text"
                            placeholder="Ex.: (85) 98780-5592"
                            className="mt-1 block w-full"
                            startContent={<FaPhone className="text-xl text-default-400 pointer-events-none flex-shrink-0" />}
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
                        />
                    </div>
                    <div>
                        <label htmlFor="company" className={error ? "block text-sm text-red-500 font-bold" : "block text-sm font-medium text-gray-300"}>
                            Nome da Empresa*
                        </label>
                        <Input
                            id="company"
                            type="text"
                            placeholder="Ex.: Empresa"
                            className="mt-1 block w-full"
                            startContent={<FaHotel className="text-xl text-default-400 pointer-events-none flex-shrink-0" />}
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-center">
                        <Button type="submit" isLoading={loading} color="primary" className="px-6 py-2 md:w-44 w-full" startContent={!loading && <MdSave className="text-xl text-white pointer-events-none flex-shrink-0" />}>
                            Salvar Contato
                        </Button>
                    </div>
                </main>
            </div >
        </form >
    )
}