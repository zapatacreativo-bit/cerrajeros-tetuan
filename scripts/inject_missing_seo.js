const fs = require('fs');
const path = require('path');

const projectRoot = 'c:\\Users\\Usuario\\Downloads\\web tetuan madrid\\src\\app';

const missing = [
    'c:/Users/Usuario/Downloads/web tetuan madrid/src/app/aviso-legal/page.tsx',
    'c:/Users/Usuario/Downloads/web tetuan madrid/src/app/blog/cerraduras-invisibles-vs-bombines-alta-seguridad/page.tsx',
    'c:/Users/Usuario/Downloads/web tetuan madrid/src/app/blog/cierres-metalicos-bravo-murillo-normativa/page.tsx',
    'c:/Users/Usuario/Downloads/web tetuan madrid/src/app/blog/fincas-tetuan-mantenimiento-puertas-comunidad/page.tsx',
    'c:/Users/Usuario/Downloads/web tetuan madrid/src/app/blog/guia-definitiva-bumping-tetuan-2026/page.tsx',
    'c:/Users/Usuario/Downloads/web tetuan madrid/src/app/blog/impresioning-madrid-norte-robo-silencioso/page.tsx',
    'c:/Users/Usuario/Downloads/web tetuan madrid/src/app/blog/mi-experiencia-real-perder-llaves-plaza-castilla/page.tsx',
    'c:/Users/Usuario/Downloads/web tetuan madrid/src/app/blog/page.tsx',
    'c:/Users/Usuario/Downloads/web tetuan madrid/src/app/garantias/page.tsx',
    'c:/Users/Usuario/Downloads/web tetuan madrid/src/app/page.tsx',
    'c:/Users/Usuario/Downloads/web tetuan madrid/src/app/politica-de-cookies/page.tsx',
    'c:/Users/Usuario/Downloads/web tetuan madrid/src/app/politica-de-privacidad/page.tsx'
];

function toTitleCase(str) {
    return str.replace(/-/g, ' ').replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

missing.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('alternates:')) return;

    // Convert forward slash back to system native for replacing
    const sysFile = file.replace(/\//g, '\\');
    let relativeRoute = sysFile.replace(projectRoot, '').replace(/\\page\.tsx$/, '').replace(/\\/g, '/');
    let url = "https://www.cerrajerostetuan.com" + relativeRoute;

    let baseName = relativeRoute.split('/').pop() || 'Tetuán';
    let titleStr = "Cerrajeros Tetuán | " + toTitleCase(baseName);
    if (relativeRoute === '') titleStr = "Cerrajeros Tetuán | Servicio 24h Urgente ☎ 655 555 555";
    if (relativeRoute === '/blog') titleStr = "Blog de Seguridad Residencial | Cerrajeros Tetuán";

    let injectedMeta = [
        "export const metadata: Metadata = {",
        "    title: '" + titleStr + "',",
        "    description: 'Encuentra información útil y legal sobre nuestros servicios profesionales de cerrajería en Tetuán.',",
        "    keywords: 'cerrajería tetuán, seguridad madrid, cerrajero 24h',",
        "    alternates: {",
        "        canonical: '" + url + "',",
        "    },",
        "    openGraph: {",
        "        title: '" + titleStr + "',",
        "        description: 'Información vital de seguridad para la zona de Tetuán (Madrid).',",
        "        url: '" + url + "',",
        "        images: [{ url: 'https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],",
        "        type: 'website',",
        "    },",
        "    twitter: {",
        "        card: 'summary_large_image',",
        "        title: '" + titleStr + "',",
        "        description: 'Información vital de seguridad residencial.',",
        "        images: ['https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png'],",
        "    }",
        "};\n"
    ].join('\n');

    let newContent = "";
    if (content.includes("export const metadata")) {
        // Should not happen based on our grep, but just in case
        return;
    } else {
        if (!content.includes("import { Metadata }")) {
            if (content.includes("import type { Metadata }")) {
                // already has it
            } else {
                newContent = "import { Metadata } from 'next';\n";
            }
        }
        // insert metadata before the default export
        newContent += content.replace("export default function", injectedMeta + "\nexport default function");
        fs.writeFileSync(file, newContent, 'utf8');
        console.log("Injected to: " + file);
    }
});
