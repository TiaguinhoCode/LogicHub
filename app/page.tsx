'use client'

// Componentes
import FormContacts from "@/components/forms/contacts";
import Projects from "@/components/projects";
import Service from "@/components/service";
import Steps from "@/components/steps";
import TypeText from "@/components/ui/animations/TypingText";
import Contacts from './../components/contancts/index';

// Bibliotecas
import { motion } from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/558587806692?text=Ol%C3%A1%2C%20estou%20interessado%20em%20seus%20servi%C3%A7os%21"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-600"
    >
      <FaWhatsapp className="w-7 h-7" />
    </motion.a>
  );
}

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="container mx-auto flex flex-col items-center justify-center min-h-screen w-full px-4">
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800">
              Transforme suas ideias em
              <TypeText text="soluções digitais" className="text-blue-600 pb-3" />
            </h1>
            <p className="text-lg text-gray-600">
              Mais do que escrever códigos, desenvolvo landing pages envolventes, softwares web sob medida e automações inteligentes. Com experiência comprovada, transformo dados em relatórios dinâmicos e intuitivos, auxiliando CEOs e tomadores de decisão a traçar estratégias assertivas para acelerar o crescimento do seu negócio.
            </p>
          </div>
          <FormContacts />
        </div>
      </section>

      <Service />
      <Steps />
      <Projects />
      <Contacts />

      <FloatingWhatsAppButton />
    </motion.main>
  );
}
