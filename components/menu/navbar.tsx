// Bibliotecas
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import { FaGithub, FaWhatsapp } from 'react-icons/fa';

// Next
import NextLink from "next/link";
import clsx from "clsx";

// Utils
import { siteConfig } from "@/config/site";

// Componentes
import { Logo } from "@/components/icons";
import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="2xl" position="sticky" classNames={{ base: "bg-[#F5F5F5]", }}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-3">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          {/* <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <FaInstagram className="text-[#E1306C] text-2xl" />
          </Link> */}
          <Link isExternal aria-label="Github" href={siteConfig.links.whatsApp}>
            <FaWhatsapp className="text-[#25D366] text-2xl" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <FaGithub className="text-[#000] text-2xl" />
          </Link>
        </NavbarItem>
        <div className="md:flex lg:hidden">
          <NavbarMenuToggle />
        </div>
        <NavbarItem className="hidden lg:flex">
          <Button color="primary" radius="md" variant="shadow" className="font-bold">Contate-nos</Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <FaGithub className="text-[#000] text-2xl" />
        </Link>
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <FaWhatsapp className="text-[#25D366] text-2xl" />
        </Link>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
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
