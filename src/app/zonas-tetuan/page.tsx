import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import '../Home.css';

export const metadata: Metadata = {
    title: 'Zonas de Cobertura | Cerrajeros en Tetuán Madrid ☎ 644 936 742',
    description: 'Cobertura completa en el distrito de Tetuán. Cerrajeros rápidos en Cuzco, Ventilla, Bellas Vistas, AZCA, Cuatro Caminos y Castillejos. Llama al 644 936 742.',
    keywords: 'cerrajeros zonas tetuan, cerrajeros madrid norte, asistencia cerrajero',
    alternates: {
        canonical: 'https://www.cerrajerostetuan.com/zonas-tetuan',
    },
    openGraph: {
        title: 'Zonas de Cobertura | Cerrajeros en Tetuán Madrid ☎ 644 936 742',
        description: 'Cobertura completa en el distrito de Tetuán. Cerrajeros rápidos en Cuzco, Ventilla, Bellas Vistas, AZCA, Cuatro Caminos y Castillejos. Llama al 644 936 742.',
        url: 'https://www.cerrajerostetuan.com/zonas-tetuan',
        images: [{ url: 'https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Zonas de Cobertura | Cerrajeros en Tetuán Madrid ☎ 644 936 742',
        description: 'Cobertura completa en el distrito de Tetuán. Cerrajeros rápidos en Cuzco, Ventilla, Bellas Vistas, AZCA, Cuatro Caminos y Castillejos. Llama al 644 936 742.',
        images: ['https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png'],
    }
};

export default function ZonasTetuan() {
    const faqs = [
        {
            question: "¿Cuánto tarda un cerrajero en llegar a mi casa en el barrio de Tetuán?",
            answer: "Como somos cerrajeros en Tetuán con unidades locales, nuestro tiempo medio de llegada es de menos de 20 minutos. Si se encuentra cerca de puntos clave como Bravo Murillo, Cuatro Caminos o Plaza de Castilla, podemos estar en su puerta incluso antes, garantizando la asistencia más rápida del distrito este 2026."
        },
        {
            question: "¿Cuánto cuesta un servicio de cerrajería de urgencia en Tetuán?",
            answer: "El precio depende del tipo de trabajo, pero como cerrajeros en Tetuán locales, ofrecemos tarifas muy competitivas al no tener grandes costes de desplazamiento. Realizamos presupuestos a medida gratuitos, siempre informando del coste final antes de empezar. Nuestra transparencia en los precios es lo que nos define frente a empresas foráneas."
        },
        {
            question: "¿Qué cerradura es la más segura para un piso en el distrito de Tetuán?",
            answer: "Para las viviendas de nuestro barrio, especialmente en zonas como Bellas Vistas o Berruguete, recomendamos la instalación de un bombín antibumping clase 3 con escudo acorazado. En este 2026, las cerraduras electrónicas invisibles también son una excelente opción suplementaria que estamos instalando con mucho éxito entre los vecinos de Tetuán para evitar robos por técnicas técnicas."
        },
        {
            question: "¿Pueden abrir una puerta acorazada en la zona de AZCA sin romperla?",
            answer: "Sí, como especialistas en cerrajeros en Tetuán, contamos con herramientas de precisión para realizar aperturas no destructivas en puertas de alta seguridad. Ya sea en la Calle de Orense o Capitán Haya, aplicamos métodos técnicos que preservan la integridad de su puerta acorazada, evitando costosas reparaciones posteriores tras una pérdida de llaves o un bloqueo."
        },
        {
            question: "¿Ofrecen garantía en sus trabajos de cerrajería en Madrid Tetuán?",
            answer: "Absolutamente. Todos nuestros servicios de cerrajeros en Tetuán incluyen una garantía oficial por escrito tanto en la mano de obra como en los materiales instalados (bombines, cerraduras, cerrojos). Al ser un negocio local arraigado en el distrito, nuestra prioridad es su satisfacción a largo plazo y la seguridad continua de su hogar o negocio."
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
            "name": "Zonas de Tetuán",
            "item": "https://www.cerrajeros-tetuan.es/zonas-tetuan"
        }]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Cerrajería de proximidad en Tetuán",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Cerrajeros Tetuán",
            "telephone": "644936742"
        },
        "areaServed": [
            { "@type": "Place", "name": "Bellas Vistas" },
            { "@type": "Place", "name": "Cuatro Caminos" },
            { "@type": "Place", "name": "Castillejos" },
            { "@type": "Place", "name": "Almenara" },
            { "@type": "Place", "name": "Valdeacederas" },
            { "@type": "Place", "name": "Berruguete" },
            { "@type": "Place", "name": "AZCA" },
            { "@type": "Place", "name": "Cuzco" }
        ],
        "description": "Servicios de cerrajería en todos los barrios del distrito de Tetuán en Madrid."
    };

    return (
        <main className="subpage-layout">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            {/* HERO SECTION PREMIUM */}
            <section className="hero-section" style={{ minHeight: '60vh', padding: '10rem 0 4rem' }}>
                <div className="hero-background" style={{
                    backgroundImage: "linear-gradient(rgba(3, 11, 20, 0.8), rgba(3, 11, 20, 0.95)), url('/images/zonas_hero_seguridad_sin_tlf_1772625026323.png')",
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
                        Disponibilidad inmediata en todo Tetuán
                    </div>
                    <h1>Zonas de Cobertura en Tetuán</h1>
                    <p className="hero-subtitle">Protegiendo todos los barrios del distrito con cerrajeros vecinos, expertos y ultra-rápidos. Llegamos a Cuzco, Ventilla, Bellas Vistas, AZCA y Cuatro Caminos en menos de 20 minutos.</p>
                </div>
            </section>

            <div className="breadcrumbs" style={{ background: '#0a192f', borderBottom: '1px solid #1e3a5f' }}>
                <div className="container" style={{ padding: '1rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                    <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link> <span style={{ margin: '0 0.5rem' }}>/</span> <span style={{ color: '#FFD700' }}>Zonas de Tetuán</span>
                </div>
            </div>

            {/* INTRO SPLIT SECTION */}
            <section className="about-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container about-grid fade-in-up">
                    <div className="about-content">
                        <h2 className="section-title">Cerrajeros en Tetuán: Tu seguridad en manos de vecinos expertos</h2>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                            ¿Se ha quedado fuera de su casa después de una tarde de compras en el Mercado de Maravillas o tras un paseo por la Plaza de Castilla? Perder las llaves o sufrir un bloqueo en la cerradura es una de las situaciones más estresantes que podemos vivir en Madrid.
                        </p>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                            Como cerrajeros en Tetuán, entendemos que usted no busca solo un técnico, sino una solución rápida, honesta y cercana. Nuestro distrito es una mezcla vibrante de modernidad y tradición. Desde la Calle de Bravo Murillo hasta los rincones más tranquilos de Berruguete, estamos listos para atenderle con la rapidez que solo alguien que vive y trabaja en su mismo código postal puede ofrecer.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f8fafc' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                Atención en menos de 20 minutos.
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f8fafc' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                Profesionales del distrito (no subcontratas).
                            </li>
                        </ul>
                    </div>
                    <div className="about-image-wrapper">
                        <img src="/images/hero_lishi_bmw_1772539473422.png" alt="Vista del distrito y cobertura de servicio" className="about-image" />
                        <div className="trust-card">
                            <div className="trust-card-icon" style={{ background: 'rgba(255,215,0,0.1)' }}>
                                <Clock size={24} color="#FFD700" />
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>Llegada Rápida</h4>
                                <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.875rem' }}>15-20 min a Plaza Castilla y Estrecho</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MASONRY ZONAS CARDS (Premium Grid) */}
            <section className="zonas-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Principales Áreas de Intervención</h2>
                    <p className="section-desc" style={{ textAlign: 'center', margin: '0 auto 4rem auto' }}>Unidades móviles patrullando estratégicamente los ejes clave del distrito para llegar antes que nadie.</p>

                    <div className="zones-grid">
                        <Link href="/cerrajeros-bravo-murillo-estrecho" className="zone-card">
                            <Image src="/images/bravo_murillo_zona.png" alt="Bravo Murillo / Estrecho" fill style={{ objectFit: 'cover' }} />
                            <div className="zone-overlay">
                                <h3 className="zone-title">Bravo Murillo / Estrecho</h3>
                                <p style={{ color: '#d1d5db', fontSize: '0.9rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>Unidades constantes cerca de Cuatro Caminos para apertura rápida sin daños y asistencia total.</p>
                                <div className="zone-action">Leer Más &rarr;</div>
                            </div>
                        </Link>

                        <Link href="/cerrajeros-plaza-castilla" className="zone-card">
                            <Image src="/images/plaza_castilla_zona.png" alt="Plaza de Castilla" fill style={{ objectFit: 'cover' }} />
                            <div className="zone-overlay">
                                <h3 className="zone-title">Plaza de Castilla</h3>
                                <p style={{ color: '#d1d5db', fontSize: '0.9rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>Respuesta rápida para los intercambiadores y todo el núcleo financiero de la zona norte.</p>
                                <div className="zone-action">Leer Más &rarr;</div>
                            </div>
                        </Link>

                        <Link href="/cerrajeros-cuzco-azca" className="zone-card">
                            <Image src="/images/cuzco_azca_zona.png" alt="Cuzco / AZCA" fill style={{ objectFit: 'cover' }} />
                            <div className="zone-overlay">
                                <h3 className="zone-title">Cuzco y AZCA</h3>
                                <p style={{ color: '#d1d5db', fontSize: '0.9rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>Sistemas de alta seguridad para oficinas, despachos y edificios de última generación.</p>
                                <div className="zone-action">Leer Más &rarr;</div>
                            </div>
                        </Link>

                        <Link href="/cerrajeros-almenara-ventilla" className="zone-card">
                            <Image src="/images/almenara_ventilla_zona.png" alt="Almenara / Ventilla" fill style={{ objectFit: 'cover' }} />
                            <div className="zone-overlay">
                                <h3 className="zone-title">Almenara / Ventilla</h3>
                                <p style={{ color: '#d1d5db', fontSize: '0.9rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>Cerrajería experta vecinal, enfocada en la rapidez y precios justos sin desplazamiento.</p>
                                <div className="zone-action">Leer Más &rarr;</div>
                            </div>
                        </Link>

                        <Link href="/cerrajeros-valdeacederas-berruguete" className="zone-card">
                            <Image src="/images/valdeacederas_berruguete_zona.png" alt="Valdeacederas / Berruguete" fill style={{ objectFit: 'cover' }} />
                            <div className="zone-overlay">
                                <h3 className="zone-title">Valdeacederas / Berruguete</h3>
                                <p style={{ color: '#d1d5db', fontSize: '0.9rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>Seguridad de resistencia, sustitución de bombines y refuerzos antintrusión inmediatos.</p>
                                <div className="zone-action">Leer Más &rarr;</div>
                            </div>
                        </Link>

                        <Link href="/cerrajeros-bellas-vistas-francos-rodriguez" className="zone-card">
                            <Image src="/images/bellas_vistas_zona.png" alt="Bellas Vistas / Francos Rodríguez" fill style={{ objectFit: 'cover' }} />
                            <div className="zone-overlay">
                                <h3 className="zone-title">Bellas Vistas / Francos Rodríguez</h3>
                                <p style={{ color: '#d1d5db', fontSize: '0.9rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>Asistencia urgente para pisos compartidos, garantizando siempre el acceso en la zona sur.</p>
                                <div className="zone-action">Leer Más &rarr;</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* SERVICIOS DETALLADOS (Service Grid Style) */}
            <section className="services-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Atención Especializada por Barrios</h2>
                    <p className="section-desc" style={{ textAlign: 'center', margin: '0 auto 4rem auto' }}>Tetuán exige soluciones a medida para cada tipo de necesidad vecinal y comercial.</p>

                    <div className="services-grid">
                        <div className="service-card" style={{ background: '#0a192f', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Plaza de la Remonta</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Servicio 24 horas y urgencias nocturnas para aperturas y fallos de bombines. Siempre discretos para no despertar a tus vecinos.</p>
                        </div>
                        <div className="service-card" style={{ background: '#0a192f', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Calle San Germán</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Especialistas en fiabilidad y reparaciones multimarca con facturas transparentes. Tu cerrajero recomendando de boca a boca.</p>
                        </div>
                        <div className="service-card" style={{ background: '#0a192f', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Lope de Haro</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Cobertura rápida de automatismos para cierres comerciales, impidiendo que el motor atascado retrase la apertura de tu negocio.</p>
                        </div>
                        <div className="service-card" style={{ background: '#0a192f', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Sor Ángela de la Cruz</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Mantenimiento profundo de muelles cierrapuertas y bombines para comunidades de propietarios de alto tránsito.</p>
                        </div>
                        <div className="service-card" style={{ background: '#0a192f', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Ventilla</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Instalación de cerraduras de doble embrague y sistemas accesibles para nuestros vecinos mayores y dependientes.</p>
                        </div>
                        <div className="service-card" style={{ background: '#0a192f', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Castillejos</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Expertos en cerraduras invisibles e inteligentes: códigos por app, accesos remotos y llaves digitales de nueva generación.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST SECTION WITH ALTERNATING TEXT */}
            <section className="about-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container about-grid fade-in-up" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ position: 'relative' }}>
                        <div style={{ padding: '3rem 2rem', background: 'linear-gradient(135deg, #003366, #001a33)', borderRadius: '1rem', border: '1px solid #FFD700' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>Precios Justos</h3>
                            <p style={{ color: '#fff' }}>Sabemos que existe temor a llamar por los precios abusivos. Infórmate siempre del coste antes de empezar con nuestros presupuestos cerrados. Somos vecinos, te miramos a la cara.</p>
                        </div>
                        <div style={{ padding: '3rem 2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', border: '1px solid #1e3a5f', marginTop: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Cuatro Caminos (Vehículos)</h3>
                            <p style={{ color: '#94a3b8' }}>¿Coche bloqueado en doble fila descargando llaves? Realizamos aperturas de vehículos sin dañar carrocerías ni lunas, evitando los atascos masivos de Tetuán.</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="section-title">Por qué elegir a los expertos de Tetuán</h2>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>Elegir a los correctos cerrajeros en Tetuán es elegir tranquilidad. Conocemos calles como Tenerife, Topete o Almansa al dedillo. No dejes tus bienes al cuidado de plataformas impersonales.</p>
                        <p className="section-desc" style={{ marginBottom: '2rem' }}>Tetuán se moderniza hacia 2026, pasando desde los desarrollos del Paseo de la Dirección hasta la torre de oficinas en AZCA. Nuestra seguridad física evoluciona contigo gracias a inversión constante y herramientas punteras.</p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Link href="/contacto-tetuan" className="btn-secondary" style={{ padding: '15px 30px' }}>Solicitar Visita</Link>
                            <a href="tel:644936742" className="btn-primary" style={{ padding: '15px 30px', background: '#dc2626', borderColor: '#dc2626' }}>LLamar Urgencia</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>FAQ: Zonas y Atención</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            <section className="cta-final" style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #003366, #001a33)', textAlign: 'center' }}>
                <div className="container fade-in-up">
                    <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem' }}>Protege tu hogar en Tetuán hoy mismo</h2>
                    <p style={{ color: '#d1d5db', fontSize: '1.25rem', marginBottom: '2.5rem' }}>Atención ultra-rápida. Sin destrozos. Garantía de vecinos.</p>
                    <a href="tel:644936742" className="btn-primary pulsing-btn" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem', background: '#dc2626', borderColor: '#dc2626' }}>Hablar con un Cerrajero: 644 936 742</a>
                </div>
            </section>
        </main>
    );
}
