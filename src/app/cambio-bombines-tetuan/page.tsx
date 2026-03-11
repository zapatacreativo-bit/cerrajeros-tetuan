import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import '../Home.css';

export const metadata: Metadata = {
    title: 'Cambio de Bombines en Tetuán | Antibumping ☎ 644 936 742',
    description: 'Cambio de bombines en Tetuán. Cilindros antibumping certificados. Instalación inmediata. Presupuesto sin compromiso. Llama al 644 936 742.',
    keywords: 'cambio bombin tetuan, cambiar bombin puerta, instalar bombin alta seguridad',
    alternates: {
        canonical: 'https://www.tetuancerrajeros.com/cambio-bombines-tetuan',
    },
    openGraph: {
        title: 'Cambio de Bombines en Tetuán | Antibumping ☎ 644 936 742',
        description: 'Cambio de bombines en Tetuán. Cilindros antibumping certificados. Instalación inmediata. Presupuesto sin compromiso. Llama al 644 936 742.',
        url: 'https://www.tetuancerrajeros.com/cambio-bombines-tetuan',
        images: [{ url: 'https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cambio de Bombines en Tetuán | Antibumping ☎ 644 936 742',
        description: 'Cambio de bombines en Tetuán. Cilindros antibumping certificados. Instalación inmediata. Presupuesto sin compromiso. Llama al 644 936 742.',
        images: ['https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png'],
    }
};

export default function CambioDeBombines() {
    const faqs = [
        {
            question: "¿Cuánto cuesta un cambio de bombines en Tetuán?",
            answer: "El precio de un cambio de bombines en Tetuán depende del nivel de seguridad elegido. En nuestra empresa, ofrecemos presupuestos cerrados por teléfono para evitar sorpresas. Al ser cerrajeros locales cerca de Bravo Murillo, ahorramos en desplazamientos, lo que nos permite ofrecer la mejor relación calidad-precio en servicios de alta seguridad de este 2026 para todos los vecinos del distrito."
        },
        {
            question: "¿Cuánto tiempo tardan en cambiar un bombín en la zona de Estrecho?",
            answer: "Si necesita un cambio de bombines en Tetuán de urgencia en la zona de Estrecho o Cuatro Caminos, nuestro tiempo de llegada es de menos de 20 minutos. La sustitución técnica del cilindro suele realizarse en apenas 15 minutos, de forma limpia y sin necesidad de desmontar toda la cerradura. Disponemos de unidades móviles equipadas con los modelos más seguros del mercado para que su puerta quede protegida en el acto y sin esperas innecesarias."
        },
        {
            question: "¿Qué es un bombín antibumping y por qué lo necesito en Tetuán?",
            answer: "El bumping es la técnica de robo más común en Madrid. Al realizar un cambio de bombines en Tetuán por uno antibumping, usted instala un sistema con pines internos reforzados que impiden la apertura mediante llaves de golpeo. Es esencial en barrios como Bellas Vistas o Berruguete, donde muchas puertas aún conservan cilindros antiguos. La \"instalación de bombines certificados\" es la única garantía real este 2026 para evitar robos silenciosos que no dejan rastro para el seguro."
        },
        {
            question: "¿Es necesario cambiar el bombín si acabo de alquilar un piso en Tetuán?",
            answer: "Absolutamente. Es el consejo de seguridad principal. Al realizar un cambio de bombines en Tetuán tras una mudanza, se asegura de que ninguna persona ajena (antiguos inquilinos o personal de mantenimiento) tenga copias de su llave. Realizamos la \"sustitución de bombín por nueva propiedad\" de manera rápida y discreta, entregándole un juego de llaves totalmente nuevo y garantizando la privacidad de su hogar desde el primer minuto que entra a vivir."
        },
        {
            question: "¿Puedo poner el mismo bombín para el portal y mi casa en el barrio de Tetuán?",
            answer: "Sí, es posible mediante un sistema de amaestramiento. Al solicitar su cambio de bombines en Tetuán, podemos configurar los cilindros para que abra la puerta de su vivienda, el portal y el trastero con una sola llave de seguridad. Esto mejora enormemente la comodidad diaria y reduce el volumen de su llavero. Consulte con nuestros técnicos en la Calle de Bravo Murillo sobre las opciones de \"unificación de llaves para comunidades\", una solución práctica y muy segura para este 2026."
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
            "name": "Cambio Bombines Tetuán",
            "item": "https://www.cerrajeros-tetuan.es/cambio-bombines-tetuan"
        }]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Cambio de bombines",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Cerrajeros Tetuán",
            "telephone": "644936742"
        },
        "areaServed": {
            "@type": "City",
            "name": "Tetuán, Madrid"
        },
        "description": "Cambio de bombines en Tetuán. Cilindros antibumping certificados. Instalación inmediata."
    };

    return (
        <main className="subpage-layout">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            {/* HERO SECTION PREMIUM */}
            <section className="hero-section" style={{ minHeight: '60vh', padding: '10rem 0 4rem' }}>
                <div className="hero-background" style={{
                    backgroundImage: "linear-gradient(rgba(3, 11, 20, 0.8), rgba(3, 11, 20, 0.95)), url('/images/hero_urgentes_1772538687217.png')",
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
                        Seguridad Antibumping Garantizada
                    </div>
                    <h1>Cambio de Bombines en Tetuán</h1>
                    <p className="hero-subtitle">Actualiza la seguridad de tu hogar frente al bumping y el impresioning en menos de 30 minutos. Cilindros certificados con llaves incopiables.</p>
                </div>
            </section>

            <div className="breadcrumbs" style={{ background: '#0a192f', borderBottom: '1px solid #1e3a5f' }}>
                <div className="container" style={{ padding: '1rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                    <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link> <span style={{ margin: '0 0.5rem' }}>/</span> <Link href="/servicios-tetuan" style={{ color: '#fff', textDecoration: 'none' }}>Servicios</Link> <span style={{ margin: '0 0.5rem' }}>/</span> <span style={{ color: '#FFD700' }}>Cambio de Bombines</span>
                </div>
            </div>

            {/* INTRO SPLIT SECTION */}
            <section className="about-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container about-grid fade-in-up">
                    <div className="about-content">
                        <h2 className="section-title">El corazón de tu seguridad, actualizado</h2>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                            ¿Siente que su llave ya no gira con la suavidad de antes en su piso de la Calle de Almansa o acaba de mudarse a una vivienda cerca del Mercado de Maravillas? El corazón de su seguridad reside en el cilindro de su puerta. Nuestro servicio de <strong>cambio de bombines en Tetuán</strong> le ofrece la <em>máxima protección contra robos</em>.
                        </p>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                            Realizar un <strong>cambio de bombines en Tetuán</strong> es la medida más rápida y económica para elevar la protección de su familia sin necesidad de sustituir toda la puerta. En este 2026 los delincuentes utilizan métodos rápidos como el <em>bumping</em>; nosotros te blindamos con la tecnología SKG*** más avanzada.
                        </p>
                        <ul className="premium-list" style={{ listStyle: 'none', padding: 0, margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f8fafc' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                Tarjeta de Propiedad: Duplicados solo con autorización.
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f8fafc' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                Anti-taladro, anti-rotura y anti-ganzúa de fábrica.
                            </li>
                        </ul>
                    </div>
                    <div className="about-image-wrapper">
                        <img src="/images/camara_azca_1772539289185.png" alt="Instalación táctica de bombines" className="about-image" />
                        <div className="trust-card" style={{ bottom: '-20px', left: '-20px', background: '#0a192f', border: '1px solid #FFD700' }}>
                            <div className="trust-card-icon" style={{ background: 'rgba(255,215,0,0.1)' }}>
                                <ShieldCheck size={24} color="#FFD700" />
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>Marcas Top</h4>
                                <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.875rem' }}>Kaba, Mauer, Tesa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES GRID */}
            <section className="services-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Especialidades en Cambios de Cilindro</h2>
                    <p className="section-desc" style={{ textAlign: 'center', margin: '0 auto 4rem auto' }}>Desde casas señoriales hasta lofts modernos, adaptamos la seguridad a la tipología del acceso.</p>

                    <div className="services-grid">
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Lofts en Cuzco y Castillejos</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Instalación de bombines inteligentes, motorizados y controlados por App móvil para la nueva arquitectura moderna del distrito financiero.</p>
                        </div>
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Comunidades (Sor Ángela)</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Amaestramiento de cilindros para unificar las llaves del portal, buzones, trasteros y la propia vivienda. Simplificación y alta seguridad.</p>
                        </div>
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Portales Antiguos (Bellas Vistas)</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Renovación de bombines en herrajes antiguos sin modificar la estética de las puertas castizas. Integración perfecta de seguridad moderna.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ALTERNATING TEXT */}
            <section className="about-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container about-grid fade-in-up" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ position: 'relative' }}>
                        <div style={{ padding: '3rem 2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', border: '1px solid #1e3a5f', marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Mudanzas y Alquileres</h3>
                            <p style={{ color: '#94a3b8' }}>Si acaba de alquilar un piso en Cuatro Caminos, el primer consejo es cambiar el bombín. Nunca sabe quién tiene copias de agencias anteriores.</p>
                        </div>
                        <div style={{ padding: '3rem 2rem', background: 'linear-gradient(135deg, #003366, #001a33)', borderRadius: '1rem', border: '1px solid #FFD700' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>Función Doble Embrague</h3>
                            <p style={{ color: '#fff' }}>Instalamos cilindros que previenen quedarse atrapados. Ideal para mayores en Ventilla, permitiendo abrir desde fuera aunque haya llaves puestas.</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="section-title">Protección Máxima: Escudo + Cilindro</h2>
                        <h3 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>Estudio de vulnerabilidad en Valdeacederas</h3>
                        <p className="section-desc" style={{ marginBottom: '1.5rem', marginLeft: 0 }}>El <em>impresioning</em> es una técnica que copia su llave sin que usted lo note. Por eso, al realizar un cambio de bombines en Tetuán, insistimos en modelos con <strong>protección magnética</strong>. Consulte también nuestro servicio de <Link href="/cerraduras-antibumping-tetuan" style={{ color: '#FFD700' }}>cerraduras antibumping en Tetuán</Link> para una protección integral.</p>
                        <p className="section-desc" style={{ marginBottom: '1.5rem', marginLeft: 0 }}>Además de la sustitución del cilindro, realizamos el montaje de <strong>escudos protectores de acero abocardados</strong>. El bombín es el corazón, pero el escudo es la armadura. Si necesita también un <Link href="/cambio-cerraduras-tetuan" style={{ color: '#FFD700' }}>cambio de cerraduras en Tetuán</Link>, en calles clave como Bravo Murillo o Lope de Haro, no puede dejar la seguridad al azar.</p>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                            <Link href="/contacto-tetuan" className="btn-secondary" style={{ padding: '15px 30px' }}>Asesoramiento VIP</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERLINKING SEO */}
            <section style={{ background: '#030b14', padding: '4rem 0', borderTop: '1px solid #1e3a5f' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Otros Servicios de Cerrajería en Tetuán</h2>
                    <p className="section-desc" style={{ maxWidth: '850px', margin: '0 auto 1.5rem', textAlign: 'center' }}>
                        Como <Link href="/" style={{ color: '#FFD700' }}>cerrajeros en Tetuán</Link> de confianza, complementamos el cambio de bombines con servicios integrales. Si te has quedado fuera de casa, nuestro servicio de <Link href="/apertura-puertas-tetuan" style={{ color: '#FFD700' }}>apertura de puertas en Tetuán</Link> te devuelve el acceso <em>sin dañar la cerradura</em>.
                    </p>
                    <p className="section-desc" style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
                        Para una <strong>protección completa</strong>, instala también <Link href="/cerraduras-antibumping-tetuan" style={{ color: '#FFD700' }}>cerraduras antibumping certificadas</Link> y, ante cualquier urgencia, cuenta con nuestros <Link href="/cerrajeros-urgentes-tetuan" style={{ color: '#FFD700' }}>cerrajeros urgentes en Tetuán</Link>. <Link href="/contacto-tetuan" style={{ color: '#FFD700' }}>Solicita asesoramiento personalizado</Link>.
                    </p>
                </div>
            </section>

            <section className="faq-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Preguntas Frecuentes: Antibumping</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            <section className="cta-final" style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #003366, #001a33)', textAlign: 'center' }}>
                <div className="container fade-in-up">
                    <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem' }}>Blindamos tu puerta hoy</h2>
                    <p style={{ color: '#d1d5db', fontSize: '1.25rem', marginBottom: '2.5rem' }}>Catálogo completo de cilindros en nuestras unidades móviles. Llámanos.</p>
                    <a href="tel:644936742" className="btn-primary pulsing-btn" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem', background: '#dc2626', borderColor: '#dc2626' }}>Hablar con un Cerrajero: 644 936 742</a>
                </div>
            </section>
        </main>
    );
}
