import type { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Mon Portfolio",
  description: "Développeur web et mobile",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}