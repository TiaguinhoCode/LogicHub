// Bibliotecas
import { SiNextui, SiPython } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";

export default function Technologies() {
    const data = [
        { name: "Next.js", icon: <RiNextjsFill size={48} color="#000" /> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill size={48} color="#06B6D4" /> },
        { name: "NextUI", icon: <SiNextui size={48} color="#000" /> },
        { name: "TypeScript", icon: <BiLogoTypescript size={48} color="#3178C6" /> },
        { name: "Python", icon: <SiPython size={48} color="#3776AB" /> },
        { name: "Node.js", icon: <FaNode size={48} color="#68A063" /> },
    ];

    return (
        <section className="container mx-auto py-10">
            <h2 className="text-center text-2xl font-bold mb-8">Tecnologias Utilizadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-6">
                {data.map((tech) => (
                    <div key={tech.name} className="flex w-full flex-col items-center">
                        {tech.icon}
                        <span className="text-lg font-medium">{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}