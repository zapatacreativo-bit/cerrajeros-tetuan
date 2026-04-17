import Link from 'next/link';
import Image from 'next/image';
import './Footer.css';

const services = [
    { name: "Apertura de Puertas", url: "/apertura-puertas-tetuan" },
    { name: "Cambio de Bombines", url: "/cambio-bombines-tetuan" },
    { name: "Apertura de Coche", url: "/apertura-coches-tetuan" },
    { name: "Apertura Cajas Fuertes", url: "/apertura-cajas-fuertes-tetuan" },
    { name: "Cerrajeros Urgentes", url: "/cerrajeros-urgentes-tetuan" },
    { name: "Persianas Metálicas", url: "/persianas-tetuan" }
];

const zonas = [
    { name: "Bravo Murillo", url: "/cerrajeros-bravo-murillo-estrecho" },
    { name: "Plaza Castilla", url: "/cerrajeros-plaza-castilla" },
    { name: "Cuzco / AZCA", url: "/cerrajeros-cuzco-azca" },
    { name: "Almenara", url: "/cerrajeros-almenara-ventilla" },
    { name: "Valdeacederas", url: "/cerrajeros-valdeacederas-berruguete" },
    { name: "Bellas Vistas", url: "/cerrajeros-bellas-vistas-francos-rodriguez" }
];

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="container footer-grid">

                {/* Column 1: Brand & Contact */}
                <div className="footer-col brand-col">
                    <Link href="/" className="footer-logo">
                        <div className="footer-logo-icon" style={{ padding: 0, overflow: 'hidden', border: 'none', background: 'transparent' }}>
                            <Image
                                src="/images/custom_logo.png"
                                alt="Logo Cerrajeros Tetuán"
                                width={48}
                                height={48}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <div className="footer-logo-text">
                            <span className="footer-logo-title">CERRAJEROS</span>
                            <span className="footer-logo-subtitle">Tetuán</span>
                        </div>
                    </Link>
                    <p className="footer-desc">
                        Expertos en seguridad residencial y comercial en el distrito de Tetuán. Intervención rápida 24/7 sin intermediarios.
                    </p>
                    <a href="tel:644061005" className="footer-phone">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        644 06 10 05
                    </a>
                </div>

                {/* Column 2: Services */}
                <div className="footer-col links-col">
                    <h3 className="footer-title">Servicios</h3>
                    <ul className="footer-links">
                        {services.map(s => (
                            <li key={s.url}><Link href={s.url}>{s.name}</Link></li>
                        ))}
                        <li><Link href="/blog" style={{ color: '#FFD700', marginTop: '0.5rem', display: 'inline-block' }}>📖 Blog de Seguridad</Link></li>
                    </ul>
                </div>

                {/* Column 3: Zones & Legal */}
                <div className="footer-col links-col">
                    <h3 className="footer-title">Zonas de Acción</h3>
                    <ul className="footer-links zona-links">
                        {zonas.map(z => (
                            <li key={z.name}><Link href={z.url}>{z.name}</Link></li>
                        ))}
                    </ul>
                    <h3 className="footer-title" style={{ marginTop: '1.5rem' }}>LEGAL</h3>
                    <ul className="footer-links">
                        <li><Link href="/aviso-legal">Aviso Legal</Link></li>
                        <li><Link href="/politica-de-privacidad">Política de Privacidad</Link></li>
                        <li><Link href="/politica-de-cookies">Política de Cookies</Link></li>
                        <li><Link href="/garantias">Garantías</Link></li>
                    </ul>
                </div>

                {/* Column 4: Trust / Map Placeholder */}
                <div className="footer-col trust-col">
                    <h3 className="footer-title">Garantía Tetuán</h3>
                    <div className="footer-trust-box">
                        <div className="trust-stars">★★★★★</div>
                        <p>Valoración de 4.9/5 basada en clientes reales de Cuatro Caminos, Bellas Vistas y Castillejos.</p>
                    </div>
                    {/* Boadilla Map placeholder behavior */}
                    <div className="map-placeholder">
                        <span>Tetuán, Madrid (28020)</span>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <p>&copy; {new Date().getFullYear()} Cerrajeros Tetuán. Todos los derechos reservados.</p>
                    <div className="payment-icons">
                        {/* Fake SVG Icons for payment representing Bizum, Visa, Mastercard */}
                        <div className="pay-icon bizum-badge">BIZUM</div>
                        <div className="pay-icon card-badge">TARJETA</div>
                        <div className="pay-icon cash-badge">EFECTIVO</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
