import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";

export const metadata: Metadata = {
  title: "Cerrajeros Tetuán | Servicio 24h Urgente ☎ 644 936 742",
  description: "Cerrajeros en Tetuán 24 horas. Apertura de puertas, cambio de cerraduras, bombines antibumping. Llegamos en 20 min. Llama al 644 936 742.",
  keywords: "cerrajeros tetuan, cerrajero urgente tetuan, cerrajero 24 horas madrid, cambiar bombin tetuan, abrir puerta tetuan",
  authors: [{ name: "Cerrajeros Tetuán" }],
  openGraph: {
    title: "Cerrajeros Tetuán | Servicio 24h Urgente",
    description: "Cerrajeros en Tetuán 24 horas. Intervención en 20 minutos sin intermediarios.",
    url: "https://www.cerrajerostetuan.com",
    siteName: "Cerrajeros Tetuán",
    images: [{ url: "https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png", width: 1200, height: 630 }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cerrajeros Tetuán | Servicio 24h Urgente",
    description: "Cerrajeros en Tetuán 24 horas. Llegamos en 20 min. Llama al 644 936 742.",
    images: ["https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png"],
  },
  alternates: {
    canonical: "https://www.cerrajerostetuan.com",
  },
  other: {
    "geo.region": "ES-MD",
    "geo.placename": "Tetuán, Madrid",
    "geo.position": "40.460836;-3.715367",
    "ICBM": "40.460836, -3.715367"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Cerrajeros Tetuán",
              "image": "https://www.cerrajerostetuan.com/images/custom_logo.png",
              "@id": "https://www.cerrajerostetuan.com",
              "url": "https://www.cerrajerostetuan.com",
              "telephone": "+34644936742",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tetuán, Madrid",
                "postalCode": "28020",
                "addressCountry": "ES"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.460836,
                "longitude": -3.715367
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "priceRange": "$$"
            })
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${inter.variable}`}>
        <Header />
        {children}
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
