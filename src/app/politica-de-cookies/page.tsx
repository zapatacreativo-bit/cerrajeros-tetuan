import { Metadata } from 'next';
import React from 'react';



export const metadata: Metadata = {
    title: 'Cerrajeros Tetuán | Politica De Cookies',
    description: 'Información legal y de seguridad de Cerrajeros Tetuán.',
    keywords: 'cerrajería tetuán, seguridad madrid, cerrajero madrid',
    alternates: {
        canonical: 'https://www.cerrajerostetuan.com/politica-de-cookies',
    },
    openGraph: {
        title: 'Cerrajeros Tetuán | Politica De Cookies',
        description: 'Información legal y de seguridad de Cerrajeros Tetuán.',
        url: 'https://www.cerrajerostetuan.com/politica-de-cookies',
        images: [{ url: 'https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cerrajeros Tetuán | Politica De Cookies',
        description: 'Información legal y de seguridad de Cerrajeros Tetuán.',
        images: ['https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png'],
    }
};

export default function PoliticaCookies() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-base)', paddingTop: '120px', paddingBottom: '6rem' }}>
            <div className="container" style={{ maxWidth: '800px', color: '#d1d5db' }}>
                <h1 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '2rem', fontWeight: 700 }}>Política de Cookies</h1>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>¿Qué son las cookies?</h2>
                    <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web de ALTORIA SERVICOMPLEX S.L., entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>¿Qué tipos de cookies utiliza esta página web?</h2>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: 1.6 }}>
                        <li><strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan.</li>
                        <li><strong>Cookies de personalización:</strong> Son aquellas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario.</li>
                        <li><strong>Cookies de análisis:</strong> Son aquellas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>Cómo desactivar o eliminar las cookies</h2>
                    <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. Al desactivar cookies, es posible que no pueda acceder a ciertas secciones de nuestra web o que la navegación se vea afectada.</p>
                </section>
            </div>
        </main>
    );
}
