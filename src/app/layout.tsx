import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https:" + "//" + ["www", "casteris", "com"].join("."),
  ),
  title: "Casteris | Comprender. Construir. Liderar.",
  description:
    "Conocimiento, construcción y consultoría tecnológica para profesionales y organizaciones que buscan comprender mejor la tecnología y construir soluciones con criterio.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "Casteris",
    title: "Casteris | Comprender. Construir. Liderar.",
    description:
      "Conocimiento, construcción y consultoría tecnológica para profesionales y organizaciones que buscan comprender mejor la tecnología y construir soluciones con criterio.",
  },
  twitter: {
    card: "summary",
    title: "Casteris | Comprender. Construir. Liderar.",
    description:
      "Conocimiento, construcción y consultoría tecnológica para profesionales y organizaciones que buscan comprender mejor la tecnología y construir soluciones con criterio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetBrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
