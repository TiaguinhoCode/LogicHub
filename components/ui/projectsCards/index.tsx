// Next
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Biblioteca
import { LuExternalLink } from "react-icons/lu";

// Tipagem
type ProjectItems = {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: StaticImageData | string;
    url: string;
    category: string;
    demo: boolean;
};

export default function ProjectsCards({
    project,
}: {
    project: ProjectItems;
}) {
    return (
        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col h-full">
            {project.demo && (
                <span className="absolute top-4 left-4 bg-[#3B82F6] text-white text-sm font-semibold px-3 py-1 rounded-full z-10">
                    DEMO
                </span>
            )}

            <div className="relative h-64 overflow-hidden">
                <Image
                    src={project.imageUrl as StaticImageData}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#3B82F6] text-white p-3 rounded-full transition-colors"
                    >
                        <LuExternalLink size={20} />
                    </Link>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-200 mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 bg-gray-600 text-xs text-gray-100 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
