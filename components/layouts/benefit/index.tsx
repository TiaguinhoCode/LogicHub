'use client'

// Bibliotecas
import { motion } from "framer-motion";
import {
    FaHandshake,
    FaClock,
    FaDollarSign,
    FaSmile,
    FaChartLine
} from "react-icons/fa";
import { Tilt } from "react-tilt";

export default function Benefit() {
    const benefits = [
        {
            icon: FaHandshake,
            title: "Consultoria Grátis",
            desc: "Avaliação inicial sem custo para mapear suas necessidades.",
        },
        {
            icon: FaClock,
            title: "Mais Agilidade",
            desc: "Soluções que economizam horas de trabalho manual.",
        },
        {
            icon: FaDollarSign,
            title: "Menos Custos",
            desc: "Automação e otimização que reduzem gastos operacionais.",
        },
        {
            icon: FaSmile,
            title: "Zero Estresse",
            desc: "Suporte contínuo para você focar no que importa.",
        },
        {
            icon: FaChartLine,
            title: "Escalabilidade",
            desc: "Soluções preparadas para crescer junto com sua empresa.",
        },
    ];

    return (
        <motion.section
            id="benefits"
            className="py-12 bg-gray-800 rounded-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
            }}
        >
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <span className="text-blue-500 font-bold uppercase tracking-wide">
                    Benefícios
                </span>
                <h2 className="mt-2 mb-8 text-3xl sm:text-4xl font-extrabold text-white">
                    Por que escolher a LogicHub?
                </h2>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-stretch">
                    {benefits.map(({ icon: Icon, title, desc }) => (
                        <motion.div
                            key={title}
                            className="h-full"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { ease: "easeOut", duration: 0.6 },
                                },
                            }}
                        >
                            <Tilt options={{ max: 25, scale: 1.05 }}>
                                <div className="flex flex-col items-center text-center p-6 bg-gray-700 rounded-lg shadow transition h-full hover:bg-gray-600">
                                    <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-blue-500 rounded-full">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="mb-2 text-lg font-semibold text-white">
                                        {title}
                                    </h3>
                                    <p className="text-gray-300 text-sm">{desc}</p>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
