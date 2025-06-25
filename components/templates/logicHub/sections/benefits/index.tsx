"use client";

// Componentes
import AnimatedSection from "@/components/ui/animation/sections";

// Bibliotecas
import { IoCheckmarkCircle, IoSettings, IoTrendingUp } from "react-icons/io5";
import {
  LuArrowRight,
  LuAward,
  LuClock,
  LuHeartHandshake,
  LuLightbulb,
} from "react-icons/lu";
import { motion } from "framer-motion";
import { Button, Chip } from "@heroui/react";

export default function Benefits() {
  const benefits = [
    {
      icon: LuClock,
      title: "Entrega Rápida",
      description:
        "Metodologia ágil com entregas em até 30% menos tempo que a concorrência",
      highlight: "30% mais rápido",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: LuAward,
      title: "Qualidade Garantida",
      description:
        "Código limpo, testes automatizados e documentação completa em todos os projetos",
      highlight: "100% testado",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: IoTrendingUp,
      title: "ROI Comprovado",
      description:
        "Nossos clientes veem retorno médio de 300% sobre o investimento em 12 meses",
      highlight: "300% ROI",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: LuHeartHandshake,
      title: "Consultoria Grátis",
      description: "Avaliação inicial sem custo para mapear suas necessidades.",
      highlight: "Sem custos",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: LuLightbulb,
      title: "Inovação Constante",
      description:
        "Utilizamos as tecnologias mais recentes e melhores práticas do mercado",
      highlight: "Tecnologia de ponta",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: IoSettings,
      title: "Escalabilidade",
      description:
        "Soluções que crescem com seu negócio, suportando milhões de usuários",
      highlight: "Infinitamente escalável",
      color: "from-blue-700 to-blue-800",
    },
  ];

  return (
    <section id="benefits" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Por Que Escolher a LogicHub?
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Somos mais que uma consultoria - somos seu parceiro estratégico para
            o sucesso digital
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index}>
              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 overflow-hidden group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <Chip
                      className={`bg-gradient-to-r ${benefit.color} text-white border-0 text-xs font-medium`}
                    >
                      {benefit.highlight}
                    </Chip>
                  </div>

                  <p className="text-white/70 leading-relaxed">
                    {benefit.description}
                  </p>

                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <IoCheckmarkCircle className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 backdrop-blur-md rounded-2xl p-8 border border-blue-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para Revolucionar seu Negócio?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Junte-se a mais de 4 empresas que já transformaram seus resultados
              com nossas soluções. Agende uma consulta gratuita e descubra como
              podemos acelerar seu crescimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as="a"
                endContent={<LuArrowRight className="ml-2 w-5 h-5" />}
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/558587805592?text=Ol%C3%A1%2C%20estou%20interessado%20em%20seus%20serviços%21"
                size="lg"
                className="bg-gradient-to-r flex items-center justify-center from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white border-0 px-8 py-4"
              >
                Consulta Gratuita
              </Button>
              <Button
                as="a"
                href="#projects"
                size="lg"
                variant="faded"
                className="border-blue-400/50 text-gray-900 hover:text-blue-200 hover:bg-blue-500/10 px-8 py-4"
              >
                Ver Cases de Sucesso
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
