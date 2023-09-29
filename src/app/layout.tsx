import Providers from "@/Components/Providers";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Stack Next.JS!",
  description: "Full Stack Next.JS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-slate-200`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
};