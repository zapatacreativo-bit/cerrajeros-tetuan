import { Metadata } from 'next';
import React from 'react';



export const metadata: Metadata = {
    title: 'Cerrajeros Tetuán | Aviso Legal',
    description: 'Información legal y de seguridad de Cerrajeros Tetuán.',
    keywords: 'cerrajería tetuán, seguridad madrid, cerrajero madrid',
    alternates: {
        canonical: 'https://www.tetuancerrajeros.com/aviso-legal',
    },
    openGraph: {
        title: 'Cerrajeros Tetuán | Aviso Legal',
        description: 'Información legal y de seguridad de Cerrajeros Tetuán.',
        url: 'https://www.tetuancerrajeros.com/aviso-legal',
        images: [{ url: 'https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cerrajeros Tetuán | Aviso Legal',
        description: 'Información legal y de seguridad de Cerrajeros Tetuán.',
        images: ['https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png'],
    }
};

export default function AvisoLegal() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-base)', paddingTop: '120px', paddingBottom: '6rem' }}>
            <div className="container" style={{ maxWidth: '800px', color: '#d1d5db' }}>
                <h1 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '2rem', fontWeight: 700 }}>Aviso Legal</h1>

                <section style={{ marginBottom: '2rem' }}>
                    <p style={{ marginBottom: '1rem', color: '#8892b0' }}>Última actualización: Enero 2026 | Normativa Vigente LSSI-CE / RGPD</p>
                    <h2 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>1. Datos Identificativos del Titular</h2>
                    <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se exponen los datos identificativos de la entidad titular del sitio web:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                        <li><strong>Denominación Social:</strong> ALTORIA SERVICOMPLEX S.L. (en adelante, "EL TITULAR").</li>
                        <li><strong>CIF/NIF:</strong> B75671032</li>
                        <li><strong>Domicilio Social:</strong> C. del Marqués de Leis, 4, Tetuán, 28020 Madrid.</li>
                        <li><strong>Actividad:</strong> Servicios de Cerrajería, Seguridad Física y Automatismos.</li>
                        <li><strong>Email de contacto:</strong> info@tetuancerrajeros.com</li>
                        <li><strong>Teléfono:</strong> (+34) 644 936 742</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>2. Objeto y Ámbito de Aplicación</h2>
                    <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>Las presentes Condiciones Generales de Uso (en adelante, las "Condiciones") regulan el acceso, navegación y uso del sitio web, así como las responsabilidades derivadas de la utilización de sus contenidos.</p>
                    <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>Se entenderá que el acceso o la mera utilización del Sitio Web por parte del Usuario implica la adhesión de éste a las Condiciones Generales que EL TITULAR tenga publicadas en cada momento en el que acceda al Sitio Web.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>3. Derechos de Propiedad Intelectual e Industrial</h2>
                    <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>EL TITULAR es propietario de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma. Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización expresa del TITULAR.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>4. Exclusión de Garantías y Responsabilidad</h2>
                    <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>EL TITULAR declara que ha adoptado las medidas necesarias que, dentro de sus posibilidades y el estado de la tecnología, permitan el correcto funcionamiento de su sitio web. Sin embargo, no puede hacerse responsable de la continuidad y disponibilidad de los contenidos y servicios, ni de la ausencia de virus y/o demás componentes dañinos.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>5. Contratación de Servicios y Precios</h2>
                    <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>Este sitio web tiene carácter informativo y publicitario. La contratación de los servicios de cerrajería urgente o concertada se perfecciona mediante contacto telefónico o presencial.</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: 1.6 }}>
                        <li>Todos nuestros técnicos disponen de hojas de reclamaciones oficiales a disposición del cliente.</li>
                        <li>Los presupuestos previos son gratuitos y válidos durante 30 días, salvo estipulación contraria.</li>
                        <li>En intervenciones de urgencia (fuera de horario comercial), se aplicarán las tarifas de nocturnidad/festividad vigentes, que serán comunicadas al cliente telefónicamente y aceptadas antes del desplazamiento.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>6. Ley Aplicable y Jurisdicción</h2>
                    <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>La normativa vigente determinará las leyes que deban regir y la jurisdicción que deba conocer de las relaciones entre EL TITULAR y el USUARIO. EL TITULAR y el USUARIO renuncian expresamente a cualquier otro fuero que pudiera corresponderles y se someten a los pertinentes Juzgados y Tribunales de la ciudad de Madrid.</p>
                </section>
            </div>
        </main>
    );
}
