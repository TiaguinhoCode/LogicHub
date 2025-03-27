'use client'

// Bibliotecas
import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaPhone } from 'react-icons/fa';

export default function Contacts() {
    return (
        <motion.section
            id='contato'
            className="py-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Entre em Contato
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-800 text-center mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Conecte-se comigo pelos canais abaixo:
                </motion.p>
                <motion.div
                    className="flex flex-col md:flex-row justify-center items-center gap-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="flex items-center gap-4">
                        <FaPhone className="text-gray-800 text-3xl" />
                        <span className="text-gray-800 text-xl">+55 (85) 98780-5592</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaInstagram className="text-gray-800 text-3xl" />
                        <a
                            href="https://www.instagram.com/l0gichub?igsh=ZTFwd2NpYmc1cmw3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 text-xl hover:underline"
                        >
                            @L0gichub
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <FaEnvelope className="text-gray-800 text-3xl" />
                        <span className="text-gray-800 text-xl">tiagorafael019@gmail.com</span>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}