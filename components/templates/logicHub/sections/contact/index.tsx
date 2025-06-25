'use client'

// Componentes
import AnimatedSection from "@/components/ui/animation/sections";

// Bibliotecas
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { IoMail, IoWarning } from "react-icons/io5";
import { LuArrowRight, LuGithub, LuMapPin } from "react-icons/lu";
import { FaHotel, FaPhone, FaUser } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { addToast } from "@heroui/react";

// Next
import Link from "next/link";
import Image from "next/image";

// React
import { SyntheticEvent, useState } from "react";

// Imagem
import robotError from "@/public/img/errorRobo.png"
import { addDoc, collection } from "firebase/firestore";

// Configurações
import { db } from "@/config/firebase";

export default function Contact() {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [company, setCompany] = useState<string>('')
    const [error, setError] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    async function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()
        setLoading(true)

        const rawPhone = phone.replace(/\D/g, "");

        const data = {
            name,
            email,
            phone,
            company,
            was_attended_to: false,
            createdAt: new Date(),
        }

        if (name === '' || email === '' || phone === '' || company === '' || rawPhone?.length !== 11) {
            addToast({
                title: 'Campos obrigatórios', description: 'Preencha todos os campos corretamente.', color: 'warning', icon: (
                    <div className="w-24 h-24">
                        <Image
                            priority
                            src={robotError}
                            alt="Slogan"
                            className="-scale-x-100"
                            width={96}
                            height={96}
                        />
                    </div>
                )
            })
            setError(true)
            setLoading(false)
            return;
        }

        try {
            await addDoc(collection(db, "contacts"), data);

            addToast({
                title: '✔️ Contato enviado', description: 'Obrigado! Responderemos em até 24 horas.', color: 'success'
            })

            setName('')
            setEmail('')
            setPhone('')
            setCompany('')
            setError(false)
            setLoading(false)
        } catch (err) {
            console.error("Erro ao salvar os dados:", error);
            addToast({
                title: '❌ Falha ao enviar', description: 'Algo deu errado. Tente novamente.', color: 'warning', icon: (
                    <div className="w-24 h-24">
                        <Image
                            priority
                            src={robotError}
                            alt="Slogan"
                            className="-scale-x-100"
                            width={96}
                            height={96}
                        />
                    </div>
                )
            })

        }
        setLoading(false)
    }

    return (
        <section id="contact" className="py-20 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Vamos Conversar</h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        Pronto para transformar sua ideia em realidade? Entre em contato conosco
                    </p>
                </AnimatedSection>

                <div className="grid lg:grid-cols-2 gap-12">
                    <AnimatedSection>
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/10">
                            <h3 className="text-2xl font-semibold text-white mb-6">Informações de Contato</h3>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                        <IoMail className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-white">Email</p>
                                        <p className="text-white/70">tiagorafael019@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                                        <FaPhone className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-white">Telefone</p>
                                        <p className="text-white/70">+55 (85) 98780-5592</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-blue-700/20 rounded-lg flex items-center justify-center">
                                        <LuMapPin className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-white">Localização</p>
                                        <p className="text-white/70">Fortaleza, CE - Brasil</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <h4 className="font-semibold text-white mb-4">Nos siga</h4>
                                <div className="flex space-x-4">
                                    <Link href="https://www.instagram.com/l0gichub/" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-500/20 transition-colors">
                                        <FiInstagram className="w-5 h-5 text-white" />
                                    </Link>
                                    <Link href="https://wa.me/558587805592?text=Ol%C3%A1%2C%20estou%20interessado%20em%20seus%20serviços%21" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-500/20 transition-colors">
                                        <SiWhatsapp className="w-5 h-5 text-white" />
                                    </Link>
                                    <Link href="https://github.com/TiaguinhoCode" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600/20 transition-colors">
                                        <LuGithub className="w-5 h-5 text-white" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/10">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className={false ? "block text-sm text-red-500 font-bold" : "block text-sm font-medium text-gray-300"}>
                                        Nome Completo *
                                    </label>
                                    <Input
                                        placeholder="Ex.: Tiago Rafael dos Santos Oliveira"
                                        className="mt-3 block w-full"
                                        startContent={<FaUser className="text-xl text-default-400 pointer-events-none flex-shrink-0" />}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="name" className={false ? "block text-sm text-red-500 font-bold" : "block text-sm font-medium text-gray-300"}>
                                        Email *
                                    </label>
                                    <Input
                                        placeholder="Ex.: setor@empresa.com.br"
                                        className="mt-3 block w-full"
                                        startContent={<MdEmail className="text-xl text-default-400 pointer-events-none flex-shrink-0" />}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="name" className={false ? "block text-sm text-red-500 font-bold" : "block text-sm font-medium text-gray-300"}>
                                        Celular *
                                    </label>
                                    <Input
                                        placeholder="Ex.: (DD) XXXXX-XXXX"
                                        className="mt-3 block w-full"
                                        startContent={<FaPhone className="text-xl text-default-400 pointer-events-none flex-shrink-0" />}
                                        onChange={(e) => {
                                            const rawValue = e.target.value.replace(/\D/g, "");
                                            let formattedValue = rawValue

                                            if (rawValue.length > 2) {
                                                formattedValue = `(${rawValue.slice(0, 2)}) ${rawValue.slice(2)}`;
                                            }
                                            if (rawValue.length > 7) {
                                                formattedValue = `(${rawValue.slice(0, 2)}) ${rawValue.slice(2, 7)}-${rawValue.slice(7, 11)}`;
                                            }

                                            setPhone(formattedValue)
                                        }}
                                        value={phone}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="name" className={false ? "block text-sm text-red-500 font-bold" : "block text-sm font-medium text-gray-300"}>
                                        Nome da Empresa *
                                    </label>
                                    <Input
                                        placeholder="Ex.: Nome da Empresa"
                                        className="mt-3 block w-full"
                                        startContent={<FaHotel className="text-xl text-default-400 pointer-events-none flex-shrink-0" />}
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    isLoading={loading}
                                    className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white border-0"
                                    endContent={<LuArrowRight className="ml-2 w-4 h-4" />}
                                >
                                    Enviar Mensagem
                                </Button>
                            </form>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    )
}