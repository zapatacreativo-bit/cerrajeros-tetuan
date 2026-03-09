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
    'c:/Users/Usuario/Downloads/web tetuan madrid/src/app/politica-de-cookies/page.tsx',
    'c:/Users/Usuario/Downloads/web tetuan madrid/src/app/politica-de-privacidad/page.tsx'
];

function toTitleCase(str) {
    if (!str) return '';
    return str.replace(/-/g, ' ').replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

missing.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Convert forward slash back to system native for replacing
    const sysFile = file.replace(/\//g, '\\');
    let relativeRoute = sysFile.replace(projectRoot, '').replace(/\\page\.tsx$/, '').replace(/\\/g, '/');
    let url = "https://www.cerrajerostetuan.com" + relativeRoute;

    let baseName = relativeRoute.split('/').pop() || 'Tetuán';
    let titleStr = "Cerrajeros Tetuán | " + toTitleCase(baseName);
    if (relativeRoute === '/blog') titleStr = "Blog de Seguridad Residencial | Cerrajeros Tetuán";

    const metaRegex = /export const metadata(\s*:\s*Metadata\s*)?=\s*{([\s\S]*?)};/m;
    const match = content.match(metaRegex);

    let title = titleStr;
    let desc = "Información legal y de seguridad de Cerrajeros Tetuán.";

    if (match) {
        let insideMeta = match[2];
        let titleMatch = insideMeta.match(/title:\s*["']([^"']*)["']/);
        let descMatch = insideMeta.match(/description:\s*["']([^"']*)["']/);
        if (titleMatch) title = titleMatch[1];
        if (descMatch) desc = descMatch[1];
    }

    let cleanTitle = title.replace(/"/g, '\\"').replace(/'/g, "\\'");
    let cleanDesc = desc.replace(/"/g, '\\"').replace(/'/g, "\\'");

    let injectedContent = [
        "export const metadata: Metadata = {",
        "    title: '" + cleanTitle + "',",
        "    description: '" + cleanDesc + "',",
        "    keywords: 'cerrajería tetuán, seguridad madrid, cerrajero madrid',",
        "    alternates: {",
        "        canonical: '" + url + "',",
        "    },",
        "    openGraph: {",
        "        title: '" + cleanTitle + "',",
        "        description: '" + cleanDesc + "',",
        "        url: '" + url + "',",
        "        images: [{ url: 'https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png', width: 1200, height: 630 }],",
        "        type: 'website',",
        "    },",
        "    twitter: {",
        "        card: 'summary_large_image',",
        "        title: '" + cleanTitle + "',",
        "        description: '" + cleanDesc + "',",
        "        images: ['https://www.cerrajerostetuan.com/images/home_hero_1772538336101.png'],",
        "    }",
        "};\n"
    ].join('\n');

    let newContent = content;

    if (!content.includes("import { Metadata }")) {
        if (!content.includes("import type { Metadata }")) {
            newContent = "import { Metadata } from 'next';\n" + newContent;
        }
    }

    if (match) {
        newContent = newContent.replace(metaRegex, injectedContent);
    } else {
        newContent = newContent.replace("export default function", injectedContent + "\nexport default function");
    }

    fs.writeFileSync(file, newContent, 'utf8');
    console.log("Injected to: " + file);
});
