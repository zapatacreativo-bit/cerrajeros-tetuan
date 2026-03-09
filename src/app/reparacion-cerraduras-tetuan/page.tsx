import { Metadata } from 'next';
import Link from 'next/link';
import { Wrench } from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import '../Home.css';

export const metadata: Metadata = {
    title: 'Reparación de Cerraduras en Tetuán | Rápidos y Honestos ☎ 644 936 742',
    description: 'Reparación de cerraduras en Tetuán. Arreglamos cerraduras bloqueadas, atascadas y llaves partidas. Llegamos en 20 min. Llama al 644 936 742.',
    keywords: 'reparacion cerradura tetuan, arreglar cerradura rota, cerrajeria',
    alternates: {
        canonical: 'https://www.cerrajerostetuan.com/reparacion-cerraduras-tetuan',
    },
    openGraph: {
        title: 'Reparación de Cerraduras en Tetuán | Rápidos y Honestos ☎ 644 936 742',
        description: 'Reparación de cerraduras en Tetuán. Arreglamos cerraduras bloqueadas, atascadas y llaves partidas. Llegamos en 20 min. Llama al 644 936 742.',
        url: 'https://www.cerrajerostetuan.com/reparacion-cerraduras-tetuan',
        images: [{ url: 'https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Reparación de Cerraduras en Tetuán | Rápidos y Honestos ☎ 644 936 742',
        description: 'Reparación de cerraduras en Tetuán. Arreglamos cerraduras bloqueadas, atascadas y llaves partidas. Llegamos en 20 min. Llama al 644 936 742.',
        images: ['https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png'],
    }
};

export default function ReparacionCerraduras() {
    const faqs = [
        {
            question: "¿Cuánto tarda un cerrajero en llegar para una reparación en el barrio de Tetuán?",
            answer: "Nuestro tiempo de respuesta para una reparación de cerraduras en Tetuán es de menos de 20 minutos. Al estar situados estratégicamente cerca de la Calle de Bravo Murillo, podemos desplazarnos rápidamente a cualquier punto, desde Bellas Vistas hasta Plaza de Castilla, asegurando una intervención de urgencia profesional este 2026 para que no pierda tiempo esperando en la calle."
        },
        {
            question: "¿Es mejor reparar una cerradura antigua o cambiarla por una nueva en Tetuán?",
            answer: "Depende del estado del mecanismo. En barrios con solera como Berruguete, realizamos la reparación de cerraduras en Tetuán siempre que la pieza mantenga su integridad. No obstante, si la cerradura es vulnerable al bumping, recomendamos una \"actualización a bombín antibumping\". Evaluamos su caso en la Calle de Francos Rodríguez y le ofrecemos la opción más segura y económica para su bolsillo y su tranquilidad."
        },
        {
            question: "¿Cuánto cuesta arreglar una cerradura que no gira en Bravo Murillo?",
            answer: "El coste de la reparación de cerraduras en Tetuán varía según la avería, pero siempre ofrecemos un presupuesto cerrado por teléfono. Si es un simple ajuste en la zona de Bravo Murillo, la tarifa es muy competitiva. Somos transparentes y honestos: le informamos del precio total de la \"asistencia técnica\" antes de empezar a trabajar, garantizando que no habrá cargos ocultos en su factura final."
        },
        {
            question: "¿Se puede reparar una cerradura inteligente en la zona de AZCA?",
            answer: "Sí, como expertos en tecnología de 2026, realizamos la reparación de cerraduras en Tetuán para modelos electrónicos y Smart Locks en el área de AZCA y Cuzco. Diagnosticamos fallos mecánicos y de software, asegurando que su sistema de acceso inteligente vuelva a funcionar correctamente. Es una \"reparación especializada\" que requiere técnicos formados en las últimas marcas del mercado de cerrajería digital."
        },
        {
            question: "¿Qué hago si mi cerradura ha sido forzada en el barrio de Tetuán?",
            answer: "Lo primero es llamar a la policía y, acto seguido, a un profesional de la reparación de cerraduras en Tetuán. Acudiremos de urgencia a cualquier calle, como Lope de Haro o Sor Ángela de la Cruz, para realizar una \"reparación de seguridad\". Evaluaremos los daños y reforzaremos el sistema para evitar futuros intentos, instalando si es necesario escudos acorazados de alta resistencia en su puerta."
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
            "name": "Reparación de Cerraduras",
            "item": "https://www.cerrajeros-tetuan.es/reparacion-cerraduras-tetuan"
        }]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Reparación de cerraduras",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Cerrajeros Tetuán",
            "telephone": "644936742"
        },
        "areaServed": {
            "@type": "City",
            "name": "Tetuán, Madrid"
        },
        "description": "Reparación de cerraduras en Tetuán. Arreglos y mantenimiento para cerraduras problemáticas."
    };

    return (
        <main className="subpage-layout">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            {/* HERO SECTION PREMIUM */}
            <section className="hero-section" style={{ minHeight: '60vh', padding: '10rem 0 4rem' }}>
                <div className="hero-background" style={{
                    backgroundImage: "linear-gradient(rgba(3, 11, 20, 0.8), rgba(3, 11, 20, 0.95)), url('/images/detalles_mecanicos_1772539391109.png')",
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
                        Asistencia Local Rápida e Imparcial
                    </div>
                    <h1>Reparación de Cerraduras en Tetuán</h1>
                    <p className="hero-subtitle">Arreglar primero, cambiar solo cuando es necesario. Diagnosticamos bloqueos, extraer llaves partidas, y ajustamos roces en toda la franja de Bravo Murillo y AZCA.</p>
                </div>
            </section>

            <div className="breadcrumbs" style={{ background: '#0a192f', borderBottom: '1px solid #1e3a5f' }}>
                <div className="container" style={{ padding: '1rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                    <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link> <span style={{ margin: '0 0.5rem' }}>/</span> <Link href="/servicios-tetuan" style={{ color: '#fff', textDecoration: 'none' }}>Servicios</Link> <span style={{ margin: '0 0.5rem' }}>/</span> <span style={{ color: '#FFD700' }}>Reparación Cerraduras</span>
                </div>
            </div>

            {/* INTRO SPLIT SECTION */}
            <section className="about-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container about-grid fade-in-up">
                    <div className="about-content">
                        <h2 className="section-title">Diagnosticamos antes de cambiar</h2>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                            ¿La llave gira en vacío cerca del Mercado de Maravillas? No hay nada que genere más estrés que un fallo mecánico en la puerta. Nuestro servicio de <strong>reparación de cerraduras en Tetuán</strong> soluciona averías <em>ajustando la leva o limpiando el cilindro</em>.
                        </p>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                            Si algo es reparable, lo reparamos. Nuestro compromiso es la <strong>transparencia radical</strong> frente a la sustitución compulsiva. Extraemos trozos bloqueados en buzones, y restauramos <em>borjas oxidadas</em> en las puertas clásicas de Bellas Vistas.
                        </p>
                        <ul className="premium-list" style={{ listStyle: 'none', padding: 0, margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f8fafc' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                Extracción de llaves partidas sin dañar el cilindro base.
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f8fafc' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                Ajuste de puertas acorazadas descuadradas o bisagras caídas.
                            </li>
                        </ul>
                    </div>
                    <div className="about-image-wrapper">
                        <img src="/images/reparacion_furgoneta_herramientas.png" alt="Herramientas de reparación cerrajería Tetuán" className="about-image" />
                        <div className="trust-card" style={{ bottom: '-20px', left: '-20px', background: '#0a192f', border: '1px solid #FFD700' }}>
                            <div className="trust-card-icon" style={{ background: 'rgba(255,215,0,0.1)' }}>
                                <Wrench size={24} color="#FFD700" />
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>Clínica Metálica</h4>
                                <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.875rem' }}>Rescate sin daños extras</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES GRID */}
            <section className="services-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>¿Qué le duele a tu cerradura?</h2>
                    <p className="section-desc" style={{ textAlign: 'center', margin: '0 auto 4rem auto' }}>Síntomas mecánicos que solucionamos a diario en el distrito de Tetuán.</p>

                    <div className="services-grid">
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Gira en Vacío / Dura</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>El embrague interior o los pitones están resecos por la polución habitual en calles como Sor Ángela. Limpiamos con grafito líquido el cilindro.</p>
                        </div>
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Reparación tras Intento de Robo</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Si asoman muescas de manipulación en la Plaza Remonta. Consolidamos el frontal de la puerta y rectificamos el escudo acorazado doblado.</p>
                        </div>
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Cierres Metálicos Comerciales</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Orense o General Perón. Reparación urgente de motores trabados en la persiana y sustitución de lamas deformadas por impactos de furgonetas.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ALTERNATING TEXT */}
            <section className="about-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container about-grid fade-in-up" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '4rem', alignItems: 'center' }}>
                    <div className="about-image-wrapper">
                        <img src="/images/hero_bombines_1772539101115.png" alt="Reparando escudo de seguridad y llaves partidas" className="about-image" style={{ borderRadius: '1rem', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
                    </div>
                    <div>
                        <h2 className="section-title">Evitando el Daño Crónico</h2>
                        <h3 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>Llaves forzadas y Portales Rotos</h3>
                        <p className="section-desc" style={{ marginBottom: '1.5rem', marginLeft: 0 }}>Empujar fuerte la puerta mientras giras la llave en tu piso de Raimundo Fernández es señal de <em>holgura</em>. La fricción constante desgasta el latón de la llave original hasta que se rompe limpia en el hueco un viernes a las 3 am. En ese momento, nuestros <Link href="/cerrajeros-24-horas-tetuan" style={{ color: '#FFD700' }}>cerrajeros 24 horas en Tetuán</Link> te rescatan <strong>sin daños a tu puerta</strong>.</p>

                        <div style={{ padding: '2rem', background: 'rgba(26, 42, 60, 0.4)', borderRadius: '1rem', border: '1px solid #1e3a5f', marginBottom: '2rem' }}>
                            <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>Mantenimiento en Comunidades</h4>
                            <p style={{ color: '#94a3b8', margin: 0 }}>Si el muelle cierra de golpe en Lope de Haro, la caja de alojamiento sufre. Nosotros calibramos el muelle del gas y ajustamos el freno dinámico del electro-pestillo para que cierre suave pero contundente.</p>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Link href="/contacto-tetuan" className="btn-secondary" style={{ padding: '15px 30px' }}>Agendar Mantenimiento</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERLINKING SEO */}
            <section style={{ background: '#030b14', padding: '4rem 0', borderTop: '1px solid #1e3a5f' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Más Servicios de Cerrajería en Tetuán</h2>
                    <p className="section-desc" style={{ maxWidth: '850px', margin: '0 auto 1.5rem', textAlign: 'center' }}>
                        Tus <Link href="/" style={{ color: '#FFD700' }}>cerrajeros de confianza en Tetuán</Link>. Si la reparación revela que tu cerradura está obsoleta, te recomendamos un <Link href="/cambio-cerraduras-tetuan" style={{ color: '#FFD700' }}>cambio de cerraduras en Tetuán</Link> con <em>escudos acorazados de última generación</em>.
                    </p>
                    <p className="section-desc" style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
                        Protege tu hogar con <Link href="/cerraduras-antibumping-tetuan" style={{ color: '#FFD700' }}>cerraduras antibumping en Tetuán</Link> de <strong>alta seguridad certificada</strong>. <Link href="/contacto-tetuan" style={{ color: '#FFD700' }}>Solicita diagnóstico gratuito</Link>.
                    </p>
                </div>
            </section>

            <section className="faq-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Preguntas Frecuentes: Arreglos Rápidos</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            <section className="cta-final" style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #001a33, #003366)', textAlign: 'center' }}>
                <div className="container fade-in-up">
                    <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem' }}>¿El mecanismo se resiste?</h2>
                    <p style={{ color: '#d1d5db', fontSize: '1.25rem', marginBottom: '2.5rem' }}>No fuerces la cerradura más tiempo, podríamos arreglarla hoy por un coste bajísimo.</p>
                    <a href="tel:644936742" className="btn-primary pulsing-btn" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem', background: '#dc2626', borderColor: '#dc2626' }}>Pedir Diagnóstico al 644 936 742</a>
                </div>
            </section>
        </main>
    );
}
