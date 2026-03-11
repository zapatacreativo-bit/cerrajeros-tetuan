import { Metadata } from 'next';
import React from 'react';



export const metadata: Metadata = {
    title: 'Cerrajeros Tetuán | Garantias',
    description: 'Información legal y de seguridad de Cerrajeros Tetuán.',
    keywords: 'cerrajería tetuán, seguridad madrid, cerrajero madrid',
    alternates: {
        canonical: 'https://www.tetuancerrajeros.com/garantias',
    },
    openGraph: {
        title: 'Cerrajeros Tetuán | Garantias',
        description: 'Información legal y de seguridad de Cerrajeros Tetuán.',
        url: 'https://www.tetuancerrajeros.com/garantias',
        images: [{ url: 'https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cerrajeros Tetuán | Garantias',
        description: 'Información legal y de seguridad de Cerrajeros Tetuán.',
        images: ['https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png'],
    }
};

export default function Garantias() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-base)', paddingTop: '120px', paddingBottom: '6rem' }}>
            <div className="container" style={{ maxWidth: '800px', color: '#d1d5db' }}>
                <h1 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '2rem', fontWeight: 700 }}>Garantías y Compromisos</h1>

                <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: '#a8b2d1' }}>Trabajamos bajo un estricto código ético y profesional. Nuestra mejor garantía es la transparencia y el trabajo bien hecho.</p>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>Mano de Obra</h2>
                    <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>Garantizamos todas nuestras reparaciones e instalaciones por un periodo de <strong>3 meses</strong> en lo referente a la mano de obra, tal como estipula la ley vigente de defensa del consumidor para servicios de reparación a domicilio.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>Materiales</h2>
                    <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>Todos los bombines, cerraduras, cerrojos y escudos nuevos instalados cuentan con la garantía oficial del fabricante de <strong>3 años</strong> contra defectos de fabricación.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>Factura Oficial y Desglose</h2>
                    <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>Nunca trabajamos en "B". Todos nuestros servicios finalizan con la entrega de una <strong>factura oficial numerada con todos los datos fiscales, IVA desglosado y detalle de los trabajos realizados</strong>. Esta factura es imprescindible para ejercer cualquier derecho de garantía o reclamación ante su seguro de hogar.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>Adhesión a Arbitraje</h2>
                    <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>Estamos adheridos al Sistema Arbitral de Consumo de la Comunidad de Madrid. Esto garantiza que, en caso de disconformidad, el cliente puede acudir a una vía extrajudicial, rápida y gratuita para resolver el conflicto.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>Derecho de Desistimiento</h2>
                    <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>En servicios de urgencia ejecutados completamente con el consentimiento previo del consumidor (aperturas), el derecho de desistimiento decae una vez finalizado el servicio. Para instalaciones concertadas, póngase en contacto con nosotros para conocer las condiciones.</p>
                </section>
            </div>
        </main>
    );
}
