import { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import '../Home.css';

export const metadata: Metadata = {
    title: 'Cerrajeros Urgentes Tetuán | Respuesta Inmediata ☎ 644 936 742',
    description: 'Cerrajeros urgentes en Tetuán. Servicio de emergencia con llegada en menos de 20 minutos. Apertura sin daños. Llama al 644 936 742.',
    keywords: 'cerrajero urgente tetuan, cerrajeria de urgencia madrid, cerrajero rapido',
    alternates: {
        canonical: 'https://www.tetuancerrajeros.com/cerrajeros-urgentes-tetuan',
    },
    openGraph: {
        title: 'Cerrajeros Urgentes Tetuán | Respuesta Inmediata ☎ 644 936 742',
        description: 'Cerrajeros urgentes en Tetuán. Servicio de emergencia con llegada en menos de 20 minutos. Apertura sin daños. Llama al 644 936 742.',
        url: 'https://www.tetuancerrajeros.com/cerrajeros-urgentes-tetuan',
        images: [{ url: 'https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cerrajeros Urgentes Tetuán | Respuesta Inmediata ☎ 644 936 742',
        description: 'Cerrajeros urgentes en Tetuán. Servicio de emergencia con llegada en menos de 20 minutos. Apertura sin daños. Llama al 644 936 742.',
        images: ['https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png'],
    }
};

export default function CerrajerosUrgentes() {
    const faqs = [
        {
            question: "¿Cuánto tarda un cerrajero urgente en llegar al barrio de Tetuán?",
            answer: "Nuestro tiempo de respuesta para quienes buscan cerrajeros urgentes en Tetuán es de menos de 20 minutos. Al estar situados estratégicamente cerca de la Calle de Bravo Murillo y la Plaza de Castilla, conocemos los mejores atajos para evitar el tráfico y llegar a tu portal de forma inmediata, garantizando una atención rápida este 2026."
        },
        {
            question: "¿Cuánto cuesta un cerrajero de urgencia en Tetuán un domingo?",
            answer: "El precio de nuestros cerrajeros urgentes en Tetuán depende de la complejidad del trabajo, pero siempre ofrecemos un presupuesto cerrado por teléfono. Somos conocidos en Bellas Vistas y Berruguete por nuestra política de tarifas honestas y transparentes, sin cargos ocultos, asegurando la mejor relación calidad-precio del distrito incluso en festivos."
        },
        {
            question: "¿Pueden abrir una puerta blindada sin romperla en la zona de Cuzco?",
            answer: "Sí, como especialistas en cerrajeros urgentes en Tetuán, utilizamos técnicas de \"apertura no destructiva\". En áreas como Cuzco o Castillejos, empleamos herramientas de precisión que permiten abrir puertas blindadas y acorazadas sin dañar el bombín ni el marco, permitiéndote conservar tu cerradura intacta tras nuestra intervención profesional."
        },
        {
            question: "¿Qué hago si me han robado las llaves en Bravo Murillo?",
            answer: "Lo primero es no dejar la vivienda sola. Llama a nuestros cerrajeros urgentes en Tetuán para realizar un \"cambio de bombín de seguridad\" inmediato. Nos desplazamos a cualquier punto de Bravo Murillo para instalarte una cerradura nueva con llaves incopiables, garantizando que nadie que encuentre tus llaves antiguas pueda acceder a tu hogar."
        },
        {
            question: "¿Ofrecen servicio de reparación de persianas comerciales en Tetuán?",
            answer: "Absolutamente. Contamos con un equipo de cerrajeros urgentes en Tetuán especializado en comercios. Si el cierre de tu local en la Calle de Orense o Cuatro Caminos se ha bloqueado, acudimos de urgencia para realizar la reparación del motor o del cierre manual, asegurando que tu negocio no pierda ni un solo minuto de actividad."
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
            "name": "Cerrajeros Urgentes Tetuán",
            "item": "https://www.cerrajeros-tetuan.es/cerrajeros-urgentes-tetuan"
        }]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Cerrajeros urgentes",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Cerrajeros Tetuán",
            "telephone": "644936742"
        },
        "areaServed": {
            "@type": "City",
            "name": "Tetuán, Madrid"
        },
        "description": "Cerrajeros urgentes en Tetuán. Servicio de emergencia con llegada en menos de 20 minutos."
    };

    return (
        <main className="subpage-layout">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            {/* HERO SECTION PREMIUM */}
            <section className="hero-section" style={{ minHeight: '60vh', padding: '10rem 0 4rem' }}>
                <div className="hero-background" style={{
                    backgroundImage: "linear-gradient(rgba(3, 11, 20, 0.8), rgba(3, 11, 20, 0.95)), url('/images/urgencias_furgoneta_noche_sin_tlf_1772624967123.png')",
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
                        Unidad móvil de emergencias activa
                    </div>
                    <h1>Cerrajeros Urgentes en Tetuán</h1>
                    <p className="hero-subtitle">En tu puerta en menos de 20 minutos. Unidades móviles desplegadas estratégicamente por Bravo Murillo, Cuatro Caminos y AZCA para solventar incidentes exprés.</p>
                </div>
            </section>

            <div className="breadcrumbs" style={{ background: '#0a192f', borderBottom: '1px solid #1e3a5f' }}>
                <div className="container" style={{ padding: '1rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                    <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link> <span style={{ margin: '0 0.5rem' }}>/</span> <Link href="/servicios-tetuan" style={{ color: '#fff', textDecoration: 'none' }}>Servicios</Link> <span style={{ margin: '0 0.5rem' }}>/</span> <span style={{ color: '#FFD700' }}>Cerrajeros Urgentes</span>
                </div>
            </div>

            {/* INTRO SPLIT SECTION */}
            <section className="about-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container about-grid fade-in-up">
                    <div className="about-content">
                        <h2 className="section-title">Tu tranquilidad en 20 minutos</h2>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                            ¿Se ha quedado fuera de casa justo cuando regresaba del Mercado de Maravillas? No hay nada que genere más impotencia que estar frente a tu puerta y no poder entrar. Nuestros <strong>cerrajeros urgentes en Tetuán</strong> resuelven esta situación <em>en menos de 20 minutos</em>.
                        </p>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                            En esos momentos críticos, necesitas un vecino cerrajero rápido. Nuestras <strong>unidades móviles</strong> evitan el tráfico denso de Bravo Murillo llegando en menos de 20 minutos. No enviamos a alguien desde otro extremo de Madrid, enviamos al técnico que ya patrulla por Bellas Vistas.
                        </p>
                        <ul className="premium-list" style={{ listStyle: 'none', padding: 0, margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f8fafc' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                Atención inmediata para robos y llaves perdidas.
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f8fafc' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                Transparencia Total: Precio cerrado por teléfono sin cargos ocultos.
                            </li>
                        </ul>
                    </div>
                    <div className="about-image-wrapper">
                        <img src="/images/hero_apertura_1772538853696.png" alt="Coche Cerrajeros Tetuán Urgencias" className="about-image" />
                        <div className="trust-card" style={{ bottom: '-20px', left: '-20px', background: '#0a192f', border: '1px solid #FFD700' }}>
                            <div className="trust-card-icon" style={{ background: 'rgba(255,215,0,0.1)' }}>
                                <AlertTriangle size={24} color="#FFD700" />
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>Urgencias 24h</h4>
                                <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.875rem' }}>Llegada récord en distrito</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS GRID */}
            <section className="process-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>¿Qué consideramos una emergencia en Tetuán?</h2>
                    <p className="section-desc" style={{ textAlign: 'center', margin: '0 auto 4rem auto' }}>Actuamos de forma clasificada según el nivel de estrés de la situación.</p>

                    <div className="process-grid">
                        <div className="process-card">
                            <div className="process-number" style={{ color: '#dc2626' }}>01</div>
                            <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '1rem' }}>Intentos de Robo</h3>
                            <p style={{ color: '#94a3b8' }}>Damos prioridad alta si la cerradura ha sido manipulada en el eje Estrecho/Lope de Haro. Reparación y sustitución de cilindros certificados antibumping en el acto.</p>
                        </div>
                        <div className="process-card">
                            <div className="process-number">02</div>
                            <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '1rem' }}>Bloqueo de Cierres Comerciales</h3>
                            <p style={{ color: '#94a3b8' }}>Las persianas de comercios atascadas en la vibrante Calle Orense son letales para el negocio. Desbloqueo rápido garantizando la apertura a hora comercial.</p>
                        </div>
                        <div className="process-card">
                            <div className="process-number">03</div>
                            <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '1rem' }}>Llaves perdidas nocturnas</h3>
                            <p style={{ color: '#94a3b8' }}>Quedarse fuera tras cenar cerca de Plaza de la Remonta. Intervenciones discretas, silenciosas pero veloces 24h, abriendo sin destrozar la cerrajería original o acorazada.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* REVERSE ALTERNATING BLOCK */}
            <section className="about-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container about-grid fade-in-up" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '4rem', alignItems: 'center' }}>
                    <div className="about-image-wrapper">
                        <img src="/images/cerrajero_urgencias_apertura.png" alt="Apertura técnica 24 horas" className="about-image" style={{ borderRadius: '1rem', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
                    </div>
                    <div>
                        <h2 className="section-title">Especialistas Vanguardistas de Urgencia</h2>
                        <h3 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>Para los lofts y oficinas de Castillejos y Cuzco</h3>
                        <p className="section-desc" style={{ marginBottom: '1.5rem', marginLeft: 0 }}>En el corazón financiero de Tetuán (AZCA), un fallo en <em>sistemas de control de accesos Smart Locks</em> requiere <strong>asistencia de élite tecnológica</strong>, no fuerza bruta. Si necesitas además un <Link href="/cambio-cerraduras-tetuan" style={{ color: '#FFD700' }}>cambio de cerraduras en Tetuán</Link>, lo realizamos en la misma intervención.</p>

                        <div style={{ padding: '2rem', background: 'rgba(26, 42, 60, 0.4)', borderRadius: '1rem', border: '1px solid #1e3a5f', marginBottom: '2rem' }}>
                            <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>Auditoría Exprés tras el aviso</h4>
                            <p style={{ color: '#94a3b8', margin: 0 }}>Sea una avería de cajas fuertes empresariales en General Perón o una casa vieja en Ventilla (rotura de llave dentro), extraemos las llaves sin dañar el herraje antiguo conservando tu patrimonio.</p>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="tel:644936742" className="btn-primary" style={{ padding: '15px 30px', background: '#dc2626', borderColor: '#dc2626' }}>Hablar con el técnico 644936742</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERLINKING SEO */}
            <section style={{ background: '#030b14', padding: '4rem 0', borderTop: '1px solid #1e3a5f' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Más Servicios de Cerrajería Urgente en Tetuán</h2>
                    <p className="section-desc" style={{ maxWidth: '850px', margin: '0 auto 1.5rem', textAlign: 'center' }}>
                        Somos tus <Link href="/" style={{ color: '#FFD700' }}>cerrajeros de confianza en Tetuán</Link>. Además de urgencias, ofrecemos <Link href="/apertura-puertas-tetuan" style={{ color: '#FFD700' }}>apertura de puertas en Tetuán</Link> con <em>técnicas no destructivas</em> y servicio de <Link href="/cerrajeros-24-horas-tetuan" style={{ color: '#FFD700' }}>cerrajeros 24 horas en Tetuán</Link> para asistencia nocturna y festivos.
                    </p>
                    <p className="section-desc" style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
                        Tras solucionar tu emergencia, refuerza tu seguridad con un <Link href="/cambio-cerraduras-tetuan" style={{ color: '#FFD700' }}>cambio de cerraduras en Tetuán</Link> de <strong>alta seguridad certificada</strong>. <Link href="/contacto-tetuan" style={{ color: '#FFD700' }}>Contacta ahora para presupuesto gratuito</Link>.
                    </p>
                </div>
            </section>

            <section className="faq-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>FAQ: Protócolo de Urgencias</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            <section className="cta-final" style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #001a33, #003366)', textAlign: 'center' }}>
                <div className="container fade-in-up">
                    <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem' }}>Despachamos unidades móviles al instante</h2>
                    <p style={{ color: '#d1d5db', fontSize: '1.25rem', marginBottom: '2.5rem' }}>Escribe ahora y recupera el acceso a tu propiedad.</p>
                    <a href="tel:644936742" className="btn-primary pulsing-btn" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem', background: '#dc2626', borderColor: '#dc2626' }}>SOS Urgencias: 644 936 742</a>
                </div>
            </section>
        </main>
    );
}
