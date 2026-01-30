import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.resolve(__dirname, '../public/assets');

async function optimizeImages(directory) {
    if (!fs.existsSync(directory)) {
        console.log(`Directory ${directory} does not exist.`);
        return;
    }

    const files = fs.readdirSync(directory);

    for (const file of files) {
        const filePath = path.join(directory, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            await optimizeImages(filePath);
        } else if (/\.(jpe?g|png)$/i.test(file)) {
            const webpPath = filePath.replace(/\.(jpe?g|png)$/i, '.webp');

            // Only convert if webp doesn't exist or is older than the source
            if (!fs.existsSync(webpPath) || fs.statSync(webpPath).mtime < stats.mtime) {
                console.log(`Converting ${file} to WebP...`);
                try {
                    await sharp(filePath)
                        .webp({ quality: 75 })
                        .toFile(webpPath);
                    console.log(`✓ Created ${path.basename(webpPath)}`);
                } catch (err) {
                    console.error(`✗ Error converting ${file}:`, err.message);
                }
            }
        }
    }
}

console.log('--- Starting Image Optimization ---');
optimizeImages(PUBLIC_DIR).then(() => {
    console.log('--- Optimization Complete ---');
}).catch(err => {
    console.error('Optimization failed:', err);
});
