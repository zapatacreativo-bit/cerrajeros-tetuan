import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Shield, CheckCircle, Wrench, Building } from 'lucide-react';




export const metadata: Metadata = {
    title: 'Cerrajeros Tetuán | Fincas Tetuan Mantenimiento Puertas Comunidad',
    description: 'Información legal y de seguridad de Cerrajeros Tetuán.',
    keywords: 'cerrajería tetuán, seguridad madrid, cerrajero madrid',
    alternates: {
        canonical: 'https://www.tetuancerrajeros.com/blog/fincas-tetuan-mantenimiento-puertas-comunidad',
    },
    openGraph: {
        title: 'Cerrajeros Tetuán | Fincas Tetuan Mantenimiento Puertas Comunidad',
        description: 'Información legal y de seguridad de Cerrajeros Tetuán.',
        url: 'https://www.tetuancerrajeros.com/blog/fincas-tetuan-mantenimiento-puertas-comunidad',
        images: [{ url: 'https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cerrajeros Tetuán | Fincas Tetuan Mantenimiento Puertas Comunidad',
        description: 'Información legal y de seguridad de Cerrajeros Tetuán.',
        images: ['https://www.tetuancerrajeros.com/images/home_hero_1772538336101.png'],
    }
};

export default function BlogPost6() {
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
                        <span style={{ background: 'rgba(255,215,0,0.1)', color: '#FFD700', padding: '0.3rem 0.8rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', border: '1px solid rgba(255,215,0,0.3)' }}>Comunidades</span>
                        <span style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', padding: '0.3rem 0.8rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 600, border: '1px solid rgba(255,255,255,0.1)' }}>Lectura: 6 min</span>
                    </div>

                    <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#fff', fontWeight: 800, lineHeight: 1.2, marginBottom: '2rem' }}>
                        Fincas en Tetuán: El Coste Oculto de un Mal Mantenimiento en Puertas de Comunidad
                    </h1>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', color: '#94a3b8', fontSize: '0.9rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><User size={16} color="#FFD700" /> Administración de Fincas</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={16} color="#FFD700" /> 5 de Febrero, 2026</span>
                    </div>
                </div>
            </section>

            {/* CONTENT ARTICLE */}
            <section style={{ padding: '2rem 0 6rem 0', background: 'var(--color-bg-base)' }}>
                <div className="container" style={{ maxWidth: '900px' }}>

                    {/* Hero Image */}
                    <div style={{ position: 'relative', width: '100%', height: '450px', borderRadius: '1rem', marginBottom: '3rem', overflow: 'hidden', border: '1px solid rgba(255,215,0,0.2)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                        <Image src="/images/blog/blog_fincas_hero.png" unoptimized alt="Cerrajero ajustando el muelle hidráulico de un portal de comunidad de vecinos en Tetuán" fill style={{ objectFit: 'cover' }} priority />
                    </div>

                    <div style={{ color: '#d1d5db', fontSize: '1.15rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                        <p className="text-xl text-white font-medium mb-4" style={{ lineHeight: 1.6 }}>La primera frontera defensiva de todo un bloque residencial no es la puerta de cada vecino, es la pesada puerta de madera y forja del portal de calle. Los <strong>administradores de fincas en el distrito de Tetuán (desde Marqués de Viana hasta Bellas Vistas)</strong> saben perfectamente lo caótico que es gestionar las quejas de 40 vecinos cuando el portal "no termina de encajar". Abordamos los costes encubiertos de esta pequeña avería constante.</p>

                        <h2 style={{ color: '#FFD700', fontSize: '2rem', marginTop: '2rem', marginBottom: '1rem', fontWeight: 700 }}>El Invasor de Invierno: Los Fluídos Hidráulicos</h2>

                        <p>¿Te has fijado que la puerta de tu bloque siempre da portazos bestiales en julio y nunca termina de cerrar en enero? Esto se debe al <strong>muelle cierrapuertas hidráulico superior.</strong></p>

                        <p>Los muelles económicos contienen un fluido oleoso que sufre drásticamente con los cambios térmicos del duro clima madrileño. En verano se dilata (haciendo que no frene el portazo percutor) y en los fríos inviernos de Tetuán se contrae y densifica. Esto provoca que a la pesada puerta de roble macizo del edificio le falten "5 milímetros" de fuerza final de empuje para encajar la presilla.</p>

                        <p><strong>Consecuencia directa:</strong> El portal de acceso a todas las viviendas se queda entreabierto toda la madrugada. Una alfombra roja para manteros que ocupan rellanos buscando cobijo y bandas de ojeadores que mapean a sus anchas el edificio.</p>

                        <div style={{ background: 'rgba(255,255,255,0.03)', borderLeft: '4px solid #FFD700', padding: '1.5rem', margin: '2rem 0', borderRadius: '0.5rem' }}>
                            <h4 style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle size={20} color="#FFD700" /> Solución Profesional al Muelle</h4>
                            <p style={{ margin: 0, fontSize: '1rem', color: '#94a3b8' }}>La solución no pasa por decirle a los vecinos "por favor empujen con fuerza al salir". Exige el reajuste estacional (calibrar las dos válvulas de barrido y golpe final) o mejor aún, sustituir el muelle especulado constructivo por un brazo articulado Termo-Constante tipo DORMA TLS, ajeno a las escarchadas noches de enero.</p>
                        </div>

                        <h2 style={{ color: '#fff', fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem', fontWeight: 600 }}>Cerraduras Eléctricas y Abrepuertas: El Desgaste Fatal</h2>

                        <p>Otro dolor de cabeza brutal procede del bombín electro-mecánico de liberación. Cada vez que el residente del 4ºC pulsa el telefonillo, ese pequeño electroimán sufre. Teniendo en cuenta Amazon, Deliveroo, Correos... esa cerradura soporta más de <strong>200 percusiones diarias</strong>.</p>

                        <p>Si el muelle del que hablábamos empuja de forma incorrecta o desalineada, el "resbalón" de la cerradura fricciona contra el escudo metálico del marco arrancando virutas día a día hasta que, sencillamente, se desgarra del cuadro. Cuando eso ocurre, cambiarlo de urgencia un domingo cuesta a la caja de la comunidad el triple que haber mantenido un contrato semestral con un técnico autorizado de <Link href="/zonas-tetuan" style={{ color: '#FFD700', textDecoration: 'underline' }}>Cerrajeros Tetuán</Link>.</p>

                        <h2 style={{ color: '#fff', fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem', fontWeight: 600 }}>Control de Accesos Moderno: Llaveros RFID</h2>

                        <p>Las fincas residenciales Premium en zonas como Cuzco o Bernabéu dejaron la vieja "llave de sierra" para las zonas comunes hace mucho. Falsificar esas llaves en ferreterías clandestinas permite que decenas de copias "floten" por el barrio al servicio de mafias okupas.</p>

                        <p>Implementar un lector de llaveros de proximidad encriptada (RFID) o código numérico no es caro si se divide en derrama vecinal en un bloque de 20 viviendas. Si un vecino pierde el llavero magnético, el administrador solo tiene que "borrar ese código" informáticamente del sistema, anulando así el acceso al que intente usar el llavero perdido. Cero riesgos, coste nulo por la re-cerrajería y tranquilidad total.</p>

                        <div style={{ background: '#0a192f', border: '1px solid #FFD700', padding: '2rem', borderRadius: '0.5rem', textAlign: 'center', marginTop: '3rem' }}>
                            <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Mantenimiento para Administradores de Fincas</h3>
                            <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Ofrecemos pólizas de iguala de mantenimiento para grandes comunidades y administradores en la zona. Nos encargamos del lubricado hidrodinámico y ajuste de todas las puertas ignífugas de garaje y portales peatonales. Cuida tu patrimonio común.</p>
                            <Link href="tel:+34910000000" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FFD700', color: '#000', padding: '0.75rem 2rem', borderRadius: '0.25rem', fontWeight: 700, textDecoration: 'none' }}>
                                <Wrench size={20} /> Solicitar <strong>Presupuesto para Comunidad</strong>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
