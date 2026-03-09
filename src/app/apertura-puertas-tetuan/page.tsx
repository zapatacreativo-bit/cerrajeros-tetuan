import { Metadata } from 'next';
import Link from 'next/link';
import { Key } from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import '../Home.css';

export const metadata: Metadata = {
    title: 'Apertura de Puertas en Tetuán | Sin Daños ☎ 644 936 742',
    description: 'Servicio de apertura de puertas en Tetuán. Técnicas no destructivas, llegada en 20 min. Disponible 24h. Llama al 644 936 742.',
    keywords: 'apertura de puertas tetuan, abrir puerta tetuan, cerrajero tetuan',
    alternates: {
        canonical: 'https://www.cerrajerostetuan.com/apertura-puertas-tetuan',
    },
    openGraph: {
        title: 'Apertura de Puertas en Tetuán | Sin Daños ☎ 644 936 742',
        description: 'Servicio de apertura de puertas en Tetuán. Técnicas no destructivas, llegada en 20 min. Disponible 24h. Llama al 644 936 742.',
        url: 'https://www.cerrajerostetuan.com/apertura-puertas-tetuan',
        images: [{ url: 'https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Apertura de Puertas en Tetuán | Sin Daños ☎ 644 936 742',
        description: 'Servicio de apertura de puertas en Tetuán. Técnicas no destructivas, llegada en 20 min. Disponible 24h. Llama al 644 936 742.',
        images: ['https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png'],
    }
};

export default function AperturaPuertas() {
    const faqs = [
        {
            question: "¿Cuánto tarda un cerrajero en llegar para una apertura de puertas en Tetuán?",
            answer: "Nuestra respuesta para quienes buscan la apertura de puertas en Tetuán es clara: tardamos menos de 20 minutos. Al estar situados estratégicamente cerca de la Calle de Bravo Murillo y la Plaza de Castilla, conocemos los mejores atajos para evitar el tráfico y llegar a tu domicilio o negocio de forma inmediata, garantizando una atención de urgencia profesional este 2026."
        },
        {
            question: "¿Es posible abrir una puerta blindada sin romper la cerradura en Tetuán?",
            answer: "Sí, como especialistas en la apertura de puertas en Tetuán, utilizamos técnicas de apertura no destructiva. Gracias al uso de ganzúas de precisión y herramientas de última generación, podemos abrir la mayoría de puertas blindadas y acorazadas en barrios como Cuzco o Castillejos sin causar daños estéticos ni estructurales al bombín o al marco de la puerta."
        },
        {
            question: "¿Cuánto cuesta un servicio de apertura de puertas de urgencia en el barrio de Tetuán?",
            answer: "El precio de la apertura de puertas en Tetuán depende de la complejidad y el horario, pero siempre ofrecemos un presupuesto cerrado por teléfono. Somos conocidos en zonas como Bellas Vistas y Berruguete por nuestra política de tarifas transparentes y honestas, sin sorpresas finales en la factura, asegurando la mejor relación calidad-precio del distrito."
        },
        {
            question: "¿Qué hago si me he dejado las llaves puestas por dentro en mi piso de Tetuán?",
            answer: "Lo más importante es no intentar forzar la cerradura tú mismo, ya que podrías dañarla. Llama a un profesional de la apertura de puertas en Tetuán. Nosotros realizamos la apertura mediante la técnica del \"resbalón\" o métodos técnicos avanzados que permiten entrar en tu casa cerca de la Calle de Orense en pocos minutos y sin necesidad de sustituir el bombín."
        },
        {
            question: "¿Ofrecen servicio de apertura de puertas para comercios en la Calle de Bravo Murillo?",
            answer: "Absolutamente. Ofrecemos un servicio especializado de apertura de puertas en Tetuán para locales comerciales. Si el cierre metálico de tu tienda en Bravo Murillo o Cuatro Caminos se ha bloqueado, acudimos de urgencia para realizar la apertura y reparación del motor o candado, permitiéndote abrir tu negocio puntualmente y con total seguridad."
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
            "name": "Apertura de Puertas Tetuán",
            "item": "https://www.cerrajeros-tetuan.es/apertura-puertas-tetuan"
        }]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Apertura de puertas",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Cerrajeros Tetuán",
            "telephone": "644936742"
        },
        "areaServed": {
            "@type": "City",
            "name": "Tetuán, Madrid"
        },
        "description": "Servicio de apertura de puertas en Tetuán. Técnicas no destructivas, llegada en 20 min. Disponible 24h."
    };

    return (
        <main className="subpage-layout">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            {/* HERO SECTION PREMIUM */}
            <section className="hero-section" style={{ minHeight: '60vh', padding: '10rem 0 4rem' }}>
                <div className="hero-background" style={{
                    backgroundImage: "linear-gradient(rgba(3, 11, 20, 0.8), rgba(3, 11, 20, 0.9)), url('/images/hero_bombines_1772539101115.png')",
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
                        Apertura sin destrozos - Llegada &lt; 20 min
                    </div>
                    <h1>Apertura de Puertas en Tetuán</h1>
                    <p className="hero-subtitle">Volver a entrar en casa no debería ser un drama. Realizamos aperturas limpias de puertas acorazadas, blindadas y tradicionales con herramientas 100% no destructivas.</p>
                </div>
            </section>

            <div className="breadcrumbs" style={{ background: '#0a192f', borderBottom: '1px solid #1e3a5f' }}>
                <div className="container" style={{ padding: '1rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                    <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link> <span style={{ margin: '0 0.5rem' }}>/</span> <Link href="/servicios-tetuan" style={{ color: '#fff', textDecoration: 'none' }}>Servicios</Link> <span style={{ margin: '0 0.5rem' }}>/</span> <span style={{ color: '#FFD700' }}>Apertura de Puertas</span>
                </div>
            </div>

            {/* INTRO SPLIT SECTION */}
            <section className="about-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container about-grid fade-in-up">
                    <div className="about-content">
                        <h2 className="section-title">Apertura Rápida y Segura en tu Barrio</h2>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                            ¿Te has quedado fuera de casa después de hacer unas compras en el Mercado de Maravillas o has perdido las llaves paseando por la Calle de Bravo Murillo? Entendemos perfectamente la impotencia de estar frente a tu puerta y no poder entrar.
                        </p>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                            Lo que necesitas es un vecino experto en aperturas de precisión que actúe con celeridad. Recorremos Cuatro Caminos, Castillejos, Bellas Vistas y Valdeacederas en minutos con furgonetas equipadas. Realizamos extracciones de llaves partidas e intrusiones técnicas con herramientas tipo Lishi para que puedas retomar tu día inmediatamente y sin cambiar costosos herrajes si no es necesario.
                        </p>
                        <ul className="premium-list" style={{ listStyle: 'none', padding: 0, margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f8fafc' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                Atención Urgente 24/365 en zona Estrecho, Remonta y AZCA.
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f8fafc' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                Sin rotura en el 95% de las puertas bloqueadas/cerradas de golpe.
                            </li>
                        </ul>
                    </div>
                    <div className="about-image-wrapper">
                        <img src="/images/hero_estetoscopio_1772539273420.png" alt="Herramientas técnicas de apertura" className="about-image" />
                        <div className="trust-card" style={{ bottom: '-20px', left: '-20px', background: '#0a192f', border: '1px solid #FFD700' }}>
                            <div className="trust-card-icon" style={{ background: 'rgba(255,215,0,0.1)' }}>
                                <Key size={24} color="#FFD700" />
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>Cero Daños</h4>
                                <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.875rem' }}>Protegemos tu escudo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS GRID */}
            <section className="process-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Tipos de Apertura en Tetuán</h2>
                    <p className="section-desc" style={{ textAlign: 'center', margin: '0 auto 4rem auto' }}>Aplicamos una metodología específica según el tipo de acceso bloqueado.</p>

                    <div className="process-grid">
                        <div className="process-card">
                            <div className="process-number">01</div>
                            <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '1rem' }}>Puertas Acorazadas (Modernas)</h3>
                            <p style={{ color: '#94a3b8' }}>Para los lofts de Castillejos y oficinas en AZCA/Cuzco con alta seguridad y bombines anti-ganzúa electrónicos o de pines complejos. Uso de decodificadores precisos.</p>
                        </div>
                        <div className="process-card">
                            <div className="process-number">02</div>
                            <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '1rem' }}>Puertas Clásicas de Madera</h3>
                            <p style={{ color: '#94a3b8' }}>En portales de Berruguete y Bellas Vistas. Tratamos cerraduras de borjas y facetas señoriales extrayendo el resbalón o llaves partidas conservando la herrería original.</p>
                        </div>
                        <div className="process-card">
                            <div className="process-number">03</div>
                            <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '1rem' }}>Cajas Fuertes Integradas</h3>
                            <p style={{ color: '#94a3b8' }}>Restauración del acceso en despachos y oficinas a lo largo de General Perón operadas con endoscopios para no dañar documentos vitales u objetos de valor interiores.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* REVERSE ALTERNATING BLOCK */}
            <section className="about-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container about-grid fade-in-up" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '4rem', alignItems: 'center' }}>
                    <div className="about-image-wrapper">
                        <img src="/images/camara_azca_1772539289185.png" alt="Cerrajero atendiendo urgencia nocturna en Tetúan" className="about-image" style={{ borderRadius: '1rem', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
                    </div>
                    <div>
                        <h2 className="section-title">Urgencias Nocturnas y Asistencia Integral</h2>
                        <h3 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>Protección tras incidentes en Estrecho y Remonta</h3>
                        <p className="section-desc" style={{ marginBottom: '1.5rem', marginLeft: 0 }}>Si has sido víctima de un robo o intento de intrusión forzada, la apertura de puertas no es suficiente. Actuamos en todo el corredor de Lope de Haro instalando cilindros antibumping certificados inmediatamente para blindar tu puerta.</p>

                        <div style={{ padding: '2rem', background: 'rgba(26, 42, 60, 0.4)', borderRadius: '1rem', border: '1px solid #1e3a5f', marginBottom: '2rem' }}>
                            <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>Comercios en Calle Orense</h4>
                            <p style={{ color: '#94a3b8', margin: 0 }}>Reparación express de persianas enrollables atascadas de apertura comercial para que no pierdas ventas bajo ninguna circunstancia a primera hora.</p>
                        </div>

                        <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <li style={{ color: '#94a3b8' }}>✔ Revisión Comunidades (Sor Ángela)</li>
                            <li style={{ color: '#94a3b8' }}>✔ Cerrojos Buzones/Trasteros</li>
                            <li style={{ color: '#94a3b8' }}>✔ Cierres fáciles Mayores (Ventilla)</li>
                            <li style={{ color: '#94a3b8' }}>✔ Auditoría Preventiva Gratuita</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="faq-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>FAQ: Aperturas en Madrid Tetuán</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            <section className="cta-final" style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #003366, #001a33)', textAlign: 'center' }}>
                <div className="container fade-in-up">
                    <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem' }}>Precios Claros. Cero Sorpresas.</h2>
                    <p style={{ color: '#d1d5db', fontSize: '1.25rem', marginBottom: '2.5rem' }}>Escríbenos para tu diagnóstico previo o llama por una urgencia roja en Tetuán.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href="tel:644936742" className="btn-primary pulsing-btn" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem', background: '#dc2626', borderColor: '#dc2626' }}>644 936 742</a>
                        <Link href="/contacto-tetuan" className="btn-secondary" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem' }}>Solicitar Visita</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
