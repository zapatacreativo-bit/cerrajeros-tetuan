import { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase } from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import '../Home.css';

export const metadata: Metadata = {
    title: 'Apertura de Cajas Fuertes en Tetuán | Discreción ☎ 644 06 10 05',
    description: 'Apertura técnica de cajas fuertes en Tetuán. Especialistas en sistemas mecánicos y electrónicos. Total discreción y confidencialidad. Llama al 644 06 10 05.',
    keywords: 'apertura de cajas fuertes tetuan, abrir caja fuerte, cerradura caja fuerte',
    alternates: {
        canonical: 'https://www.tetuancerrajeros.com/apertura-cajas-fuertes-tetuan',
    },
    openGraph: {
        title: 'Apertura de Cajas Fuertes en Tetuán | Discreción ☎ 644 06 10 05',
        description: 'Apertura técnica de cajas fuertes en Tetuán. Especialistas en sistemas mecánicos y electrónicos. Total discreción y confidencialidad. Llama al 644 06 10 05.',
        url: 'https://www.tetuancerrajeros.com/apertura-cajas-fuertes-tetuan',
        images: [{ url: 'https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Apertura de Cajas Fuertes en Tetuán | Discreción ☎ 644 06 10 05',
        description: 'Apertura técnica de cajas fuertes en Tetuán. Especialistas en sistemas mecánicos y electrónicos. Total discreción y confidencialidad. Llama al 644 06 10 05.',
        images: ['https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png'],
    }
};

export default function AperturaCajasFuertes() {
    const faqs = [
        {
            question: "¿Es posible abrir una caja fuerte sin romperla en el barrio de Tetuán?",
            answer: "Sí, en la gran mayoría de los casos realizamos la apertura de cajas fuertes en Tetuán de forma no destructiva. Mediante el uso de endoscopios, decodificadores electrónicos y técnicas de manipulación de diales, conseguimos acceder al interior en zonas como AZCA o Cuzco sin dañar la estética ni la funcionalidad de la caja. Solo en casos de bloqueo por intento de robo recurrimos a la perforación controlada, que posteriormente reparamos para que la caja siga siendo útil."
        },
        {
            question: "¿Cuánto tarda un cerrajero en abrir una caja fuerte en la zona de Bravo Murillo?",
            answer: "El tiempo depende del modelo y del tipo de avería, pero para una apertura de cajas fuertes en Tetuán de urgencia en la zona de Bravo Murillo, solemos tardar entre 30 y 90 minutos de trabajo técnico. Nos desplazamos de forma inmediata desde nuestra base en el distrito, llegando a su ubicación en menos de 20 minutos para evaluar la situación y ofrecerle una solución rápida para que pueda recuperar sus documentos o valores este mismo día."
        },
        {
            question: "¿Qué hago si he perdido la llave de mi caja fuerte en Bellas Vistas?",
            answer: "Lo primero es no forzar la cerradura. Para una apertura de cajas fuertes en Tetuán por pérdida de llave en Bellas Vistas, utilizamos técnicas de ganzuado profesional o impresión de llave. Una vez abierta, le recomendamos realizar una \"sustitución de la cerradura\" o un cambio de claves para que la llave perdida deje de ser un riesgo de seguridad para su hogar en la Calle de Jerónima Llorente."
        },
        {
            question: "¿Cuánto cuesta abrir una caja fuerte digital bloqueada en Tetuán?",
            answer: "El coste de la apertura de cajas fuertes en Tetuán varía según el grado de seguridad de la caja (I a IV). Ofrecemos presupuestos cerrados una vez identificado el modelo. Al ser cerrajeros locales del distrito, nuestras tarifas son muy competitivas, eliminando grandes costes de desplazamiento. Realizamos la \"apertura técnica de sistemas electrónicos\" con la mejor relación calidad-precio de Madrid, garantizando discreción absoluta y un servicio profesional garantizado."
        },
        {
            question: "¿Ofrecen servicio de apertura de cajas fuertes 24 horas en Plaza de Castilla?",
            answer: "Absolutamente. Contamos con un equipo especializado en la apertura de cajas fuertes en Tetuán disponible las 24 horas del día para urgencias en Plaza de Castilla, Ventilla y alrededores. Entendemos que hay situaciones donde el acceso a la caja fuerte es crítico para un negocio o una gestión legal urgente, por lo que nuestra unidad móvil de alta seguridad está siempre lista para intervenir en cualquier calle del distrito de Tetuán de forma inmediata."
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
            "name": "Apertura Cajas Fuertes",
            "item": "https://www.cerrajeros-tetuan.es/apertura-cajas-fuertes-tetuan"
        }]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Apertura de cajas fuertes",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Cerrajeros Tetuán",
            "telephone": "644061005"
        },
        "areaServed": {
            "@type": "City",
            "name": "Tetuán, Madrid"
        },
        "description": "Apertura técnica de cajas fuertes en Tetuán. Especialistas en sistemas mecánicos y electrónicos. Total discreción."
    };

    return (
        <main className="subpage-layout">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            {/* HERO SECTION PREMIUM */}
            <section className="hero-section" style={{ minHeight: '60vh', padding: '10rem 0 4rem' }}>
                <div className="hero-background" style={{
                    backgroundImage: "linear-gradient(rgba(3, 11, 20, 0.8), rgba(3, 11, 20, 0.95)), url('/images/custom_tech.png')",
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
                    <div className="availability-badge" style={{ justifyContent: 'center', margin: '0 auto 2rem', borderColor: '#FFD700', color: '#FFD700', background: 'rgba(255,215,0,0.1)' }}>
                        <span className="availability-dot" style={{ background: '#FFD700' }}></span>
                        Servicio de Extrema Confidencialidad
                    </div>
                    <h1>Apertura de Cajas Fuertes en Tetuán</h1>
                    <p className="hero-subtitle">Recupera el acceso a tus valores y documentos vitales con técnicos de precisión. Especialistas en sistemas mecánicos, electrónicos y de alta seguridad grado IV.</p>
                </div>
            </section>

            <div className="breadcrumbs" style={{ background: '#0a192f', borderBottom: '1px solid #1e3a5f' }}>
                <div className="container" style={{ padding: '1rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                    <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link> <span style={{ margin: '0 0.5rem' }}>/</span> <Link href="/servicios-tetuan" style={{ color: '#fff', textDecoration: 'none' }}>Servicios</Link> <span style={{ margin: '0 0.5rem' }}>/</span> <span style={{ color: '#FFD700' }}>Cajas Fuertes</span>
                </div>
            </div>

            {/* INTRO SPLIT SECTION */}
            <section className="about-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container about-grid fade-in-up">
                    <div className="about-content">
                        <h2 className="section-title">Discreción y Precisión Técnica</h2>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                            ¿Se ha encontrado con que la combinación de su caja de seguridad no responde tras un largo periodo sin usarla en su oficina de la Calle de Orense? La <strong>apertura de cajas fuertes en Tetuán</strong> exige <em>cirugía técnica y confidencialidad absoluta</em>.
                        </p>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                            Como <strong>expertos operativos</strong> desde Cuatro Caminos hasta la Plaza de Castilla, entendemos que lo que hay dentro es su legado. En 2026, utilizamos <em>tecnología no invasiva</em> (endoscopios, decodificadores) para abrir sin destruir el contenido.
                        </p>
                        <ul className="premium-list" style={{ listStyle: 'none', padding: 0, margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f8fafc' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                Protocolo NDA: Acuerdo de confidencialidad en intervenciones empresariales.
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f8fafc' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                Apertura 90% limpia sin necesidad de inutilizar la caja.
                            </li>
                        </ul>
                    </div>
                    <div className="about-image-wrapper">
                        <img src="/images/home_infografico_1772538350012.png" alt="Apertura técnica caja fuerte Grado IV" className="about-image" />
                        <div className="trust-card" style={{ bottom: '-20px', left: '-20px', background: '#0a192f', border: '1px solid #FFD700' }}>
                            <div className="trust-card-icon" style={{ background: 'rgba(255,215,0,0.1)' }}>
                                <Briefcase size={24} color="#FFD700" />
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>Sector Retail</h4>
                                <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.875rem' }}>Restauración operativa express</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES GRID */}
            <section className="services-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Tipología de Cajas e Intervenciones</h2>
                    <p className="section-desc" style={{ textAlign: 'center', margin: '0 auto 4rem auto' }}>Cada mecanismo es un reto de ingeniería que resolvemos con precisión milimétrica.</p>

                    <div className="services-grid">
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Alta Seguridad (AZCA)</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Apertura de cajas Grado III y IV en despachos de abogados o financieras de General Perón con endoscopios digitales.</p>
                        </div>
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Cajas Históricas Muro</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>En Valdeacederas y Berruguete encontramos a menudo reliquias de muro empotradas. Aplicamos manipulación de dial clásica.</p>
                        </div>
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Sistemas Electrónicos</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Fallo de baterías o placas base oxidadas. Alimentación por bypass externo o decodificación de frecuencia para reseteo sin rotura.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ALTERNATING TEXT */}
            <section className="about-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container about-grid fade-in-up" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ position: 'relative' }}>
                        <div style={{ padding: '3rem 2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', border: '1px solid #1e3a5f', marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Perforación con Diamante</h3>
                            <p style={{ color: '#94a3b8' }}>Para cajas bloqueadas por intentos de robo previos (re-lockers activados). Perforación táctica milimétrica en Castellana o Cuzco para no dañar contenido.</p>
                        </div>
                        <div style={{ padding: '3rem 2rem', background: 'linear-gradient(135deg, #003366, #001a33)', borderRadius: '1rem', border: '1px solid #FFD700' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>Mantenimiento Preventivo</h3>
                            <p style={{ color: '#fff' }}>¿El volante gira mal? Si se atasca, la solución será cara. Lubricamos pestillos y repasamos electrónica en Bravo Murillo y Almansa anualmente.</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="section-title">El Secreto Profesional como Norma</h2>
                        <h3 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>Asesinato de códigos y memorias físicas</h3>
                        <p className="section-desc" style={{ marginBottom: '1.5rem', marginLeft: 0 }}>Cuando intervenimos en cajas fuertes particulares en Castillejos, llegamos en vehículos sin rotular si el entorno hiper-residencial lo exige.</p>
                        <p className="section-desc" style={{ marginBottom: '1.5rem', marginLeft: 0 }}>Tras la apertura, no solo cambiamos la combinación; realizamos un <em>"borrado forense"</em> de los registros de la caja fuerte para que no quede constancia de nuestra intervención, dejándote como el <strong>único poseedor de los datos de acceso</strong>.</p>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                            <a href="tel:644061005" className="btn-primary" style={{ padding: '15px 30px', background: '#dc2626', borderColor: '#dc2626' }}>Consulta Confidencial 24h</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERLINKING SEO */}
            <section style={{ background: '#030b14', padding: '4rem 0', borderTop: '1px solid #1e3a5f' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Seguridad Integral en Tetuán</h2>
                    <p className="section-desc" style={{ maxWidth: '850px', margin: '0 auto 1.5rem', textAlign: 'center' }}>
                        Tus <Link href="/" style={{ color: '#FFD700' }}>cerrajeros en Tetuán</Link> ofrecen apertura de cajas fuertes y mucho más. Protege tus puertas con un <Link href="/cambio-cerraduras-tetuan" style={{ color: '#FFD700' }}>cambio de cerraduras en Tetuán</Link> de <em>máxima seguridad</em>.
                    </p>
                    <p className="section-desc" style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
                        Disponibles <Link href="/cerrajeros-24-horas-tetuan" style={{ color: '#FFD700' }}>24 horas en Tetuán</Link> para <strong>emergencias en empresas y domicilios</strong>. <Link href="/contacto-tetuan" style={{ color: '#FFD700' }}>Contacta con discreción total</Link>.
                    </p>
                </div>
            </section>

            <section className="faq-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Preguntas Frecuentes: Cajas y Seguridad</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            <section className="cta-final" style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #001a33, #003366)', textAlign: 'center' }}>
                <div className="container fade-in-up">
                    <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem' }}>Recuperamos tu tranquilidad en horas</h2>
                    <p style={{ color: '#d1d5db', fontSize: '1.25rem', marginBottom: '2.5rem' }}>Especialistas certificados en cajas Fichet, BTV, Ferrimax, Olle y Arcas Gruber.</p>
                    <a href="tel:644061005" className="btn-primary pulsing-btn" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem', background: '#dc2626', borderColor: '#dc2626' }}>Hablar con Técnico Especializado</a>
                </div>
            </section>
        </main>
    );
}
