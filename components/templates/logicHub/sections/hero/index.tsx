'use client'

// Bibliotecas
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@heroui/button';
import { LuArrowRight, LuChevronsDown } from 'react-icons/lu';

// React
import { useState, useEffect } from 'react';

// Componentes
import { AnimatedCounter } from '@/components/ui/animation/animatedNumber';

export default function HeroSection() {
    const words = ["Ideias", "Desafios", "Sonhos", "Inovações"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [words.length]);

    const characterVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.15 } },
        exit: { opacity: 0, transition: { duration: 0.1 } }
    };

    const wordContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2
            }
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    return (
        <main className='pb-10'>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-800/20" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center py-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <h1 className="text-[42px] md:text-7xl font-bold text-white mb-6 leading-tight">
                            Transformamos
                            <span className="bg-gradient-to-r px-3 from-blue-400 to-blue-600 bg-clip-text text-transparent">
                                <AnimatePresence mode='wait'>
                                    <motion.span
                                        key={currentWordIndex}
                                        variants={wordContainerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="inline-block"
                                    >
                                        {words.map((word, index) => (
                                            currentWordIndex === index && word.split('').map((char, charIndex) => (
                                                <motion.span key={charIndex} variants={characterVariants}>
                                                    {char === ' ' ? '\u00A0' : char}
                                                </motion.span>
                                            ))
                                        ))
                                        }
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                            <br />
                            em Soluções
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                            Consultoria especializada em desenvolvimento de software, arquitetura cloud e transformação digital.
                            Levamos sua empresa para o próximo nível tecnológico.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                    >
                        <Button
                            as="a"
                            endContent={<LuArrowRight className="ml-2 w-5 h-5" />}
                            target='_blank'
                            rel="noopener noreferrer"
                            href="https://wa.me/558587805592?text=Ol%C3%A1%2C%20estou%20interessado%20em%20seus%20serviços%21"
                            size="lg"
                            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white border-0 px-8 py-4 text-lg"
                        >
                            Começar Projeto
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
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                    >
                        <div>
                            <div className="text-3xl font-bold text-white mb-2"><AnimatedCounter to={4} suffix="+" /></div>
                            <div className="text-white/60">Projetos Entregues</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-2"><AnimatedCounter to={100} suffix="%" /></div>
                            <div className="text-white/60">Satisfação Cliente</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-2"><AnimatedCounter to={1} suffix="+" /></div>
                            <div className="text-white/60">Anos Experiência</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-2"><AnimatedCounter to={5} suffix="/" />7</div>
                            <div className="text-white/60">Suporte Técnico</div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute left-1/2 right-1/2 mx-auto -bottom-2"
                >
                    <LuChevronsDown className="w-8 h-8 text-white/60" />
                </motion.div>
            </div>
        </main>
    )
}