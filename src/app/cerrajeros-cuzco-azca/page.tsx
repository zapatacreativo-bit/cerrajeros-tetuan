import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Lock, Clock, Wrench, Search, CheckCircle } from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import '../Home.css';

export const metadata: Metadata = {
    title: 'Cerrajeros en Cuzco y AZCA | Alta Seguridad Comercial 24h',
    description: 'Cerrajería corporativa en Cuzco y AZCA. Expertos en control de accesos, cerraduras biométricas y urgencias para empresas. Llama al 644 06 10 05.',
    keywords: 'cerrajeros cuzco, cerrajero azca, seguridad azca',
    alternates: {
        canonical: 'https://www.tetuancerrajeros.com/cerrajeros-cuzco-azca',
    },
    openGraph: {
        title: 'Cerrajeros en Cuzco y AZCA | Alta Seguridad Comercial 24h',
        description: 'Cerrajería corporativa en Cuzco y AZCA. Expertos en control de accesos, cerraduras biométricas y urgencias para empresas. Llama al 644 06 10 05.',
        url: 'https://www.tetuancerrajeros.com/cerrajeros-cuzco-azca',
        images: [{ url: 'https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cerrajeros en Cuzco y AZCA | Alta Seguridad Comercial 24h',
        description: 'Cerrajería corporativa en Cuzco y AZCA. Expertos en control de accesos, cerraduras biométricas y urgencias para empresas. Llama al 644 06 10 05.',
        images: ['https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png'],
    }
};

export default function CuzcoAzca() {
    const faqs = [
        {
            question: "¿Pueden unificar las llaves de toda una planta de oficinas en AZCA?",
            answer: "Sí. Realizamos planes de amaestramiento a medida (planos de cierre) para centros de negocios y plantas corporativas en AZCA y Cuzco. Esto permite que el gerente abra todas las puertas con una 'Llave Maestra', mientras que cada empleado solo abre su despacho asignado. Usamos sistemas patentados incopiables."
        },
        {
            question: "¿Instalan controles de acceso mediante huella o smartphone?",
            answer: "Absolutamente. La zona financiera demanda alta tecnología. Instalamos cerraduras electromagnéticas y cilindros mecatrónicos que permiten la apertura vía Bluetooth, código PIN o biometría, registrando el historial de accesos en tiempo real."
        },
        {
            question: "¿Realizan aperturas de cajas fuertes homologadas para empresas?",
            answer: "Contamos con técnicos forenses expertos en la apertura de cajas fuertes de grado III, IV o superior, armeros y cámaras acorazadas. Usamos endoscopía y diales de precisión para evitar el destrozo del mueble blindado."
        },
        {
            question: "¿En cuánto tiempo llegan a un edificio de oficinas en el Paseo de la Castellana?",
            answer: "Nuestro tiempo de intervención en el eje de Cuzco y el complejo AZCA es de aproximadamente 15-20 minutos. Disponemos de motocicletas de intervención rápida que evitan los atascos habituales de la Castellana en hora punta."
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
            "name": "Zonas",
            "item": "https://www.cerrajeros-tetuan.es/zonas-tetuan"
        }, {
            "@type": "ListItem",
            "position": 3,
            "name": "Cuzco y AZCA",
            "item": "https://www.cerrajeros-tetuan.es/cerrajeros-cuzco-azca"
        }]
    };

    return (
        <main className="subpage-layout">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            {/* HERO SECTION LOMAS STYLE */}
            <section className="zone-hero">
                <div className="container zone-hero-grid fade-in-up">
                    <div className="zone-hero-content">
                        <div className="availability-badge" style={{ marginBottom: '1.5rem', background: 'rgba(255,215,0,0.1)', color: '#FFD700', borderColor: 'rgba(255,215,0,0.3)' }}>
                            <span className="availability-dot" style={{ backgroundColor: '#FFD700' }}></span>
                            Cuzco y AZCA • Cerrajeros Tetuán
                        </div>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em', color: '#fff' }}>
                            CERRAJERÍA <span style={{ color: '#FFD700', fontFamily: 'var(--font-montserrat)', fontStyle: 'italic', display: 'block', marginTop: '0.5rem' }}>Premium Security</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '600px' }}>
                            El <strong>corazón financiero de Madrid</strong> exige un nivel de <em>seguridad excepcional</em>. <strong>Soluciones biométricas</strong> y <em>aperturas confidenciales</em> ultrarrápidas.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="tel:644061005" className="btn-primary" style={{ background: '#dc2626', borderColor: '#dc2626' }}>Call 644 06 10 05</a>
                            <Link href="#informes" className="btn-outline">Ver Procedimientos</Link>
                        </div>
                    </div>
                    <div className="zone-hero-image-wrapper">
                        <Image src="/images/cuzco_azca_hero_1772575922002.png" alt="Cerrajería en Cuzco AZCA" fill style={{ objectFit: 'cover' }} priority />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', width: '100%' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <Shield color="#FFD700" size={32} />
                                <div>
                                    <h4 style={{ color: '#fff', margin: 0, fontSize: '1.1rem' }}>Sistemas Homologados</h4>
                                    <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.85rem' }}>Certificación CE / VdS / SKG***</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THREE PILLARS (Zonas de Seguridad equivalent) */}
            <section style={{ padding: '6rem 0', background: '#0a192f' }}>
                <div className="container fade-in-up">
                    <h2 style={{ textAlign: 'center', color: '#fff', marginBottom: '4rem', fontSize: '2rem' }}>Pilares de Seguridad en <span style={{ color: '#FFD700' }}>Cuzco y AZCA</span></h2>
                    <div className="grid-3">
                        <div style={{ background: 'rgba(5, 12, 23, 0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s' }} className="card-hover-effect">
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#FFD700' }}>
                                <Lock size={28} />
                            </div>
                            <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.25rem' }}>Privacidad y Sigilo</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>Aplicamos protocolos de confidencialidad estrictos (NDA) para aperturas en despachos y notarías.</p>
                        </div>
                        <div style={{ background: 'rgba(5, 12, 23, 0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s' }} className="card-hover-effect">
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#FFD700' }}>
                                <Clock size={28} />
                            </div>
                            <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.25rem' }}>Respuesta Moto/Express</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>Atravesar la Castellana atascada no es problema; aseguramos una llegada inferior a 15-20 minutos.</p>
                        </div>
                        <div style={{ background: 'rgba(5, 12, 23, 0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s' }} className="card-hover-effect">
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#FFD700' }}>
                                <Shield size={28} />
                            </div>
                            <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.25rem' }}>Material Certificado</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>Todo componente electrónico o biométrico instalado posee su homologación CE / VdS / SKG*** vigente.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SPLIT EXPERTITSE (Defensa en Profundidad equivalent) */}
            <section style={{ padding: '6rem 0', background: '#030b14' }}>
                <div className="container about-grid fade-in-up">
                    <div className="about-content">
                        <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '2rem' }}>Especialización Táctica Corporativa</h2>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <li style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ color: '#FFD700', marginTop: '4px' }}><CheckCircle size={24} /></div>
                                <div>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Sistemas de Amaestramiento</h4>
                                    <p style={{ color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>Una única 'Gran Llave Maestra' abre todas las puertas mientras los empleados entran a accesos limitados.</p>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ color: '#FFD700', marginTop: '4px' }}><CheckCircle size={24} /></div>
                                <div>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Control de Accesos Biométrico</h4>
                                    <p style={{ color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>Instalamos pomos digitales que se desbloquean mediante huellas o Apps Bluetooth para registro de entradas.</p>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ color: '#FFD700', marginTop: '4px' }}><CheckCircle size={24} /></div>
                                <div>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Cajas Fuertes Homologadas</h4>
                                    <p style={{ color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>Intervenimos cajas grado III, IV o V con endoscopios industriales y desciframiento táctil respetando la UNE.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="about-image-wrapper">
                        <Image src="/images/azca_tecnico_seguridad_sin_tlf_1772624981728.png" alt="Cuzco AZCA Operativa" fill style={{ objectFit: 'cover' }} />
                    </div>
                </div>
            </section>

            {/* VULNERABILITY BOX */}
            <section style={{ padding: '4rem 0', background: 'var(--color-bg-base)' }}>
                <div className="container fade-in-up">
                    <div className="vuln-box">
                        <div className="vuln-badge">
                            <Search size={16} />
                            Análisis Crítico de Seguridad
                        </div>
                        <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem' }}>¿Diriges operaciones en el Paseo de la Castellana?</h2>
                        <p style={{ color: '#d1d5db', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '800px' }}>
                            Los rascacielos y <strong>oficinas premium</strong> que dibujan esta zona no pueden conformarse con <em>cerraduras residenciales de gama baja</em>. Un bloqueo de un servidor o una <strong>pérdida de llaves</strong> es un grave riesgo corporativo.
                        </p>
                        <div className="vuln-grid">
                            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '3px solid #dc2626' }}>
                                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Riesgo Corporativo</h4>
                                <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Las llaves mecánicas duplicables no permiten audición de acceso de exempleados y limpieza.</p>
                            </div>
                            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '3px solid #10b981' }}>
                                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Nuestra Solución</h4>
                                <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Actualización completa a sistemas de control biométrico con bloqueo instantáneo a intrusos no deseados.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NUMERICAL PROCESS (Informes Técnicos equivalent) */}
            <section id="informes" style={{ padding: '6rem 0', background: '#0a192f' }}>
                <div className="container fade-in-up" style={{ maxWidth: '800px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div style={{ color: '#FFD700', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.85rem' }}>Procedimiento Certificado</div>
                        <h2 style={{ fontSize: '2.5rem', color: '#fff' }}>Intervenciones Corporativas Confidenciales</h2>
                    </div>

                    <div className="tech-report-list">
                        <div className="tech-report-item">
                            <div className="tech-report-header">
                                <span className="tech-report-num">01.</span>
                                <h3 className="tech-report-title">Urgencia en Torre Picasso</h3>
                            </div>
                            <p className="tech-report-text">Recibimos alerta de bloqueo en puerta acorazada cortafuegos de una sala de servidores principal. Respondemos con NDA.</p>
                        </div>
                        <div className="tech-report-item" style={{ borderLeft: '4px solid #FFD700' }}>
                            <div className="tech-report-header">
                                <span className="tech-report-num" style={{ color: '#fff' }}>02.</span>
                                <h3 className="tech-report-title" style={{ color: '#FFD700' }}>Tácticas Paramagnéticas</h3>
                            </div>
                            <p className="tech-report-text">Evaluando el panel electrónico, aplicamos un bypass sobre el circuito secundario liberando el pestillo en 15 minutos.</p>
                        </div>
                        <div className="tech-report-item">
                            <div className="tech-report-header">
                                <span className="tech-report-num">03.</span>
                                <h3 className="tech-report-title">Apertura Silenciosa 0 Daños</h3>
                            </div>
                            <p className="tech-report-text">La pérdida económica de la parada se redujo a cero. No tocamos soldaduras de la puerta de grado 4.</p>
                        </div>
                        <div className="tech-report-item">
                            <div className="tech-report-header">
                                <span className="tech-report-num">04.</span>
                                <h3 className="tech-report-title">Reactivación Inmediata</h3>
                            </div>
                            <p className="tech-report-text">Implementamos re-seguridad temporal y el cliente recibe la auditoría requerida por su póliza aseguradora bancaria.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST SPLIT (Tu cerrajero de confianza in Boadilla equivalent) */}
            <section style={{ padding: '6rem 0', background: '#030b14' }}>
                <div className="container about-grid reverse fade-in-up">
                    <div>
                        <div style={{ color: '#FFD700', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.85rem' }}>SOCIO DE CONFIANZA</div>
                        <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1.5rem' }}>Cerrajería Táctica y Discreta</h2>
                        <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                            Entendemos las estrictas normativas de prevención de riesgos (puertas cortafuegos, barras antipánico homologadas CE) de despachos de abogados y sedes multinacionales cerca de General Perón y Orense.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '0.5rem' }}>
                                <div style={{ color: '#FFD700', marginBottom: '0.5rem' }}><Clock size={20} /></div>
                                <h5 style={{ color: '#fff', fontSize: '1rem', margin: '0 0 0.25rem' }}>Moto-Express</h5>
                                <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0 }}>Rutas calculadas para la Castellana.</p>
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '0.5rem' }}>
                                <div style={{ color: '#FFD700', marginBottom: '0.5rem' }}><Shield size={20} /></div>
                                <h5 style={{ color: '#fff', fontSize: '1rem', margin: '0 0 0.25rem' }}>Protección Total</h5>
                                <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0 }}>Garantía firmada corporativa.</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ position: 'relative', height: '100%', minHeight: '400px', borderRadius: '1rem', overflow: 'hidden' }}>
                        <Image src="/images/cerradura_electronica_cuzco.png" alt="Cerrajero atendiendo" fill style={{ objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', background: '#0a192f', padding: '1rem 1.5rem', borderRadius: '0.5rem', border: '1px solid #FFD700', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '40px', height: '40px', background: '#FFD700', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Shield color="#000" size={20} />
                            </div>
                            <div>
                                <h5 style={{ color: '#fff', margin: 0 }}>4.9/5 Reseñas</h5>
                                <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.8rem' }}>En Google My Business</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PREGUNTAS FRECUENTES */}
            <section className="faq-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Dudas resueltas Área Financiera</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            {/* INTERLINKING SEO */}
            <section style={{ padding: '4rem 0', background: '#030b14' }}>
                <div className="container">
                    <h2 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1.5rem', textAlign: 'center' }}>Cerrajería Profesional en Tetuán</h2>
                    <p style={{ color: '#94a3b8', lineHeight: 1.7, textAlign: 'center', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                        En la zona de <strong>Cuzco y AZCA</strong>, somos referentes en <em>seguridad corporativa</em>.
                        Conoce nuestro servicio de <Link href="/apertura-cajas-fuertes-tetuan" style={{ color: '#00E5FF', textDecoration: 'underline', fontWeight: 600 }}>apertura de cajas fuertes</Link>,{' '}
                        <Link href="/cerraduras-antibumping-tetuan" style={{ color: '#00E5FF', textDecoration: 'underline', fontWeight: 600 }}>cerraduras antibumping</Link> y{' '}
                        <Link href="/cerrajeros-urgentes-tetuan" style={{ color: '#00E5FF', textDecoration: 'underline', fontWeight: 600 }}>cerrajeros urgentes en Tetuán</Link>.
                    </p>
                    <p style={{ color: '#94a3b8', lineHeight: 1.7, textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        Regresa a la <Link href="/" style={{ color: '#00E5FF', textDecoration: 'underline', fontWeight: 600 }}>página principal de Cerrajeros Tetuán</Link> o explora las{' '}
                        <Link href="/zonas-tetuan" style={{ color: '#00E5FF', textDecoration: 'underline', fontWeight: 600 }}>zonas que cubrimos en Tetuán</Link>.
                        Contacta en <Link href="/contacto-tetuan" style={{ color: '#00E5FF', textDecoration: 'underline', fontWeight: 600 }}>nuestra página de contacto</Link>.
                    </p>
                </div>
            </section>
        </main>
    );
}
