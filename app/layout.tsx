import type { Metadata } from "next";
import { Figtree, Poppins } from "next/font/google";
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
  title: "AfriYouth Innovation Labs",
  description:
    "Evidence, innovation and entrepreneurship programs for young people across Africa.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
