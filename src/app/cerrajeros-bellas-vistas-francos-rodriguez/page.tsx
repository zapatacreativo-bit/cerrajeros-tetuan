import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Lock, Clock, Wrench, Search, CheckCircle } from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import '../Home.css';

export const metadata: Metadata = {
    title: 'Cerrajeros en Bellas Vistas | Madrid Urgencias 24h',
    description: 'Servicios en Bellas Vistas y Francos Rodríguez. Apertura de puertas de madera antigua, borjas y urgencias universitarias 24h. Llama al 644 936 742.',
    keywords: 'cerrajeros bellas vistas, cerrajero francos rodriguez',
    alternates: {
        canonical: 'https://www.cerrajerostetuan.com/cerrajeros-bellas-vistas-francos-rodriguez',
    },
    openGraph: {
        title: 'Cerrajeros en Bellas Vistas | Madrid Urgencias 24h',
        description: 'Servicios en Bellas Vistas y Francos Rodríguez. Apertura de puertas de madera antigua, borjas y urgencias universitarias 24h. Llama al 644 936 742.',
        url: 'https://www.cerrajerostetuan.com/cerrajeros-bellas-vistas-francos-rodriguez',
        images: [{ url: 'https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cerrajeros en Bellas Vistas | Madrid Urgencias 24h',
        description: 'Servicios en Bellas Vistas y Francos Rodríguez. Apertura de puertas de madera antigua, borjas y urgencias universitarias 24h. Llama al 644 936 742.',
        images: ['https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png'],
    }
};

export default function BellasVistas() {
    const faqs = [
        {
            question: "¿Pueden abrir una puerta de madera muy antigua sin dañarla?",
            answer: "Sí, es nuestra especialidad en el barrio de Bellas Vistas. Los pórticos y viviendas centenarias poseen cerraduras muy elaboradas. Utilizando herramientas de decodificación de borjas especiales (como ganzúas mágicas o llaves de tensión variables) replicamos los giros internamente abriéndola en minutos y conversando la carpintería original intacta."
        },
        {
            question: "¿Disponen de cerraduras de marcas clásicas en stock inmediato?",
            answer: "Contamos con estocaje físico real en nuestros vehículos de cerraduras de alta gama de perfil antiguo como ezcurra, mcm, lince de doble paletón o cerraduras arcu e invisibles, para no tener que dejarle esperando al día siguiente en Francos Rodríguez."
        },
        {
            question: "¿Tienen tarifa especial para pisos de estudiantes universitarios compartidos?",
            answer: "El área de Francos Rodríguez y la franja oeste acoge mucha rotación universitaria. Aplicamos tarifas honestas ante estudiantes que han perdido o han dejado dentro sus manojos de llaves; nuestros precios son muy asequibles en comparación con las urgencias abusivas habituales en Madrid."
        },
        {
            question: "¿Sirve la misma llave si decido poner 3 bombines iguales en mi vivienda unifamiliar?",
            answer: "Sí. Ejecutamos un igualamiento de cilindros. Podemos coger 3 bombines de alta gama y programarlos con los mismos pines, para que usted pueda abrir su trastero inferior, su verja exterior y la puerta principal con una única llave dentada o de puntos troquelados, máxima comodidad."
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
            "name": "Bellas Vistas y Francos Rodríguez",
            "item": "https://www.cerrajeros-tetuan.es/cerrajeros-bellas-vistas-francos-rodriguez"
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
                            Bellas Vistas • Cerrajeros Tetuán
                        </div>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em', color: '#fff' }}>
                            CERRAJERÍA <span style={{ color: '#FFD700', fontFamily: 'var(--font-montserrat)', fontStyle: 'italic', display: 'block', marginTop: '0.5rem' }}>Artesanal y Precisa</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '600px' }}>
                            Mantenemos vivo el encanto del <em>Madrid clásico</em> sin descuidar tu <strong>seguridad moderna</strong>. Especialistas en extraer <strong>llaves partidas</strong> de cerraduras de borjas y preservar pesadas <em>puertas de madera</em>.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="tel:644936742" className="btn-primary" style={{ background: '#dc2626', borderColor: '#dc2626' }}>Call 644 936 742</a>
                            <Link href="#informes" className="btn-outline">Ver Técnicas</Link>
                        </div>
                    </div>
                    <div className="zone-hero-image-wrapper">
                        <Image src="/images/bellas_vistas_hero_1772575974837.png" alt="Cerrajería en Bellas Vistas" fill style={{ objectFit: 'cover' }} priority />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', width: '100%' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <Shield color="#FFD700" size={32} />
                                <div>
                                    <h4 style={{ color: '#fff', margin: 0, fontSize: '1.1rem' }}>Restauración sin Daños</h4>
                                    <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.85rem' }}>Carpintería Antigua 100% Protegida</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THREE PILLARS (Zonas de Seguridad equivalent) */}
            <section style={{ padding: '6rem 0', background: '#0a192f' }}>
                <div className="container fade-in-up">
                    <h2 style={{ textAlign: 'center', color: '#fff', marginBottom: '4rem', fontSize: '2rem' }}>Pilares de Seguridad en <span style={{ color: '#FFD700' }}>Bellas Vistas</span></h2>
                    <div className="grid-3">
                        <div style={{ background: 'rgba(5, 12, 23, 0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s' }} className="card-hover-effect">
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#FFD700' }}>
                                <Wrench size={28} />
                            </div>
                            <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.25rem' }}>Precisión Artesanal</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>Operamos con pulcritud absoluta en herrajes antiguos de portaladas de caoba, sin cincel ni martillo.</p>
                        </div>
                        <div style={{ background: 'rgba(5, 12, 23, 0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s' }} className="card-hover-effect">
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#FFD700' }}>
                                <Lock size={28} />
                            </div>
                            <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.25rem' }}>Stock Marcas Clásicas</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>Estocaje permanente de ezcurra, mcm, lince y cerraduras arcu para reparaciones en el acto.</p>
                        </div>
                        <div style={{ background: 'rgba(5, 12, 23, 0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s' }} className="card-hover-effect">
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#FFD700' }}>
                                <Clock size={28} />
                            </div>
                            <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.25rem' }}>Tarifas de Estudiante</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>Precios honestos y competitivos para la gran población universitaria de Ciudad Universitaria y Francos Rodríguez.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SPLIT EXPERTITSE (Defensa en Profundidad equivalent) */}
            <section style={{ padding: '6rem 0', background: '#030b14' }}>
                <div className="container about-grid fade-in-up">
                    <div className="about-content">
                        <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '2rem' }}>Especialidades Zona Oeste</h2>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <li style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ color: '#FFD700', marginTop: '4px' }}><CheckCircle size={24} /></div>
                                <div>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Actualización Invasión Mínima</h4>
                                    <p style={{ color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>Conversión de pesadas cerraduras Dierre/Mottura de borjas a Perfil Europeo sin dañar la madera antigua.</p>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ color: '#FFD700', marginTop: '4px' }}><CheckCircle size={24} /></div>
                                <div>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Soporte a Inquilinos</h4>
                                    <p style={{ color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>Respuesta rápida ante incidentes de universitarios a deshoras sin cargos extra abusivos por nocturnidad.</p>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ color: '#FFD700', marginTop: '4px' }}><CheckCircle size={24} /></div>
                                <div>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Reparación de Persianas Locales</h4>
                                    <p style={{ color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>Enderezamos ejes descolgados por colisiones en doble fila para los negocios emblemáticos de la zona.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="about-image-wrapper">
                        <Image src="/images/portal_berruguete_1772538873461.png" alt="Bellas Vistas Operativa" fill style={{ objectFit: 'cover' }} />
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
                        <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem' }}>¿Resides en un edificio de patrimonio clásico?</h2>
                        <p style={{ color: '#d1d5db', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '800px' }}>
                            <strong>Bellas Vistas</strong> alberga joyas arquitectónicas con <em>puertas macizas de caoba</em>. Estas <strong>cerraduras centenarias</strong> o de doble paletón necesitan tacto extremo; una intervención inexperta destrozará la madera para siempre.
                        </p>
                        <div className="vuln-grid">
                            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '3px solid #dc2626' }}>
                                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Riesgo Estético</h4>
                                <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Los "cerrajeros de pegatina" utilizan el taladro como primera opción, astillando y rompiendo embellecedores incalculables.</p>
                            </div>
                            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '3px solid #10b981' }}>
                                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Nuestra Solución</h4>
                                <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Artesanía y bisturí. Decodificación de borjas especiales que abren limpiamente conversando intacta la carpintería original.</p>
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
                        <h2 style={{ fontSize: '2.5rem', color: '#fff' }}>Intervenciones Artesanales 0 Daños</h2>
                    </div>

                    <div className="tech-report-list">
                        <div className="tech-report-item">
                            <div className="tech-report-header">
                                <span className="tech-report-num">01.</span>
                                <h3 className="tech-report-title">Urgencia en Lluvia (Mottura)</h3>
                            </div>
                            <p className="tech-report-text">Recibimos llamada en viernes lluvioso. Una llave gigante Mottura se astilló por la mitad clavándose en el bloque en Almansa.</p>
                        </div>
                        <div className="tech-report-item" style={{ borderLeft: '4px solid #FFD700' }}>
                            <div className="tech-report-header">
                                <span className="tech-report-num" style={{ color: '#fff' }}>02.</span>
                                <h3 className="tech-report-title" style={{ color: '#FFD700' }}>Descarte de Taladro</h3>
                            </div>
                            <p className="tech-report-text">Otros querían destrozar el escudo de madera de la puerta. Nosotros despachamos a nuestro maestro en modelos clásicos en 15 min.</p>
                        </div>
                        <div className="tech-report-item">
                            <div className="tech-report-header">
                                <span className="tech-report-num">03.</span>
                                <h3 className="tech-report-title">Extracción Inmaculada</h3>
                            </div>
                            <p className="tech-report-text">Inyectando microllubricante y usando bisturíes extractores, sacamos el trozo metálico cautivo en 25 minutos sin dañar nada.</p>
                        </div>
                        <div className="tech-report-item">
                            <div className="tech-report-header">
                                <span className="tech-report-num">04.</span>
                                <h3 className="tech-report-title">Tranquilidad del Cliente</h3>
                            </div>
                            <p className="tech-report-text">La carpintería conservó y retuvo todo su encanto histórico modernista. Presupuesto pre-establecido respetado 100%.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST SPLIT (Tu cerrajero de confianza in Boadilla equivalent) */}
            <section style={{ padding: '6rem 0', background: '#030b14' }}>
                <div className="container about-grid reverse fade-in-up">
                    <div>
                        <div style={{ color: '#FFD700', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.85rem' }}>HONESTIDAD TOTAL</div>
                        <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1.5rem' }}>Sin sorpresas ni asteriscos</h2>
                        <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                            En un vecindario construido sobre la solidez de sus habitantes, las mentiras duran poco y el boca a oreja lo es todo. Las estimaciones económicas telefónicas no esconden asteriscos, sino una política inquebrantable de honestidad.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '0.5rem' }}>
                                <div style={{ color: '#FFD700', marginBottom: '0.5rem' }}><Clock size={20} /></div>
                                <h5 style={{ color: '#fff', fontSize: '1rem', margin: '0 0 0.25rem' }}>Velocidad Ágil</h5>
                                <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0 }}>Motos que evitan los atascos de Numancia.</p>
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '0.5rem' }}>
                                <div style={{ color: '#FFD700', marginBottom: '0.5rem' }}><Shield size={20} /></div>
                                <h5 style={{ color: '#fff', fontSize: '1rem', margin: '0 0 0.25rem' }}>Piezas Originales</h5>
                                <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0 }}>Precintos inviolables KABA intactos.</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ position: 'relative', height: '100%', minHeight: '400px', borderRadius: '1rem', overflow: 'hidden' }}>
                        <Image src="/images/bellas_vistas_confianza.png" alt="Cerrajero atendiendo" fill style={{ objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', background: '#0a192f', padding: '1rem 1.5rem', borderRadius: '0.5rem', border: '1px solid #FFD700', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '40px', height: '40px', background: '#FFD700', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Shield color="#000" size={20} />
                            </div>
                            <div>
                                <h5 style={{ color: '#fff', margin: 0 }}>La Opción #1</h5>
                                <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.8rem' }}>Recomendada por vecinos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PREGUNTAS FRECUENTES */}
            <section className="faq-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Dudas resueltas Bellas Vistas</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            {/* INTERLINKING SEO */}
            <section style={{ padding: '4rem 0', background: '#030b14' }}>
                <div className="container">
                    <h2 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1.5rem', textAlign: 'center' }}>Más Servicios de Cerrajería en Tetuán</h2>
                    <p style={{ color: '#94a3b8', lineHeight: 1.7, textAlign: 'center', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                        En <strong>Bellas Vistas y Francos Rodríguez</strong>, somos expertos en <em>cerrajería artesanal</em> y seguridad moderna.
                        Descubre nuestro servicio de <Link href="/cambio-cerraduras-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>cambio de cerraduras en Tetuán</Link> o solicita una{' '}
                        <Link href="/apertura-puertas-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>apertura de puertas urgente</Link>.
                        Ofrecemos también <Link href="/reparacion-cerraduras-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>reparación de cerraduras</Link> y{' '}
                        <Link href="/persianas-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>reparación de persianas en Tetuán</Link>.
                    </p>
                    <p style={{ color: '#94a3b8', lineHeight: 1.7, textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        Vuelve a nuestra <Link href="/" style={{ color: '#FFD700', textDecoration: 'underline' }}>página principal de Cerrajeros Tetuán</Link> o explora todas las{' '}
                        <Link href="/zonas-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>zonas de cobertura</Link>.
                        Resuelve tus dudas en <Link href="/preguntas-frecuentes-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>preguntas frecuentes</Link>.
                    </p>
                </div>
            </section>
        </main>
    );
}
