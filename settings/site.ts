export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "LogicHub",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Sobre-nós",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
  ],
  links: {
    github: "https://github.com/TiaguinhoCode",
    insgram: "",
    whatsApp: "https://wa.me/558587805592?text=Ol%C3%A1%2C%20estou%20interessado%20em%20seus%20servi%C3%A7os%21",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
