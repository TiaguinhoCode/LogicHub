// Css
import "@/styles/globals.css";

// Configuração
import { inter } from "@/config/fonts";

// Next
import { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

// Vercel
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// metados
export const metadata: Metadata = {
  title: "LogicHub - Consultoria em T.I",
  description:
    "Consultoria em TI e desenvolvimento de software sob medida para empresas, proporcionando inovação, eficiência e transformação digital.",
  keywords: [
    "consultoria de TI",
    "serviços de tecnologia da informação",
    "suporte técnico para empresas",
    "infraestrutura de TI",
    "segurança da informação",
    "cloud computing",
    "transformação digital",
    "sistemas empresariais",
    "lógica hub",
    "logichub consultoria TI",
    "empresa t.i",
    "software",
    "saas",
    "desenvolvedor",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "LogicHub - Consultoria em T.I",
    description:
      "Consultoria em TI e desenvolvimento de software sob medida para empresas, proporcionando inovação, eficiência e transformação digital.",
    images: ["/favicon.ico"],
  },
  icons: [{ url: "/favicon.ico", type: "image/png", sizes: "180x180" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="pt-br">
      <head />
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
        <NextTopLoader />
      </body>
    </html>
  );
}
