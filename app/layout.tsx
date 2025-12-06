import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Curso DOT en español | EL-VÍA – Entrenamiento para camioneros latinos",
  description:
    "Aprende el idioma operativo del DOT con un entrenamiento cognitivo diseñado para camioneros latinos en Estados Unidos. Frases reales del inspector, roleplays, examen inteligente y certificado oficial.",
  keywords: [
    "curso DOT español",
    "DOT inspection spanish",
    "curso DOT para camioneros",
    "DOT training truckers",
    "camioneros latinos DOT",
    "entrenamiento DOT IA",
    "curso para truckers latinos",
    "inspección DOT en español",
  ],
  openGraph: {
    title: "EL-VÍA – Curso DOT en español con IA para camioneros latinos",
    description:
      "Entrenamiento cognitivo con IA soberana para dominar inspecciones DOT. Aprende frases reales del inspector, practica con roleplays y obtén certificado oficial.",
    url: "https://elviaai.solyontechnologies.com",
    siteName: "EL-VÍA by SOLYON",
    images: [
      {
        url: "/elvia/og-elvia.png",
        width: 1200,
        height: 630,
        alt: "EL-VÍA – Curso DOT en español para camioneros latinos",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {/* Google Analytics 4 – ID: G-BX6MESC5BX */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BX6MESC5BX"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BX6MESC5BX');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
