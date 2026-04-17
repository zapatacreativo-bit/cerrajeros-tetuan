import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import '../Home.css';

export const metadata: Metadata = {
    title: 'Cambio de Cerraduras en Tetuán | Tu Seguridad Mejorada ☎ 644 06 10 05',
    description: 'Cambio de cerraduras en Tetuán. Actualización a sistemas antibumping, electrónicos y bombines de alta seguridad. Presupuesto sin compromiso. Llama al 644 06 10 05.',
    keywords: 'cambio cerradura tetuan, instalar cerradura, cerrajerias tetuan',
    alternates: {
        canonical: 'https://www.tetuancerrajeros.com/cambio-cerraduras-tetuan',
    },
    openGraph: {
        title: 'Cambio de Cerraduras en Tetuán | Tu Seguridad Mejorada ☎ 644 06 10 05',
        description: 'Cambio de cerraduras en Tetuán. Actualización a sistemas antibumping, electrónicos y bombines de alta seguridad. Presupuesto sin compromiso. Llama al 644 06 10 05.',
        url: 'https://www.tetuancerrajeros.com/cambio-cerraduras-tetuan',
        images: [{ url: 'https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cambio de Cerraduras en Tetuán | Tu Seguridad Mejorada ☎ 644 06 10 05',
        description: 'Cambio de cerraduras en Tetuán. Actualización a sistemas antibumping, electrónicos y bombines de alta seguridad. Presupuesto sin compromiso. Llama al 644 06 10 05.',
        images: ['https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png'],
    }
};

export default function CambioCerraduras() {
    const faqs = [
        {
            question: "¿Cuánto cuesta un cambio de cerraduras en Tetuán hoy mismo?",
            answer: "El precio de un cambio de cerraduras en Tetuán varía según el modelo elegido (estándar, antibumping o inteligente). Ofrecemos presupuestos cerrados por teléfono para evitar sorpresas. Al ser cerrajeros locales en la zona de Bravo Murillo, ahorras en costes de desplazamiento. Realizamos una \"valoración técnica gratuita\" para recomendarte la opción que mejor se ajuste a tu puerta y a tu presupuesto, garantizando siempre la máxima seguridad certificada de este 2026."
        },
        {
            question: "¿Cuánto tardan en realizar un cambio de cerradura en Bravo Murillo?",
            answer: "Si necesitas un cambio de cerraduras en Tetuán de urgencia, nuestro tiempo de respuesta en el eje de Bravo Murillo y Plaza de Castilla es de menos de 20 minutos. Contamos con unidades móviles equipadas con los bombines más comunes del mercado para realizar la sustitución en el acto. La instalación técnica suele durar entre 15 y 30 minutos, permitiéndote recuperar la seguridad de tu hogar o comercio de forma inmediata y sin complicaciones."
        },
        {
            question: "¿Es necesario cambiar la cerradura si me mudo a Bellas Vistas?",
            answer: "Sí, es el consejo de seguridad número uno. Al realizar un cambio de cerraduras en Tetuán tras una mudanza a Bellas Vistas o Estrecho, eliminas el riesgo de que terceras personas (antiguos inquilinos, inmobiliarias o gremios) tengan copias de tu llave. Realizamos la \"sustitución de bombín por mudanza\" de forma rápida, entregándote un juego de llaves nuevo y sellado, garantizando que tú seas la única persona con acceso a tu nueva propiedad desde el primer día."
        },
        {
            question: "¿Qué cerradura es mejor para evitar el robo por bumping en Tetuán?",
            answer: "Para un cambio de cerraduras en Tetuán eficaz contra el bumping, recomendamos cilindros con certificación de grado superior y pines de acero endurecido. Marcas como Kaba, Mauer o Tesa ofrecen modelos de 2026 diseñados específicamente para resistir esta técnica. Llevamos a cabo la \"instalación de bombines antibumping certificados\", que además incluyen protección contra el taladro y la extracción, asegurando que tu vivienda en Berruguete o Valdeacederas esté protegida contra los métodos de robo más actuales."
        },
        {
            question: "¿Ofrecen servicio de cambio de cerraduras para comunidades en Cuatro Caminos?",
            answer: "Absolutamente. Somos especialistas en el cambio de cerraduras en Tetuán para comunidades de vecinos en la zona de Cuatro Caminos. Realizamos desde el cambio del bombín del portal hasta el mantenimiento de muelles cierrapuertas y cerraderos eléctricos. También ofrecemos sistemas de \"amaestramiento de llaves para comunidades\", permitiendo que los vecinos abran todas las zonas comunes con una sola llave, mejorando la comodidad y la seguridad de toda la finca de forma profesional."
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
            "name": "Cambio de Cerraduras",
            "item": "https://www.cerrajeros-tetuan.es/cambio-cerraduras-tetuan"
        }]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Cambio de cerraduras",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Cerrajeros Tetuán",
            "telephone": "644061005"
        },
        "areaServed": {
            "@type": "City",
            "name": "Tetuán, Madrid"
        },
        "description": "Cambio de cerraduras en Tetuán. Actualización a sistemas antibumping de alta seguridad."
    };

    return (
        <main className="subpage-layout">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            {/* HERO SECTION PREMIUM */}
            <section className="hero-section" style={{ minHeight: '60vh', padding: '10rem 0 4rem' }}>
                <div className="hero-background" style={{
                    backgroundImage: "linear-gradient(rgba(3, 11, 20, 0.8), rgba(3, 11, 20, 0.95)), url('/images/cerradura_electronica_1772538909434.png')",
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
                        Asistencia Local Inmediata
                    </div>
                    <h1>Cambio de Cerraduras en Tetuán</h1>
                    <p className="hero-subtitle">Actualizamos tu seguridad a los estándares de 2026. Bombines antibumping, domótica e integraciones de alta precisión.</p>
                </div>
            </section>

            <div className="breadcrumbs" style={{ background: '#0a192f', borderBottom: '1px solid #1e3a5f' }}>
                <div className="container" style={{ padding: '1rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                    <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link> <span style={{ margin: '0 0.5rem' }}>/</span> <Link href="/servicios-tetuan" style={{ color: '#fff', textDecoration: 'none' }}>Servicios</Link> <span style={{ margin: '0 0.5rem' }}>/</span> <span style={{ color: '#FFD700' }}>Cambio de Cerraduras</span>
                </div>
            </div>

            {/* INTRO SPLIT SECTION */}
            <section className="about-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container about-grid fade-in-up">
                    <div className="about-content">
                        <h2 className="section-title">Tu Seguridad en Manos Expertas</h2>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                            ¿Te acabas de mudar a un piso en Bellas Vistas o has perdido un juego de llaves paseando por Bravo Murillo? El <strong>cambio de cerraduras en Tetuán</strong> no es solo mantenimiento, es la decisión clave para proteger lo que más te importa.
                        </p>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                            En nuestra cerrajería reemplazamos cilindros obsoletos por <em>maquinaria de alta precisión certificada contra bumping e impresioning</em>. No importa si tu portal requiere restaurar borjas antiguas o si tu loft demanda <strong>sistemas invisibles Bluetooth</strong>.
                        </p>
                        <ul className="premium-list" style={{ listStyle: 'none', padding: 0, margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f8fafc' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                Sustitución rápida por mudanza, robo o extravío.
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f8fafc' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                Entregamos llaves precintadas y tarjeta de propiedad.
                            </li>
                        </ul>
                    </div>
                    <div className="about-image-wrapper">
                        <img src="/images/comparativa_bombin_1772539115458.png" alt="Ajuste de bombín de seguridad en Tetuán" className="about-image" />
                        <div className="trust-card" style={{ bottom: '-20px', left: '-20px', background: '#0a192f', border: '1px solid #FFD700' }}>
                            <div className="trust-card-icon" style={{ background: 'rgba(255,215,0,0.1)' }}>
                                <ShieldCheck size={24} color="#FFD700" />
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>Máxima Protección</h4>
                                <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.875rem' }}>Antibumping e In-copiable</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES GRID */}
            <section className="services-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Adecuación Tecnológica 2026</h2>
                    <p className="section-desc" style={{ textAlign: 'center', margin: '0 auto 4rem auto' }}>Soluciones de cerrajería arquitectónica adaptadas a la estructura comercial y residencial del distrito.</p>

                    <div className="services-grid">
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Oficinas y Lofts (AZCA)</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Integración de cerraduras electrónicas. Cero llaves físicas. Acceso auditado vía app smartphone para empleados o personal de limpieza en el distrito financiero.</p>
                        </div>
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Comunidades (Valdeacederas)</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Unificación de cilindros (amaestramientos). Una sola llave para portal, zonas comunes y trastero, eliminando pesados llaveros y multiplicando la vida útil.</p>
                        </div>
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Comercios (Bravo Murillo)</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Instalación de candados de persiana Toy, cierres ciegos de empotrar, y cerraderos eléctricos de doble bobina contra apalancamiento nocturno.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ALTERNATING TEXT */}
            <section className="about-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container about-grid fade-in-up" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ position: 'relative' }}>
                        <div style={{ padding: '3rem 2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', border: '1px solid #1e3a5f', marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Sustitución Express In-Situ</h3>
                            <p style={{ color: '#94a3b8' }}>Nuestros talleres móviles en Tetuán transportan inventario completo de Kaba, Mauer, y Tesa. No hace falta pedir la pieza, la instalamos en la primera visita.</p>
                        </div>
                        <div style={{ padding: '3rem 2rem', background: 'linear-gradient(135deg, #003366, #001a33)', borderRadius: '1rem', border: '1px solid #FFD700' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>Marcas Premium Integradas</h3>
                            <p style={{ color: '#fff' }}>¿Tu Fichet de Castillejos gira brusco? A veces la caja central se gripa. Reemplazamos núcleos protegidos manteniendo la matriz original de la acorazada.</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="section-title">Anticiparse al Riesgo</h2>
                        <h3 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>El Bumping silencioso ataca hoy</h3>
                        <p className="section-desc" style={{ marginBottom: '1.5rem', marginLeft: 0 }}>En la zona de Ventilla o Francos Rodríguez, muchas puertas siguen con cerraduras antiguas de dientes. Esto es un error crítico. Actualizamos a <strong>cilindros de perfil europeo con pines de acero anti-taladro</strong> en menos de 30 minutos. Complementa tu seguridad con un <Link href="/cambio-bombines-tetuan" style={{ color: '#FFD700' }}>cambio de bombines en Tetuán</Link> de última generación.</p>

                        <p className="section-desc" style={{ marginBottom: '1.5rem', marginLeft: 0 }}>Si sientes que tu llave <em>'raya' al entrar</em> o que necesitas jugar con el bombo de la puerta para que abra, el colapso de pines está cerca. Es más barato hacer el cambio en horario comercial hoy que pagar una urgencia nocturna el fin de semana. También puedes consultar nuestro servicio de <Link href="/instalacion-cerraduras-tetuan" style={{ color: '#FFD700' }}>instalación de cerraduras en Tetuán</Link> para puertas nuevas.</p>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                            <a href="tel:644061005" className="btn-primary" style={{ padding: '15px 30px', background: '#dc2626', borderColor: '#dc2626' }}>Hablar con un Técnico Ahora</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERLINKING SEO */}
            <section style={{ background: '#030b14', padding: '4rem 0', borderTop: '1px solid #1e3a5f' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Servicios Complementarios en Tetuán</h2>
                    <p className="section-desc" style={{ maxWidth: '850px', margin: '0 auto 1.5rem', textAlign: 'center' }}>
                        Como <Link href="/" style={{ color: '#FFD700' }}>cerrajeros en Tetuán</Link> con años de experiencia, ofrecemos una gama completa de servicios. Tras el cambio de cerradura, asegúrate de instalar un <Link href="/cambio-bombines-tetuan" style={{ color: '#FFD700' }}>bombín antibumping en Tetuán</Link> para una <em>protección integral contra métodos de robo silencioso</em>.
                    </p>
                    <p className="section-desc" style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
                        Si te has quedado fuera de casa, nuestros <Link href="/cerrajeros-urgentes-tetuan" style={{ color: '#FFD700' }}>cerrajeros urgentes en Tetuán</Link> llegan en <strong>menos de 20 minutos</strong>. <Link href="/contacto-tetuan" style={{ color: '#FFD700' }}>Pide presupuesto sin compromiso</Link> para cualquier servicio de cerrajería.
                    </p>
                </div>
            </section>

            <section className="faq-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Preguntas Frecuentes: Cambio de Sistemas</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            <section className="cta-final" style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #001a33, #003366)', textAlign: 'center' }}>
                <div className="container fade-in-up">
                    <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem' }}>Moderniza tu entrada, elimina las dudas</h2>
                    <p style={{ color: '#d1d5db', fontSize: '1.25rem', marginBottom: '2.5rem' }}>Especialistas en Tetuán. Precios fijos telefónicos, transparencia absoluta.</p>
                    <a href="tel:644061005" className="btn-primary pulsing-btn" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem', background: '#dc2626', borderColor: '#dc2626' }}>Consulta de Presupuesto Telefónico</a>
                </div>
            </section>
        </main>
    );
}
