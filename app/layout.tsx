import type { Metadata } from "next";
import { Figtree, Poppins } from "next/font/google";
import { BackToTop } from "@/components/back-to-top";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { IconSprite } from "@/components/icon";
import { OrganizationSchema } from "@/components/organization-schema";
import { ScrollReveal } from "@/components/reveal";
import { siteDescription, siteName, siteUrl, socialDefaults } from "@/lib/seo";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  icons: { icon: "/logo/favicon.svg" },
  alternates: { canonical: "/" },
  ...socialDefaults,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${figtree.variable}`}>
      <body>
        <OrganizationSchema />
        <IconSprite />
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <BackToTop />
        <ScrollReveal />
      </body>
    </html>
  );
}
