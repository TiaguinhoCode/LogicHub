'use client';

// Bibliotecas
import { Navbar as HeroUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu } from "@heroui/navbar";
import { Link } from "@heroui/link";
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

// React
import { useState } from "react";

// Next
import Image from "next/image";

// Imagens
import slogan from "@/public/img/slogan.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    setScrolled(current > 50);
  });

  const menuItems = [
    { name: "Serviços", href: "#services" },
    { name: "Benefícios", href: "#benefits" },
    { name: "Projetos", href: "#projects" },
    { name: "Equipe", href: "#team" },
    { name: "Contato", href: "#contact" },
  ];


  return (
    <HeroUINavbar
      onMenuOpenChange={setIsOpen}
      isMenuOpen={isOpen}
      maxWidth="xl"
      classNames={{ base: `fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${scrolled ? 'bg-black/50 shadow-md' : 'bg-transparent'}` }}
    >
      <NavbarBrand>
        <motion.div animate={scrolled ? { scale: 0.9 } : { scale: 1 }} className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
            <Image priority src={slogan} alt="Slogan" className="-scale-x-100" />
          </div>
          <span className="text-xl font-extrabold text-white">LOGICHUB</span>
        </motion.div>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarMenuToggle className="text-white/80 hover:text-white sm:hidden" aria-label="Menu" />
      </NavbarContent>

      <NavbarMenu className="lg:hidden bg-black/50 backdrop-blur-md p-6 rounded-b-lg space-y-4">
        {menuItems.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isOpen ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 }}
          >
            <NavbarItem>
              <Link href={item.href} className="block text-lg font-medium text-gray-200 hover:text-white" onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            </NavbarItem>
          </motion.div>
        ))}
      </NavbarMenu>

      <NavbarContent className="hidden sm:flex space-x-6">
        {menuItems.map(item => (
          <NavbarItem key={item.name}>
            <Link href={item.href} className="text-gray-200 hover:text-white transition">
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </HeroUINavbar>
  );
}
