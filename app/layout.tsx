import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EL-VÍA · Curso DOT en español para camioneros latinos",
  description:
    "Entrenamiento cognitivo con IA que te enseña el idioma operativo del DOT. Crea confianza en inspecciones y protege tu trabajo como camionero latino en Estados Unidos."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
