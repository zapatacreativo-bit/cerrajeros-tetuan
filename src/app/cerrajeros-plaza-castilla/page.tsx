import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Lock, Clock, Wrench, Search, CheckCircle } from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import '../Home.css';

export const metadata: Metadata = {
    title: 'Cerrajeros Plaza de Castilla | Madrid Urgencias 24 Horas',
    description: 'Servicio de Cerrajería en la zona norte y Plaza de Castilla (Madrid). Somos cerrajeros forenses preparados para apertura judicial, bombines de alta gama y urgencias inmediatas. 644 936 742.',
    keywords: 'cerrajeros plaza castilla, cerrajero urgencia plaza castilla, puerta plaza castilla',
    alternates: {
        canonical: 'https://www.cerrajerostetuan.com/cerrajeros-plaza-castilla',
    },
    openGraph: {
        title: 'Cerrajeros Plaza de Castilla | Madrid Urgencias 24 Horas',
        description: 'Servicio de Cerrajería en la zona norte y Plaza de Castilla (Madrid). Somos cerrajeros forenses preparados para apertura judicial, bombines de alta gama y urgencias inmediatas. 644 936 742.',
        url: 'https://www.cerrajerostetuan.com/cerrajeros-plaza-castilla',
        images: [{ url: 'https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cerrajeros Plaza de Castilla | Madrid Urgencias 24 Horas',
        description: 'Servicio de Cerrajería en la zona norte y Plaza de Castilla (Madrid). Somos cerrajeros forenses preparados para apertura judicial, bombines de alta gama y urgencias inmediatas. 644 936 742.',
        images: ['https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png'],
    }
};

export default function PlazaCastilla() {
    const faqs = [
        {
            question: "¿Disponen de cerraduras inteligentes compatibles con domótica de oficina?",
            answer: "Sí. En el área empresarial de Plaza de Castilla y alrededores instalamos habitualmente cilindros y cerraduras de control de accesos Smart (como Nuki, ENTR de TESA o Remock Lockey). Permiten auditar qué empleado o invitado (por app) accede a una oficina, y en qué horario preciso."
        },
        {
            question: "¿Cuánto tardan en acudir a una emergencia cerca del Intercambiador de Plaza de Castilla?",
            answer: "Al ubicarnos geográficamente en el distrito de Tetuán, las rutas principales nos brindan acceso directo. El tiempo aproximado para urgencias en Paseo de la Castellana norte y Plaza de Castilla se sitúa en torno a los 15-20 minutos, esquivando de este modo cualquier molestia innecesaria o penalizaciones horarias."
        },
        {
            question: "¿Pueden abrir la puerta de mi coche si se ha quedado bloqueada cerca de las Torres KIO?",
            answer: "Absolutamente sí. Tenemos a nuestros expertos en cerrajería automotriz formados activamente. Contamos con herramientas tecnológicas punteras como decodificadoras Lishi que nos permiten realizar aperturas de BMW, Audi, Mercedes, Grupo VAG u otros vehículos de alta gama sin generar arañazos, destrozos de ventanillas o manipulaciones groseras en las gomas de la carrocería."
        },
        {
            question: "¿Qué garantías aportan ante comunidades y administradores de fincas?",
            answer: "Facturamos de forma 100% legal, extendiendo pólizas de garantía oficial que cubren intervención por defectos y desgaste prematuro de piezas, respaldos indispensables que nuestros administradores de fincas corporativos agradecen para gestionar reparaciones recurrentes en comunidades y urbanizaciones."
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
            "name": "Plaza de Castilla",
            "item": "https://www.cerrajeros-tetuan.es/cerrajeros-plaza-castilla"
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
                            Plaza de Castilla • Cerrajeros Tetuán
                        </div>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em', color: '#fff' }}>
                            CERRAJERÍA <span style={{ color: '#FFD700', fontFamily: 'var(--font-montserrat)', fontStyle: 'italic', display: 'block', marginTop: '0.5rem' }}>Premium Security</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '600px' }}>
                            Elevando los estándares de <strong>seguridad</strong> para el <em>hub judicial y corporativo</em> del noreste de Madrid. <strong>Control de accesos</strong> y <em>aperturas de alta gama</em>.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="tel:644936742" className="btn-primary" style={{ background: '#dc2626', borderColor: '#dc2626' }}>Call 644 936 742</a>
                            <Link href="#informes" className="btn-outline">Ver Procedimientos</Link>
                        </div>
                    </div>
                    <div className="zone-hero-image-wrapper">
                        <Image src="/images/plaza_castilla_moto_noche_sin_tlf_1772624997059.png" alt="Cerrajería en Plaza Castilla" fill style={{ objectFit: 'cover' }} priority />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', width: '100%' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <Shield color="#FFD700" size={32} />
                                <div>
                                    <h4 style={{ color: '#fff', margin: 0, fontSize: '1.1rem' }}>Grado 6 Europeo</h4>
                                    <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.85rem' }}>Máxima Resistencia Anti-Intrusión</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THREE PILLARS (Zonas de Seguridad equivalent) */}
            <section style={{ padding: '6rem 0', background: '#0a192f' }}>
                <div className="container fade-in-up">
                    <h2 style={{ textAlign: 'center', color: '#fff', marginBottom: '4rem', fontSize: '2rem' }}>Pilares de Seguridad en <span style={{ color: '#FFD700' }}>Plaza de Castilla</span></h2>
                    <div className="grid-3">
                        <div style={{ background: 'rgba(5, 12, 23, 0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s' }} className="card-hover-effect">
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#FFD700' }}>
                                <Clock size={28} />
                            </div>
                            <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.25rem' }}>Urgencias 20 Minutos</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>Rutas directas por el Paseo de la Castellana norte garantizan nuestra llegada inmediata al intercambiador.</p>
                        </div>
                        <div style={{ background: 'rgba(5, 12, 23, 0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s' }} className="card-hover-effect">
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#FFD700' }}>
                                <Lock size={28} />
                            </div>
                            <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.25rem' }}>Cerraduras Smart</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>Control de accesos corporativos. Audita quién entra y sale de tu despacho con sistemas Nuki y TESA ENTR.</p>
                        </div>
                        <div style={{ background: 'rgba(5, 12, 23, 0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s' }} className="card-hover-effect">
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#FFD700' }}>
                                <Wrench size={28} />
                            </div>
                            <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.25rem' }}>Apertura Forense</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>Endoscopia HD para destrabar cerrojos de alta gama sin destruir la carpintería decorativa.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SPLIT EXPERTITSE (Defensa en Profundidad equivalent) */}
            <section style={{ padding: '6rem 0', background: '#030b14' }}>
                <div className="container about-grid fade-in-up">
                    <div className="about-content">
                        <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '2rem' }}>Especialización Táctica Operativa</h2>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <li style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ color: '#FFD700', marginTop: '4px' }}><CheckCircle size={24} /></div>
                                <div>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Sustitución Anti-Bumping</h4>
                                    <p style={{ color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>Instalamos cilindros con puente rotura programada controlada patentada para frustrar a las mafias organizadas.</p>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ color: '#FFD700', marginTop: '4px' }}><CheckCircle size={24} /></div>
                                <div>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Apertura de Vehículos (Torres KIO)</h4>
                                    <p style={{ color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>Uso de decodificadoras Lishi para abrir BMW y Mercedes sin rayar lunas en el parking del Intercambiador.</p>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ color: '#FFD700', marginTop: '4px' }}><CheckCircle size={24} /></div>
                                <div>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Cerraduras Invisibles Bluetooth</h4>
                                    <p style={{ color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>Sistemas electromagnéticos residenciales sin hueco exterior. Activa desde tu teléfono de forma indetectable.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="about-image-wrapper">
                        <Image src="/images/plaza_castilla_operativa_1772576277569.png" alt="Plaza Castilla Operativa" fill style={{ objectFit: 'cover' }} />
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
                        <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem' }}>¿Vives o trabajas cerca de los Juzgados?</h2>
                        <p style={{ color: '#d1d5db', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '800px' }}>
                            La <strong>zona norte</strong> requiere protección adaptada debido al alto tránsito diario. Un <em>bombillo pasivo antiguo</em> de los años 90 no soporta más de 30 segundos frente a <strong>métodos actuales de robo silencioso</strong>.
                        </p>
                        <div className="vuln-grid">
                            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '3px solid #dc2626' }}>
                                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Riesgo Actual</h4>
                                <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>El método 'Magic Key' ha invalidado el 80% del parque de herrajes clásicos de Madrid en el último cuatrimestre.</p>
                            </div>
                            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '3px solid #10b981' }}>
                                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Nuestra Solución</h4>
                                <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Mejora tu escudo acorazado e implementa un sistema digital. Llama para obtener presupuesto en 5 minutos.</p>
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
                        <h2 style={{ fontSize: '2.5rem', color: '#fff' }}>Intervenciones Técnicas Resolutivas</h2>
                    </div>

                    <div className="tech-report-list">
                        <div className="tech-report-item">
                            <div className="tech-report-header">
                                <span className="tech-report-num">01.</span>
                                <h3 className="tech-report-title">Diagnóstico Visual Inmediato</h3>
                            </div>
                            <p className="tech-report-text">Recibimos la alerta y analizamos la puerta desde origen antes de operar para seleccionar el material endoscópico adecuado.</p>
                        </div>
                        <div className="tech-report-item" style={{ borderLeft: '4px solid #FFD700' }}>
                            <div className="tech-report-header">
                                <span className="tech-report-num" style={{ color: '#fff' }}>02.</span>
                                <h3 className="tech-report-title" style={{ color: '#FFD700' }}>Apertura No Destructiva</h3>
                            </div>
                            <p className="tech-report-text">Microperforamos en modo invisible trazando el mecanismo de varillería para liberar la pala empujando el fleje original sin dañar maderas nobles.</p>
                        </div>
                        <div className="tech-report-item">
                            <div className="tech-report-header">
                                <span className="tech-report-num">03.</span>
                                <h3 className="tech-report-title">Sustitución en el Acto</h3>
                            </div>
                            <p className="tech-report-text">Como llevamos stock Premium (Tesa, Kaba, Fichet), restituimos el rotor dañado al instante para que vuelvas a estar seguro hoy mismo.</p>
                        </div>
                        <div className="tech-report-item">
                            <div className="tech-report-header">
                                <span className="tech-report-num">04.</span>
                                <h3 className="tech-report-title">Facturación Homologada</h3>
                            </div>
                            <p className="tech-report-text">Extendemos pólizas de garantía oficial que cubren por defecto o desgaste, válidas para administradores de fincas corporativos en AZCA y Castellana.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST SPLIT (Tu cerrajero de confianza in Boadilla equivalent) */}
            <section style={{ padding: '6rem 0', background: '#030b14' }}>
                <div className="container about-grid reverse fade-in-up">
                    <div>
                        <div style={{ color: '#FFD700', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.85rem' }}>CERTIFICACIÓN OFICIAL</div>
                        <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1.5rem' }}>Tu cerrajero local cercano a las Torres</h2>
                        <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                            No somos intermediarios telefónicos. Somos agentes directos y vecinos de Tetuán. Al patrullar las calles de Lope de Haro y el entorno de Plaza de Castilla, estamos siempre listos para llegar a ti antes de que el frío o el agobio empeoren la noche.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '0.5rem' }}>
                                <div style={{ color: '#FFD700', marginBottom: '0.5rem' }}><Clock size={20} /></div>
                                <h5 style={{ color: '#fff', fontSize: '1rem', margin: '0 0 0.25rem' }}>Rapidez Local</h5>
                                <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0 }}>Rutas calculadas para esquivar atascos.</p>
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '0.5rem' }}>
                                <div style={{ color: '#FFD700', marginBottom: '0.5rem' }}><Shield size={20} /></div>
                                <h5 style={{ color: '#fff', fontSize: '1rem', margin: '0 0 0.25rem' }}>Garantía 100%</h5>
                                <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0 }}>Materiales testados bajo normativa SKG***.</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ position: 'relative', height: '100%', minHeight: '400px', borderRadius: '1rem', overflow: 'hidden' }}>
                        <Image src="/images/plaza_castilla_cerradura.png" alt="Cerrajero atendiendo" fill style={{ objectFit: 'cover' }} />
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
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Dudas resueltas sobre Plaza de Castilla</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            {/* INTERLINKING SEO */}
            <section style={{ padding: '4rem 0', background: '#030b14' }}>
                <div className="container">
                    <h2 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1.5rem', textAlign: 'center' }}>Otros Servicios en Tetuán</h2>
                    <p style={{ color: '#94a3b8', lineHeight: 1.7, textAlign: 'center', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                        Desde <strong>Plaza de Castilla</strong>, cubrimos todo el distrito con <em>cerrajeros profesionales</em>.
                        Solicita un <Link href="/cambio-cerraduras-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>cambio de cerraduras</Link>,{' '}
                        <Link href="/apertura-coches-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>apertura de coches</Link> o{' '}
                        <Link href="/cerrajeros-24-horas-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>cerrajero 24 horas en Tetuán</Link>.
                        Disponemos de <Link href="/cambio-bombines-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>cambio de bombines de alta seguridad</Link>.
                    </p>
                    <p style={{ color: '#94a3b8', lineHeight: 1.7, textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        Vuelve a la <Link href="/" style={{ color: '#FFD700', textDecoration: 'underline' }}>home de Cerrajeros Tetuán</Link> o consulta{' '}
                        <Link href="/preguntas-frecuentes-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>preguntas frecuentes</Link>.
                    </p>
                </div>
            </section>
        </main>
    );
}
