'use client'

// Bibliotecas
import Link from 'next/link'
import {
    FaInstagram,
    FaWhatsapp,
    FaFacebook,
    FaLinkedin,
} from 'react-icons/fa'
import { Button } from '@heroui/button'
import { MdOutlineWeb } from 'react-icons/md'

// Next
import Image from 'next/image'

// Imagens
import logicHub from '@/public/img/bio/logicHub.jpg'

export default function Bio() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-6">
            <div className="max-w-sm w-full bg-gray-800/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8">
                <div className="flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 mb-4">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-blue-400 animate-pulse blur-2xl opacity-40" />
                        <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-gray-700 shadow-lg">
                            <Image
                                src={logicHub}
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <h1 className="text-3xl font-extrabold text-white mb-1">LogicHub</h1>
                    <p className="text-indigo-300 mb-6">💻 Desenvolvedor de sistemas & Consultor de TI</p>

                    <div className="bg-gray-700/50 border border-gray-600 rounded-xl p-4 mb-6 w-full">
                        <p className="text-sm text-gray-200 leading-relaxed">
                            Há mais de <span className="font-semibold text-indigo-400">2 anos</span> transformando desafios em soluções digitais.
                            Especialista em desenvolvimento web, sistemas empresariais e consultoria estratégica em TI.
                        </p>
                    </div>

                    <div className="space-y-3 w-full">
                        <div>
                            <Link href="https://wa.me/558587805592?text=Olá,%20estou%20interessado%20em%20seus%20serviços!">
                                <Button className="w-full bg-green-500 hover:bg-green-600 transition-transform hover:scale-105">
                                    <FaWhatsapp size={18} />
                                    Agende uma Consulta
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <Link href="https://logichub.com.br">
                                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition-opacity">
                                    <MdOutlineWeb size={16} />
                                    Visitar Portfolio
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex items-center justify-center gap-4">
                    {[
                        { href: 'https://www.instagram.com/l0gichub?igsh=ZTFwd2NpYmc1cmw3', icon: <FaInstagram size={20} /> },
                        { href: 'https://www.linkedin.com/in/tiag0rafael?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: <FaLinkedin size={20} /> },
                    ].map((item, idx) => (
                        <Button
                            key={idx}
                            radius="sm"
                            variant="ghost"
                            className="p-0 w-10 h-10 bg-gray-700 hover:bg-gray-600 transition-colors"
                        >
                            <Link href={item.href} target="_blank" rel="noopener noreferrer">
                                <span className="text-white">{item.icon}</span>
                            </Link>
                        </Button>
                    ))}
                </div>

                <div className="mt-8 text-sm text-gray-400 space-y-1">
                    <p>🏢 <span className="text-white">LogicHub - Soluções em Tecnologia</span></p>
                    <p>📍 <span className="text-white">Fortaleza-CE</span></p>
                    <p>💼 <span className="text-white">+2 anos de experiência</span></p>
                </div>
            </div>
        </div>
    )
}
