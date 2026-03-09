"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Header.css';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`universal-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                {/* Logo Area */}
                <Link href="/" className="logo-group">
                    <div className="logo-icon-wrapper" style={{ padding: 0, overflow: 'hidden', border: 'none', background: 'transparent' }}>
                        <Image
                            src="/images/custom_logo.png"
                            alt="Logo Cerrajeros Tetuán"
                            width={40}
                            height={40}
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>
                    <div className="logo-text">
                        <span className="logo-title">CERRAJEROS</span>
                        <span className="logo-subtitle">Tetuán</span>
                    </div>
                </Link>

                {/* Central Navigation */}
                <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
                    <Link href="/" className="nav-link">Inicio</Link>

                    <div className="dropdown">
                        <button className="nav-link flex-center gap-1 dropdown-trigger">
                            Servicios
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </button>
                        <div className="dropdown-menu">
                            <div className="dropdown-grid">
                                <Link href="/apertura-puertas-tetuan" className="dropdown-item">Apertura de Puertas</Link>
                                <Link href="/cambio-cerraduras-tetuan" className="dropdown-item">Cambio de Cerraduras</Link>
                                <Link href="/cambio-bombines-tetuan" className="dropdown-item">Cambio de Bombines</Link>
                                <Link href="/instalacion-cerraduras-tetuan" className="dropdown-item">Instalación de Cerraduras</Link>
                                <Link href="/reparacion-cerraduras-tetuan" className="dropdown-item">Reparación de Cerraduras</Link>
                                <Link href="/apertura-coches-tetuan" className="dropdown-item">Apertura de Coches</Link>
                                <Link href="/apertura-cajas-fuertes-tetuan" className="dropdown-item">Apertura de Cajas Fuertes</Link>
                                <Link href="/persianas-tetuan" className="dropdown-item">Persianas Metálicas</Link>
                                <Link href="/cerraduras-antibumping-tetuan" className="dropdown-item">Cerraduras Antibumping</Link>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown">
                        <button className="nav-link flex-center gap-1 dropdown-trigger">
                            Zonas
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </button>
                        <div className="dropdown-menu zonas-menu">
                            <div className="dropdown-grid single-col">
                                <Link href="/cerrajeros-bravo-murillo-estrecho" className="dropdown-item">Bravo Murillo</Link>
                                <Link href="/cerrajeros-plaza-castilla" className="dropdown-item">Plaza de Castilla</Link>
                                <Link href="/cerrajeros-cuzco-azca" className="dropdown-item">Cuzco / AZCA</Link>
                                <Link href="/cerrajeros-almenara-ventilla" className="dropdown-item">Almenara / Ventilla</Link>
                                <Link href="/cerrajeros-valdeacederas-berruguete" className="dropdown-item">Valdeacederas / Berruguete</Link>
                                <Link href="/cerrajeros-bellas-vistas-francos-rodriguez" className="dropdown-item">Bellas Vistas / F. Rodríguez</Link>
                                <Link href="/zonas-tetuan" className="dropdown-footer-link">Ver todas las zonas →</Link>
                            </div>
                        </div>
                    </div>

                    <Link href="/cerrajeros-urgentes-tetuan" className="nav-link">Urgencias</Link>
                    <Link href="/preguntas-frecuentes-tetuan" className="nav-link">FAQ</Link>
                    <Link href="/blog" className="nav-link">Blog</Link>
                </nav>

                {/* Right CTA Area */}
                <div className="header-actions">
                    <a href="tel:644936742" className="phone-link flex-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#94a3b8' }}>
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <span style={{ fontSize: '1rem', fontWeight: 500, color: '#e2e8f0' }}>644 936 742</span>
                    </a>
                    <Link href="/contacto-tetuan" className="btn-contact">Contacto</Link>
                    <Link href="#diagnostico" className="btn-diagnostic">Diagnóstico Rápido</Link>
                </div>

                <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Abrir menú">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 5h16"></path>
                        <path d="M4 12h16"></path>
                        <path d="M4 19h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
}
