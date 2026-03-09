import { Metadata } from 'next';
import Link from 'next/link';
import { Wrench } from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import '../Home.css';

export const metadata: Metadata = {
    title: 'Instalación de Cerraduras en Tetuán | Alta Seguridad ☎ 644 936 742',
    description: 'Instalación de cerraduras de alta seguridad en Tetuán. Sistemas antibumping, motorizadas y escudos acorazados. Llegamos en 20 min. Llama al 644 936 742.',
    keywords: 'instalacion cerrojos tetuan, instalar cerradura nueva, escudo acorazado',
    alternates: {
        canonical: 'https://www.cerrajerostetuan.com/instalacion-cerraduras-tetuan',
    },
    openGraph: {
        title: 'Instalación de Cerraduras en Tetuán | Alta Seguridad ☎ 644 936 742',
        description: 'Instalación de cerraduras de alta seguridad en Tetuán. Sistemas antibumping, motorizadas y escudos acorazados. Llegamos en 20 min. Llama al 644 936 742.',
        url: 'https://www.cerrajerostetuan.com/instalacion-cerraduras-tetuan',
        images: [{ url: 'https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Instalación de Cerraduras en Tetuán | Alta Seguridad ☎ 644 936 742',
        description: 'Instalación de cerraduras de alta seguridad en Tetuán. Sistemas antibumping, motorizadas y escudos acorazados. Llegamos en 20 min. Llama al 644 936 742.',
        images: ['https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png'],
    }
};

export default function InstalacionCerraduras() {
    const faqs = [
        {
            question: "¿Cuál es la mejor cerradura de alta seguridad para un piso en Tetuán?",
            answer: "Para las viviendas en el distrito de Tetuán, especialmente en zonas como Bravo Murillo o Bellas Vistas, recomendamos la instalación de cerraduras de alta seguridad en Tetuán que cuenten con certificación antibumping, antiextracción y llaves incopiables. Marcas como Kaba, Mauer o Tesa ofrecen modelos de 2026 que resisten los ataques técnicos más comunes en Madrid. Lo ideal es combinar un bombín de alta gama con un escudo acorazado para una protección integral."
        },
        {
            question: "¿Cuánto tarda la instalación de una cerradura de alta seguridad en Tetuán?",
            answer: "Un técnico experto suele tardar entre 30 y 60 minutos en completar la instalación de cerraduras de alta seguridad en Tetuán. Si se trata de una urgencia cerca de la Plaza de la Remonta o Estrecho, llegamos en menos de 20 minutos y realizamos el cambio en el acto. Nuestras unidades móviles van equipadas con todo lo necesario para que su puerta quede blindada el mismo día, sin necesidad de esperas ni segundas visitas."
        },
        {
            question: "¿Qué es el bumping y cómo me protege una cerradura de alta seguridad en Madrid?",
            answer: "El bumping es una técnica que permite abrir puertas sin romper la cerradura. Al realizar una instalación de cerraduras de alta seguridad en Tetuán con bombines certificados, usted cuenta con pitones de acero y sistemas internos que bloquean el giro ante este tipo de ataques. En barrios con portales antiguos como Berruguete, actualizar su cilindro es vital para evitar robos silenciosos que a menudo los seguros no cubren al no haber signos de violencia física."
        },
        {
            question: "¿Es muy caro instalar cerraduras inteligentes en el barrio de Tetuán?",
            answer: "La instalación de cerraduras de alta seguridad en Tetuán con tecnología inteligente es cada vez más asequible en este 2026. Aunque el coste es superior a una cerradura mecánica convencional, la comodidad de abrir con el móvil y el control de accesos compensan la inversión, especialmente en áreas como Cuzco o AZCA. Ofrecemos diferentes gamas que se ajustan a su presupuesto, garantizando siempre que la base mecánica sea de la máxima resistencia contra robos."
        },
        {
            question: "¿Puedo poner una cerradura de alta seguridad en una puerta antigua de mi piso en Tetuán?",
            answer: "Absolutamente. Somos especialistas en adaptar la instalación de cerraduras de alta seguridad en Tetuán a puertas de madera antiguas, muy comunes en la Calle de Francos Rodríguez o Bellas Vistas. Realizamos conversiones de borjas a perfil europeo, lo que permite disfrutar de la máxima seguridad actual sin necesidad de cambiar su puerta original. Es una solución estética, segura y mucho más económica que instalar una puerta nueva completa."
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
            "name": "Instalación de Cerraduras",
            "item": "https://www.cerrajeros-tetuan.es/instalacion-cerraduras-tetuan"
        }]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Instalación de cerraduras",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Cerrajeros Tetuán",
            "telephone": "644936742"
        },
        "areaServed": {
            "@type": "City",
            "name": "Tetuán, Madrid"
        },
        "description": "Instalación de cerraduras de alta seguridad en Tetuán. Sistemas inteligentes y antibumping."
    };

    return (
        <main className="subpage-layout">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            {/* HERO SECTION PREMIUM */}
            <section className="hero-section" style={{ minHeight: '60vh', padding: '10rem 0 4rem' }}>
                <div className="hero-background" style={{
                    backgroundImage: "linear-gradient(rgba(3, 11, 20, 0.8), rgba(3, 11, 20, 0.95)), url('/images/instalacion_cerradura_premium.png')",
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
                        Blindaje Certificado SKG***
                    </div>
                    <h1>Instalación de Cerraduras en Tetuán</h1>
                    <p className="hero-subtitle">Eleva la protección de tu hogar a los estándares del 2026. Instalamos sistemas motorizados invisibles, cilindros anti-impresioning y escudos de acero acorazado.</p>
                </div>
            </section>

            <div className="breadcrumbs" style={{ background: '#0a192f', borderBottom: '1px solid #1e3a5f' }}>
                <div className="container" style={{ padding: '1rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                    <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link> <span style={{ margin: '0 0.5rem' }}>/</span> <Link href="/servicios-tetuan" style={{ color: '#fff', textDecoration: 'none' }}>Servicios</Link> <span style={{ margin: '0 0.5rem' }}>/</span> <span style={{ color: '#FFD700' }}>Instalación Cerraduras</span>
                </div>
            </div>

            {/* INTRO SPLIT SECTION */}
            <section className="about-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container about-grid fade-in-up">
                    <div className="about-content">
                        <h2 className="section-title">El Búnker Empieza en la Puerta</h2>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                            ¿Se ha parado a pensar si la puerta de su casa en Bellas Vistas es realmente invulnerable? Los métodos de intrusión en Madrid han evolucionado drásticamente. Las antiguas cerraduras de gorjas hoy son un juego de niños para las bandas de robo.
                        </p>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                            Como instaladores oficiales en Tetuán, reemplazamos sistemas vulnerables con ingeniería de primer nivel. Nuestro enfoque fusiona la resistencia bruta del acero cementado con la protección patente anti-copia de 2026.
                        </p>
                        <ul className="premium-list" style={{ listStyle: 'none', padding: 0, margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f8fafc' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                Conversión de Borjas a Perfil Europeo sin afectar a la madera.
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f8fafc' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                Escudos Abocardados con lenteja anti-taladro carburo.
                            </li>
                        </ul>
                    </div>
                    <div className="about-image-wrapper">
                        <img src="/images/hero_estetoscopio_1772539273420.png" alt="Instalación táctica de cerradura" className="about-image" />
                        <div className="trust-card" style={{ bottom: '-20px', left: '-20px', background: '#0a192f', border: '1px solid #FFD700' }}>
                            <div className="trust-card-icon" style={{ background: 'rgba(255,215,0,0.1)' }}>
                                <Wrench size={24} color="#FFD700" />
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>Garantía Total</h4>
                                <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.875rem' }}>Fichet, Tesa, Kaba, Mauer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES GRID */}
            <section className="services-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>¿Qué tipo de puerta quieres blindar?</h2>
                    <p className="section-desc" style={{ textAlign: 'center', margin: '0 auto 4rem auto' }}>Diversidad arquitectónica requiere flexibilidad en la instalación, respetando la estética madrileña.</p>

                    <div className="services-grid">
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Casas Bajas (Berruguete)</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Puertas macizas de calle. Instalamos embutidos de 3-5 puntos de anclaje de acero al manganeso y pletinas reforzadas al marco.</p>
                        </div>
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Lofts Financieros (AZCA)</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Cerraduras electrónicas motorizadas. Cierran solas al encajar, detectando el cierre. Acceso auditado vía Smartphone y Bluetooth.</p>
                        </div>
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Puertas Acorazadas</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Sustitución en bloque de mecanismos integrales Fichet o Dierre si han quedado desfasados frente al impresioning moderno.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ALTERNATING TEXT */}
            <section className="about-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container about-grid fade-in-up" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '4rem', alignItems: 'center' }}>
                    <div className="about-image-wrapper">
                        <img src="/images/cerradura_electronica_1772538909434.png" alt="Cerradura moderna e inteligente en Tetuán" className="about-image" style={{ borderRadius: '1rem', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
                    </div>
                    <div>
                        <h2 className="section-title">El Triángulo del Blindaje</h2>
                        <h3 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>Evita apalancamiento, extracción y taladro</h3>
                        <p className="section-desc" style={{ marginBottom: '1.5rem', marginLeft: 0 }}>Para proteger los trasteros en Calles como Sor Ángela de la Cruz instalamos cerrojos extras FAC de alta seguridad, anclajes invisibles que multiplican la dificultad de cizallamiento e intimidan ocularmente al asaltante.</p>

                        <div style={{ padding: '2rem', background: 'rgba(26, 42, 60, 0.4)', borderRadius: '1rem', border: '1px solid #1e3a5f', marginBottom: '2rem' }}>
                            <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>Auditoría de Vulnerabilidad</h4>
                            <p style={{ color: '#94a3b8', margin: 0 }}>Antes de instalar, enviamos un técnico a Bravo Murillo/Estrecho para evaluar los puntos débiles de tu marco actual, descartando presupuestos que no arreglarían tu dolor real.</p>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Link href="/contacto-tetuan" className="btn-secondary" style={{ padding: '15px 30px' }}>Solicitar Auditoría Gratuita</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Preguntas Frecuentes: Instalación</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            <section className="cta-final" style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #001a33, #003366)', textAlign: 'center' }}>
                <div className="container fade-in-up">
                    <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem' }}>Refuerza tu puerta en 1 hora</h2>
                    <p style={{ color: '#d1d5db', fontSize: '1.25rem', marginBottom: '2.5rem' }}>Escríbenos para recibir un presupuesto con catálogo de cilindros Kaba o Tesa.</p>
                    <a href="tel:644936742" className="btn-primary pulsing-btn" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem', background: '#dc2626', borderColor: '#dc2626' }}>Hablar con Asesor de Seguridad</a>
                </div>
            </section>
        </main>
    );
}
