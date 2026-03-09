const fs = require('fs');

const files = [
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

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');

    // El nuevo export tiene metadata: Metadata
    // El viejo es solo metadata =
    const regex = /export const metadata\s*=\s*{([\s\S]*?)};?/m;

    // We verify if there is indeed two exports
    if ((content.match(/export\s+const\s+metadata/g) || []).length > 1) {
        let newContent = content.replace(regex, '');
        fs.writeFileSync(f, newContent, 'utf8');
        console.log('Fixed', f);
    }
});
