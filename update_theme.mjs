import fs from 'fs';
import path from 'path';

const appDir = path.join(process.cwd(), 'app');

const replacementMap = {
    'tapas-cream': 'white',
    'academy-cream': 'white',
    'tapas-beige': 'gray-50',
    'tapas-charcoal': 'black',
    'academy-charcoal': 'black',
    'academy-navy': 'black',
    'academy-black': 'black',
    'tapas-gold': 'brand-gold',
    'academy-gold': 'brand-gold',
    'tapas-gold-light': 'brand-gold',
    'academy-gold-light': 'brand-gold',
    'academy-gold-dark': 'brand-gold',
    'tapas-green': 'brand-red',
    'tapas-pink': 'brand-red',
    'tapas-yellow': 'brand-blue',
    'tapas-lime': 'brand-blue',
    'tapas-gray': 'gray-500',
    'academy-silver': 'gray-500',
};

function processDirectory(directory) {
    const files = fs.readdirSync(directory);

    for (const file of files) {
        const filePath = path.join(directory, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            processDirectory(filePath);
        } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
            let content = fs.readFileSync(filePath, 'utf8');
            let initialContent = content;

            for (const [oldClass, newClass] of Object.entries(replacementMap)) {
                // We look for any tailwind prefix (bg-, text-, via-, hover:bg-, etc.) followed by the old class
                // and we replace the old class part with new class
                // Example: from-tapas-cream -> from-white

                // This regex looks for an optional prefix ending with a dash, then the class name
                // Alternatively, since oldClass has dashes itself, let's just use string replace for now
                // But we want to preserve the prefix.

                // Let's replace instances of oldClass as long as they are part of a CSS class word
                // Class word boundaries typically contain letters, numbers, -, :, /

                // More robust: just replace the string if it's bounded by non-word chars or dashes

                const regex = new RegExp(`(?<=[\\s"'\\\`a-z0-9\\-:]*\\b)(${oldClass})(?=[\\s"'\\\`<])`, 'g');
                content = content.replace(regex, newClass);

                // Also a simpler fallback just in case:
                content = content.split(`-${oldClass}`).join(`-${newClass}`);
            }

            if (content !== initialContent) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Updated: ${filePath}`);
            }
        }
    }
}

console.log('Starting second pass theme replace script...');
processDirectory(appDir);
console.log('Finished!');
