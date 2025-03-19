'use client'

// Bibliotecas
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Image } from '@heroui/image';
import { motion } from 'framer-motion';

// Imagens
import cataloguesLadding from "@/public/projects/catalogueLading.png";
import cataloguesSigIn from "@/public/projects/catalogueSigIn.png";
import cataloguesProducts from "@/public/projects/catalogueProducts.png";
import jarvisTrade from "@/public/projects/jarvisTrade.jpeg";
import jarvisTelegram from "@/public/projects/jarvisTelegram.png";
import taxasCartao from "@/public/projects/analiseTaxas.png";

// Dados
const projects = [
    {
        name: 'Catalogues',
        description: 'Plataforma digital de catálogo de produtos, permitindo a visualização, pesquisa e compra de itens de forma prática e eficiente.',
        status: 'Em desenvolvimento',
        technologies: ['Next.js', 'Tailwind CSS', 'HeroUi', 'Node.js', 'PostgreSQL', 'PrismaClient'],
        link: 'https://catalogue-kappa.vercel.app',
        images: [cataloguesLadding, cataloguesSigIn, cataloguesProducts],
    },
    {
        name: 'Jarvis Trade',
        description: 'Robô de criptomoedas para mercado futuro que analisa dados macroeconômicos e tendências, abrindo operações automaticamente. Envia sinais via Telegram com entradas, stops (loss/gain) e fechamentos estratégicos.',
        status: 'Finalizado',
        technologies: ['Python'],
        link: '#',
        images: [jarvisTrade, jarvisTelegram],
    },
    {
        name: 'Robo Análise Taxas de maquineta',
        description: 'Recebe arquivos CSV via WhatsApp, analisa e trata os dados, gerando um relatório para verificar se as taxas estão de acordo com o trato.',
        status: 'Finalizado',
        technologies: ['Node.js'],
        link: '#',
        images: [taxasCartao],
    }
];

export default function Projects() {
    return (
        <section className="bg-[#006fee] py-10">
            <div className="container mx-auto">
                <motion.h2 
                    className="text-4xl md:text-5xl font-extrabold text-white text-center mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Projetos
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-200 text-center max-w-3xl mx-auto mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Confira alguns dos projetos desenvolvidos pela LogicHub.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg relative transition-transform transform hover:scale-105 flex flex-col justify-between h-full"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <span
                                className={`absolute -top-3 z-20 right-2 px-3 py-1 rounded-md text-white text-sm font-semibold ${project.status === 'Finalizado' ? 'bg-green-600' : 'bg-yellow-600'}`}
                            >
                                {project.status}
                            </span>

                            <div className="mb-4">
                                <Swiper
                                    modules={[Pagination, Autoplay]}
                                    slidesPerView={1}
                                    pagination={{ clickable: true }}
                                    autoplay={{
                                        delay: 5500,
                                        disableOnInteraction: false,
                                    }}
                                >
                                    {project.images.map((image, idx) => (
                                        <SwiperSlide key={idx}>
                                            <Image
                                                isZoomed
                                                alt={`Imagem do projeto ${project.name}`}
                                                src={image.src}
                                                className="w-full h-56 border border-gray-400 object-cover rounded-lg"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            <div className="flex-1 flex flex-col">
                                <h3 className="text-2xl text-center font-bold mb-2 text-gray-800">
                                    {project.name}
                                </h3>
                                <p className="text-gray-600 text-center mb-4">
                                    {project.description}
                                </p>
                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-700">Tecnologias:</h4>
                                    <ul className="list-disc list-inside overflow-auto max-h-[60px]">
                                        {project.technologies.map((tech, idx) => (
                                            <li key={idx} className="text-gray-600">
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {project.link && project.link !== '#' && (
                                <a
                                    href={project.link}
                                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-center mt-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ver Projeto
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
