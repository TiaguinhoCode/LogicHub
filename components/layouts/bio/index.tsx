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
        // { icon: FaLinkedin, url: 'https://www.linkedin.com/in/tiagorafaeldev', label: 'LinkedIn' },
        { icon: FaWhatsapp, url: 'https://wa.me/558587805592?text=Ol%C3%A1%2C%20estou%20interessado%20em%20seus%20servi%C3%A7os%21', label: 'WhatsApp' },
        { icon: FaLink, url: 'https://logichub.com.br', label: 'Website' },
    ]

    const skills = ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Node.js', 'Python', 'HeroUI']

    const brandStyles: Record<string, string> = {
        Facebook: 'bg-blue-600 hover:bg-blue-700 text-white',
        Instagram: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white',
        // LinkedIn: 'bg-blue-700 hover:bg-blue-800 text-white',
        Website: 'bg-gray-800 hover:bg-gray-900 text-white',
        WhatsApp: 'bg-green-500 hover:bg-green-600 text-white',
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 flex flex-col">
            <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
                <motion.div
                    className="flex-shrink-0"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Avatar
                        src={logicHub.src}
                        className="w-40 h-40 ring-4 ring-gray-300"
                    />
                </motion.div>
                <motion.div
                    className="space-y-4 text-center md:text-left"
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <h1 className="text-5xl font-extrabold">LOGICHUB</h1>
                    <p className="text-xl text-gray-700">Desenvolvedor de Sistemas</p>
                    <p className="max-w-prose leading-relaxed">
                        Com 2 anos de experiência desenvolvendo soluções digitais, atuo desde a automação de rotinas até a criação de sistemas de
                        relatórios dinâmicos. Meu objetivo é oferecer ferramentas eficientes para que sua empresa possa focar no que realmente
                        importa: estratégias para o crescimento.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        {skills.map((skill, idx) => (
                            <motion.span
                                key={idx}
                                className="px-3 py-1 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 font-medium shadow-sm"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.1 * idx + 0.2 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className=" px-6 py-8 grid gap-8 md:grid-cols-2">
                <motion.div
                    className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <h2 className="text-2xl font-semibold mb-4">Sobre a Empresa</h2>
                    <p className="leading-relaxed">
                        Na LOGICHUB, simplificamos processos e potencializamos resultados com soluções digitais sob medida. De aplicativos
                        corporativos à automação de tarefas repetitivas, nossa missão é tornar sua rotina mais eficiente. Criamos catálogos de
                        produtos, dashboards interativos, sistemas internos e experiências digitais personalizadas, utilizando tecnologia para
                        impulsionar o desempenho da sua empresa.
                    </p>
                </motion.div>

                <motion.div
                    className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <h2 className="text-2xl font-semibold mb-4">Quer ver meus projetos?</h2>
                    <div className="w-full">
                        <p className="text-gray-600 mb-4">
                            Convido você a explorar meu portfólio para entender melhor como funciona nossa empresa, nossa forma de trabalho e as
                            soluções que desenvolvemos. Através dos projetos realizados, é possível conhecer de perto como aplicamos tecnologia
                            para simplificar processos, otimizar resultados e impulsionar o crescimento dos nossos clientes.
                        </p>
                        <Link href="https://logichub.com.br">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-xl shadow-md hover:bg-blue-600 transition"
                            >
                                Ver Portfólio
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg flex flex-col items-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <h2 className="text-2xl font-semibold mb-4">Conecte-se comigo</h2>
                    <div className="flex flex-wrap justify-center gap-5">
                        {socialLinks.map((social, idx) => {
                            const Icon = social.icon
                            const style = brandStyles[social.label] || 'bg-gray-100 text-gray-700'

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
                  w-12 h-12 flex items-center justify-center rounded-full shadow-md
                  transition-all ${style}
                `}
                                >
                                    <Icon className="text-xl" />
                                </motion.a>
                            )
                        })}
                    </div>
                </motion.div>

            </div>

            {/* Footer */}
            <footer className="mt-auto bg-gray-100 py-12">
                <div className="container mx-auto px-6 text-center space-y-6">
                    <motion.h2
                        className="text-3xl font-semibold text-gray-800"
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
                <FaWhatsapp size={32} />
            </Link>
        </div>
    )
}
