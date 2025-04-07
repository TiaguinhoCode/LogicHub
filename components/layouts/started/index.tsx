'use client'

// Bibliotecas
import { motion } from "framer-motion";
import { FcComboChart } from "react-icons/fc";
import { FaEllipsisH, FaRegBuilding, FaRocket } from "react-icons/fa";

// Next
import Image from "next/image";

// Imagens
import notebook from "@/public/img/notebook.png";
import Link from "next/link";

export default function Started() {
    return (
        <>
            <motion.section
                id="home"
                className="flex flex-col-reverse lg:flex-row items-center gap-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.2 } },
                }}
            >
                <motion.div
                    className="w-full lg:w-1/2 text-center lg:text-left"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
                    }}
                >
                    <motion.div
                        className="inline-flex justify-between space-x-3 items-center px-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
                        }}
                    >
                        <FcComboChart className="text-base ml-2" />
                        <span className="font-medium">Mostre suas ideias para o mundo</span>
                        <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        </svg>
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
                        }}
                    >
                        Conheça nossas soluções digitais <br />
                        para a <span className="text-blue-600">sua empresa</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg text-gray-300 mb-8 max-w-md mx-auto lg:mx-0"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
                        }}
                    >
                        Planilhas, dores de cabeça e sistemas instáveis estão fazendo você perder dinheiro. Com a LogicHub, sua empresa ganha agilidade, visão estratégica e mais lucro com tecnologia sob medida.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
                        }}
                    >
                        <Link href="#about">
                            <motion.button
                                className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg w-full"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Conhecer
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="w-full lg:w-1/2 flex justify-center"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                >
                    <div className="relative w-full max-w-lg">
                        <Image
                            src={notebook}
                            alt="Banner da performance"
                            width={700}
                            height={500}
                        />
                    </div>
                </motion.div>
            </motion.section>

            <motion.div
                className="mt-12 mx-auto w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15 } },
                }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[
                        { icon: FaRegBuilding, label: "Donos de Empresas" },
                        { icon: FaRocket, label: "Startups" },
                        { icon: FaEllipsisH, label: "Muito mais" },
                    ].map(({ icon: Icon, label }) => (
                        <motion.div
                            key={label}
                            className="flex items-center space-x-4 p-4 bg-white bg-opacity-10 rounded-lg"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.5 } },
                            }}
                            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
                        >
                            <div className="p-3 bg-white rounded-full text-blue-500 shadow-md">
                                <Icon className="w-6 h-6" />
                            </div>
                            <span className="font-semibold text-lg text-white">{label}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </>
    );
}
