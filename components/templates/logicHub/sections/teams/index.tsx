"use client";

// Componentes
import AnimatedSection from "@/components/ui/animation/sections";

// Bibliotecas
import { motion } from "framer-motion";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { Chip } from "@heroui/react";

// Imagens
import tiago from "@/public/img/tiago.jpg";
import jamille from "@/public/img/jamille.png";

// Next
import Link from "next/link";
import Image from "next/image";

// React
import { useRouter } from "next/navigation";
import { useTopLoader } from "nextjs-toploader";

export default function Teams() {
  const router = useRouter();
  const loader = useTopLoader();

  const team = [
    {
      name: "Tiago Rafael",
      role: "CEO & Desenvolvedor Full Stack",
      experience: "1 ano e 6 meses",
      avatar: tiago,
      bio: "Desenvolvedor full‑stack com foco em performance e melhoria. Especialista em Next.js e Java.",
      stack: [
        "Next.js",
        "Node.js",
        "Scrum",
        "DevOps",
        "Python",
        "Git",
        "GitHub",
        "Java",
      ],
      linkedin: "https://linkedin.com/in/tiag0rafael",
      github: "https://github.com/TiaguinhoCode",
      findOutMore: "/curriculo?nome=Tiago",
    },
    {
      name: "Jamille Araujo",
      role: "CEO & Desenvolvedora Font-end",
      experience: "1 ano",
      avatar: jamille,
      bio: "Desenvolvedora full‑stack com foco em performance e UX. Especialista em React e arquiteturas escaláveis.",
      stack: [
        "React",
        "TypeScript",
        "Angular",
        "Node.js",
        "PostgreSQL",
        "Git",
        "GitHub",
      ],
      linkedin: "https://linkedin.com/in/jamille-araujo-1060a01a3",
      github: "https://github.com/heyJamille",
      findOutMore: "/curriculo?nome=Jamille",
    },
  ];

  const handleKnowMore = (member: string) => {
    loader.start();

    router.push(member);
  };

  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Nossa Equipe</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Profissionais experientes e apaixonados por tecnologia
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <AnimatedSection key={index}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 text-center"
              >
                <Image
                  src={member.avatar.src}
                  alt={member.name}
                  width={member.avatar.width}
                  height={member.avatar.height}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-400 mb-2">{member.role}</p>
                <p className="text-white/60 text-sm mb-3">
                  {member.experience}
                </p>
                <p className="text-white/70 text-sm mb-4">{member.bio}</p>

                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {member.stack.map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      className="bg-blue-500/20 text-blue-200 text-xs"
                    >
                      {tech}
                    </Chip>
                  ))}
                </div>

                <div className="flex justify-center space-x-3 mb-4">
                  <Link
                    href={member.linkedin}
                    className="text-white/60 hover:text-blue-400 transition-colors"
                  >
                    <IoLogoLinkedin className="w-6 h-6" />
                  </Link>
                  <Link
                    href={member.github}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <IoLogoGithub className="w-6 h-6" />
                  </Link>
                </div>

                <button
                  onClick={() => handleKnowMore(member.findOutMore)}
                  className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors text-sm"
                >
                  Saber mais
                </button>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
