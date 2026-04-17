import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Shield, MapPin, Clock, CheckCircle } from 'lucide-react';




export const metadata: Metadata = {
    title: 'Cerrajeros Tetuán | Mi Experiencia Real Perder Llaves Plaza Castilla',
    description: 'Información legal y de seguridad de Cerrajeros Tetuán.',
    keywords: 'cerrajería tetuán, seguridad madrid, cerrajero madrid',
    alternates: {
        canonical: 'https://www.tetuancerrajeros.com/blog/mi-experiencia-real-perder-llaves-plaza-castilla',
    },
    openGraph: {
        title: 'Cerrajeros Tetuán | Mi Experiencia Real Perder Llaves Plaza Castilla',
        description: 'Información legal y de seguridad de Cerrajeros Tetuán.',
        url: 'https://www.tetuancerrajeros.com/blog/mi-experiencia-real-perder-llaves-plaza-castilla',
        images: [{ url: 'https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cerrajeros Tetuán | Mi Experiencia Real Perder Llaves Plaza Castilla',
        description: 'Información legal y de seguridad de Cerrajeros Tetuán.',
        images: ['https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png'],
    }
};

export default function BlogPost5() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-base)' }}>
            {/* HERO ARTICLE */}
            <section style={{ position: 'relative', paddingTop: '160px', paddingBottom: '6rem', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', background: 'linear-gradient(to bottom, rgba(5,12,23,0.95), rgba(3,11,20,1))', zIndex: 1 }} />

                <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '900px' }}>
                    <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#FFD700', textDecoration: 'none', marginBottom: '2rem', fontSize: '0.9rem', fontWeight: 600 }}>
                        <ArrowLeft size={16} /> Volver al Blog
                    </Link>

                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                        <span style={{ background: 'rgba(255,215,0,0.1)', color: '#FFD700', padding: '0.3rem 0.8rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', border: '1px solid rgba(255,215,0,0.3)' }}>Experiencias Reales</span>
                        <span style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', padding: '0.3rem 0.8rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 600, border: '1px solid rgba(255,255,255,0.1)' }}>Lectura: 8 min</span>
                    </div>

                    <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#fff', fontWeight: 800, lineHeight: 1.2, marginBottom: '2rem' }}>
                        Experiencia Real: Lo que Aprendí al Perder las Llaves a las 3 AM en Plaza de Castilla
                    </h1>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', color: '#94a3b8', fontSize: '0.9rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><User size={16} color="#FFD700" /> Jorge M. (Cliente Invitado)</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={16} color="#FFD700" /> 10 de Febrero, 2026</span>
                    </div>
                </div>
            </section>

            {/* CONTENT ARTICLE */}
            <section style={{ padding: '2rem 0 6rem 0', background: 'var(--color-bg-base)' }}>
                <div className="container" style={{ maxWidth: '900px' }}>

                    {/* Hero Image */}
                    <div style={{ position: 'relative', width: '100%', height: '450px', borderRadius: '1rem', marginBottom: '3rem', overflow: 'hidden', border: '1px solid rgba(255,215,0,0.2)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                        <Image src="/images/blog/blog_experiencia_hero.png" unoptimized alt="Cerrajero nocturno solucionando una pérdida de llaves en Plaza Castilla bajo la lluvia" fill style={{ objectFit: 'cover' }} priority />
                    </div>

                    <div style={{ color: '#d1d5db', fontSize: '1.15rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                        <p className="text-xl text-white font-medium mb-4" style={{ lineHeight: 1.6 }}>En nuestro apartado de "Casos Reales", hoy cedemos la palabra a Jorge, residente de Tetuán (zona norte), quien la madrugada del pasado viernes vivió en primera persona el terror que todos tememos: meter las manos en los bolsillos frente a la puerta de casa, a las 3 de la mañana en pleno febrero, y encontrar sólo el vacío.</p>

                        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1rem', borderLeft: '4px solid #3b82f6', marginBottom: '2rem', fontStyle: 'italic', fontWeight: 300 }}>
                            <p style={{ margin: 0 }}>«Todo empezó volviendo de una cena de empresa. Me bajé del taxi en Mateo Inurria, el frío me cortaba la cara y estaba deseando llegar a la cama. Llego al patio de vecinos de mi bloque, cerca del Intercambiador de <strong>Plaza de Castilla</strong>. Abro el portal porque un vecino salía justo, subo a mi rellano en el tercero... y me toco los bolsillos del abrigo. Nada. Reviso los pantalones. Nada. La mochila. Sudores fríos. Las llaves de mi puerta acorazada Dierre habían desaparecido.»</p>
                        </div>

                        <h2 style={{ color: '#FFD700', fontSize: '2rem', marginTop: '1rem', marginBottom: '1rem', fontWeight: 700 }}>El Peligro de las Pegatinas en la Bajante del Agua</h2>

                        <p>Al no tener familiares cerca y con un 14% de batería restante en el móvil, cometí el error de novato. Miré a la bajante del edificio y estaba repleta de pegatinas fosforescentes: "Cerrajeros Muy Baratos - 24H". Llamé al primero. Me atendió una centralita que sonaba como si estuviera a 600 kilómetros de allí. Me dijeron "en 20 minutos estamos, hay una tarifa base de desplazamiento y el resto te lo dice el técnico al ver la puerta". Estaban en mi rellano en 45 minutos.</p>

                        <p>Cuando llegó, llevaba chándal, sin herramientas a la vista. Miró mi puerta (apenas la observó) y me dijo: "Uf, esto es un cilindro de alta seguridad de borjas. Hay que reventarlo con el taladro. Me tienes que pagar tarifa especial de desplazamiento, urgencia nocturna triple, un plus abusivo por usar el taladro y una barbaridad por el bombillo nuevo que te tengo que poner, más IVA."</p>

                        <p>El presupuesto total ascendía a <strong>una auténtica fortuna</strong> por un despiste de viernes por la noche... y me dejaba la madera destrozada. Le dije que no. Amenazó con cobrarme unos supuestos gastos de cancelación disparatados de repente. Le pagué para que se fuera y me quedé temblando, sentado en las escaleras.</p>

                        <h2 style={{ color: '#fff', fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem', fontWeight: 600 }}>La Salvación: Un Técnico Homologado, Uniformado y Transparente</h2>

                        <p>Tras respirar, busqué en Google <strong><Link href="/cerrajeros-urgentes-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>Cerrajeros Urgentes 24h Tetuán</Link></strong>, asegurándome de entrar en una web oficial y profesional con buena puntuación en el distrito. Es vital la proximidad.</p>

                        <p>Llamé a Cerrajeros Tetuán Oficial (ustedes). La experiencia fue brutalmente diferente desde el minuto cero:</p>

                        <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <li>
                                <strong style={{ color: '#fff', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle size={20} color="#10b981" /> Presupuesto por WhatsApp (Transparencia Total):</strong>
                                <p style={{ margin: 0 }}>El operador me pidió fotos reales de la cerradura enviadas al móvil antes que nada. Tras ver las muescas de cerrojos, me dijo el precio cerrado de la tarifa de apertura de madrugada: sin trampa ni cartón.</p>
                            </li>
                            <li>
                                <strong style={{ color: '#fff', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><Shield size={20} color="#FFD700" /> Patrulla Geolocalizada en Moto:</strong>
                                <p style={{ margin: 0 }}>El operario llegó en 14 minutos exactos porque acababa de atender un servicio en Cuzco-AZCA.</p>
                            </li>
                            <li>
                                <strong style={{ color: '#fff', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><MapPin size={20} color="#3b82f6" /> Identificación (Clave para evitar sustos):</strong>
                                <p style={{ margin: 0 }}>Llegó perfectamente vestido de uniforme homologado. Se acreditó y sobre todo, *me pidió mi DNI* para comprobar ante registro o vecino que yo era el legítimo morador antes de abrir una cerradura blindada.</p>
                            </li>
                        </ul>

                        <h2 style={{ color: '#fff', fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem', fontWeight: 600 }}>Apertura Sin Daños: El Sello de un Maestro Cerrajero</h2>

                        <p>Lo que el de la pegatina quería destrozar con broca, este operario lo afrontó como un puzzle. Al no haber dejado las llaves echadas por dentro con vueltas, la puerta estaba alojada mediante cierre por el resbalón.</p>
                        <p>Usando una simple pero resistente lámina flexible especializada de apertura, y aplicando una tremenda maña sobre la junta de dilatación del marco de madera mientras inyectaba una solución lubricante, logró liberar el mecanismo de tensión del resbalón. <strong>En 2 minutos y 45 segundos, mi puerta se abrió de par en par. Cero arañazos. Cero taladros. Cerradura original intacta.</strong></p>

                        <div style={{ background: '#0a192f', border: '1px solid #FFD700', padding: '2rem', borderRadius: '0.5rem', textAlign: 'center', marginTop: '3rem' }}>
                            <h3 style={{ color: '#fff', marginBottom: '1rem' }}>No te Juegues tu Puerta con las "Pegatinas"</h3>
                            <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Si pierdes tus llaves en Tetuán a las 4 de la mañana, necesitas tranquilidad y transparencia legal, no facturas ocultas y sorpresas desagradables en efectivo. Llámanos. Somo Técnicos Propios 100% locales.</p>
                            <Link href="tel:+34644061005" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FFD700', color: '#000', padding: '0.75rem 2rem', borderRadius: '0.25rem', fontWeight: 700, textDecoration: 'none' }}>
                                Solicitar Rescate Residencial AHORA
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
