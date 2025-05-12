'use client'

// Next
import { StaticImageData } from "next/image";

// Imagens
import protectSafe from "@/public/img/protectSafe.png"
import gideon from "@/public/img/gideonChatBot.png"

// Bibliotecas
import { motion } from 'framer-motion';

// Componentes
import ProjectsCards from "@/components/ui/projectsCards";

// Tipagem
type ProjectItems = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: StaticImageData | string;
  url: string;
  category: string;
  demo: boolean
}

// Dados
const projects: ProjectItems[] = [
  {
    id: 1,
    title: 'ProtecSafe – Segurança e Monitoramento',
    description:
      'Landing page moderna para ProtecSafe, destacando soluções avançadas em CFTV e controle de acesso.',
    imageUrl: protectSafe,
    category: 'Web',
    demo: true,
    url: 'https://protectsafe-navy.vercel.app',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'HeroUI'],
  },
  {
    id: 2,
    title: 'Gideon ChatBot – Assistente AI',
    description:
      'ChatBot inteligente e personalizável, adaptado ao fluxo de atendimento e estilo do seu negócio.',
    imageUrl: gideon,
    category: 'Robô AI',
    demo: false,
    url: 'https://www.instagram.com/reel/DIdxJjPRjFW/?igsh=MXFtN3Z3a2wzYzkyaw==',
    technologies: ['Node.js', 'TypeScript', 'FireBase'],
  },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-5xl font-extrabold text-white mb-4"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        Nossos Projetos
                    </motion.h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r bg-[#3B82F6] mx-auto rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    />
                    <motion.p
                        className="text-gray-400 max-w-2xl mx-auto mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Explore nosso portfólio de soluções de TI e design moderno, desenvolvido para
                        transformar a presença digital da sua empresa.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            className="h-full"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.1 + 0.2 }}
                        >
                            <ProjectsCards project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}