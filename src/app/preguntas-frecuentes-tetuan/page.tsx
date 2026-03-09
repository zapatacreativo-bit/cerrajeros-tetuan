import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
    Clock, ShieldCheck, Euro, Wrench, Lock, DoorClosed,
    Smartphone, PhoneCall, ArrowRight, CheckCircle2
} from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import '../Home.css';

export const metadata: Metadata = {
    title: 'Preguntas Frecuentes | Cerrajeros en Tetuán ☎ 644 936 742',
    description: 'Resuelve todas tus dudas sobre cerrajería en Tetuán. Tiempos de respuesta, tarifas, seguridad y métodos de apertura sin rotura. Llama al 644 936 742.',
    keywords: 'preguntas frecuentes cerrajero, faqs cerrajeria, dudas cerrajero',
    alternates: {
        canonical: 'https://www.cerrajerostetuan.com/preguntas-frecuentes-tetuan',
    },
    openGraph: {
        title: 'Preguntas Frecuentes | Cerrajeros en Tetuán ☎ 644 936 742',
        description: 'Resuelve todas tus dudas sobre cerrajería en Tetuán. Tiempos de respuesta, tarifas, seguridad y métodos de apertura sin rotura. Llama al 644 936 742.',
        url: 'https://www.cerrajerostetuan.com/preguntas-frecuentes-tetuan',
        images: [{ url: 'https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Preguntas Frecuentes | Cerrajeros en Tetuán ☎ 644 936 742',
        description: 'Resuelve todas tus dudas sobre cerrajería en Tetuán. Tiempos de respuesta, tarifas, seguridad y métodos de apertura sin rotura. Llama al 644 936 742.',
        images: ['https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png'],
    }
};

export default function PreguntasFrecuentes() {
    const faqs = [
        {
            question: "¿Cuánto tarda en llegar un cerrajero urgente al barrio de Tetuán?",
            answer: "Nuestro tiempo de respuesta para quienes necesitan un cerrajero es de menos de 20 minutos. Al estar situados cerca de la Calle de Bravo Murillo, nos desplazamos rápidamente a cualquier punto de Cuatro Caminos, Estrecho o Plaza de Castilla, garantizando la atención más rápida del distrito ante cualquier emergencia de cerrajería este 2026."
        },
        {
            question: "¿Es posible abrir una puerta blindada sin romperla en Tetuán?",
            answer: "Sí, como expertos en cerrajería local, priorizamos siempre la apertura no destructiva. En barrios como Bellas Vistas o Berruguete, utilizamos técnicas avanzadas de ganzuado y resbalón que permiten abrir la puerta sin dañar la cerradura ni el marco en la gran mayoría de los casos de llaves olvidadas o puestas por dentro."
        },
        {
            question: "¿Cuánto cuesta de media un servicio de cerrajería en el distrito de Tetuán?",
            answer: "El precio varía según el servicio, pero ofrecemos presupuestos cerrados desde el primer momento. Al ser cerrajeros en Tetuán sin intermediarios, nuestras tarifas son muy competitivas. Una apertura estándar suele ser económica y transparente, evitando los sobrecostes de empresas que vienen de fuera del distrito de Madrid."
        },
        {
            question: "¿Qué cerradura es la más recomendada para evitar robos en Valdeacederas?",
            answer: "Para las viviendas de Valdeacederas y Ventilla, recomendamos instalar un bombín antibumping con escudo acorazado. En 2026, esta combinación es la defensa más efectiva contra las técnicas de robo más comunes en Tetuán, proporcionando una resistencia certificada contra el bumping, el taladro y la extracción mecánica del cilindro."
        },
        {
            question: "¿Ofrecen servicio de cerrajería 24 horas cerca de la Plaza de Castilla?",
            answer: "Absolutamente. Tenemos un equipo de guardia permanente para cubrir toda la zona de Plaza de Castilla, Avenida de Asturias y alrededores. Nuestro servicio de cerrajería 24 horas en Tetuán funciona los 365 días del año, asegurando que ningún vecino se quede fuera de casa sin importar la hora o si es un día festivo."
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
            "name": "Preguntas Frecuentes",
            "item": "https://www.cerrajeros-tetuan.es/preguntas-frecuentes-tetuan"
        }]
    };

    const faqPageSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <main style={{ backgroundColor: 'var(--color-bg-base)', color: '#d1d5db' }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />

            <div className="breadcrumbs" style={{ paddingTop: '80px', paddingBottom: '20px', backgroundColor: 'rgba(5, 12, 23, 0.9)' }}>
                <div className="container" style={{ fontSize: '0.9rem', color: '#8892b0' }}>
                    <Link href="/" style={{ color: '#FFD700', textDecoration: 'none' }}>Inicio</Link> <span style={{ margin: '0 8px' }}>&gt;</span> <span style={{ color: '#e2e8f0' }}>Preguntas Frecuentes</span>
                </div>
            </div>

            {/* HERO SECTION */}
            <section style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(rgba(5, 12, 23, 0.8), rgba(5, 12, 23, 0.95)), url("/images/bravo_murillo_zona.png")', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }}></div>
                <div className="container fade-in-up" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '900px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 215, 0, 0.1)', color: '#FFD700', padding: '0.5rem 1rem', borderRadius: '2rem', marginBottom: '1.5rem', border: '1px solid rgba(255, 215, 0, 0.2)' }}>
                        <ShieldCheck size={20} />
                        <span style={{ fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Resolvemos tus dudas</span>
                    </div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', marginBottom: '1.5rem', lineHeight: 1.1, fontWeight: 800 }}>
                        Preguntas <span style={{ color: '#FFD700' }}>Frecuentes</span> sobre Cerrajería
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#a8b2d1', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                        ¿Tienes dudas sobre <strong>tiempos de respuesta</strong>, tarifas o <em>seguridad en Tetuán</em>? Aquí respondemos a las consultas más habituales de nuestros vecinos con total transparencia.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="tel:644936742" className="btn-primary pulsing-btn" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', padding: '1rem 2rem' }}>
                            <PhoneCall size={22} />
                            Urgencias 24h
                        </a>
                        <a href="#respuestas-rapidas" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', padding: '1rem 2rem', background: 'rgba(255, 255, 255, 0.05)', color: '#fff', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '0.5rem', textDecoration: 'none', transition: 'all 0.3s' }} className="hover:bg-white/10 hover:border-white/30">
                            Ver Respuestas Rápidas <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT WITH GRID AND CARDS */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container">

                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem', animation: 'fadeInUp 0.8s ease backwards', animationDelay: '0.2s' }}>
                        <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1.5rem' }}>Tus Duda, Nuestra Experiencia en <span style={{ color: '#FFD700' }}>Tetuán</span></h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#a8b2d1' }}>El mundo de la <strong>cerrajería</strong> ha evolucionado drásticamente. Desde el <em>bumping clásico</em> en Berruguete hasta los sistemas domóticos en AZCA, abordamos cada situación con la cercanía de un vecino y el rigor técnico de <strong>expertos en seguridad</strong> en 2026.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>

                        {/* Card 1 */}
                        <div style={{ background: '#0a192f', padding: '2.5rem', borderRadius: '1rem', border: '1px solid rgba(255, 215, 0, 0.1)', transition: 'transform 0.3s, box-shadow 0.3s', display: 'flex', flexDirection: 'column', gap: '1rem' }} className="hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,215,0,0.1)]">
                            <div style={{ width: '60px', height: '60px', background: 'rgba(255, 215, 0, 0.1)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFD700', marginBottom: '1rem' }}>
                                <Clock size={32} />
                            </div>
                            <h3 style={{ fontSize: '1.4rem', color: '#fff', margin: 0 }}>¿Cuánto tarde el cerrajero a Bravo Murillo?</h3>
                            <p style={{ color: '#8892b0', lineHeight: 1.6, flexGrow: 1 }}>Gracias a nuestras unidades móviles en Cuatro Caminos y Estrecho, garantizamos llegadas en menos de <strong>20 minutos</strong>. Esquivamos el tráfico de Bravo Murillo para atender urgencias prioritarias de forma inmediata, 24/7.</p>
                        </div>

                        {/* Card 2 */}
                        <div style={{ background: '#0a192f', padding: '2.5rem', borderRadius: '1rem', border: '1px solid rgba(255, 215, 0, 0.1)', transition: 'transform 0.3s, box-shadow 0.3s', display: 'flex', flexDirection: 'column', gap: '1rem' }} className="hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,215,0,0.1)]">
                            <div style={{ width: '60px', height: '60px', background: 'rgba(255, 215, 0, 0.1)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFD700', marginBottom: '1rem' }}>
                                <DoorClosed size={32} />
                            </div>
                            <h3 style={{ fontSize: '1.4rem', color: '#fff', margin: 0 }}>¿Apertura sin daños en Valdeacederas?</h3>
                            <p style={{ color: '#8892b0', lineHeight: 1.6, flexGrow: 1 }}>En el 95% de los casos de llaves olvidadas, usamos técnicas de <strong>apertura no destructiva</strong> (resbalón o ganzuado). Protegemos la integridad de su puerta y cerradura, evitando gastos innecesarios de reparación.</p>
                        </div>

                        {/* Card 3 */}
                        <div style={{ background: '#0a192f', padding: '2.5rem', borderRadius: '1rem', border: '1px solid rgba(255, 215, 0, 0.1)', transition: 'transform 0.3s, box-shadow 0.3s', display: 'flex', flexDirection: 'column', gap: '1rem' }} className="hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,215,0,0.1)]">
                            <div style={{ width: '60px', height: '60px', background: 'rgba(255, 215, 0, 0.1)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFD700', marginBottom: '1rem' }}>
                                <Euro size={32} />
                            </div>
                            <h3 style={{ fontSize: '1.4rem', color: '#fff', margin: 0 }}>¿Cuánto cuesta un cerrajero 24h?</h3>
                            <p style={{ color: '#8892b0', lineHeight: 1.6, flexGrow: 1 }}>Al ser cerrajeros puramente locales en Tetuán, ahorramos en desplazamiento. Ofrecemos <strong>presupuestos cerrados por teléfono</strong> antes de ir, garantizando precios transparentes y sin la desagradable letra pequeña.</p>
                        </div>
                    </div>

                    {/* FEATURE TEXT WITH IMAGE */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '5rem' }} className="responsive-grid">
                        <div style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', height: '500px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
                            <Image src="/images/valdeacederas_confianza.png" alt="Cerrajero experto de confianza en Tetuán" fill unoptimized style={{ objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(to top, rgba(5,12,23,1), transparent)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,215,0,0.9)', color: '#000', padding: '0.5rem 1rem', borderRadius: '2rem', width: 'fit-content', fontWeight: 'bold' }}>
                                    <ShieldCheck size={20} /> Profesionales Certificados
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <h2 style={{ fontSize: '2.2rem', color: '#fff', lineHeight: 1.2 }}>Seguridad Física Avanzada contra el <span style={{ color: '#FFD700' }}>Bumping</span></h2>
                            <p style={{ color: '#a8b2d1', fontSize: '1.1rem', lineHeight: 1.6 }}>Las antiguas <strong>cerraduras de borjas</strong>, muy comunes en Bellas Vistas, son hoy extremadamente vulnerables a la técnica <em>"magic key"</em>. El bumping sigue siendo la amenaza principal en Infanta Mercedes.</p>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <CheckCircle2 color="#FFD700" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <span style={{ color: '#d1d5db', lineHeight: 1.5 }}>Recomendamos firmemente la <strong>conversión a perfil europeo</strong> con bombines certificados antibumping, antitaladro y antiextracción.</span>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <CheckCircle2 color="#FFD700" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <span style={{ color: '#d1d5db', lineHeight: 1.5 }}>Aconsejamos sumar un <strong>escudo acorazado</strong> para evitar que al ladrón le resulte fácil extraer el cilindro mecánicamente en Castillejos.</span>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <CheckCircle2 color="#FFD700" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <span style={{ color: '#d1d5db', lineHeight: 1.5 }}>Realizamos <strong>estudios de seguridad gratuitos</strong> a domicilio para auditar el nivel de resistencia del herraje actual de su puerta.</span>
                                </li>
                            </ul>

                            <Link href="/cerraduras-antibumping-tetuan" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#FFD700', fontWeight: 'bold', textDecoration: 'none', borderBottom: '2px solid transparent', paddingBottom: '2px', width: 'fit-content' }} className="hover:border-yellow-400 transition-colors">
                                Ver Cerraduras de Alta Seguridad <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* MORE QUESTIONS GRID */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '1rem', borderLeft: '4px solid #FFD700' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <Lock color="#FFD700" size={24} />
                                <h3 style={{ fontSize: '1.2rem', color: '#fff', margin: 0 }}>¿Trasteros seguros en Almansa?</h3>
                            </div>
                            <p style={{ color: '#a8b2d1', lineHeight: 1.6, margin: 0 }}>Reforzamos puertas de chapa débil instalando cerrojos suplementarios de varios puntos de anclaje. Una disuasión visual y física contundente contra hurtos.</p>
                        </div>

                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '1rem', borderLeft: '4px solid #FFD700' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <Smartphone color="#FFD700" size={24} />
                                <h3 style={{ fontSize: '1.2rem', color: '#fff', margin: 0 }}>¿Cerraduras inteligentes en Cuzco?</h3>
                            </div>
                            <p style={{ color: '#a8b2d1', lineHeight: 1.6, margin: 0 }}>Instalamos Smart Locks invisibles, ideales tech-lovers en lofts de AZCA. Permiten abrir con el móvil y son indetectables desde el rellano exterior.</p>
                        </div>

                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '1rem', borderLeft: '4px solid #FFD700' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <Wrench color="#FFD700" size={24} />
                                <h3 style={{ fontSize: '1.2rem', color: '#fff', margin: 0 }}>¿Llave atascada en San Germán?</h3>
                            </div>
                            <p style={{ color: '#a8b2d1', lineHeight: 1.6, margin: 0 }}>No fuerce el mecanismo. Realizamos mantenimiento preventivo con spray de grafito para evitar bloqueos nocturnos o roturas de llave dentro del bombín.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERLINKING SEO SECTION */}
            <section style={{ padding: '5rem 0', background: '#0a192f' }}>
                <div className="container fade-in-up" style={{ maxWidth: '900px' }}>
                    <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem', textAlign: 'center' }}>Más Información sobre <span style={{ color: '#FFD700' }}>Nuestros Servicios</span></h2>
                    <p style={{ color: '#a8b2d1', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                        Si tras consultar estas preguntas frecuentes necesita una intervención inmediata, nuestro equipo de <Link href="/cerrajeros-urgentes-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>cerrajeros urgentes en Tetuán</Link> responde las 24 horas, los 365 días del año. Disponemos de un <strong>servicio de cerrajería ininterrumpido</strong> que cubre desde la <Link href="/apertura-puertas-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>apertura de puertas</Link> hasta el <Link href="/cambio-cerraduras-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>cambio completo de cerraduras</Link> en cualquier barrio del distrito.
                    </p>
                    <p style={{ color: '#a8b2d1', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                        Para quienes buscan mejorar la <em>seguridad preventiva de su hogar</em>, realizamos la <Link href="/instalacion-cerraduras-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>instalación de cerraduras de última generación</Link> y el <Link href="/cambio-bombines-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>cambio de bombines</Link> con <strong>cilindros antibumping certificados</strong>. Consulte nuestra página de <Link href="/cerraduras-antibumping-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>cerraduras antibumping</Link> para conocer las opciones más avanzadas del mercado.
                    </p>
                    <p style={{ color: '#a8b2d1', lineHeight: 1.8, fontSize: '1.05rem' }}>
                        Cubrimos <em>todos los barrios del distrito</em>: desde <Link href="/cerrajeros-cuzco-azca" style={{ color: '#FFD700', textDecoration: 'underline' }}>Cuzco y AZCA</Link> hasta <Link href="/cerrajeros-valdeacederas-berruguete" style={{ color: '#FFD700', textDecoration: 'underline' }}>Valdeacederas y Berruguete</Link>, pasando por <Link href="/cerrajeros-plaza-castilla" style={{ color: '#FFD700', textDecoration: 'underline' }}>Plaza de Castilla</Link> y <Link href="/cerrajeros-almenara-ventilla" style={{ color: '#FFD700', textDecoration: 'underline' }}>Almenara y Ventilla</Link>. Vea todas las <Link href="/zonas-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>zonas de cobertura en Tetuán</Link> y compruebe que siempre hay un cerrajero cerca de usted.
                    </p>
                </div>
            </section>

            {/* AEO ACCORDION SECTION */}
            <section id="respuestas-rapidas" className="faq-section fade-in-up" style={{ padding: '6rem 0', background: '#050c17' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ color: '#FFD700', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Dudas Frecuentes</span>
                        <h2 style={{ fontSize: '2.5rem', color: '#fff', marginTop: '0.5rem' }}>Resumen Rápido (FAQ)</h2>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto', background: '#0a192f', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(255, 215, 0, 0.1)' }}>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* FINAL CTA WITH BACKGROUND IMAGE */}
            <section className="cta-final fade-in-up" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(rgba(10, 25, 47, 0.8), rgba(5, 12, 23, 1)), url("/images/almenara_operativa.png")', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
                    <ShieldCheck size={48} color="#FFD700" style={{ margin: '0 auto 1.5rem auto' }} />
                    <h2 style={{ fontSize: '3rem', color: '#fff', marginBottom: '1.5rem', fontWeight: 800 }}>¿Aún te quedan dudas?</h2>
                    <p style={{ marginBottom: '2.5rem', fontSize: '1.25rem', color: '#e2e8f0', lineHeight: 1.6 }}>
                        No dejes la seguridad al azar. Llámanos ahora mismo y uno de nuestros expertos cerrajeros en Tetuán te asesorará personalmente, sin compromiso. Resuelve el problema hoy.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="tel:644936742" className="btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.2rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)' }}>
                            <PhoneCall size={24} /> Llamar al 644 936 742
                        </a>
                        <Link href="/contacto-tetuan" style={{ padding: '1.2rem 2.5rem', fontSize: '1.2rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'transparent', color: '#fff', border: '2px solid #FFD700', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 600 }} className="hover:bg-yellow-400 hover:text-black transition-all">
                            Formulario de Contacto
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
