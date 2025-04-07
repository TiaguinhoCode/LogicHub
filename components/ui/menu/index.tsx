// Bibliotecas
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";

// Next
import NextLink from "next/link";
import clsx from "clsx";

// Config
import { siteConfig } from "@/config/site";

// Componentes
import { Logo } from "@/components/icons";

export const Navbar = () => {

  return (
    <HeroUINavbar
      className="sticky top-0 z-50 border-b border-gray-600  bg-gray-900/70 dark:bg-gray-800/70 backdrop-blur-md shadow-lg px-6 py-3"
      maxWidth="xl"
      position="static"
    >
      <NavbarContent justify="start">
        <NavbarBrand as="li" className="max-w-fit">
          <NextLink href="/" className="flex items-center gap-2">
            <Logo />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        justify="center"
        className="hidden lg:flex flex-1"
      >
        <ul className="flex gap-8">
          {siteConfig.navItems.map((item) => {
            return (
              <NavbarItem key={item.href}>
                <NextLink
                  href={item.href}
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "relative text-lg transition-colors duration-200 text-white hover:text-[#3f83f8]",
                  )}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>

      <NavbarContent justify="end" className="flex-1 items-center gap-4">
        <Link href="https://wa.me/558587805592?text=Ol%C3%A1%2C%20estou%20interessado%20em%20seus%20servi%C3%A7os%21">
          <Button className="bg-[#3f83f8] rounded-lg text-white px-6 hover:shadow-xl transition">
            Contratar
          </Button>
        </Link>

        <NavbarMenuToggle className="lg:hidden text-white" aria-label="Abrir menu" />
      </NavbarContent>

      <NavbarMenu className="lg:hidden ">
        <div className="flex flex-col h-full dark:bg-gray-900 p-6 space-y-4">
          {siteConfig.navMenuItems.map((item, idx) => (
            <NavbarMenuItem key={idx}>
              <Link
                href={item.href}
                size="lg"
                className="block text-gray-800"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
