import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Lock, Clock, Wrench, Search, CheckCircle } from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import '../Home.css';

export const metadata: Metadata = {
    title: 'Cerrajeros en Bravo Murillo y Estrecho | Urgencias 24h Rápidos',
    description: 'Cerrajeros locales en Bravo Murillo y barrio de Estrecho. Llegamos en 15 minutos. Aperturas sin daños, cerraduras de seguridad y urgencias 24h. Llama al 644 936 742.',
    keywords: 'cerrajeros bravo murillo, cerrajero estrecho, apertura puertas bravo murillo',
    alternates: {
        canonical: 'https://www.tetuancerrajeros.com/cerrajeros-bravo-murillo-estrecho',
    },
    openGraph: {
        title: 'Cerrajeros en Bravo Murillo y Estrecho | Urgencias 24h Rápidos',
        description: 'Cerrajeros locales en Bravo Murillo y barrio de Estrecho. Llegamos en 15 minutos. Aperturas sin daños, cerraduras de seguridad y urgencias 24h. Llama al 644 936 742.',
        url: 'https://www.tetuancerrajeros.com/cerrajeros-bravo-murillo-estrecho',
        images: [{ url: 'https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cerrajeros en Bravo Murillo y Estrecho | Urgencias 24h Rápidos',
        description: 'Cerrajeros locales en Bravo Murillo y barrio de Estrecho. Llegamos en 15 minutos. Aperturas sin daños, cerraduras de seguridad y urgencias 24h. Llama al 644 936 742.',
        images: ['https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png'],
    }
};

export default function BravoMurilloEstrecho() {
    const faqs = [
        {
            question: "¿Cuánto tarda exactamente un cerrajero en llegar a Bravo Murillo?",
            answer: "Al ser cerrajeros residentes y mantener unidades móviles patrullando constantemente el eje de Bravo Murillo, Estrecho y Alvarado, nuestro tiempo de respuesta habitual es inferior a 15-20 minutos reales desde que cuelga el teléfono. No hay falsas promesas; conocemos los atajos del distrito de Tetuán."
        },
        {
            question: "¿Realizan aperturas comerciales en Estrecho de madrugada?",
            answer: "Absolutamente sí. Las incidencias no entienden de horarios y entendemos que los negocios a pie de calle en esta zona tan comercial no pueden permitirse parones. Abrimos cierres metálicos atascados, persianas de escaparates y puertas de cristal de negocios las 24 horas del día, los 365 días del año."
        },
        {
            question: "¿Qué garantía ofrecen en las instalaciones en este barrio?",
            answer: "Ofrecemos garantía oficial por escrito en todos nuestros materiales (bombines antibumping, cerraduras invisibles, etc.) y en la mano de obra. Como vecinos de Tetuán, nos preocupamos por brindar un servicio duradero. Si usamos un escudo acorazado DISEC, sabrá que es original y certificado."
        },
        {
            question: "¿Es posible abrir mi piso en Estrecho si me he dejado la llave puesta por dentro?",
            answer: "Sí, es una de las urgencias más comunes que atendemos en Bravo Murillo. En el 95% de los casos utilizamos técnicas no destructivas (como el uso de radiografías especiales o plásticos de apertura, y herramientas de tensión avanzadas) que permiten abrir la puerta sin dañar absolutamente nada del bombín ni de la herrería."
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
            "name": "Bravo Murillo y Estrecho",
            "item": "https://www.cerrajeros-tetuan.es/cerrajeros-bravo-murillo-estrecho"
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
                            Bravo Murillo y Estrecho • Cerrajeros Tetuán
                        </div>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em', color: '#fff' }}>
                            CERRAJERÍA <span style={{ color: '#FFD700', fontFamily: 'var(--font-montserrat)', fontStyle: 'italic', display: 'block', marginTop: '0.5rem' }}>Premium Security</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '600px' }}>
                            Tu <strong>cerrajero de proximidad</strong> en la <em>gran arteria comercial de Tetuán</em>. Experiencia avalada, llegamos en <strong>menos de 20 minutos</strong>.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="tel:644936742" className="btn-primary" style={{ background: '#dc2626', borderColor: '#dc2626' }}>Call 644 936 742</a>
                            <Link href="#informes" className="btn-outline">Ver Procedimientos</Link>
                        </div>
                    </div>
                    <div className="zone-hero-image-wrapper">
                        <Image src="/images/bravo_murillo_hero_1772575895737.png" alt="Cerrajería en Bravo Murillo" fill style={{ objectFit: 'cover' }} priority />
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
                    <h2 style={{ textAlign: 'center', color: '#fff', marginBottom: '4rem', fontSize: '2rem' }}>Pilares de Seguridad en <span style={{ color: '#FFD700' }}>Bravo Murillo</span></h2>
                    <div className="grid-3">
                        <div style={{ background: 'rgba(5, 12, 23, 0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s' }} className="card-hover-effect">
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#FFD700' }}>
                                <Clock size={28} />
                            </div>
                            <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.25rem' }}>Urgencias 20 Minutos</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>Unidades móviles patrullando constantemente el eje de Bravo Murillo, Estrecho y Alvarado.</p>
                        </div>
                        <div style={{ background: 'rgba(5, 12, 23, 0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s' }} className="card-hover-effect">
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#FFD700' }}>
                                <Lock size={28} />
                            </div>
                            <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.25rem' }}>Asistencia Comercial</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>Abrimos cierres metálicos atascados, persianas de escaparates y puertas de cristal 24/7.</p>
                        </div>
                        <div style={{ background: 'rgba(5, 12, 23, 0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s' }} className="card-hover-effect">
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#FFD700' }}>
                                <Wrench size={28} />
                            </div>
                            <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.25rem' }}>Apertura Limpia</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>El 95% de las aperturas (llaves puestas) las solucionamos sin dañar nada de la herrería.</p>
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
                                    <p style={{ color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>Actualizamos tu instalación con cilindros de Perfil Europeo de Alta Seguridad combinados con Escudos Acorazados DISEC.</p>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ color: '#FFD700', marginTop: '4px' }}><CheckCircle size={24} /></div>
                                <div>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Intervención en Locales</h4>
                                    <p style={{ color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>Reparamos motores de persiana quemados y soldamos poleas al momento para que la actividad no se detenga.</p>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ color: '#FFD700', marginTop: '4px' }}><CheckCircle size={24} /></div>
                                <div>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Cerraduras de Borjas Históricas</h4>
                                    <p style={{ color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>Acudimos a fincas clásicas del barrio para sustituir y reparar cerraduras de doble paletón (Mottura, Dierre).</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="about-image-wrapper">
                        <Image src="/images/bravo_murillo_operativa_1772576262530.png" alt="Bravo Murillo Operativa" fill style={{ objectFit: 'cover' }} />
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
                        <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem' }}>¿Tienes un negocio en Bravo Murillo?</h2>
                        <p style={{ color: '#d1d5db', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '800px' }}>
                            La calle principal de <strong>Tetuán</strong> vertebra y da vida al distrito. Atravesando puntos emblemáticos como la parada de <em>Metro de Estrecho</em>, la constante <strong>actividad comercial</strong> exige protección.
                        </p>
                        <div className="vuln-grid">
                            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '3px solid #dc2626' }}>
                                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Riesgo Actual</h4>
                                <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>El constante asalto a cierres metálicos de madrugada requiere candados de suelo actualizados tipo Toy o Keymat.</p>
                            </div>
                            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '3px solid #10b981' }}>
                                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Nuestra Solución</h4>
                                <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Blindaje integral para escaparates y negocios. Soluciones antirrobo disuasorias comprobadas in situ.</p>
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
                                <h3 className="tech-report-title">Urgencia Mercado Maravillas</h3>
                            </div>
                            <p className="tech-report-text">Recibimos avisos de negocios a primera hora. En 12 minutos el técnico está en su puerta evaluando el cierre.</p>
                        </div>
                        <div className="tech-report-item" style={{ borderLeft: '4px solid #FFD700' }}>
                            <div className="tech-report-header">
                                <span className="tech-report-num" style={{ color: '#fff' }}>02.</span>
                                <h3 className="tech-report-title" style={{ color: '#FFD700' }}>Apertura Comercial Rápida</h3>
                            </div>
                            <p className="tech-report-text">Fresado de precisión sobre cajetines manipulados evitando dañar el cierre motorizado y asegurando la apertura de la panadería a tiempo.</p>
                        </div>
                        <div className="tech-report-item">
                            <div className="tech-report-header">
                                <span className="tech-report-num">03.</span>
                                <h3 className="tech-report-title">Mejora de Sistemas</h3>
                            </div>
                            <p className="tech-report-text">No solo reparamos la urgencia, instalamos candados de alta seguridad blindados blindando el acceso contra ataques repetidos.</p>
                        </div>
                        <div className="tech-report-item">
                            <div className="tech-report-header">
                                <span className="tech-report-num">04.</span>
                                <h3 className="tech-report-title">Facturación Trasparente</h3>
                            </div>
                            <p className="tech-report-text">Nunca perforamos un bombillo sin que nuestro cliente en Bravo Murillo o Estrecho haya aceptado por escrito el presupuesto previamente.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST SPLIT (Tu cerrajero de confianza in Boadilla equivalent) */}
            <section style={{ padding: '6rem 0', background: '#030b14' }}>
                <div className="container about-grid reverse fade-in-up">
                    <div>
                        <div style={{ color: '#FFD700', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.85rem' }}>CERTIFICACIÓN OFICIAL</div>
                        <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1.5rem' }}>Tu cerrajero de proximidad</h2>
                        <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                            Nuestro radio de acción abarca cada callejuela transversal a Bravo Murillo. Desde Jerónima Llorente hasta Marqués de Viana, un laberinto en el que los forasteros se pierden, el Cerrajero Bravo Murillo Oficial sabe moverse sorteando obras y tráfico.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '0.5rem' }}>
                                <div style={{ color: '#FFD700', marginBottom: '0.5rem' }}><Clock size={20} /></div>
                                <h5 style={{ color: '#fff', fontSize: '1rem', margin: '0 0 0.25rem' }}>GPS Local</h5>
                                <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0 }}>Llegamos antes que su seguro.</p>
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '0.5rem' }}>
                                <div style={{ color: '#FFD700', marginBottom: '0.5rem' }}><Shield size={20} /></div>
                                <h5 style={{ color: '#fff', fontSize: '1rem', margin: '0 0 0.25rem' }}>Garantía 100%</h5>
                                <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0 }}>Garantía oficial por escrito.</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ position: 'relative', height: '100%', minHeight: '400px', borderRadius: '1rem', overflow: 'hidden' }}>
                        <Image src="/images/bravo_murillo_confianza.png" alt="Cerrajero atendiendo" fill style={{ objectFit: 'cover' }} />
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
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Dudas resueltas Área Bravo Murillo</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            {/* INTERLINKING SEO */}
            <section style={{ padding: '4rem 0', background: '#030b14' }}>
                <div className="container">
                    <h2 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1.5rem', textAlign: 'center' }}>Servicios de Cerrajería en el Distrito de Tetuán</h2>
                    <p style={{ color: '#94a3b8', lineHeight: 1.7, textAlign: 'center', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                        Desde <strong>Bravo Murillo y Estrecho</strong>, ofrecemos cobertura total. ¿Necesitas un{' '}
                        <Link href="/cerrajeros-24-horas-tetuan" style={{ color: '#00E5FF', textDecoration: 'underline', fontWeight: 600 }}>cerrajero 24 horas en Tetuán</Link>? También realizamos{' '}
                        <Link href="/cambio-bombines-tetuan" style={{ color: '#00E5FF', textDecoration: 'underline', fontWeight: 600 }}>cambio de bombines</Link>,{' '}
                        <Link href="/instalacion-cerraduras-tetuan" style={{ color: '#00E5FF', textDecoration: 'underline', fontWeight: 600 }}>instalación de cerraduras</Link> y{' '}
                        <Link href="/apertura-coches-tetuan" style={{ color: '#00E5FF', textDecoration: 'underline', fontWeight: 600 }}>apertura de coches en Tetuán</Link>.
                    </p>
                    <p style={{ color: '#94a3b8', lineHeight: 1.7, textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        Vuelve a la <Link href="/" style={{ color: '#00E5FF', textDecoration: 'underline', fontWeight: 600 }}>home de Cerrajeros Tetuán</Link> o contacta con nosotros en{' '}
                        <Link href="/contacto-tetuan" style={{ color: '#00E5FF', textDecoration: 'underline', fontWeight: 600 }}>contacto</Link>.
                    </p>
                </div>
            </section>
        </main>
    );
}
