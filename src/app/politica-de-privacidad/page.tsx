import { Metadata } from 'next';
import React from 'react';



export const metadata: Metadata = {
    title: 'Cerrajeros Tetuán | Politica De Privacidad',
    description: 'Información legal y de seguridad de Cerrajeros Tetuán.',
    keywords: 'cerrajería tetuán, seguridad madrid, cerrajero madrid',
    alternates: {
        canonical: 'https://www.tetuancerrajeros.com/politica-de-privacidad',
    },
    openGraph: {
        title: 'Cerrajeros Tetuán | Politica De Privacidad',
        description: 'Información legal y de seguridad de Cerrajeros Tetuán.',
        url: 'https://www.tetuancerrajeros.com/politica-de-privacidad',
        images: [{ url: 'https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cerrajeros Tetuán | Politica De Privacidad',
        description: 'Información legal y de seguridad de Cerrajeros Tetuán.',
        images: ['https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png'],
    }
};

export default function PoliticaPrivacidad() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-base)', paddingTop: '120px', paddingBottom: '6rem' }}>
            <div className="container" style={{ maxWidth: '800px', color: '#d1d5db' }}>
                <h1 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '2rem', fontWeight: 700 }}>Política de Privacidad</h1>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>1. Protección de Datos</h2>
                    <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>ALTORIA SERVICOMPLEX S.L. (B75671032) cumple con las directrices de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, y del Reglamento (UE) 2016/679 General de Protección de Datos (RGPD), velando por garantizar un correcto uso y tratamiento de los datos personales del usuario.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>2. Recogida y Finalidad</h2>
                    <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>Los datos personales que se puedan recoger a través de la página web mediante formularios de contacto o de cualquier otra forma, serán incorporados a un fichero del que es responsable ALTORIA SERVICOMPLEX S.L. Estos datos se utilizarán para gestionar las solicitudes, presupuestos o la prestación del servicio de cerrajería demandado.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>3. Derechos de los Usuarios</h2>
                    <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>Cualquier persona tiene derecho a obtener confirmación sobre si en ALTORIA SERVICOMPLEX S.L. estamos tratando datos personales que les conciernan, o no. Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos dirigiendo un escrito o email info@tetuancerrajeros.com.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>4. Medidas de Seguridad</h2>
                    <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>De acuerdo con la legislación vigente, hemos adoptado las medidas técnicas y organizativas necesarias para mantener el nivel de seguridad requerido, con el fin de evitar la pérdida, robo, alteración, acceso no autorizado o mal uso de los datos personales proporcionados.</p>
                </section>
            </div>
        </main>
    );
}
