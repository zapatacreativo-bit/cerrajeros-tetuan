const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(fullPath));
        } else {
            results.push(fullPath);
        }
    });
    return results;
}

const allFiles = walk('c:/Users/Usuario/Downloads/web tetuan madrid/src');

allFiles.forEach(file => {
    if (!file.endsWith('.tsx') && !file.endsWith('.ts') && !file.endsWith('.css') && !file.endsWith('.json')) return;

    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Phones
    content = content.replace(/655 555 555/g, '644 936 742');
    content = content.replace(/655555555/g, '644936742');
    content = content.replace(/\+34655555555/g, '+34644936742');
    content = content.replace(/\+34 655 555 555/g, '+34 644 936 742');

    // Emails
    content = content.replace(/info@cerrajerosalcorcon24h\.com/g, 'info@cerrajerostetuan.com');
    // Also change instances where we used to have other placeholder emails if any

    // Address (Legal pages mostly)
    content = content.replace(/C\.\s*los\s*Alfares,\s*20,\s*28921\s*Alcorcón,\s*Madrid/gi, 'C. del Marqués de Leis, 4, Tetuán, 28020 Madrid');
    content = content.replace(/Calle\s*los\s*Alfares,\s*20,\s*Alcorcón,\s*Madrid/gi, 'C. del Marqués de Leis, 4, Tetuán, 28020 Madrid');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated: ' + file);
    }
});
