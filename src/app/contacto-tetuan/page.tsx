import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import FAQAccordion from '../../components/FAQAccordion';
import '../Home.css';

export const metadata: Metadata = {
    title: 'Contacto Cerrajeros Tetuán | Presupuesto y Urgencias 24h',
    description: 'Contacta con Cerrajeros Tetuán. Asistencia inmediata 24 horas. Llama gratis o solicita un estudio de seguridad. Precios transparentes y sin compromiso.',
    keywords: 'contacto cerrajeros tetuan, telefono cerrajero tetuan, llamar cerrajero',
    alternates: {
        canonical: 'https://www.tetuancerrajeros.com/contacto-tetuan',
    },
    openGraph: {
        title: 'Contacto Cerrajeros Tetuán | Presupuesto y Urgencias 24h',
        description: 'Contacta con Cerrajeros Tetuán. Asistencia inmediata 24 horas. Llama gratis o solicita un estudio de seguridad. Precios transparentes y sin compromiso.',
        url: 'https://www.tetuancerrajeros.com/contacto-tetuan',
        images: [{ url: 'https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contacto Cerrajeros Tetuán | Presupuesto y Urgencias 24h',
        description: 'Contacta con Cerrajeros Tetuán. Asistencia inmediata 24 horas. Llama gratis o solicita un estudio de seguridad. Precios transparentes y sin compromiso.',
        images: ['https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png'],
    }
};

export default function Contacto() {
    const faqs = [
        {
            question: "¿Tiene algún coste llamar para pedir presupuesto?",
            answer: "No, en absoluto. Las consultas telefónicas para explicarnos su problema o solicitarnos una estimación de precio por cambiar una cerradura o instalar un cerrojo son totalmente gratuitas y sin ningún tipo de compromiso."
        },
        {
            question: "¿Cómo funciona el Diagnóstico Rápido por WhatsApp?",
            answer: "Es muy sencillo: nos envía un par de fotografías nítidas de su puerta (por dentro y por fuera), así como del canto de la cerradura. Nuestros técnicos evaluarán visualmente la marca, el modelo y el nivel de seguridad actual, para poder darle un presupuesto cerrado mucho más preciso y sin sorpresas."
        },
        {
            question: "¿Emiten factura oficial de todos sus trabajos?",
            answer: "Siempre. Somos una empresa legalmente constituida. Entregamos factura desglosada con su correspondiente IVA, la cual es válida como justificante para reclamaciones de coberturas a su compañía de seguros del hogar."
        },
        {
            question: "¿Aceptan pagos con tarjeta o Bizum in situ?",
            answer: "Sí. Para su total comodidad, y más a altas horas de la madrugada donde no es seguro buscar un cajero automático, todos nuestros técnicos llevan datáfono TPV físico para pagar con tarjeta de crédito/débito o contactless, y por supuesto aceptamos pagos instantáneos por Bizum o dinero en efectivo."
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
            "name": "Contacto",
            "item": "https://www.cerrajeros-tetuan.es/contacto-tetuan"
        }]
    };

    return (
        <main className="subpage-layout">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            {/* HERO SECTION PREMIUM */}
            <section className="hero-section" style={{ minHeight: '50vh', padding: '10rem 0 4rem' }}>
                <div className="hero-background" style={{
                    backgroundImage: "linear-gradient(rgba(3, 11, 20, 0.8), rgba(3, 11, 20, 0.95)), url('/images/contacto_hero_nuevo_sin_tlf_1772624953171.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0, zIndex: 1
                }}></div>
                <div className="hero-content container fade-in-up visible" style={{ textAlign: 'center' }}>
                    <div className="availability-badge" style={{ justifyContent: 'center', margin: '0 auto 2rem' }}>
                        <span className="availability-dot"></span>
                        Centralita Operativa en Tetuán
                    </div>
                    <h1>Contacta con Nosotros</h1>
                    <p className="hero-subtitle">Tu seguridad no puede esperar a mañana. Elige el canal que te resulte más cómodo. Habla directamente con el técnico de guardia que acudirá a tu domicilio.</p>
                </div>
            </section>

            {/* BREADCRUMBS */}
            <div className="breadcrumbs" style={{ background: '#0a192f', borderBottom: '1px solid #1e3a5f' }}>
                <div className="container" style={{ padding: '1rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                    <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link> <span style={{ margin: '0 0.5rem' }}>/</span> <span style={{ color: '#FFD700' }}>Contacto</span>
                </div>
            </div>

            {/* CONTACT CARDS GRID */}
            <section style={{ background: '#030b14', padding: '4rem 0', color: '#e2e8f0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                        {/* PHONE CARD (URGENCIES) */}
                        <div style={{ background: '#0a192f', padding: '3rem 2rem', borderRadius: '1rem', border: '1px solid #1e3a5f', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} className="hover-lift">
                            <div style={{ background: 'rgba(220, 38, 38, 0.1)', border: '1px solid rgba(220, 38, 38, 0.3)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem', color: '#dc2626' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Llamada de Urgencia</h2>
                            <p style={{ color: '#94a3b8', marginBottom: '2rem', lineHeight: '1.6' }}>Atención inmediata 24/7. Trato directo con el especialista para aperturas de puertas y bloqueos severos.</p>
                            <a href="tel:644936742" className="btn-primary" style={{ background: '#dc2626', borderColor: '#dc2626', width: '100%', padding: '1rem' }}>Llamar al 644 936 742</a>
                        </div>

                        {/* WHATSAPP CARD (DIAGNOSTIC) */}
                        <div style={{ background: '#0a192f', padding: '3rem 2rem', borderRadius: '1rem', border: '1px solid #1e3a5f', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} className="hover-lift">
                            <div style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem', color: '#22c55e' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
                            </div>
                            <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Diagnóstico Visual</h2>
                            <p style={{ color: '#94a3b8', marginBottom: '2rem', lineHeight: '1.6' }}>Envíanos fotos de tu puerta para un presupuesto de mejora de seguridad antibumping extremadamente preciso.</p>
                            {/* Dummy whatsapp link */}
                            <a href="https://wa.me/34644936742?text=Hola,%20necesito%20una%20consulta%20de%20cerrajería." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: '#22c55e', borderColor: '#22c55e', width: '100%', padding: '1rem', color: '#fff' }}>Abrir WhatsApp</a>
                        </div>

                        {/* EMAIL CARD (CORPORATE) */}
                        <div style={{ background: '#0a192f', padding: '3rem 2rem', borderRadius: '1rem', border: '1px solid #1e3a5f', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} className="hover-lift">
                            <div style={{ background: 'rgba(255, 215, 0, 0.1)', border: '1px solid rgba(255, 215, 0, 0.3)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem', color: '#FFD700' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                            </div>
                            <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Soporte Administrativo</h2>
                            <p style={{ color: '#94a3b8', marginBottom: '2rem', lineHeight: '1.6' }}>Reservado para envío de planos, documentos periciales, acuerdos con administradores de fincas corporativos.</p>
                            <a href="mailto:info@cerrajeros-tetuan.es" className="btn-secondary" style={{ width: '100%', padding: '1rem' }}>info@cerrajeros-tetuan.es</a>
                        </div>

                    </div>
                </div>
            </section>

            {/* PREGUNTAS FRECUENTES BLOCK */}
            <section className="faq-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Preguntas sobre Contratación y Pagos</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

        </main>
    );
}
