const fs = require('fs');

const images = [
    '/images/home_hero_1772538336101.png',
    '/images/home_infografico_1772538350012.png',
    '/images/hero_24h_1772538499831.png',
    '/images/linterna_24h_1772538514175.png',
    '/images/furgoneta_urgentes_1772538702292.png',
    '/images/hero_apertura_1772538853696.png',
    '/images/hero_bombines_1772539101115.png',
    '/images/hero_estetoscopio_1772539273420.png',
    '/images/hero_lishi_bmw_1772539473422.png',
    '/images/hero_urgentes_1772538687217.png',
    '/images/camara_azca_1772539289185.png',
    '/images/cerradura_electronica_1772538909434.png',
    '/images/comparativa_bombin_1772539115458.png',
    '/images/detalles_mecanicos_1772539391109.png',
    '/images/furgoneta_berruguete_1772539486706.png',
    '/images/moto_plaza_castilla_1772539533935.png',
    '/images/portal_berruguete_1772538873461.png'
];

function walkSync(dir, filelist = []) {
    fs.readdirSync(dir).forEach(file => {
        const path = dir + '/' + file;
        if (fs.statSync(path).isDirectory()) {
            filelist = walkSync(path, filelist);
        } else if (file.endsWith('.tsx')) {
            filelist.push(path);
        }
    });
    return filelist;
}

let imgIndex = 0;
const files = walkSync('./src/app');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Replace CSS url()
    const regexUrl = /url\('https:\/\/images\.unsplash\.com[^']*'\)/g;
    content = content.replace(regexUrl, () => {
        const replacement = `url('${images[imgIndex % images.length]}')`;
        imgIndex++;
        return replacement;
    });

    // Replace <img src=""/>
    const regexImg = /src="https:\/\/images\.unsplash\.com[^"]*"/g;
    content = content.replace(regexImg, () => {
        const replacement = `src="${images[imgIndex % images.length]}"`;
        imgIndex++;
        return replacement;
    });

    fs.writeFileSync(file, content);
});

console.log('Replaced ' + imgIndex + ' Unsplash image references');
