import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AfriYouth Innovation Labs",
  description:
    "Evidence, innovation and entrepreneurship programs for young people across Africa.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
