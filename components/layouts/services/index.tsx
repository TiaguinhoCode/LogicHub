'use client'

// Bibliotecas
import { motion } from "framer-motion";
import {
    FaBullhorn,
    FaChartBar,
    FaChartLine,
    FaCogs,
    FaDesktop,
    FaMobileAlt
} from "react-icons/fa";

export default function Services() {
    return (
        <motion.section
            id="services"
            className="py-12 bg-gray-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
            }}
        >
            <div className="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
                <span className="text-blue-500 font-bold uppercase tracking-wide">
                    Nossos serviços
                </span>
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mt-2 mb-4 text-4xl font-extrabold text-white">
                        Soluções em TI que aceleram seu negócio
                    </h2>
                    <p className="text-gray-200 dark:text-gray-400 sm:text-lg">
                        Na LogicHub, somos especialistas em consultoria de TI e desenvolvimento de software.
                        Criamos soluções personalizadas que otimizam seu tempo, reduzem custos e garantem
                        a escalabilidade e segurança que sua empresa precisa.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            icon: FaChartLine,
                            title: "Softwares Customizáveis",
                            desc: "Desenvolvemos soluções sob medida para atender exatamente às necessidades do seu negócio.",
                        },
                        {
                            icon: FaDesktop,
                            title: "Landing Pages",
                            desc: "Landing pages responsivas, otimizadas para conversão e geração de leads.",
                        },
                        {
                            icon: FaMobileAlt,
                            title: "Apps & Web Apps",
                            desc: "Criamos aplicativos responsivos e performáticos para web e mobile.",
                        },
                        {
                            icon: FaChartBar,
                            title: "Dashboards & Relatórios",
                            desc: "Personalizamos relatórios web e dashboards interativos para decisões mais rápidas.",
                        },
                        {
                            icon: FaCogs,
                            title: "Integrações & Automação",
                            desc: "Conectamos sistemas e automatizamos processos para ganhar eficiência.",
                        },
                        {
                            icon: FaBullhorn,
                            title: "Consultoria & Suporte",
                            desc: "Acompanhamento contínuo e suporte dos nossos aplicativos.",
                        },
                    ].map(({ icon: Icon, title, desc }) => (
                        <motion.div
                            key={title}
                            className="block p-6 bg-white bg-opacity-10 border border-gray-700 rounded-2xl shadow-lg transition transform hover:-translate-y-1 hover:bg-opacity-20"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { ease: "easeOut", duration: 0.6 },
                                },
                            }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-blue-500 rounded-full">
                                <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
                            <p className="text-gray-300">{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
