import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casteris",
  description:
    "Casteris es una plataforma de conocimiento, construcción y consultoría tecnológica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}