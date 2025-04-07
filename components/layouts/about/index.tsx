'use client'

// Bibliocas
import { motion } from "framer-motion";

// Next
import Image from "next/image";

// Imagens
import bannerProgaming from "@/public/img/aboutArt1.jpg";
import bannerHacking from "@/public/img/aboutArt2.jpg";
import bannerRelatory from "@/public/img/aboutArt3.jpg";

export default function About() {
    return (
        <motion.section
            id="about"
            className="w-full flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
            }}
        >
            <div className="gap-10 items-center py-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2">
                <motion.div
                    className="grid grid-cols-3 grid-rows-2 gap-4 mt-8"
                    variants={{ hidden: {}, visible: {} }}
                >
                    <motion.div
                        className="relative col-span-2 row-span-2 h-80 md:h-[420px] rounded-lg overflow-hidden shadow-lg"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
                        }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <Image
                            src={bannerProgaming}
                            alt="apresentacao"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Imagem pequena 1 */}
                    <motion.div
                        className="relative h-40 md:h-48 rounded-lg overflow-hidden shadow"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Image
                            src={bannerHacking}
                            alt="apresentacao"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                    <motion.div
                        className="relative h-40 md:h-48 rounded-lg overflow-hidden shadow"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Image
                            src={bannerRelatory}
                            alt="apresentacao"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </motion.div>
                <motion.div
                    className="font-light text-gray-200 sm:text-lg dark:text-gray-400"
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0, transition: { ease: "easeOut", duration: 0.8 } },
                    }}
                >
                    <span className="text-blue-500 font-bold">Sobre nós</span>
                    <h2 className="mb-4 text-3xl tracking-tight font-extrabold flex items-center text-white">
                        Consultoria de TI & Desenvolvimento
                    </h2>
                    <p className="mb-4">
                        Com mais de <strong>2 anos de experiência</strong> em desenvolvimento de software e análise de dados, ajudamos empresas a:
                    </p>
                    <ul className="list-disc list-inside mb-4 space-y-1 text-gray-200 dark:text-gray-400">
                        <li>Construir softwares customizáveis e soluções SaaS escaláveis</li>
                        <li>Desenvolver landing pages otimizadas para conversão</li>
                        <li>Personalizar relatórios web e criar dashboards interativos</li>
                        <li>Criar aplicativos móveis e web apps sob medida</li>
                        <li><strong>E muito mais de soluções em T.I.</strong></li>
                    </ul>
                    <p>
                        Nosso objetivo é trazer soluções e tecnologia para sua empresa, gerando retornos lucrativos e sem dores de cabeça.
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
}
