'use client'

// Bibliotecas
import { motion } from 'framer-motion'

export default function Steps() {
    const steps = [
        {
            number: "Etapa 1",
            title: "Diagnóstico e Análise Corporativa",
            description:
                "Nesta etapa, realizamos um diagnóstico minucioso para identificar os desafios e oportunidades da sua empresa. Por meio de análises detalhadas e reuniões estratégicas, mapeamos as dificuldades e definimos pontos críticos a serem aprimorados.",
        },
        {
            number: "Etapa 2",
            title: "Transformação Digital e Soluções Tecnológicas",
            description:
                "Com base no diagnóstico, traduzimos os desafios identificados para o ambiente digital. Desenvolvemos e apresentamos soluções programáticas inovadoras, utilizando tecnologia de ponta para solucionar os problemas de forma eficiente e personalizada.",
        },
        {
            number: "Etapa 3",
            title: "Implementação, Testes e Aperfeiçoamento Contínuo",
            description:
                "Após a implementação, monitoramos a solução por meio de testes rigorosos para validar sua eficácia. Realizamos reuniões de feedback para identificar ajustes necessários, garantindo que a solução atenda perfeitamente às expectativas e necessidades do cliente.",
        },
    ];

    // Variantes para a animação de cada etapa
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="container mx-auto py-16 px-4">
            <header className="text-center mb-12">
                <motion.h2
                    className="text-2xl md:text-3xl font-extrabold text-gray-800"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Como funciona a Consultoria da LogicHub?
                </motion.h2>
            </header>

            <div className="space-y-12">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col md:flex-row items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="md:w-1/4 w-full text-center md:text-right md:pr-4 mb-4 md:mb-0">
                            <motion.h3 className="text-xl font-bold text-gray-800">
                                {step.number}
                            </motion.h3>
                        </div>
                        <div className="flex justify-center md:justify-start">
                            <motion.div
                                className="h-16 md:h-28 border-l-4 border-blue-500 hidden md:block"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                            ></motion.div>
                        </div>
                        <div className="md:w-7/12 w-full md:pl-4 text-center md:text-left">
                            <motion.h4
                                className="text-xl font-bold text-gray-800"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                            >
                                {step.title}
                            </motion.h4>
                            <motion.p
                                className="mt-2 text-gray-600"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                            >
                                {step.description}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

    );
}
