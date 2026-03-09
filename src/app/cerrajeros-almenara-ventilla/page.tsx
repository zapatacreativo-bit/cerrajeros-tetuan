import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Lock, Clock, Wrench, Search, CheckCircle } from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import '../Home.css';

export const metadata: Metadata = {
    title: 'Cerrajeros en Almenara y Ventilla | Urgencias 24h Rápidos',
    description: 'Servicio vecinal de cerrajería en Almenara y barrio de La Ventilla (Tetuán). Llegamos volando. Aperturas urgentes al mejor precio. Llama al 644 936 742.',
    keywords: 'cerrajeros almenara, cerrajero ventilla, apertura puertas ventilla',
    alternates: {
        canonical: 'https://www.cerrajerostetuan.com/cerrajeros-almenara-ventilla',
    },
    openGraph: {
        title: 'Cerrajeros en Almenara y Ventilla | Urgencias 24h Rápidos',
        description: 'Servicio vecinal de cerrajería en Almenara y barrio de La Ventilla (Tetuán). Llegamos volando. Aperturas urgentes al mejor precio. Llama al 644 936 742.',
        url: 'https://www.cerrajerostetuan.com/cerrajeros-almenara-ventilla',
        images: [{ url: 'https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cerrajeros en Almenara y Ventilla | Urgencias 24h Rápidos',
        description: 'Servicio vecinal de cerrajería en Almenara y barrio de La Ventilla (Tetuán). Llegamos volando. Aperturas urgentes al mejor precio. Llama al 644 936 742.',
        images: ['https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png'],
    }
};

export default function AlmenaraVentilla() {
    const faqs = [
        {
            question: "¿Tardan mucho en llegar a la zona de La Ventilla de madrugada?",
            answer: "No, en absoluto. Al tener a uno de nuestros oficiales viviendo y patrullando muy cerca del entorno de la Avenida de Asturias, nuestro margen de llegada suele rondar los 15 o, a lo sumo, 25 minutos durante las altas horas de la madrugada."
        },
        {
            question: "¿Cuánto cuesta abrir la puerta de mi casa si perdí las llaves?",
            answer: "El presupuesto se lo daremos cerrado por teléfono antes de ir. Depende de si la puerta está simplemente encajada de golpe (lo cual es muy barato y se abre con tarjeta en un minuto) o si ha dejado echadas todas las vueltas de la llave, lo que requiere usar extractores o fresas de alta velocidad."
        },
        {
            question: "¿Arreglan cerraduras antiguas en pisos de alquiler?",
            answer: "Sí, la Ventilla cuenta con un gran parque de viviendas de alquiler y cerrojos muy desgastados (marca FAC, Lince...). Podemos reparar el cilindro interior o, por muy poco dinero, instalar un cerrojo de resbalón nuevo que proporcione mayor seguridad al inquilino."
        },
        {
            question: "¿Es seguro instalar un cerrojo FAC extra en mi puerta actual?",
            answer: "Totalmente. Añadir un cerrojo de solape por la cara interior de la puerta con su propio bombillo exterior (preferiblemente que integre sistema antibumping y antitaladro) añade una barrera física extra y disuasoria brutal ante cualquier ladrón oportunista."
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
            "name": "Almenara y Ventilla",
            "item": "https://www.cerrajeros-tetuan.es/cerrajeros-almenara-ventilla"
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
                            Almenara y Ventilla • Cerrajeros Tetuán
                        </div>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em', color: '#fff' }}>
                            CERRAJERÍA <span style={{ color: '#FFD700', fontFamily: 'var(--font-montserrat)', fontStyle: 'italic', display: 'block', marginTop: '0.5rem' }}>Vecinal 24H</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '600px' }}>
                            Tu <strong>cerrajero vecinal</strong> de máxima confianza. <em>Aperturas urgentes</em>, sustitución de cerrojos y <strong>refuerzo de puertas</strong> en pisos familiares de toda la <em>zona Norte de Tetuán</em>.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="tel:644936742" className="btn-primary" style={{ background: '#dc2626', borderColor: '#dc2626' }}>Call 644 936 742</a>
                            <Link href="#informes" className="btn-outline">Ver Procedimientos</Link>
                        </div>
                    </div>
                    <div className="zone-hero-image-wrapper">
                        <Image src="/images/almenara_ventilla_hero_1772575944755.png" alt="Cerrajería en Ventilla" fill style={{ objectFit: 'cover' }} priority />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', width: '100%' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <Shield color="#FFD700" size={32} />
                                <div>
                                    <h4 style={{ color: '#fff', margin: 0, fontSize: '1.1rem' }}>Servicio de Barrio</h4>
                                    <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.85rem' }}>Transparencia sin recargos abusivos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THREE PILLARS (Zonas de Seguridad equivalent) */}
            <section style={{ padding: '6rem 0', background: '#0a192f' }}>
                <div className="container fade-in-up">
                    <h2 style={{ textAlign: 'center', color: '#fff', marginBottom: '4rem', fontSize: '2rem' }}>Valores en <span style={{ color: '#FFD700' }}>La Ventilla</span></h2>
                    <div className="grid-3">
                        <div style={{ background: 'rgba(5, 12, 23, 0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s' }} className="card-hover-effect">
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#FFD700' }}>
                                <Lock size={28} />
                            </div>
                            <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.25rem' }}>Precios Justos</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>Presupuesto CERRADO previo por teléfono. Evitamos inflar facturas con cargos innecesarios a las familias.</p>
                        </div>
                        <div style={{ background: 'rgba(5, 12, 23, 0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s' }} className="card-hover-effect">
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#FFD700' }}>
                                <Clock size={28} />
                            </div>
                            <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.25rem' }}>Vecinos de Zona</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>Nuestros oficiales operan desde puntos físicos reales colindantes, garantizando tiempos de 15 a 25 minutos.</p>
                        </div>
                        <div style={{ background: 'rgba(5, 12, 23, 0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s' }} className="card-hover-effect">
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#FFD700' }}>
                                <Shield size={28} />
                            </div>
                            <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.25rem' }}>Garantía Material</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>Trabajamos con cilindros Maurer, Tesa o Cisa, dejándole la caja precintada junto a todas sus llaves vírgenes.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SPLIT EXPERTITSE (Defensa en Profundidad equivalent) */}
            <section style={{ padding: '6rem 0', background: '#030b14' }}>
                <div className="container about-grid fade-in-up">
                    <div className="about-content">
                        <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '2rem' }}>Servicios Completos en tu Barrio</h2>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <li style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ color: '#FFD700', marginTop: '4px' }}><CheckCircle size={24} /></div>
                                <div>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Apertura Exprés 24h</h4>
                                    <p style={{ color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>Si te dejaste la llave cruzada o de golpe, hacemos la apertura con mínimo impacto acústico y sin romper la puerta.</p>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ color: '#FFD700', marginTop: '4px' }}><CheckCircle size={24} /></div>
                                <div>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Instalación de Cerrojos FAC/Lince</h4>
                                    <p style={{ color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>Reafirmamos puertas de madera frágiles con cerrojos de solape antipalanca y antibumping homologados.</p>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ color: '#FFD700', marginTop: '4px' }}><CheckCircle size={24} /></div>
                                <div>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Asistencia Rápida en Automoción</h4>
                                    <p style={{ color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>Abrimos coches (Llaves en maletero) con decodificadoras Lishi en el asfalto de la Avenida de Asturias sin arañar tu coche.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="about-image-wrapper">
                        <Image src="/images/almenara_operativa.png" alt="Almenara Operativa" fill style={{ objectFit: 'cover' }} />
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
                        <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem' }}>¿Preocupado por la fragilidad de tu puerta original?</h2>
                        <p style={{ color: '#d1d5db', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '800px' }}>
                            <strong>Almenara y La Ventilla</strong> atesoran viviendas familiares e históricas. Muchas <em>puertas de madera originales</em> están hoy desprotegidas ante la ola de <strong>métodos silenciosos</strong> o la palanqueta.
                        </p>
                        <div className="vuln-grid">
                            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '3px solid #dc2626' }}>
                                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Riesgo Residencial</h4>
                                <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Las cerraduras de un solo punto en el centro de puertas antiguas de madera blanda ceden ante el apalancamiento lateral y el bumping.</p>
                            </div>
                            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '3px solid #10b981' }}>
                                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Nuestra Solución</h4>
                                <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Incorporación de un segundo cerrojo tipo Lince de alta resistencia para dotar de una fortificación disuasoria por muy poco dinero.</p>
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
                        <h2 style={{ fontSize: '2.5rem', color: '#fff' }}>Intervenciones Vecinales Resolutivas</h2>
                    </div>

                    <div className="tech-report-list">
                        <div className="tech-report-item">
                            <div className="tech-report-header">
                                <span className="tech-report-num">01.</span>
                                <h3 className="tech-report-title">Urgencia en Plena Madrugada</h3>
                            </div>
                            <p className="tech-report-text">Recibimos llamada de una familia a las 3:15 AM tras regreso de vacaciones, llave olvidada en el hotel y niños en escalera.</p>
                        </div>
                        <div className="tech-report-item" style={{ borderLeft: '4px solid #FFD700' }}>
                            <div className="tech-report-header">
                                <span className="tech-report-num" style={{ color: '#fff' }}>02.</span>
                                <h3 className="tech-report-title" style={{ color: '#FFD700' }}>Patrullero a 14 Minutos</h3>
                            </div>
                            <p className="tech-report-text">Activamos al oficial residente más cercano. Se presenta en Plaza de la Remonta para comenzar evaluación inmediata.</p>
                        </div>
                        <div className="tech-report-item">
                            <div className="tech-report-header">
                                <span className="tech-report-num">03.</span>
                                <h3 className="tech-report-title">Apertura Sin Daños (45s)</h3>
                            </div>
                            <p className="tech-report-text">Al estar la puerta de resbalón, usamos una lámina plástica de apertura y micropulsación. Se abre en 45 segundos reales sin taladrar nada.</p>
                        </div>
                        <div className="tech-report-item">
                            <div className="tech-report-header">
                                <span className="tech-report-num">04.</span>
                                <h3 className="tech-report-title">Trato Justo al Vecino</h3>
                            </div>
                            <p className="tech-report-text">No cobramos recargo abusivo de material por reposición. En 20 minutos totales desde la llamada, la familia ya estaba descansando.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST SPLIT (Tu cerrajero de confianza in Boadilla equivalent) */}
            <section style={{ padding: '6rem 0', background: '#030b14' }}>
                <div className="container about-grid reverse fade-in-up">
                    <div>
                        <div style={{ color: '#FFD700', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.85rem' }}>CERRAJERO DEL BARRIO</div>
                        <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1.5rem' }}>Tetuán Norte merece un trato justo</h2>
                        <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                            Existen empresas nacionales que operan desde centralitas a 600 kilómetros y reajustan facturas inventando averías. Nosotros no. Operamos mediante <strong>PRESUPUESTO PREVIO CERRADO</strong> sin un céntimo en concepto de sorpresas.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '0.5rem' }}>
                                <div style={{ color: '#FFD700', marginBottom: '0.5rem' }}><Clock size={20} /></div>
                                <h5 style={{ color: '#fff', fontSize: '1rem', margin: '0 0 0.25rem' }}>Proximidad Real</h5>
                                <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0 }}>En tu calle, no en otra provincia.</p>
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '0.5rem' }}>
                                <div style={{ color: '#FFD700', marginBottom: '0.5rem' }}><Shield size={20} /></div>
                                <h5 style={{ color: '#fff', fontSize: '1rem', margin: '0 0 0.25rem' }}>Protección Total</h5>
                                <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0 }}>Garantía firmada en todos los trabajos.</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ position: 'relative', height: '100%', minHeight: '400px', borderRadius: '1rem', overflow: 'hidden' }}>
                        <Image src="/images/almenara_confianza.png" alt="Cerrajero atendiendo" fill style={{ objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', background: '#0a192f', padding: '1rem 1.5rem', borderRadius: '0.5rem', border: '1px solid #FFD700', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '40px', height: '40px', background: '#FFD700', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Shield color="#000" size={20} />
                            </div>
                            <div>
                                <h5 style={{ color: '#fff', margin: 0 }}>4.8/5 Reseñas</h5>
                                <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.8rem' }}>Vecinos de Tetuán</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PREGUNTAS FRECUENTES */}
            <section className="faq-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Dudas resueltas Almenara-Ventilla</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            {/* INTERLINKING SEO */}
            <section style={{ padding: '4rem 0', background: '#030b14' }}>
                <div className="container">
                    <h2 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1.5rem', textAlign: 'center' }}>Servicios Relacionados en Tetuán</h2>
                    <p style={{ color: '#94a3b8', lineHeight: 1.7, textAlign: 'center', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                        Desde <strong>Almenara y La Ventilla</strong>, nuestros <em>cerrajeros en Tetuán</em> se desplazan rápidamente a cualquier punto del distrito.
                        Si necesitas una <Link href="/apertura-puertas-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>apertura de puertas en Tetuán</Link> o un{' '}
                        <Link href="/cambio-bombines-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>cambio de bombín</Link>, contáctanos.
                        También ofrecemos <Link href="/cerraduras-antibumping-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>cerraduras antibumping</Link> y{' '}
                        <Link href="/cerrajeros-urgentes-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>cerrajeros urgentes en Tetuán</Link>.
                    </p>
                    <p style={{ color: '#94a3b8', lineHeight: 1.7, textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        Consulta nuestras <Link href="/zonas-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>zonas de cobertura en Tetuán</Link> o{' '}
                        visita nuestra <Link href="/" style={{ color: '#FFD700', textDecoration: 'underline' }}>página principal de Cerrajeros Tetuán</Link> para más información.
                        ¿Tienes dudas? Revisa las <Link href="/preguntas-frecuentes-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>preguntas frecuentes</Link>.
                    </p>
                </div>
            </section>
        </main>
    );
}
