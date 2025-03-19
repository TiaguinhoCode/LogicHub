'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { FiTrendingUp } from 'react-icons/fi';
import { FaRobot, FaLaptopCode, FaBullhorn, FaServer } from 'react-icons/fa';

export default function Service() {
    const services = [
        {
            id: 1,
            title: "Desenvolvimento de Sistemas Web",
            description: "Criação de plataformas personalizadas com painéis administrativos, integração de APIs e soluções escaláveis.",
            icon: <FaLaptopCode className="w-14 h-14 text-[#006fee]" />,
        },
        {
            id: 2,
            title: "Landing Pages e Publicidade",
            description: "Design moderno e responsivo para conversão máxima, voltado para campanhas de marketing e presença digital.",
            icon: <FaBullhorn className="w-14 h-14 text-[#006fee]" />,
        },
        {
            id: 3,
            title: "Relatórios Interativos",
            description: "Transformação de dados brutos em dashboards dinâmicos e relatórios personalizados para tomada de decisões estratégicas.",
            icon: <FiTrendingUp className="w-14 h-14 text-[#006fee]" />,
        },
        {
            id: 4,
            title: "Automação de Processos",
            description: "Criação de robôs e scripts que otimizam fluxos de trabalho, eliminando tarefas repetitivas e aumentando a produtividade.",
            icon: <FaRobot className="w-14 h-14 text-[#006fee]" />,
        },
        {
            id: 5,
            title: "APIs e Back-End",
            description: "Desenvolvimento de APIs robustas e eficientes, integração com bancos de dados e soluções escaláveis para o back-end.",
            icon: <FaServer className="w-14 h-14 text-[#006fee]" />,
        }
    ];

    // Variantes para animação dos cards
    const cardVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="bg-[#006fee] w-full py-16">
            <div className="container mx-auto px-6">
                <motion.h2 
                  className="text-4xl md:text-5xl font-extrabold text-white text-center mb-14"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                    Soluções Digitais para o Seu Negócio
                </motion.h2>
                <motion.p
                  className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-12"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Desenvolvemos sistemas, automações e relatórios interativos que impulsionam empresas para a era digital.
                </motion.p>
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {services.map((service) => (
                        <SwiperSlide key={service.id} className="px-4">
                            <motion.div 
                                className="bg-white rounded-xl shadow-lg p-8 text-center flex flex-col items-center justify-center h-[310px] w-[400px] mx-auto"
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * service.id }}
                            >
                                <div className="mb-6 flex justify-center">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
