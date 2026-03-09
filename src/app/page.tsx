import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FAQAccordion from '../components/FAQAccordion';
import './Home.css';

export const metadata: Metadata = {
    title: 'Cerrajeros Tetuán | Servicio 24h Urgente ☎ 644 936 742',
    description: 'Encuentra información útil y legal sobre nuestros servicios profesionales de cerrajería en Tetuán.',
    keywords: 'cerrajería tetuán, seguridad madrid, cerrajero 24h',
    alternates: {
        canonical: 'https://www.cerrajerostetuan.com',
    },
    openGraph: {
        title: 'Cerrajeros Tetuán | Servicio 24h Urgente ☎ 644 936 742',
        description: 'Información vital de seguridad para la zona de Tetuán (Madrid).',
        url: 'https://www.cerrajerostetuan.com',
        images: [{ url: 'https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cerrajeros Tetuán | Servicio 24h Urgente ☎ 644 936 742',
        description: 'Información vital de seguridad residencial.',
        images: ['https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png'],
    }
};

export default function Home() {
  const faqs = [
    { question: "¿Cuánto tarda un cerrajero en llegar a Tetuán?", answer: "Nuestro tiempo medio de llegada es de 15 a 20 minutos..." },
    { question: "¿Qué servicios urgentes ofrecen?", answer: "Ofrecemos apertura de puertas sin rotura, cambio de bombines..." },
    { question: "¿Es caro contratar un cerrajero de urgencia?", answer: "No. Al ser cerrajeros locales, ahorramos en costes de desplazamiento..." },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg">
          <Image src="/images/hero_urgentes_1772538687217.png" alt="Fondo Cerrajeros Tetuán" fill style={{ objectFit: 'cover' }} priority />
          <div className="hero-overlay"></div>
        </div>

        <div className="container hero-content flex-col flex-center animate-fade-in">
          <div className="availability-badge">
            <span className="availability-dot"></span>
            Disponibilidad inmediata en Tetuán
          </div>

          <h1 className="hero-title">
            Cerrajeros en <span className="text-gradient-gold">Tetuán</span><br />
            Tu Seguridad 24 Horas
          </h1>

          <p className="hero-subtitle animate-slide-up">
            Servicio profesional en el distrito judicial de Tetuán. Llegamos en menos de 20 minutos a cualquier punto. Aperturas sin rotura y máxima confianza.
          </p>

          <div className="hero-cta-group animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a href="tel:644936742" className="btn-primary hero-btn-main">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Llamar Urgencias 644 936 742
            </a>
            <Link href="#diagnostico" className="btn-outline hero-btn-alt">
              Diagnóstico Online
            </Link>
          </div>

          <div className="hero-trust-indicators animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="trust-indicator">
              <strong>+12k</strong>
              <span>Aperturas</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-indicator">
              <strong>&lt;20m</strong>
              <span>Llegada</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-indicator">
              <strong>4.9/5</strong>
              <span>Valoraciones</span>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso (Como Trabajamos) */}
      <section className="process-section">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="section-title">Así trabajamos en Tetuán</h2>
            <p className="section-desc">Un proceso claro, transparente y rápido pensado para tu tranquilidad.</p>
          </div>

          <div className="grid-3">
            <div className="process-card card-hover-effect">
              <div className="process-number">01</div>
              <h3 className="process-title">Diagnóstico Inmediato</h3>
              <p className="process-text">Analizamos tu caso por teléfono para llevar la herramienta exacta y el recambio adecuado en la furgoneta taller.</p>
            </div>
            <div className="process-card card-hover-effect">
              <div className="process-number">02</div>
              <h3 className="process-title">Presupuesto Cerrado</h3>
              <p className="process-text">Te damos un precio claro y definitivo antes de realizar cualquier intervención. Honestidad sin sorpresas de última hora.</p>
            </div>
            <div className="process-card card-hover-effect">
              <div className="process-number">03</div>
              <h3 className="process-title">Solución Certificada</h3>
              <p className="process-text">Nuestros técnicos homologados abren, reparan o instalan con precisión quirúrgica cuidando la estética de tu puerta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Split Grids (Urgencias Nocturnas) */}
      <section className="about-section" style={{ background: '#030b14', padding: '6rem 0' }}>
        <div className="container about-grid fade-in-up">
          <div className="about-image-wrapper">
            <Image src="/images/custom_tech.png" alt="Cerrajero atendiendo urgencia en Tetuán" fill className="about-image" />
          </div>
          <div>
            <h2 className="section-title">Urgencias Nocturnas y Asistencia Integral</h2>
            <h3 style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '1rem' }}>Protección tras incidentes en Estrecho y Remonta</h3>
            <p className="section-desc" style={{ marginBottom: '1.5rem', marginLeft: 0 }}>Si has sido víctima de un robo o intento de intrusión forzada, la apertura de puertas no es suficiente. Actuamos en todo el corredor de Lope de Haro instalando cilindros antibumping certificados inmediatamente para blindar tu puerta.</p>

            <div style={{ padding: '2rem', background: 'rgba(26, 42, 60, 0.4)', borderRadius: '1rem', border: '1px solid #1e3a5f', marginBottom: '2rem' }}>
              <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>Comercios en Calle Orense</h4>
              <p style={{ color: '#94a3b8', margin: 0 }}>Reparación express de persianas enrollables atascadas de apertura comercial para que no pierdas ventas bajo ninguna circunstancia a primera hora.</p>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <li style={{ color: '#94a3b8' }}>✔ Revisión Comunidades (Sor Ángela)</li>
              <li style={{ color: '#94a3b8' }}>✔ Cerrojos Buzones/Trasteros</li>
              <li style={{ color: '#94a3b8' }}>✔ Cierres fáciles Mayores (Ventilla)</li>
              <li style={{ color: '#94a3b8' }}>✔ Auditoría Preventiva Gratuita</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-section" style={{ background: '#0a192f', padding: '6rem 0' }}>
        <div className="container about-grid reverse fade-in-up">
          <div>
            <div className="badge-local" style={{ marginBottom: '1rem' }}>Cerrajeros Locales</div>
            <h2 className="section-title">¿Te has quedado fuera de casa? <span className="text-gradient-gold">Rapidez real.</span></h2>
            <p className="section-desc" style={{ marginBottom: '1.5rem', marginLeft: 0 }}>
              Si vives cerca de la Glorieta de Cuatro Caminos o estás tomando algo por la zona de Azca y al volver descubres que las llaves se han quedado puestas por dentro, la espera desespera.
            </p>
            <p className="section-desc" style={{ marginBottom: '1.5rem', marginLeft: 0 }}>
              Somos cerrajeros en Tetuán y patrullamos las calles del barrio continuamente. Esto nos permite ofrecer una respuesta inmediata real, no promesas vacías.
            </p>

            <div className="premium-list" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="list-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span style={{ color: '#e2e8f0', fontSize: '1.1rem' }}>Aperturas limpias sin dañar la cerradura en el 95% de casos.</span>
              </div>
              <div className="list-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span style={{ color: '#e2e8f0', fontSize: '1.1rem' }}>Técnicos debidamente uniformados e identificados.</span>
              </div>
              <div className="list-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span style={{ color: '#e2e8f0', fontSize: '1.1rem' }}>Materiales de grado 6 de seguridad europea.</span>
              </div>
            </div>
          </div>
          <div className="about-image-wrapper">
            <Image src="/images/hero_estetoscopio_1772539273420.png" alt="Técnico de seguridad residencial" fill className="about-image" />
          </div>
        </div>
      </section>

      {/* Zonas Masonry/Grid */}
      <section className="zones-section" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="container">
          <div className="section-head text-center">
            <h2 className="section-title">Zonas de Cobertura</h2>
            <p className="section-desc">Tenemos unidades asignadas en los principales barrios para reaccionar al instante.</p>
          </div>

          <div className="zones-grid">
            <Link href="/cerrajeros-bravo-murillo-estrecho" className="zone-card">
              <Image src="/images/bravo_murillo_zona.png" alt="Bravo Murillo / Estrecho" fill style={{ objectFit: 'cover' }} />
              <div className="zone-overlay">
                <h3 className="zone-title">Bravo Murillo / Estrecho</h3>
                <p style={{ color: '#d1d5db', fontSize: '0.9rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>Asistencia inmediata para comercios locales y residentes del eje central de Tetuán.</p>
                <div className="zone-action">Leer Más &rarr;</div>
              </div>
            </Link>

            <Link href="/cerrajeros-plaza-castilla" className="zone-card">
              <Image src="/images/plaza_castilla_zona.png" alt="Plaza de Castilla" fill style={{ objectFit: 'cover' }} />
              <div className="zone-overlay">
                <h3 className="zone-title">Plaza de Castilla</h3>
                <p style={{ color: '#d1d5db', fontSize: '0.9rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>Despliegue rápido motorizado para toda la zona norte y área de influencia comercial.</p>
                <div className="zone-action">Leer Más &rarr;</div>
              </div>
            </Link>

            <Link href="/cerrajeros-cuzco-azca" className="zone-card">
              <Image src="/images/cuzco_azca_zona.png" alt="Cuzco / AZCA" fill style={{ objectFit: 'cover' }} />
              <div className="zone-overlay">
                <h3 className="zone-title">Cuzco / AZCA</h3>
                <p style={{ color: '#d1d5db', fontSize: '0.9rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>Seguridad corporativa especializada para oficinas, sedes bancarias y edificios.</p>
                <div className="zone-action">Leer Más &rarr;</div>
              </div>
            </Link>

            <Link href="/cerrajeros-almenara-ventilla" className="zone-card">
              <Image src="/images/almenara_ventilla_zona.png" alt="Almenara / Ventilla" fill style={{ objectFit: 'cover' }} />
              <div className="zone-overlay">
                <h3 className="zone-title">Almenara / Ventilla</h3>
                <p style={{ color: '#d1d5db', fontSize: '0.9rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>Cerrajería residencial vecinal, enfocada en la rapidez y cercanía.</p>
                <div className="zone-action">Leer Más &rarr;</div>
              </div>
            </Link>

            <Link href="/cerrajeros-valdeacederas-berruguete" className="zone-card">
              <Image src="/images/valdeacederas_berruguete_zona.png" alt="Valdeacederas / Berruguete" fill style={{ objectFit: 'cover' }} />
              <div className="zone-overlay">
                <h3 className="zone-title">Valdeacederas / Berruguete</h3>
                <p style={{ color: '#d1d5db', fontSize: '0.9rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>Seguridad de alta resistencia y refuerzo de accesos en el barrio.</p>
                <div className="zone-action">Leer Más &rarr;</div>
              </div>
            </Link>

            <Link href="/cerrajeros-bellas-vistas-francos-rodriguez" className="zone-card">
              <Image src="/images/bellas_vistas_zona.png" alt="Bellas Vistas / Francos Rodríguez" fill style={{ objectFit: 'cover' }} />
              <div className="zone-overlay">
                <h3 className="zone-title">Bellas Vistas / Francos Rodríguez</h3>
                <p style={{ color: '#d1d5db', fontSize: '0.9rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>Asistencia 24h a pisos compartidos y domicilios de la zona sur.</p>
                <div className="zone-action">Leer Más &rarr;</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="services-section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Nuestros Servicios Premium</h2>
            <p className="section-desc">Cerrajería técnica especializada para particulares y comercios.</p>
          </div>

          <div className="services-grid-6">
            <Link href="/apertura-puertas-tetuan" className="service-card glass-panel card-hover-effect">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 18v3h20v-3"></path><path d="M4 18V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13"></path><path d="M12 11v2"></path></svg>
              </div>
              <h3 className="service-card-title">Apertura de Puertas</h3>
              <p className="service-card-desc">Técnicas no destructivas para puertas de madera, acorazadas o de seguridad.</p>
              <span className="service-card-link">Saber más &rarr;</span>
            </Link>

            <Link href="/cambio-bombines-tetuan" className="service-card glass-panel card-hover-effect">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="16" r="1"></circle><rect x="3" y="10" width="18" height="12" rx="2"></rect><path d="M7 10V7a5 5 0 0 1 10 0v3"></path></svg>
              </div>
              <h3 className="service-card-title">Bombines Alta Seguridad</h3>
              <p className="service-card-desc">Instalamos cilindros antibumping, antiganzúa y antitaladro.</p>
              <span className="service-card-link">Saber más &rarr;</span>
            </Link>

            <Link href="/apertura-coches-tetuan" className="service-card glass-panel card-hover-effect">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
              </div>
              <h3 className="service-card-title">Apertura de Coches</h3>
              <p className="service-card-desc">Herramientas Lishi para una apertura limpia sin dañar la chapa.</p>
              <span className="service-card-link">Saber más &rarr;</span>
            </Link>

            <Link href="/apertura-cajas-fuertes-tetuan" className="service-card glass-panel card-hover-effect">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2"></rect><circle cx="12" cy="12" r="3"></circle><path d="M12 15v4"></path></svg>
              </div>
              <h3 className="service-card-title">Cajas Fuertes</h3>
              <p className="service-card-desc">Técnicos especialistas en borjas mecánicas y electrónicas.</p>
              <span className="service-card-link">Saber más &rarr;</span>
            </Link>

            <Link href="/persianas-tetuan" className="service-card glass-panel card-hover-effect">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18"></path><path d="M3 8h18"></path><path d="M3 13h18"></path><path d="M3 18h18"></path><path d="M8 8v13"></path><path d="M16 8v13"></path></svg>
              </div>
              <h3 className="service-card-title">Cierres y Persianas</h3>
              <p className="service-card-desc">Reparación y motorización de cierres metálicos de negocios.</p>
              <span className="service-card-link">Saber más &rarr;</span>
            </Link>

            <Link href="/instalacion-cerraduras-tetuan" className="service-card glass-panel card-hover-effect">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
              </div>
              <h3 className="service-card-title">Cerrojos y Escudos</h3>
              <p className="service-card-desc">Instalación de cerrojos FAC y escudos acorazados disuasorios.</p>
              <span className="service-card-link">Saber más &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Diagnostico Form - Visual Layout matching Boadilla */}
      <section id="diagnostico" className="diagnostic-section">
        <div className="container">
          <div className="diagnostic-wrapper glass-panel">
            <div className="diagnostic-info">
              <h2 className="diagnostic-title">Solicita Asistencia Rápida</h2>
              <p className="diagnostic-desc">
                Completa este formulario o llámanos directamente al <strong>644 936 742</strong> para una respuesta en el acto. Al estar en la zona de Tetuán, somos tu mejor opción.
              </p>
              <div className="diagnostic-steps">
                <div className="step-item active">
                  <div className="step-dot"></div>
                  <span>1. Nos llamas o escribes</span>
                </div>
                <div className="step-item">
                  <div className="step-dot line"></div>
                  <span>2. Te damos presupuesto</span>
                </div>
                <div className="step-item">
                  <div className="step-dot line"></div>
                  <span>3. Llegamos en &lt; 20 min</span>
                </div>
              </div>
            </div>

            <div className="diagnostic-form-box">
              <form className="minimal-form">
                <div className="form-group">
                  <label>Tu Nombre</label>
                  <input type="text" placeholder="Ej. Javier" className="form-input" />
                </div>
                <div className="form-group">
                  <label>Teléfono de Contacto</label>
                  <input type="tel" placeholder="600 000 000" className="form-input" />
                </div>
                <div className="form-group">
                  <label>¿Qué ocurre? (Opcional)</label>
                  <select className="form-input">
                    <option>Me he dejado las llaves dentro</option>
                    <option>He perdido las llaves</option>
                    <option>Quiero cambiar la cerradura</option>
                    <option>La persiana/cierre no funciona</option>
                    <option>Otro motivo</option>
                  </select>
                </div>
                <button type="button" className="btn-primary w-full" style={{ height: '3.5rem', width: '100%', marginTop: '1rem' }}>
                  Solicitar Presupuesto Urgente
                </button>
                <p className="form-secure">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                  Tus datos están protegidos.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section" style={{ padding: '4rem 0', backgroundColor: 'var(--color-bg-base)' }}>
        <div className="container">
          <div className="section-head text-center" style={{ marginBottom: '2rem' }}>
            <h2 className="section-title">Área de Cobertura</h2>
            <p className="section-desc">Desplegados estratégicamente por todo el distrito de Tetuán para llegar en menos de 20 minutos.</p>
          </div>
          <div className="map-container" style={{ borderRadius: '1rem', overflow: 'hidden', height: '400px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24285.495034871987!2d-3.715367319520448!3d40.46083584856417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229aa6ac428f5%3A0xcbbb01db8d4b35e2!2zVGV0dcOhbiwgTWFkcmlk!5e0!3m2!1ses!2ses!4v1709405200000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>

      {/* FAQ Standard */}
      <section className="faq-wrapper" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '3rem' }}>Preguntas Frecuentes</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

    </main>
  );
}
