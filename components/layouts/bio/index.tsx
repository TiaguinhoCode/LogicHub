'use client'

// Bibliotecas
import { Avatar } from "@heroui/avatar"
import Link from 'next/link'
import {
    FaFacebookF,
    FaInstagram,
    FaEnvelope,
    FaMapMarkerAlt,
    FaLink,
    FaWhatsapp,
} from "react-icons/fa"
import { motion } from 'framer-motion'

// Imagens
import logicHub from "@/public/img/bio/logicHub.jpg"

export default function Bio() {
    const socialLinks = [
        { icon: FaFacebookF, url: 'https://www.facebook.com/profile.php?id=61574102097503', label: 'Facebook' },
        { icon: FaInstagram, url: 'https://www.instagram.com/l0gichub/', label: 'Instagram' },
        { icon: FaWhatsapp, url: 'https://wa.me/558587805592?text=Ol%C3%A1%2C%20estou%20interessado%20em%20seus%20servi%C3%A7os%21', label: 'WhatsApp' },
        { icon: FaLink, url: 'https://logichub.com.br', label: 'Website' },
    ]

    const skills = ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Node.js', 'Python', 'HeroUI']

    const brandStyles: Record<string, string> = {
        Facebook: 'bg-blue-600 hover:bg-blue-700 text-white',
        Instagram: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white',
        Website: 'bg-gray-800 hover:bg-gray-900 text-white',
        WhatsApp: 'bg-green-500 hover:bg-green-600 text-white',
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 flex flex-col">
            <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
                <motion.div
                    className="flex-shrink-0"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative">
                        <Avatar
                            src={logicHub.src}
                            className="w-44 h-44 ring-4 ring-blue-500 border-4 border-white shadow-xl"
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="space-y-5 text-center md:text-left max-w-2xl"
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-tight">
                        LOGICHUB
                    </h1>
                    <p className="text-lg sm:text-xl text-blue-600 font-medium">
                        Desenvolvedor de Sistemas
                    </p>
                    <p className="leading-relaxed text-gray-700">
                        Com 2 anos de experiência desenvolvendo soluções digitais, atuo desde a automação de rotinas até a criação de sistemas de relatórios dinâmicos. Meu objetivo é oferecer ferramentas eficientes para que sua empresa possa focar no que realmente importa: estratégias para o crescimento.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-4">
                        {skills.map((skill, idx) => (
                            <motion.span
                                key={idx}
                                className="px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm shadow-sm"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.1 * idx + 0.2 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </section>

            <section className="grid gap-8 md:grid-cols-2 px-6 py-12 container mx-auto">
                <motion.div
                    className="bg-white rounded-2xl p-8 shadow-xl backdrop-blur"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Quer ver meus projetos?</h2>
                    <p className="text-gray-600 mb-6">
                        Veja como a tecnologia pode transformar sua empresa. Acesse meu portfólio e conheça soluções desenvolvidas para diversos segmentos.
                    </p>
                    <Link href="https://logichub.com.br">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full px-4 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition shadow-md"
                        >
                            Ver Portfólio
                        </motion.button>
                    </Link>
                </motion.div>

                <motion.div
                    className="bg-white rounded-2xl p-8 shadow-xl flex flex-col items-center backdrop-blur"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Conecte-se comigo</h2>
                    <div className="flex flex-wrap justify-center gap-5">
                        {socialLinks.map((social, idx) => {
                            const Icon = social.icon
                            const style = brandStyles[social.label] || 'bg-gray-200 text-gray-700'

                            return (
                                <motion.a
                                    key={idx}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`
                    w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all
                    ${style}
                  `}
                                >
                                    <Icon className="text-xl" />
                                </motion.a>
                            )
                        })}
                    </div>
                </motion.div>
            </section>

            <footer className="mt-auto bg-gray-50 py-12 border-t border-gray-200">
                <div className="container mx-auto px-6 text-center space-y-6">
                    <motion.h2
                        className="text-2xl font-semibold text-gray-800"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        Contato
                    </motion.h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-8 text-gray-700">
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="w-6 h-6 text-gray-500" />
                            <a href="mailto:tiagorafael019@gmail.com" className="hover:underline">
                                tiagorafael019@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="w-6 h-6 text-gray-500" />
                            <span>Fortaleza, Brasil</span>
                        </div>
                    </div>
                </div>
            </footer>

            <Link
                href="https://wa.me/558587805592?text=Ol%C3%A1%2C%20estou%20interessado%20em%20seus%20servi%C3%A7os%21"
                className="fixed bottom-4 right-7 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp size={28} />
            </Link>
        </div>
    )
}
