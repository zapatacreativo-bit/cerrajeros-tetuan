import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Calendar, User, BookOpen } from 'lucide-react';



const blogPosts = [
    {
        slug: 'guia-definitiva-bumping-tetuan-2026',
        title: 'Guía Definitiva 2026: Cómo Proteger tu Piso en Tetuán contra el Método Bumping',
        excerpt: 'El bumping sigue siendo el método de intrusión silenciosa más utilizado en los barrios residenciales de Madrid. Descubre si tu puerta está en riesgo y cómo solucionarlo definitivamente.',
        date: '3 de Marzo, 2026',
        author: 'Equipo Técnico',
        category: 'Seguridad Residencial',
        image: '/images/blog/blog_bumping_hero.png'
    },
    {
        slug: 'cierres-metalicos-bravo-murillo-normativa',
        title: 'Cierres Metálicos en Bravo Murillo: Normativa, Mantenimiento y Soluciones Antirrobo',
        excerpt: 'Si tienes un local en el eje comercial de Tetuán, la seguridad de tu escaparate es vital. Analizamos los candados de suelo más seguros y la normativa de accesos del Ayuntamiento.',
        date: '28 de Febrero, 2026',
        author: 'Dpto. Comercial',
        category: 'Locales y Negocios',
        image: '/images/blog/blog_cierres_hero.png'
    },
    {
        slug: 'impresioning-madrid-norte-robo-silencioso',
        title: 'La Evolución del Robo Silencioso en Madrid: Qué es el "Impresioning" y Cómo Evitarlo',
        excerpt: 'Más letal y silencioso que el bumping. El impresioning permite a los intrusos crear una copia exacta de tu llave sin tenerla. Conoce cómo operan las mafias en la zona norte de Madrid.',
        date: '20 de Febrero, 2026',
        author: 'Auditoría de Seguridad',
        category: 'Prevención',
        image: '/images/blog/blog_impresioning_hero.png'
    },
    {
        slug: 'cerraduras-invisibles-vs-bombines-alta-seguridad',
        title: 'Cerraduras Invisibles vs Bombines de Alta Seguridad: ¿Qué Necesita tu Vivienda?',
        excerpt: 'La tecnología electrónica avanza frente a la fuerza mecánica. Comparamos la eficacia real de una cerradura invisible controlada por móvil frente a un robusto cilindro KABA o TESA acorazado.',
        date: '15 de Febrero, 2026',
        author: 'Equipo Técnico',
        category: 'Tecnología',
        image: '/images/blog/blog_invisibles_hero.png'
    },
    {
        slug: 'mi-experiencia-real-perder-llaves-plaza-castilla',
        title: 'Experiencia Real: Lo que Aprendí al Perder las Llaves a las 3 AM en Plaza de Castilla',
        excerpt: 'El pánico, el frío y el teléfono a punto de apagarse. Relato real de un vecino de Tetuán sobre cómo gestionar una urgencia nocturna sin caer en estafas de cerrajeros fraudulentos.',
        date: '10 de Febrero, 2026',
        author: 'Colaborador Invitado',
        category: 'Experiencias Reales',
        image: '/images/blog/blog_experiencia_hero.png'
    },
    {
        slug: 'fincas-tetuan-mantenimiento-puertas-comunidad',
        title: 'Fincas en Tetuán: El Coste Oculto de un Mal Mantenimiento en Puertas de Comunidad',
        excerpt: 'Muelles que no cierran en invierno, cerraduras eléctricas que fallan con la lluvia y el enorme riesgo de dejar el portal abierto a desconocidos. Guía de mantenimiento para administradores.',
        date: '5 de Febrero, 2026',
        author: 'Administración de Fincas',
        category: 'Comunidades',
        image: '/images/blog/blog_fincas_hero.png'
    }
];

export const metadata: Metadata = {
    title: 'Blog de Seguridad Residencial | Cerrajeros Tetuán',
    description: 'Información legal y de seguridad de Cerrajeros Tetuán.',
    keywords: 'cerrajería tetuán, seguridad madrid, cerrajero madrid',
    alternates: {
        canonical: 'https://www.tetuancerrajeros.com/blog',
    },
    openGraph: {
        title: 'Blog de Seguridad Residencial | Cerrajeros Tetuán',
        description: 'Información legal y de seguridad de Cerrajeros Tetuán.',
        url: 'https://www.tetuancerrajeros.com/blog',
        images: [{ url: 'https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blog de Seguridad Residencial | Cerrajeros Tetuán',
        description: 'Información legal y de seguridad de Cerrajeros Tetuán.',
        images: ['https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png'],
    }
};

export default function BlogLanding() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-base)' }}>
            {/* HERO DEL BLOG */}
            <section style={{ position: 'relative', paddingTop: '160px', paddingBottom: '6rem', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', background: 'linear-gradient(135deg, rgba(8, 20, 40, 0.95) 0%, rgba(3, 11, 20, 0.9) 100%)', zIndex: 1 }} />

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ maxWidth: '800px' }} className="fade-in-up">
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 215, 0, 0.1)', color: '#FFD700', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1.5rem', border: '1px solid rgba(255, 215, 0, 0.2)' }}>
                            <BookOpen size={16} />
                            <span>CENTRO DE CONOCIMIENTO</span>
                        </div>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#fff', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', textWrap: 'balance' }}>
                            Blog de <span className="text-gradient">Seguridad</span> y Prevención
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#94a3b8', lineHeight: 1.6, maxWidth: '600px' }}>
                            Mantente al día con nuestros análisis tácticos, consejos de defensa residencial y noticias sobre cerrajería en el distrito de Tetuán.
                        </p>
                    </div>
                </div>
            </section>

            {/* LISTADO DE POSTS */}
            <section style={{ padding: '6rem 0', background: 'var(--color-bg-base)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>

                        {blogPosts.map((post, i) => (
                            <article key={i} className="fade-in-up blog-card" style={{ animationDelay: `${i * 0.1}s`, display: 'flex', flexDirection: 'column', background: 'rgba(5, 12, 23, 0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', overflow: 'hidden', transition: 'all 0.3s ease' }}>
                                <div style={{ position: 'relative', height: '220px', width: '100%', background: '#0a192f', overflow: 'hidden' }}>
                                    {post.image ? (
                                        <Image src={post.image} alt={post.title} fill unoptimized style={{ objectFit: 'cover', opacity: 0.8 }} className="hover:scale-105 hover:opacity-100 transition-all duration-500" />
                                    ) : (
                                        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(#FFD700 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                                    )}
                                    <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', background: '#FFD700', color: '#000', padding: '0.25rem 0.75rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', zIndex: 10 }}>
                                        {post.category}
                                    </div>
                                </div>
                                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#64748b', fontSize: '0.85rem', marginBottom: '1rem' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Calendar size={14} /> {post.date}</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><User size={14} /> {post.author}</span>
                                    </div>
                                    <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '1rem', lineHeight: 1.4, fontWeight: 600 }}>
                                        <Link href={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-[var(--color-gold)] transition-colors">
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem', flexGrow: 1 }}>
                                        {post.excerpt}
                                    </p>
                                    <Link href={`/blog/${post.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#FFD700', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }} className="hover:gap-3 transition-all">
                                        Leer Artículo Completo <ChevronRight size={18} />
                                    </Link>
                                </div>
                            </article>
                        ))}

                    </div>
                </div>
            </section>
        </main>
    );
}
