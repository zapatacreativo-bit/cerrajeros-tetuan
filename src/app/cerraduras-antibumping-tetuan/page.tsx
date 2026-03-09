import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import '../Home.css';

export const metadata: Metadata = {
    title: 'Cerraduras Antibumping en Tetuán | Máxima Seguridad ☎ 644 936 742',
    description: 'Instalación de cerraduras antibumping en Tetuán. Bombines antitaladro y escudos acorazados. Llegamos en 20 min. Llama al 644 936 742.',
    keywords: 'cerradura antibumping tetuan, bombin antibumping, seguridad puerta',
    alternates: {
        canonical: 'https://www.cerrajerostetuan.com/cerraduras-antibumping-tetuan',
    },
    openGraph: {
        title: 'Cerraduras Antibumping en Tetuán | Máxima Seguridad ☎ 644 936 742',
        description: 'Instalación de cerraduras antibumping en Tetuán. Bombines antitaladro y escudos acorazados. Llegamos en 20 min. Llama al 644 936 742.',
        url: 'https://www.cerrajerostetuan.com/cerraduras-antibumping-tetuan',
        images: [{ url: 'https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cerraduras Antibumping en Tetuán | Máxima Seguridad ☎ 644 936 742',
        description: 'Instalación de cerraduras antibumping en Tetuán. Bombines antitaladro y escudos acorazados. Llegamos en 20 min. Llama al 644 936 742.',
        images: ['https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png'],
    }
};

export default function CerradurasAntibumping() {
    const faqs = [
        {
            question: "¿Es realmente efectiva una cerradura antibumping en el barrio de Tetuán?",
            answer: "Sí, es la defensa más eficaz este 2026. Al realizar la instalación de una cerradura antibumping en Tetuán, neutralizas la técnica de robo más usada en calles como Bravo Murillo. Estos bombines tienen pistones dispuestos de forma que el golpe no los desplaza, impidiendo la apertura técnica. En nuestro distrito, actualizar el bombín reduce en un 90% las probabilidades de sufrir un robo silencioso."
        },
        {
            question: "¿Cuánto cuesta cambiar a una cerradura antibumping en un piso de Tetuán?",
            answer: "El precio varía según el modelo, pero tratándose del escudo de tu casa ofrecemos las mejores tarifas en cerraduras de alta seguridad instaladas por profesionales. En zonas como Bellas Vistas, ofrecemos presupuestos cerrados que incluyen la \"auditoría de seguridad\" previa. Es una inversión minúscula comparada con el coste material y emocional que supone un robo en tu hogar de Madrid."
        },
        {
            question: "¿Cuánto tiempo tarda el cerrajero en instalar el bombín antibumping?",
            answer: "Como somos cerrajeros locales, tardamos menos de 30 minutos en realizar el cambio una vez estamos en tu domicilio en la Plaza de la Remonta o Estrecho. Llevamos a cabo la \"instalación de cilindros de seguridad\" de forma limpia y rápida, sin necesidad de hacer obras en la puerta, para que recuperes tu tranquilidad de forma inmediata y sin complicaciones."
        },
        {
            question: "¿Puedo instalar yo mismo una cerradura antibumping comprada en internet?",
            answer: "No lo recomendamos. Una cerradura antibumping en Tetuán mal instalada pierde toda su eficacia. Si el bombín sobresale más de 3 milímetros de la puerta en la Calle de Orense, puede ser extraído fácilmente con una mordaza. Nosotros garantizamos que la instalación quede enrasada y protegida por un escudo, cumpliendo los estándares de seguridad EEAT de 2026."
        },
        {
            question: "¿Qué marcas de cerraduras antibumping recomiendan para Tetuán?",
            answer: "Para las viviendas del distrito, recomendamos marcas con patentes activas de 2026 como Kaba Expert Plus, Mauer NW5 o Tesa TK100. Al elegir tu cerradura antibumping en Tetuán, buscamos modelos que además de antibumping sean antitaladro y antiextracción. Llevamos a cabo el \"asesoramiento técnico de marcas líderes\", asegurando que instales lo mejor para las características específicas de tu puerta madrileña."
        }
    ];

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://www.cerrajeros-tetuan.es/"
        }, {
            "@type": "ListItem",
            "position": 2,
            "name": "Cerraduras Antibumping",
            "item": "https://www.cerrajeros-tetuan.es/cerraduras-antibumping-tetuan"
        }]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Instalación de cerraduras antibumping",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Cerrajeros Tetuán",
            "telephone": "644936742"
        },
        "areaServed": {
            "@type": "City",
            "name": "Tetuán, Madrid"
        },
        "description": "Instalación de cerraduras antibumping en Tetuán. Bombines antitaladro y escudos acorazados de alta seguridad."
    };

    return (
        <main className="subpage-layout">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            {/* HERO SECTION PREMIUM */}
            <section className="hero-section" style={{ minHeight: '60vh', padding: '10rem 0 4rem' }}>
                <div className="hero-background" style={{
                    backgroundImage: "linear-gradient(rgba(3, 11, 20, 0.8), rgba(3, 11, 20, 0.95)), url('/images/moto_plaza_castilla_1772539533935.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1
                }}></div>
                <div className="hero-content container fade-in-up visible" style={{ textAlign: 'center' }}>
                    <div className="availability-badge" style={{ justifyContent: 'center', margin: '0 auto 2rem' }}>
                        <span className="availability-dot"></span>
                        Cilindros SKG*** y Certificados VdS
                    </div>
                    <h1>Cerraduras Antibumping en Tetuán</h1>
                    <p className="hero-subtitle">Neutraliza el método de intrusión más silencioso del 2026. Instalamos núcleos de acero con llave incopiable 3D.</p>
                </div>
            </section>

            <div className="breadcrumbs" style={{ background: '#0a192f', borderBottom: '1px solid #1e3a5f' }}>
                <div className="container" style={{ padding: '1rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                    <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link> <span style={{ margin: '0 0.5rem' }}>/</span> <Link href="/servicios-tetuan" style={{ color: '#fff', textDecoration: 'none' }}>Servicios</Link> <span style={{ margin: '0 0.5rem' }}>/</span> <span style={{ color: '#FFD700' }}>Cerraduras Antibumping</span>
                </div>
            </div>

            {/* INTRO SPLIT SECTION */}
            <section className="about-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container about-grid fade-in-up">
                    <div className="about-content">
                        <h2 className="section-title">El Bumping: 30 segundos sin ruido</h2>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                            ¿Sabías que un bombín de serreta estándar puede ser abierto con una llave maestra magnética o de golpe en menos de 30 segundos en la Calle de Bravo Murillo sin despertar al vecino?
                        </p>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                            La técnica del bumping aprovecha la inercia para alinear los pines saltando el mecanismo interior. Nosotros instalamos cilindros Kaba, Mauer y Tesa que reaccionan bloqueándose ante estas vibraciones, anulando por completo el ataque.
                        </p>
                        <ul className="premium-list" style={{ listStyle: 'none', padding: 0, margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f8fafc' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                Pines antitaladro de acero endurecido y contrapitones inerciales.
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f8fafc' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                Duplicado de llave imposible en ferreterías (solo bajo firma).
                            </li>
                        </ul>
                    </div>
                    <div className="about-image-wrapper">
                        <img src="/images/custom_tech.png" alt="Bombín Antibumping en acción" className="about-image" />
                        <div className="trust-card" style={{ bottom: '-20px', left: '-20px', background: '#0a192f', border: '1px solid #FFD700' }}>
                            <div className="trust-card-icon" style={{ background: 'rgba(255,215,0,0.1)' }}>
                                <ShieldCheck size={24} color="#FFD700" />
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>Garantía Antirobo</h4>
                                <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.875rem' }}>Testado policialmente</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES GRID */}
            <section className="services-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>¿Dónde actúa nuestro escudo antibumping?</h2>
                    <p className="section-desc" style={{ textAlign: 'center', margin: '0 auto 4rem auto' }}>Protección sectorizada según las anomalías y debilidades de cada puerta.</p>

                    <div className="services-grid">
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Pisos en Valdeacederas</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Conversión de cerraduras antiguas de borjas a cilindro europeo. Respetamos la madera de la casa antigua blindando las tripas del cierre.</p>
                        </div>
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Trasteros en Almansa</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Instalación de cerrojos FAC antibumping para reforzar las débiles puertas de trastero, la mina de oro de los ladrones en fin de semana.</p>
                        </div>
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Locales en Estrecho</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Cilindros de medio formato con protección anti-torsión montados sobre los motores de las persianas enrollables.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ALTERNATING TEXT */}
            <section className="about-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container about-grid fade-in-up" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ position: 'relative' }}>
                        <div style={{ padding: '3rem 2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', border: '1px solid #1e3a5f', marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Simbiosis Perfecta</h3>
                            <p style={{ color: '#94a3b8' }}>Un cilindro antibumping no sirve si asoma 4mm. Puede ser arrancado con maza. La instalación profesional requiere casarlo con un escudo Kripton enrasado al milímetro.</p>
                        </div>
                        <div style={{ padding: '3rem 2rem', background: 'linear-gradient(135deg, #003366, #001a33)', borderRadius: '1rem', border: '1px solid #FFD700' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>Test Técnico</h3>
                            <p style={{ color: '#fff' }}>Hacemos un test presencial en Bravo Murillo. Si tu llave tiene zonas lisas sin regatas complejas en 3D o bolines de acero en la espada, está desfasada en Madrid.</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="section-title">Actualización Táctica en Tetuán</h2>
                        <h3 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>La inversión se amortiza con 1 susto </h3>
                        <p className="section-desc" style={{ marginBottom: '1.5rem', marginLeft: 0 }}>Muchos seguros en Castillejos no cubren robos sin rotura física del anclaje (bumping limpio). Al invertir una vez en un Mauer NW5, garantizas cobertura del perito además de la tranquilidad familiar.</p>

                        <p className="section-desc" style={{ marginBottom: '1.5rem', marginLeft: 0 }}>Desde la Plaza de la Remonta hasta Cuzco, operamos en unidades tácticas llevando el catálogo en la furgoneta. En menos de 40 minutos actualizamos tu blindaje, enroscamos escudos de lenteja giratoria, y desaparecemos.</p>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                            <a href="tel:644936742" className="btn-primary" style={{ padding: '15px 30px', background: '#dc2626', borderColor: '#dc2626' }}>Hablar con Asesor de Seguridad</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Preguntas Frecuentes: Bumping</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            <section className="cta-final" style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #001a33, #003366)', textAlign: 'center' }}>
                <div className="container fade-in-up">
                    <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem' }}>Ciérrales la puerta al silencio</h2>
                    <p style={{ color: '#d1d5db', fontSize: '1.25rem', marginBottom: '2.5rem' }}>Especialistas certificados en Tetuán con stock constante. Instalación en el mismo día.</p>
                    <a href="tel:644936742" className="btn-primary pulsing-btn" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem', background: '#dc2626', borderColor: '#dc2626' }}>Pedir Diagnóstico Antibumping</a>
                </div>
            </section>
        </main>
    );
}
