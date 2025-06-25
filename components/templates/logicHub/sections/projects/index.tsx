"use client";

// Componentes
import AnimatedSection from "@/components/ui/animation/sections";

// Bibliotecas
import { Chip } from "@heroui/react";
import { LuExternalLink } from "react-icons/lu";

// Imagens
import protecSafe from "@/public/img/protectSafe.png";
import dashBoard from "@/public/img/dashBoard.png";
import finHub from "@/public/img/finHub.png";
import gideon from "@/public/img/gideonChatBot.png";

// Next
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Landing Page",
      description:
        "Landing page moderna para ProtecSafe, destacando soluções avançadas em CFTV e controle de acesso.",
      image: protecSafe,
      tech: ["Next.js", "TypeScript", "TailwindCss", "HeroUI"],
      link: "https://protectsafe-navy.vercel.app",
      category: "Marketing",
    },
    {
      id: 2,
      title: "Sistema de BI",
      description:
        "Sistema de BI para otimização de estratégias de vendas e gestão de lojas de acessórios para celular. Oferece dashboards interativos, análise de tendências de vendas e monitoramento de KPIs",
      image: dashBoard,
      tech: [
        "Next.js",
        "TypeScript",
        "TailwindCss",
        "Nest.js",
        "Firebird",
        "HeroUI",
      ],
      category: "Análise de dados",
    },
    {
      id: 3,
      title: "FinHub",
      description:
        "Sistema de gestão financeiro e investimentos para controlar seus gastos pessoais",
      image: finHub,
      tech: ["Angular", "TypeScript", "TailwindCss", "Nest.JS", "PostgreSQL"],
      category: "Em desenvolvimento",
    },
    {
      id: 4,
      title: "Gideon ChatBot",
      description:
        "ChatBot inteligente e personalizável, adaptado ao fluxo de atendimento e estilo do seu negócio.",
      image: gideon,
      tech: ["Node.js", "TypeScript", "FireBase"],
      link: "https://www.instagram.com/reel/DIdxJjPRjFW/",
      category: "Automação",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white/5 backdrop-blur-sm">
      <div className="w-full md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Conheça alguns dos nossos projetos mais impactantes e inovadores
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <AnimatedSection key={project.id}>
              <main className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all duration-300 cursor-pointer">
                <div className="relative h-[13em] md:h-[16em] overflow-hidden">
                  <Image
                    priority
                    src={project.image}
                    alt={project.title}
                    width={project.image.width}
                    height={project.image.height}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />

                  <div className="absolute top-4 right-4">
                    <Chip color="primary" className="bg-blue-500/90 text-white">
                      {project.category}
                    </Chip>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        color="primary"
                        className="border-blue-400/30 text-blue-200"
                      >
                        {tech}
                      </Chip>
                    ))}
                  </div>
                  <div
                    className={`flex justify-between ${!project.link && "hidden"} items-center text-sm text-white/60`}
                  >
                    <Link href={`${project.link}`}>
                      <span>Ver detalhes</span>
                    </Link>
                    <Link href={`${project.link}`}>
                      <LuExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </main>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
