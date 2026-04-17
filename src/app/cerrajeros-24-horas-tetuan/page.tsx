import { Metadata } from 'next';
import Link from 'next/link';
import { Moon } from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import '../Home.css';

export const metadata: Metadata = {
    title: 'Cerrajeros 24 Horas Tetuán | Urgencias ☎ 644 06 10 05',
    description: 'Servicio de cerrajeros 24 horas en Tetuán. Atención inmediata día y noche. Llegamos en menos de 20 minutos. Llama al 644 06 10 05.',
    keywords: 'cerrajero 24 horas tetuan, cerrajero madrid noche, asistencia 24h',
    alternates: {
        canonical: 'https://www.tetuancerrajeros.com/cerrajeros-24-horas-tetuan',
    },
    openGraph: {
        title: 'Cerrajeros 24 Horas Tetuán | Urgencias ☎ 644 06 10 05',
        description: 'Servicio de cerrajeros 24 horas en Tetuán. Atención inmediata día y noche. Llegamos en menos de 20 minutos. Llama al 644 06 10 05.',
        url: 'https://www.tetuancerrajeros.com/cerrajeros-24-horas-tetuan',
        images: [{ url: 'https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cerrajeros 24 Horas Tetuán | Urgencias ☎ 644 06 10 05',
        description: 'Servicio de cerrajeros 24 horas en Tetuán. Atención inmediata día y noche. Llegamos en menos de 20 minutos. Llama al 644 06 10 05.',
        images: ['https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png'],
    }
};

export default function Cerrajeros24Horas() {
    const faqs = [
        {
            question: "¿Cuánto tarda un cerrajero 24 horas en llegar a mi casa en Tetuán?",
            answer: "Nuestra respuesta para quienes buscan cerrajeros 24 horas en Tetuán es clara: tardamos menos de 20 minutos. Al estar situados físicamente cerca de la Calle de Bravo Murillo y la Plaza de Castilla, conocemos los mejores accesos para evitar el tráfico madrileño y llegar a tu ubicación de forma inmediata, garantizando una atención de urgencia real en este 2026."
        },
        {
            question: "¿Cuánto cuesta un cerrajero de urgencia en el barrio de Tetuán?",
            answer: "El precio de un servicio de cerrajeros 24 horas en Tetuán depende de la complejidad (si es solo apertura o cambio de bombín), pero siempre ofrecemos un presupuesto cerrado por teléfono. Somos conocidos en Bellas Vistas y Berruguete por nuestra política de tarifas honestas y sin cargos ocultos, ofreciendo la mejor relación calidad-precio del distrito incluso en horario nocturno o festivos."
        },
        {
            question: "¿Es posible abrir una puerta blindada sin romperla en la zona de Cuzco?",
            answer: "Sí, como especialistas en cerrajeros 24 horas en Tetuán, aplicamos técnicas de \"apertura no destructiva\". En áreas como Cuzco o Castillejos, utilizamos herramientas de precisión que permiten abrir puertas blindadas y acorazadas sin dañar el bombín ni la estética de la puerta, permitiéndote conservar tu cerradura actual en la mayoría de las intervenciones profesionales."
        },
        {
            question: "¿Qué hago si me han robado las llaves en Bravo Murillo?",
            answer: "Lo primero es mantener la calma y contactar con nuestros cerrajeros 24 horas en Tetuán. Nos desplazaremos de urgencia a cualquier punto de Bravo Murillo para realizar un \"cambio de bombín de seguridad\" inmediato. Instalaremos un sistema con llaves incopiables para garantizar que nadie que encuentre tus llaves antiguas pueda acceder a tu hogar, devolviéndote la tranquilidad en el acto."
        },
        {
            question: "¿Tienen servicio de cerrajería para tiendas en la Calle de Orense?",
            answer: "Absolutamente. Contamos con un equipo de cerrajeros 24 horas en Tetuán especializado en locales comerciales. Si el cierre de tu tienda en la Calle de Orense o Cuatro Caminos se ha bloqueado, acudimos de urgencia para realizar la reparación del motor o del cierre manual, asegurando que tu negocio no pierda ni un minuto de su jornada comercial por un problema de acceso."
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
            "name": "Cerrajeros 24 Horas",
            "item": "https://www.cerrajeros-tetuan.es/cerrajeros-24-horas-tetuan"
        }]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Cerrajeros 24 horas",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Cerrajeros Tetuán",
            "telephone": "644061005"
        },
        "areaServed": {
            "@type": "City",
            "name": "Tetuán, Madrid"
        },
        "description": "Servicio de cerrajeros 24 horas en Tetuán. Atención inmediata día y noche sin importar la hora."
    };

    return (
        <main className="subpage-layout">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            {/* HERO SECTION PREMIUM */}
            <section className="hero-section" style={{ minHeight: '60vh', padding: '10rem 0 4rem' }}>
                <div className="hero-background" style={{
                    backgroundImage: "linear-gradient(rgba(3, 11, 20, 0.8), rgba(3, 11, 20, 0.95)), url('/images/custom_van.png')",
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
                        Unidad Táctica Nocturna y Festivos
                    </div>
                    <h1>Cerrajeros 24 Horas en Tetuán</h1>
                    <p className="hero-subtitle">¿3:00 am en Bravo Murillo y la llave no gira? No busques en internet un número opaco, llama al taller de tu barrio que llega en 20 minutos.</p>
                </div>
            </section>

            <div className="breadcrumbs" style={{ background: '#0a192f', borderBottom: '1px solid #1e3a5f' }}>
                <div className="container" style={{ padding: '1rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                    <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link> <span style={{ margin: '0 0.5rem' }}>/</span> <Link href="/servicios-tetuan" style={{ color: '#fff', textDecoration: 'none' }}>Servicios</Link> <span style={{ margin: '0 0.5rem' }}>/</span> <span style={{ color: '#FFD700' }}>24 Horas</span>
                </div>
            </div>

            {/* INTRO SPLIT SECTION */}
            <section className="about-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container about-grid fade-in-up">
                    <div className="about-content">
                        <h2 className="section-title">El Estrés de quedarse fuera</h2>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                            Volver de una cena en la Avenida de Brasil y que la llave se parta al girar el bombín; perder el bolso cerca de Cuzco y no poder entrar en casa de madrugada. Nuestros <strong>cerrajeros 24 horas en Tetuán</strong> entienden que <em>reaccionar rápido es imperativo</em>.
                        </p>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                            Nuestra política 24H es real, no un eslogan. Mantenemos <strong>furgonetas perimetrando la Plaza de Castilla y Cuatro Caminos</strong> con stock de bombines precintados. Intervenimos abriendo bajo <em>técnicas no destructivas</em> y re-habilitamos el sistema al momento.
                        </p>
                        <ul className="premium-list" style={{ listStyle: 'none', padding: 0, margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f8fafc' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                20 minutos de tiempo de llegada garantizado (T.A.G.).
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f8fafc' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                Precios de noche acotados por teléfono sin letra pequeña.
                            </li>
                        </ul>
                    </div>
                    <div className="about-image-wrapper">
                        <img src="/images/linterna_24h_1772538514175.png" alt="Cerrajero operando bajo urgencia luz nocturna" className="about-image" />
                        <div className="trust-card" style={{ bottom: '-20px', left: '-20px', background: '#0a192f', border: '1px solid #FFD700' }}>
                            <div className="trust-card-icon" style={{ background: 'rgba(255,215,0,0.1)' }}>
                                <Moon size={24} color="#FFD700" />
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>100% Sin Sorpresas</h4>
                                <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.875rem' }}>Cotización por teléfono</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES GRID */}
            <section className="services-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>¿Cuál es tu emergencia?</h2>
                    <p className="section-desc" style={{ textAlign: 'center', margin: '0 auto 4rem auto' }}>Patrullamos tu distrito para resolver el problema al vuelo.</p>

                    <div className="services-grid">
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Robo de Llaves / Vandalismo</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Alguien con tus llaves sabe dónde vives. Acudimos de noche y sustituimos en el acto los cilindros para que puedas dormir seguro.</p>
                        </div>
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Cierres Metálicos Comerciales</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Lunes 8:00 AM en Orense, la peluquería no puede abrir el cierre. Motores que queman bobinas: los saltamos y procedemos a la apertura obligada.</p>
                        </div>
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Protección por Fallo Domótico</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Los Smart Locks de Cuzco fallan si colapsa la nube o la batería alcalina. Hackeamos limpiamente el puente bypass del teclado para restaurar control.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ALTERNATING TEXT */}
            <section className="about-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container about-grid fade-in-up" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '4rem', alignItems: 'center' }}>
                    <div className="about-image-wrapper">
                        <img src="/images/custom_van.png" alt="Furgoneta cerrajeros 24 h acudiendo a urgencia en Tetuán" className="about-image" style={{ borderRadius: '1rem', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
                    </div>
                    <div>
                        <h2 className="section-title">La Promesa del Barrio</h2>
                        <h3 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>No te fíes de números opacos</h3>
                        <p className="section-desc" style={{ marginBottom: '1.5rem', marginLeft: 0 }}>Muchos portales ocultan <em>'abre-puertas'</em> que viajan desde la otra punta de Madrid y destrozan el marco por falta de herramental. Nosotros operamos en Lope de Haro y Sor Ángela de la Cruz como <strong>expertos residentes</strong>; conocemos las puertas blindadas castizas de la zona. Si necesitas una <Link href="/apertura-puertas-tetuan" style={{ color: '#FFD700' }}>apertura de puertas en Tetuán</Link>, te garantizamos <em>cero daños</em>.</p>

                        <div style={{ padding: '2rem', background: 'rgba(26, 42, 60, 0.4)', borderRadius: '1rem', border: '1px solid #1e3a5f', marginBottom: '2rem' }}>
                            <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>Cuidado de los Mayores en Ventilla</h4>
                            <p style={{ color: '#94a3b8', margin: 0 }}>Las ancianos del barrio a veces olvidan la llave por dentro. Nuestra respuesta en Ventilla es empática. Abrimos con radiografías especiales sin ruido para no asustarlos, y podemos instalar cilindros de doble embrague in-situ.</p>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="tel:644061005" className="btn-secondary" style={{ padding: '15px 30px' }}>Contacto Inmediato 24/7</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERLINKING SEO */}
            <section style={{ background: '#030b14', padding: '4rem 0', borderTop: '1px solid #1e3a5f' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Todos Nuestros Servicios Disponibles 24h</h2>
                    <p className="section-desc" style={{ maxWidth: '850px', margin: '0 auto 1.5rem', textAlign: 'center' }}>
                        Como <Link href="/" style={{ color: '#FFD700' }}>cerrajeros en Tetuán</Link> con servicio ininterrumpido, atendemos cualquier incidencia. Desde <Link href="/apertura-puertas-tetuan" style={{ color: '#FFD700' }}>aperturas de puertas en Tetuán</Link> hasta <Link href="/cambio-bombines-tetuan" style={{ color: '#FFD700' }}>cambio de bombines antibumping</Link>, todo disponible <em>de día y de noche</em>.
                    </p>
                    <p className="section-desc" style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
                        Para emergencias críticas, nuestro equipo de <Link href="/cerrajeros-urgentes-tetuan" style={{ color: '#FFD700' }}>cerrajeros urgentes en Tetuán</Link> prioriza <strong>robos e intentos de intrusión</strong>. <Link href="/contacto-tetuan" style={{ color: '#FFD700' }}>Llámanos ahora sin compromiso</Link>.
                    </p>
                </div>
            </section>

            <section className="faq-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Preguntas Frecuentes: Nocturnas</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            <section className="cta-final" style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #001a33, #003366)', textAlign: 'center' }}>
                <div className="container fade-in-up">
                    <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem' }}>La furgoneta está en marcha</h2>
                    <p style={{ color: '#d1d5db', fontSize: '1.25rem', marginBottom: '2.5rem' }}>No esperes horas de madrugada. Confía en el equipo que patrulla Tetuán cada noche.</p>
                    <a href="tel:644061005" className="btn-primary pulsing-btn" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem', background: '#dc2626', borderColor: '#dc2626' }}>Pedir Asistencia: 644 06 10 05</a>
                </div>
            </section>
        </main>
    );
}
