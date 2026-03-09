const fs = require('fs');
const path = require('path');

const projectRoot = 'c:\\Users\\Usuario\\Downloads\\web tetuan madrid\\src\\app';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(fullPath));
        } else {
            if (fullPath.endsWith('page.tsx')) {
                results.push(fullPath);
            }
        }
    });
    return results;
}

const pages = walk(projectRoot);

const kwMap = {
    'apertura-puertas': 'apertura de puertas tetuan, abrir puerta tetuan, cerrajero tetuan',
    'apertura-coches': 'apertura de coches tetuan, abrir coche tetuan, cerrajero coches',
    'apertura-cajas-fuertes': 'apertura de cajas fuertes tetuan, abrir caja fuerte, cerradura caja fuerte',
    'cambio-bombines': 'cambio bombin tetuan, cambiar bombin puerta, instalar bombin alta seguridad',
    'cambio-cerraduras': 'cambio cerradura tetuan, instalar cerradura, cerrajerias tetuan',
    'cerraduras-antibumping': 'cerradura antibumping tetuan, bombin antibumping, seguridad puerta',
    'cerrajeros-urgentes': 'cerrajero urgente tetuan, cerrajeria de urgencia madrid, cerrajero rapido',
    'cerrajeros-24-horas': 'cerrajero 24 horas tetuan, cerrajero madrid noche, asistencia 24h',
    'persianas': 'arreglar persiana tetuan, motorizacion cierres, reparacion persianas tetuan',
    'instalacion-cerraduras': 'instalacion cerrojos tetuan, instalar cerradura nueva, escudo acorazado',
    'reparacion-cerraduras': 'reparacion cerradura tetuan, arreglar cerradura rota, cerrajeria',
    'zonas': 'cerrajeros zonas tetuan, cerrajeros madrid norte, asistencia cerrajero',
    'bravo-murillo': 'cerrajeros bravo murillo, cerrajero estrecho, apertura puertas bravo murillo',
    'plaza-castilla': 'cerrajeros plaza castilla, cerrajero urgencia plaza castilla, puerta plaza castilla',
    'cuzco-azca': 'cerrajeros cuzco, cerrajero azca, seguridad azca',
    'almenara': 'cerrajeros almenara, cerrajero ventilla, apertura puertas ventilla',
    'bellas-vistas': 'cerrajeros bellas vistas, cerrajero francos rodriguez',
    'valdeacederas': 'cerrajeros valdeacederas, cerrajero berruguete',
    'blog': 'blog seguridad tetuan, consejos cerrajeria, noticias cerrajeros',
    'contacto': 'contacto cerrajeros tetuan, telefono cerrajero tetuan, llamar cerrajero',
    'preguntas': 'preguntas frecuentes cerrajero, faqs cerrajeria, dudas cerrajero'
};

function getKeywords(route) {
    for (const key of Object.keys(kwMap)) {
        if (route.includes(key)) {
            return kwMap[key];
        }
    }
    return "cerrajeros tetuan, cerrajero urgente, abrir puerta, seguridad hogar";
}

pages.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    if (content.includes('alternates:')) return;

    let relativeRoute = file.replace(projectRoot, '').replace(/\\page\.tsx$/, '').replace(/\\/g, '/');
    let url = "https://www.cerrajerostetuan.com" + relativeRoute;

    const metaRegex = /export const metadata:\s*Metadata\s*=\s*{([\s\S]*?)};/m;
    const match = content.match(metaRegex);
    if (match) {
        let insideMeta = match[1];

        let titleMatch = insideMeta.match(/title:\s*["']([^"']*)["']/);
        let descMatch = insideMeta.match(/description:\s*["']([^"']*)["']/);

        let title = titleMatch ? titleMatch[1] : "Cerrajeros Tetuán";
        let desc = descMatch ? descMatch[1] : "Expertos en seguridad en Tetuán.";
        let kw = getKeywords(relativeRoute);

        let cleanTitle = title.replace(/"/g, '\\"');
        let cleanDesc = desc.replace(/"/g, '\\"');

        let injectedContent = [
            "    title: '" + cleanTitle.replace(/'/g, "\\'") + "',",
            "    description: '" + cleanDesc.replace(/'/g, "\\'") + "',",
            "    keywords: '" + kw + "',",
            "    alternates: {",
            "        canonical: '" + url + "',",
            "    },",
            "    openGraph: {",
            "        title: '" + cleanTitle.replace(/'/g, "\\'") + "',",
            "        description: '" + cleanDesc.replace(/'/g, "\\'") + "',",
            "        url: '" + url + "',",
            "        images: [{ url: 'https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],",
            "        type: 'website',",
            "    },",
            "    twitter: {",
            "        card: 'summary_large_image',",
            "        title: '" + cleanTitle.replace(/'/g, "\\'") + "',",
            "        description: '" + cleanDesc.replace(/'/g, "\\'") + "',",
            "        images: ['https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png'],",
            "    }"
        ].join('\n');

        let newMeta = "export const metadata: Metadata = {\n" + injectedContent + "\n};";

        let newFileContent = content.replace(metaRegex, newMeta);
        fs.writeFileSync(file, newFileContent, 'utf8');
        console.log("Updated: " + file);
    }
});
