export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "LogicHub",
  description:
    "Consultoria em TI e desenvolvimento de software sob medida para empresas, proporcionando inovação, eficiência e transformação digital.",
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
    whatsApp:
      "https://wa.me/558587806692?text=Ol%C3%A1%2C%20estou%20interessado%20em%20seus%20servi%C3%A7os%21",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
