'use client'

// Componentes
import AnimatedSection from '@/components/ui/animation/sections'

// Bibliotecas
import { motion } from 'framer-motion'
import { LuBrain, LuCloud, LuCodeXml, LuShield } from 'react-icons/lu'
import { IoBarChart } from 'react-icons/io5'

export default function Services() {
    const services = [
        {
            icon: LuCodeXml,
            title: 'Software sob Medida',
            description: 'Desenvolvemos soluções customizadas para impulsionar sua eficiência.',
        },
        {
            icon: LuCloud,
            title: 'Arquitetura na Nuvem',
            description: 'Infraestrutura escalável, segura e otimizada em cloud.',
        },
        {
            icon: LuShield,
            title: 'Cibersegurança',
            description: 'Proteção completa de dados e conformidade com standards.',
        },
        {
            icon: LuBrain,
            title: 'Automação & IA',
            description: 'Consultoria em transformação digital com dados e automação.',
        },
        {
            icon: IoBarChart,
            title: 'Análise de Dados',
            description: 'Insights estratégicos para decisões mais assertivas.',
        },
    ]

    return (
        <section id="services" className="py-20 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Nossos Serviços</h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        Soluções de TI completas: desenvolvimento, segurança, nuvem e estratégia para impulsionar sua empresa.
                    </p>
                </AnimatedSection>
            </div>
            <div className="grid gap-8 px-8 w-full items-stretch grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                {services.map((s, i) => (
                    <AnimatedSection key={i}>
                        <motion.div
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="flex flex-col h-full bg-white/10  rounded-xl p-6 border border-transparent hover:border-blue-400/50 shadow-lg transition-all duration-300"
                        >
                            <div className="w-14 h-14 mb-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                                <s.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
                            <p className="text-white/70 flex-grow">{s.description}</p>
                        </motion.div>
                    </AnimatedSection>
                ))}
            </div>
        </section>
    )
}
