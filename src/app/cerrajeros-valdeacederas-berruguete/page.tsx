import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Lock, Clock, Wrench, Search, CheckCircle } from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import '../Home.css';

export const metadata: Metadata = {
    title: 'Cerrajeros Valdeacederas y Berruguete | Madrid',
    description: 'Tus cerrajeros de confianza en Valdeacederas y Berruguete. Mejora la seguridad de tu hogar contra robos por bumping. Presupuesto sin compromiso. 644 936 742.',
    keywords: 'cerrajeros valdeacederas, cerrajero berruguete',
    alternates: {
        canonical: 'https://www.cerrajerostetuan.com/cerrajeros-valdeacederas-berruguete',
    },
    openGraph: {
        title: 'Cerrajeros Valdeacederas y Berruguete | Madrid',
        description: 'Tus cerrajeros de confianza en Valdeacederas y Berruguete. Mejora la seguridad de tu hogar contra robos por bumping. Presupuesto sin compromiso. 644 936 742.',
        url: 'https://www.cerrajerostetuan.com/cerrajeros-valdeacederas-berruguete',
        images: [{ url: 'https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cerrajeros Valdeacederas y Berruguete | Madrid',
        description: 'Tus cerrajeros de confianza en Valdeacederas y Berruguete. Mejora la seguridad de tu hogar contra robos por bumping. Presupuesto sin compromiso. 644 936 742.',
        images: ['https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png'],
    }
};

export default function ValdeacederasBerruguete() {
    const faqs = [
        {
            question: "¿Por qué se dice que las cerraduras antiguas en Berruguete son vulnerables?",
            answer: "Gran parte de la edificación en Valdeacederas y Berruguete instaló hace décadas bombines de serreta (llave de dientes) o de seguridad básicos sin protección antibumping frontal. Los asaltantes usan llaves maestras talladas que, tras un golpe seco, hacen saltar los pistones simultáneamente abriendo la puerta en segundos."
        },
        {
            question: "¿Es gratis el estudio del nivel de seguridad de mi puerta?",
            answer: "Sí. Si resides en la zona de Valdeacederas, Marqués de Viana o Berruguete, uno de nuestros oficiales se acercará a su domicilio sin coste de desplazamiento para evaluar la vulnerabilidad de su cilindro, escudo y bisagras. Le diremos con franqueza si necesita actualizar o si ya está protegido."
        },
        {
            question: "¿Qué es exactamente un escudo acorazado y por qué lo recomiendan?",
            answer: "El escudo es la pieza exterior metálica que rodea por donde metes la llave. Un escudo acorazado (como DISEC) está fabricado en acero endurecido macizo con lentejas giratorias de manganeso. Impide que un ladrón pueda llegar al bombín con mordazas para partirlo o con un taladro para reventarlo. Es la primera barrera visual y física."
        },
        {
            question: "¿Atienden desahucios o aperturas judiciales en Valdeacederas?",
            answer: "Sí, trabajamos mano a mano con procuradores, comisiones judiciales y propietarios legales (con la documentación en regla) para efectuar aperturas puntuales programadas ante alzamientos o recuperaciones de viviendas okupadas, procediendo seguidamente a instalar una puerta anti-okupa o cerradura blindada."
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
            "name": "Valdeacederas y Berruguete",
            "item": "https://www.cerrajeros-tetuan.es/cerrajeros-valdeacederas-berruguete"
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
                            Valdeacederas y Berruguete • Cerrajeros Tetuán
                        </div>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em', color: '#fff' }}>
                            CERRAJERÍA <span style={{ color: '#FFD700', fontFamily: 'var(--font-montserrat)', fontStyle: 'italic', display: 'block', marginTop: '0.5rem' }}>Defensa Integral</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '600px' }}>
                            Convertimos tu piso en una fortaleza. Especialistas en <strong>estudios de vulnerabilidad gratuitos</strong> contra métodos de asalto e <em>instalación de alta seguridad antibumping</em> para todas las familias del barrio.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="tel:644936742" className="btn-primary" style={{ background: '#dc2626', borderColor: '#dc2626' }}>Call 644 936 742</a>
                            <Link href="#informes" className="btn-outline">Ver Procedimientos</Link>
                        </div>
                    </div>
                    <div className="zone-hero-image-wrapper">
                        <Image src="/images/valdeacederas_hero_1772575960133.png" alt="Cerrajería en Valdeacederas" fill style={{ objectFit: 'cover' }} priority />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', width: '100%' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <Shield color="#FFD700" size={32} />
                                <div>
                                    <h4 style={{ color: '#fff', margin: 0, fontSize: '1.1rem' }}>Sistemas Antibumping</h4>
                                    <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.85rem' }}>Protección Certificada EN 1303</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THREE PILLARS (Zonas de Seguridad equivalent) */}
            <section style={{ padding: '6rem 0', background: '#0a192f' }}>
                <div className="container fade-in-up">
                    <h2 style={{ textAlign: 'center', color: '#fff', marginBottom: '4rem', fontSize: '2rem' }}>Pilares de Seguridad en <span style={{ color: '#FFD700' }}>Valdeacederas</span></h2>
                    <div className="grid-3">
                        <div style={{ background: 'rgba(5, 12, 23, 0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s' }} className="card-hover-effect">
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#FFD700' }}>
                                <Search size={28} />
                            </div>
                            <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.25rem' }}>Estudio Gratuito In Situ</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>Evaluamos la vulnerabilidad de tu cilindro, escudo y bisagras sin coste de desplazamiento en Berruguete.</p>
                        </div>
                        <div style={{ background: 'rgba(5, 12, 23, 0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s' }} className="card-hover-effect">
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#FFD700' }}>
                                <Shield size={28} />
                            </div>
                            <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.25rem' }}>Escudos DISEC</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>La primera barrera física maciza que impide ataques con mordaza o taladro sobre tu bombín central.</p>
                        </div>
                        <div style={{ background: 'rgba(5, 12, 23, 0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s' }} className="card-hover-effect">
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#FFD700' }}>
                                <Lock size={28} />
                            </div>
                            <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.25rem' }}>Aperturas Judiciales</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>Aperturas programadas para alzamientos e instalación de puertas anti-okupa certificadas al instante.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SPLIT EXPERTITSE (Defensa en Profundidad equivalent) */}
            <section style={{ padding: '6rem 0', background: '#030b14' }}>
                <div className="container about-grid fade-in-up">
                    <div className="about-content">
                        <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '2rem' }}>Fortificación Residencial Activa</h2>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <li style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ color: '#FFD700', marginTop: '4px' }}><CheckCircle size={24} /></div>
                                <div>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Bloqueo Antibumping Definitivo</h4>
                                    <p style={{ color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>Cilindros con barra antirotura longitudinal y llaves incopiables para impedir el método Bumping silencioso.</p>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ color: '#FFD700', marginTop: '4px' }}><CheckCircle size={24} /></div>
                                <div>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Apertura de Trabadas 24h</h4>
                                    <p style={{ color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>Si la puerta se cerró por una ráfaga de aire, acudiremos a cualquier hora empleando alambres y micas libres de daños.</p>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ color: '#FFD700', marginTop: '4px' }}><CheckCircle size={24} /></div>
                                <div>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Instalación de Cerrojos Extra</h4>
                                    <p style={{ color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>Cerrojos Lince XL o FAC Antibumping con retención interior anclados con tirafondos gigantes al premarco.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="about-image-wrapper">
                        <Image src="/images/furgoneta_berruguete_1772539486706.png" alt="Valdeacederas Operativa" fill style={{ objectFit: 'cover' }} />
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
                        <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem' }}>El 80% de las cerraduras históricas son vulnerables</h2>
                        <p style={{ color: '#d1d5db', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '800px' }}>
                            <strong>Valdeacederas y Berruguete</strong> son refugio de familias. Sin embargo, el parque de viviendas cuenta con un <em>problema silencioso</em>: instalaciones de más de 10 años.
                        </p>
                        <div className="vuln-grid">
                            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '3px solid #dc2626' }}>
                                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Riesgo Inminente</h4>
                                <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Las clásicas llaves de serreta pueden abrirse con llaves maestras talladas (bumping) en menos de 15 segundos.</p>
                            </div>
                            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '3px solid #10b981' }}>
                                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Nuestra Solución</h4>
                                <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Prevención activa. Sustitución por cilindros de altísima seguridad y colocación de escudos protectores blindados.</p>
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
                        <h2 style={{ fontSize: '2.5rem', color: '#fff' }}>Intervenciones de Actualización Residencial</h2>
                    </div>

                    <div className="tech-report-list">
                        <div className="tech-report-item">
                            <div className="tech-report-header">
                                <span className="tech-report-num">01.</span>
                                <h3 className="tech-report-title">Alarma Vecinal (Marcas)</h3>
                            </div>
                            <p className="tech-report-text">Un cliente en Capitán Blanco Argibay nos alerta de muescas raras ('marcas de ladrón' con aluminio) vistas por vecinos.</p>
                        </div>
                        <div className="tech-report-item" style={{ borderLeft: '4px solid #FFD700' }}>
                            <div className="tech-report-header">
                                <span className="tech-report-num" style={{ color: '#fff' }}>02.</span>
                                <h3 className="tech-report-title" style={{ color: '#FFD700' }}>Estudio In Situ</h3>
                            </div>
                            <p className="tech-report-text">Realizamos auditoría gratuita. Le advertimos de la fragilidad de su bombín TESA y aprobó la actualización in-situ.</p>
                        </div>
                        <div className="tech-report-item">
                            <div className="tech-report-header">
                                <span className="tech-report-num">03.</span>
                                <h3 className="tech-report-title">Fortificación DISEC</h3>
                            </div>
                            <p className="tech-report-text">Instalamos un cilindro suizo KABA Expert Cross con escudo macizo acorazado DISEC, retirando el antiguo embellecedor.</p>
                        </div>
                        <div className="tech-report-item">
                            <div className="tech-report-header">
                                <span className="tech-report-num">04.</span>
                                <h3 className="tech-report-title">Prevención Exitosa</h3>
                            </div>
                            <p className="tech-report-text">Hubo un allanamiento en el bloque la semana siguiente, pero la puerta de nuestro cliente resistió con simples arañazos en el escudo.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST SPLIT (Tu cerrajero de confianza in Boadilla equivalent) */}
            <section style={{ padding: '6rem 0', background: '#030b14' }}>
                <div className="container about-grid reverse fade-in-up">
                    <div>
                        <div style={{ color: '#FFD700', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.85rem' }}>COMPROMISO VECINAL</div>
                        <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1.5rem' }}>Técnicos inquebrantables</h2>
                        <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                            Huir de los adhesivos y pegatinas de "Cerrajero Económico" pegados en las tuberías de Avenida de Asturias es vital. Operamos de manera transparente y ética aportando presupuesto físico CERRADO.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '0.5rem' }}>
                                <div style={{ color: '#FFD700', marginBottom: '0.5rem' }}><Search size={20} /></div>
                                <h5 style={{ color: '#fff', fontSize: '1rem', margin: '0 0 0.25rem' }}>Auditoría Gratuita</h5>
                                <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0 }}>En todo el barrio sin recargos.</p>
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '0.5rem' }}>
                                <div style={{ color: '#FFD700', marginBottom: '0.5rem' }}><Shield size={20} /></div>
                                <h5 style={{ color: '#fff', fontSize: '1rem', margin: '0 0 0.25rem' }}>Protección Total</h5>
                                <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0 }}>Instalaciones KABA patentadas.</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ position: 'relative', height: '100%', minHeight: '400px', borderRadius: '1rem', overflow: 'hidden' }}>
                        <Image src="/images/valdeacederas_confianza.png" alt="Cerrajero atendiendo" fill style={{ objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', background: '#0a192f', padding: '1rem 1.5rem', borderRadius: '0.5rem', border: '1px solid #FFD700', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '40px', height: '40px', background: '#FFD700', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Shield color="#000" size={20} />
                            </div>
                            <div>
                                <h5 style={{ color: '#fff', margin: 0 }}>4.8/5 Reseñas</h5>
                                <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.8rem' }}>Google My Business</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PREGUNTAS FRECUENTES */}
            <section className="faq-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Dudas resueltas Valdeacederas</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            {/* INTERLINKING SEO */}
            <section style={{ padding: '4rem 0', background: '#030b14' }}>
                <div className="container">
                    <h2 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1.5rem', textAlign: 'center' }}>Protege tu Hogar en Tetuán</h2>
                    <p style={{ color: '#94a3b8', lineHeight: 1.7, textAlign: 'center', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                        En <strong>Valdeacederas y Berruguete</strong>, la <em>seguridad antibumping</em> es nuestra prioridad.
                        Consulta nuestras <Link href="/cerraduras-antibumping-tetuan" style={{ color: '#00E5FF', textDecoration: 'underline', fontWeight: 600 }}>cerraduras antibumping</Link>,{' '}
                        <Link href="/instalacion-cerraduras-tetuan" style={{ color: '#00E5FF', textDecoration: 'underline', fontWeight: 600 }}>instalación de cerraduras</Link> y{' '}
                        <Link href="/reparacion-cerraduras-tetuan" style={{ color: '#00E5FF', textDecoration: 'underline', fontWeight: 600 }}>reparación de cerraduras en Tetuán</Link>.
                    </p>
                    <p style={{ color: '#94a3b8', lineHeight: 1.7, textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        Visita la <Link href="/" style={{ color: '#00E5FF', textDecoration: 'underline', fontWeight: 600 }}>página principal de Cerrajeros Tetuán</Link> o{' '}
                        solicita un <Link href="/cerrajeros-urgentes-tetuan" style={{ color: '#00E5FF', textDecoration: 'underline', fontWeight: 600 }}>cerrajero urgente</Link>.
                        Explora nuestras <Link href="/zonas-tetuan" style={{ color: '#00E5FF', textDecoration: 'underline', fontWeight: 600 }}>zonas de cobertura</Link>.
                    </p>
                </div>
            </section>
        </main>
    );
}
