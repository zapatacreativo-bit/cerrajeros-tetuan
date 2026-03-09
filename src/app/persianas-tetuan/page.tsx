import { Metadata } from 'next';
import Link from 'next/link';
import { Wrench } from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import '../Home.css';

export const metadata: Metadata = {
    title: 'Persianas en Tetuán | Instalación y Reparación ☎ 644 936 742',
    description: 'Reparación, instalación y motorización de persianas en Tetuán. Persianas térmicas y cierres metálicos para comercios. Llama al 644 936 742.',
    keywords: 'arreglar persiana tetuan, motorizacion cierres, reparacion persianas tetuan',
    alternates: {
        canonical: 'https://www.cerrajerostetuan.com/persianas-tetuan',
    },
    openGraph: {
        title: 'Persianas en Tetuán | Instalación y Reparación ☎ 644 936 742',
        description: 'Reparación, instalación y motorización de persianas en Tetuán. Persianas térmicas y cierres metálicos para comercios. Llama al 644 936 742.',
        url: 'https://www.cerrajerostetuan.com/persianas-tetuan',
        images: [{ url: 'https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Persianas en Tetuán | Instalación y Reparación ☎ 644 936 742',
        description: 'Reparación, instalación y motorización de persianas en Tetuán. Persianas térmicas y cierres metálicos para comercios. Llama al 644 936 742.',
        images: ['https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png'],
    }
};

export default function Persianas() {
    const faqs = [
        {
            question: "¿Cuánto cuesta arreglar una persiana atascada en el barrio de Tetuán?",
            answer: "El precio de reparar persianas en Tetuán depende de la avería, pero ofrecemos tarifas altamente competitivas. En nuestra empresa proporcionamos presupuestos cerrados sin compromiso. Al ser técnicos locales que operamos cerca de Bravo Murillo, ahorramos en costes de desplazamiento, lo que nos permite ofrecer las tarifas más ajustadas del distrito de Tetuán este 2026."
        },
        {
            question: "¿Cuánto tiempo tardan en reparar un cierre comercial en la zona de Cuatro Caminos?",
            answer: "Para urgencias en comercios de Cuatro Caminos o Estrecho, nuestro tiempo de respuesta es de menos de 20 minutos. Entendemos que un cierre bloqueado impide la apertura de su negocio, por lo que priorizamos la reparación de persianas en Tetuán comerciales para que pueda retomar su actividad lo antes posible. La mayoría de los fallos de motor se solucionan en la misma visita."
        },
        {
            question: "¿Es mejor instalar persianas de aluminio o de PVC en un piso de Tetuán?",
            answer: "Para las viviendas en Tetuán, especialmente en calles ruidosas como la Avenida de Asturias, recomendamos la instalación de persianas en Tetuán de aluminio térmico. Aunque el PVC es más económico, el aluminio ofrece una durabilidad muy superior, mejor aislamiento acústico y no se deforma con el sol intenso de Madrid, siendo la inversión más inteligente para este 2026."
        },
        {
            question: "¿Se puede motorizar una persiana antigua en una casa de Berruguete?",
            answer: "Sí, es una de nuestras especialidades. Podemos realizar la motorización de persianas en Tetuán en casi cualquier modelo antiguo de los edificios de Berruguete o Valdeacederas. Solo necesitamos comprobar que el eje sea el adecuado. Es un proceso rápido que no requiere obras y que mejora drásticamente la comodidad de su hogar, permitiéndole subir y bajar sus persianas con un mando o desde el móvil."
        },
        {
            question: "¿Ofrecen garantía en la instalación de persianas en el distrito de Tetuán?",
            answer: "Por supuesto. Todas nuestras instalaciones de persianas en Tetuán cuentan con una garantía oficial por escrito de 2 años en materiales y mano de obra. Como cerrajeros y persianistas con solera en la zona de Plaza de Castilla, nuestra prioridad es su satisfacción a largo plazo. Realizamos \"asistencia post-venta garantizada\", para que usted tenga la total tranquilidad de que su inversión está protegida."
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
            "name": "Persianas Tetuán",
            "item": "https://www.cerrajeros-tetuan.es/persianas-tetuan"
        }]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Instalación y reparación de persianas",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Cerrajeros Tetuán",
            "telephone": "644936742"
        },
        "areaServed": {
            "@type": "City",
            "name": "Tetuán, Madrid"
        },
        "description": "Reparación, instalación y motorización de persianas domésticas y comerciales en Tetuán."
    };

    return (
        <main className="subpage-layout">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            {/* HERO SECTION PREMIUM */}
            <section className="hero-section" style={{ minHeight: '60vh', padding: '10rem 0 4rem' }}>
                <div className="hero-background" style={{
                    backgroundImage: "linear-gradient(rgba(3, 11, 20, 0.8), rgba(3, 11, 20, 0.95)), url('/images/portal_berruguete_1772538873461.png')",
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
                        Domótica, Cierres y Aisles Térmicos
                    </div>
                    <h1>Persianas y Cierres en Tetuán</h1>
                    <p className="hero-subtitle">Desde una cinta rota en Castillejos hasta el motor atascado del cierre de la persiana comercial en Orense. Persianistas integrales en 2026.</p>
                </div>
            </section>

            <div className="breadcrumbs" style={{ background: '#0a192f', borderBottom: '1px solid #1e3a5f' }}>
                <div className="container" style={{ padding: '1rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                    <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link> <span style={{ margin: '0 0.5rem' }}>/</span> <Link href="/servicios-tetuan" style={{ color: '#fff', textDecoration: 'none' }}>Servicios</Link> <span style={{ margin: '0 0.5rem' }}>/</span> <span style={{ color: '#FFD700' }}>Persianistas</span>
                </div>
            </div>

            {/* INTRO SPLIT SECTION */}
            <section className="about-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container about-grid fade-in-up">
                    <div className="about-content">
                        <h2 className="section-title">El Pulso del Negocio y del Descanso</h2>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                            Cuando un cierre no sube en Bravo Murillo a las nueve de la mañana empieza a contar la pérdida comercial. La <strong>reparación urgente de persianas en Tetuán</strong> exige respuesta de choque de <em>persianistas que vivan tu urgencia</em>.
                        </p>
                        <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                            Para el ámbito residencial, en barrios con mucha historia acústica como la Avenida de Asturias, la única solución es el cambio de viejas lamas de PVC por <strong>aluminio térmico inyectado de poliuretano</strong> y la integración de <em>domótica invisible</em>.
                        </p>
                        <ul className="premium-list" style={{ listStyle: 'none', padding: 0, margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f8fafc' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                Motores Somfy de alta resistencia para ejes industriales.
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f8fafc' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                Desatascos de lamas de aluminio partidas de urgencia hogareña.
                            </li>
                        </ul>
                    </div>
                    <div className="about-image-wrapper">
                        <img src="/images/persianas_comerciales_nuevo_sin_tlf_1772625011133.png" alt="Cierre persiana" className="about-image" />
                        <div className="trust-card" style={{ bottom: '-20px', left: '-20px', background: '#0a192f', border: '1px solid #FFD700' }}>
                            <div className="trust-card-icon" style={{ background: 'rgba(255,215,0,0.1)' }}>
                                <Wrench size={24} color="#FFD700" />
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>Aluminio T.</h4>
                                <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.875rem' }}>Térmico y Acústico</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES GRID */}
            <section className="services-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Intervenciones Clásicas en Tetuán</h2>
                    <p className="section-desc" style={{ textAlign: 'center', margin: '0 auto 4rem auto' }}>Atajamos el desgaste que provocan el sol, el peso y el tráfico.</p>

                    <div className="services-grid">
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Sustitución en Valdeacederas</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Cintas deshilachadas, ejes doblados por el peso de la madera o poleas fracturadas por el sol madrileño. Cambio rápido el mismo día.</p>
                        </div>
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Domótica en Cuzco</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Transformación. Aprovechamos la persiana, vaciamos la cinta, metemos motor tubular en el eje y configuramos con Alexa o mando a distancia de pared.</p>
                        </div>
                        <div className="service-card" style={{ background: '#030b14', border: '1px solid #1e3a5f', padding: '2rem', borderRadius: '1rem', transition: 'all 0.3s' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD700' }}>Cierres Seguridad (Orense)</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Lanzas microperforadas anti-alunizaje para escaparates de tiendas de retail, permitiendo visualización con blindaje táctico SKG*** montado al carril.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ALTERNATING TEXT */}
            <section className="about-section" style={{ background: '#030b14', padding: '6rem 0' }}>
                <div className="container about-grid fade-in-up" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ position: 'relative' }}>
                        <div style={{ padding: '3rem 2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', border: '1px solid #1e3a5f', marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Vandalismo en Fachadas</h3>
                            <p style={{ color: '#94a3b8' }}>Si te han hundido el cierre perimetral, la deformación de las lamas de la persiana hace imposible levantarla y abre paso a okupas. Reparamos la chapa y reseteamos topes.</p>
                        </div>
                        <div style={{ padding: '3rem 2rem', background: 'linear-gradient(135deg, #003366, #001a33)', borderRadius: '1rem', border: '1px solid #FFD700' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>Eficiencia Térmica</h3>
                            <p style={{ color: '#fff' }}>¿La calefacción se te escapa por Sor Ángela de la Cruz? Aislamos cajones, embutimos pasacintas y sustituimos lamas crujientes con el plan Renove de ventanas interior.</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="section-title">Nadie Cuida sus Persianas</h2>
                        <h3 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>Hasta que se caen en mitad de la noche</h3>
                        <p className="section-desc" style={{ marginBottom: '1.5rem', marginLeft: 0 }}>El sonido terrible que hace tu persiana al bajar significa que se están rajando las guías. Hacer un mantenimiento preventivo a tiempo de ejes, poleas de rodamiento y engrasado cuesta muy poco tiempo y evita tener que cambiar o sustituir todo el paño entero.</p>

                        <p className="section-desc" style={{ marginBottom: '1.5rem', marginLeft: 0 }}>Además para nuestros vecinos más vulnerables de la Ventilla que no cuentan con la fuerza para subir las lamas pesadas, instalar un pequeño motor es la inyección de <em>calidad vital y autonomía</em> más directa que hay. Nuestros <Link href="/cerrajeros-urgentes-tetuan" style={{ color: '#FFD700' }}>cerrajeros urgentes en Tetuán</Link> también <strong>reparan persianas bloqueadas</strong> el mismo día.</p>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                            <a href="tel:644936742" className="btn-primary" style={{ padding: '15px 30px', background: '#dc2626', borderColor: '#dc2626' }}>Hablar con Persianista Oficial</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERLINKING SEO */}
            <section style={{ background: '#030b14', padding: '4rem 0', borderTop: '1px solid #1e3a5f' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Cerrajería Completa en Tetuán</h2>
                    <p className="section-desc" style={{ maxWidth: '850px', margin: '0 auto 1.5rem', textAlign: 'center' }}>
                        Tus <Link href="/" style={{ color: '#FFD700' }}>cerrajeros en Tetuán</Link> también son persianistas. Aprovecha para una <Link href="/reparacion-cerraduras-tetuan" style={{ color: '#FFD700' }}>reparación de cerraduras en Tetuán</Link> mientras arreglamos tu persiana, con <em>descuento de pack</em>.
                    </p>
                    <p className="section-desc" style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
                        Refuerza la seguridad del cierre con <Link href="/cerraduras-antibumping-tetuan" style={{ color: '#FFD700' }}>cerraduras antibumping</Link> de <strong>alta resistencia certificada</strong>. <Link href="/contacto-tetuan" style={{ color: '#FFD700' }}>Solicita presupuesto de persianas</Link>.
                    </p>
                </div>
            </section>

            <section className="faq-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
                <div className="container fade-in-up">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Preguntas Frecuentes: Persianas</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            <section className="cta-final" style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #001a33, #003366)', textAlign: 'center' }}>
                <div className="container fade-in-up">
                    <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem' }}>Pídenos presupuesto de reparación</h2>
                    <p style={{ color: '#d1d5db', fontSize: '1.25rem', marginBottom: '2.5rem' }}>Especialistas certificados en Tetuán. Domotización lista en el día.</p>
                    <a href="tel:644936742" className="btn-primary pulsing-btn" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem', background: '#dc2626', borderColor: '#dc2626' }}>Pedir Diagnóstico al 644 936 742</a>
                </div>
            </section>
        </main>
    );
}
