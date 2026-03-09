import { Metadata } from 'next';
import Link from 'next/link';
import { Car } from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import '../Home.css';

export const metadata: Metadata = {
    title: 'Apertura de Coches en Tetuán | Sin Daños ☎ 644 936 742',
    description: 'Apertura de coches en Tetuán. Técnicos especializados en vehículos de todas las marcas. Llegamos en 15 min. Llama al 644 936 742.',
    keywords: 'apertura de coches tetuan, abrir coche tetuan, cerrajero coches',
    alternates: {
        canonical: 'https://www.cerrajerostetuan.com/apertura-coches-tetuan',
    },
    openGraph: {
        title: 'Apertura de Coches en Tetuán | Sin Daños ☎ 644 936 742',
        description: 'Apertura de coches en Tetuán. Técnicos especializados en vehículos de todas las marcas. Llegamos en 15 min. Llama al 644 936 742.',
        url: 'https://www.cerrajerostetuan.com/apertura-coches-tetuan',
        images: [{ url: 'https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Apertura de Coches en Tetuán | Sin Daños ☎ 644 936 742',
        description: 'Apertura de coches en Tetuán. Técnicos especializados en vehículos de todas las marcas. Llegamos en 15 min. Llama al 644 936 742.',
        images: ['https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png'],
    }
};

export default function AperturaCoches() {
    const faqs = [
        {
            question: "¿Cuánto tarda un cerrajero en abrir un coche en el barrio de Tetuán?",
            answer: "Nuestro tiempo de respuesta para la apertura de coches en Tetuán es de menos de 15 minutos. Al estar situados cerca de puntos clave como Bravo Murillo y Plaza de Castilla, podemos desplazarnos rápidamente a cualquier parking o calle del distrito, asegurando que recuperes el acceso a tu vehículo sin largas esperas bajo el sol o la lluvia de Madrid en este 2026."
        },
        {
            question: "¿Se puede abrir un coche moderno sin romper el cristal en Tetuán?",
            answer: "Absolutamente. Como expertos en la apertura de coches en Tetuán, utilizamos técnicas de \"apertura no destructiva\". Gracias a herramientas de precisión como las ganzúas Lishi, abrimos la cerradura manipulando los pines internos, tal como lo haría la llave original. Esto garantiza que no haya daños en los cristales, ni en los marcos, ni en la pintura de tu coche, sea cual sea su gama o modelo."
        },
        {
            question: "¿Qué hago si he perdido las llaves del coche cerca del Mercado de Maravillas?",
            answer: "Si has perdido las llaves cerca del Mercado de Maravillas o en Cuatro Caminos, llámanos de inmediato. Además de realizar la apertura de coches en Tetuán, contamos con unidades móviles capaces de confeccionar un \"duplicado de llave de coche sin original\" en el acto. Programamos el chip del inmovilizador y tallamos la espada de la llave para que puedas seguir con tu jornada sin necesidad de grúas ni talleres oficiales."
        },
        {
            question: "¿Cuánto cuesta abrir un coche si me he dejado las llaves dentro en Tetuán?",
            answer: "El precio de la apertura de coches en Tetuán depende del modelo de vehículo y del horario, pero siempre ofrecemos un presupuesto cerrado por teléfono. Somos conocidos en zonas como Bellas Vistas y Berruguete por nuestra política de precios transparentes y honestos. No hay cargos ocultos; te informamos del coste total del servicio antes de desplazarnos a tu ubicación."
        },
        {
            question: "¿Pueden abrir cualquier marca de coche en la zona de AZCA?",
            answer: "Sí, realizamos la apertura de coches en Tetuán para todas las marcas y modelos del mercado, incluyendo vehículos de alta gama que se encuentran habitualmente en AZCA y Cuzco. Estamos formados en los sistemas de seguridad de marcas como Audi, BMW, Mercedes, Volvo y Tesla, utilizando el software y las herramientas autorizadas de este 2026 para garantizar una apertura limpia y profesional en todo momento."
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
            "name": "Apertura de Coches",
            "item": "https://www.cerrajeros-tetuan.es/apertura-coches-tetuan"
        }]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Apertura de coches",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Cerrajeros Tetuán",
            "telephone": "644936742"
        },
        "areaServed": {
            "@type": "City",
            "name": "Tetuán, Madrid"
        },
        "description": "Apertura de coches en Tetuán. Técnicos especializados en todas las marcas. Sin roturas."
    };

    return (
        <main className="subpage-layout">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            {/* HERO SECTION PREMIUM */}
            <section className="hero-section" style={{ minHeight: '60vh', padding: '10rem 0 4rem' }}>
                <div className="hero-background" style={{
                    backgroundImage: "linear-gradient(rgba(3, 11, 20, 0.8), rgba(3, 11, 20, 0.95)), url('/images/linterna_24h_1772538514175.png')",
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
                        Asistencia en Parkings y Vía Pública &lt; 15min
                    </div>
                    <h1>Apertura de Coches en Tetuán</h1>
                    <p className="hero-subtitle">Recuperamos tu movilidad de inmediato. Apertura 100% limpia sin romper lunas ni dañar la carrocería, estés en Castellana o Cuatro Caminos.</p>
                </div>
            </section>

            <div className="breadcrumbs" style={{ background: '#0a192f', borderBottom: '1px solid #1e3a5f' }}>
                <div className="container" style={{ padding: '1rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                    <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link> <span style={{ margin: '0 0.5rem' }}>/</span> <Link href="/servicios-tetuan" style={{ color: '#fff', textDecoration: 'none' }}>Servicios</Link> <span style={{ margin: '0 0.5rem' }}>/</span> <span style={{ color: '#FFD700' }}>Coches y Vehículos</span>
                </div>
            </div>

            {/* INTRO SPLIT SECTION */}
            <section className="about-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container about-grid fade-in-up">
                    <div className="about-content">
                        <h2 className="section-title">Llaves dentro, problema resuelto</h2>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                            ¿Te has dejado las llaves en el contacto tras una breve parada en Bravo Murillo? Ver tu coche bloqueado es frustrante. Lo que menos necesitas es un servicio lento que te haga perder el día o rompa un cristal forzando a ir al taller.
                        </p>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                            Como cerrajeros de automoción en Tetuán, conocemos cada callejón y parking subterráneo. Llegamos en apenas 15 minutos con herramientas Lishi homologadas, simulando la llave original para abrir la puerta limpiamente.
                        </p>
                        <ul className="premium-list" style={{ listStyle: 'none', padding: 0, margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f8fafc' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                Extracción de llaves partidas del propio contacto.
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f8fafc' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                Duplicado y codificación Keyless in situ por pérdida total.
                            </li>
                        </ul>
                    </div>
                    <div className="about-image-wrapper">
                        <img src="/images/furgoneta_urgentes_1772538702292.png" alt="Apertura coche en Tetuán sin daños" className="about-image" />
                        <div className="trust-card" style={{ bottom: '-20px', left: '-20px', background: '#0a192f', border: '1px solid #FFD700' }}>
                            <div className="trust-card-icon" style={{ background: 'rgba(255,215,0,0.1)' }}>
                                <Car size={24} color="#FFD700" />
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>Gama Alta</h4>
                                <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.875rem' }}>Audi, BMW, Mercedes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES GRID */}
            <section className="services-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>¿Dónde te has quedado tirado en Tetuán?</h2>
                    <p className="section-desc" style={{ textAlign: 'center', margin: '0 auto 4rem auto' }}>Cobertura rápida y adaptada a cada situación de movilidad.</p>

                    <div className="services-grid">
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Parkings AZCA/Cuzco</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Apertura de vehículos de alta gama. Descifrado sin rotura mediante software oficial. Discreción total entre directivos del distrito financiero.</p>
                        </div>
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Furgonetas (Berruguete)</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Repartidores bloqueados por cierres automáticos de la caja trasera. Intervenciones ultra urgentes para no retrasar la ruta comercial del autónomo.</p>
                        </div>
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Motos (Plaza Castilla)</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>¿Las llaves se quedaron dentro del baúl de la scooter? Extraemos el acceso al sillín sin deformar plásticos de tu Honda, Yamaha o Vespa.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ALTERNATING TEXT */}
            <section className="about-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container about-grid fade-in-up" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ position: 'relative' }}>
                        <div style={{ padding: '3rem 2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', border: '1px solid #1e3a5f', marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Tecnología Keyless</h3>
                            <p style={{ color: '#94a3b8' }}>Las llaves inteligentes pueden fallar por desgaste de batería provocando un bloqueo completo a vehículo encendido. Diagnosticamos e inyectamos señal bypass.</p>
                        </div>
                        <div style={{ padding: '3rem 2rem', background: 'linear-gradient(135deg, #dc2626, #991b1b)', borderRadius: '1rem', border: '1px solid #fecaca' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Prioridad Absoluta 🚨</h3>
                            <p style={{ color: '#fff' }}>¿Bebé o mascota atrapados a pleno sol cerca de San Germán u Orense? Indica "Emergencia Vital". Apertura inmediata sin coste de salto de prioridad.</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="section-title">Tu Grúa Personal Cero-Kilómetros</h2>
                        <h3 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>Duplicados tras Pérdida Total</h3>
                        <p className="section-desc" style={{ marginBottom: '1.5rem', marginLeft: 0 }}>Si perdiste la única llave por el Parque Rodríguez Sahagún, remolcar el coche es costoso e inviable. Nosotros llevamos el taller a la acera: decodificamos el bombín, tallamos mecánicamente la espada y programamos el inmovilizador en la calle.</p>

                        <p className="section-desc" style={{ marginBottom: '1.5rem', marginLeft: 0 }}>En Tetuán la seguridad física también aplica a tu medio de transporte. Si una cerradura fue forzada con ganzúas baratas en un intento de robo, reemplazamos cilindros de puerta para que regreses a la tranquilidad del garaje blindado.</p>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                            <a href="tel:644936742" className="btn-primary" style={{ padding: '15px 30px', background: '#dc2626', borderColor: '#dc2626' }}>Rescate Vehicular Ya</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Preguntas Frecuentes: Coches</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            <section className="cta-final" style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #001a33, #003366)', textAlign: 'center' }}>
                <div className="container fade-in-up">
                    <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem' }}>Solucionamos el bloqueo al instante</h2>
                    <p style={{ color: '#d1d5db', fontSize: '1.25rem', marginBottom: '2.5rem' }}>Sin destrozos de cristal ni espera de talleres. Especialistas en tu barrio.</p>
                    <a href="tel:644936742" className="btn-primary pulsing-btn" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem', background: '#dc2626', borderColor: '#dc2626' }}>Llamar Unidad Móvil: 644 936 742</a>
                </div>
            </section>
        </main>
    );
}
