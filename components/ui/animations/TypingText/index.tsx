'use client'

// Bibliotecas
import { motion } from 'framer-motion'

// Variantes para animação do container de texto
const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.5,
      },
    },
  };
  
  // Variantes para animação de cada letra
  const letter = {
    hidden: { opacity: 0, y: '0.25em' },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

export default function TypeText({ text, className }: { text: string, className: string }) {
    return (
        <motion.span
            variants={sentence}
            initial="hidden"
            animate="visible"
            className={className}
            style={{ display: "inline-block", overflow: "hidden", whiteSpace: "nowrap" }}
        >
            {text.split("").map((char, index) => (
                <motion.span key={index} variants={letter}>
                    {char}
                </motion.span>
            ))}
        </motion.span>
    )
}