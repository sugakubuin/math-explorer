import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputSvg = path.join(__dirname, '../public/logo.svg');
const outputPng = path.join(__dirname, '../public/og-image-square.png');

async function convertSvgToPng() {
    try {
        console.log('Generating og-image-square.png...');
        
        // 元のロゴ100x100をキャンバスに合わせてスケーリング
        const svgBuffer = fs.readFileSync(inputSvg);
        
        // 背景を白 (またはサイトのテーマ色) で 600x600 の正方形キャンバスを作成
        await sharp({
            create: {
                width: 600,
                height: 600,
                channels: 4,
                background: { r: 248, g: 250, b: 252, alpha: 1 } // slate-50
            }
        })
        .composite([{
            input: await sharp(svgBuffer)
                   // 正方形の中央にドカンと配置するため500x500くらいに拡大
                   .resize(500, 500)
                   .toBuffer(),
            blend: 'over'
        }])
        .png()
        .toFile(outputPng);

        console.log(`✅ OGP Image successfully generated at ${outputPng}`);
    } catch (error) {
        console.error('Error generating image:', error);
    }
}

convertSvgToPng();
