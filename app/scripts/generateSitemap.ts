import fs from 'fs';
import path from 'path';
import { roadmapData } from '../src/data/roadmapData';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://mathematics-explorer.netlify.app';

// public フォルダのパス
const publicDir = path.resolve(__dirname, '../public');

// sitemap の書き出し先
const sitemapPath = path.join(publicDir, 'sitemap.xml');

// sitemap に記載する日付
const currentDate = new Date().toISOString();

function createSitemap() {
    let urls = `
    <url>
        <loc>${SITE_URL}/</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>${SITE_URL}/roadmap</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>${SITE_URL}/about</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>
    `;

    // contentsディレクトリの存在チェックでコンテンツ有無を判定
    const contentsDir = path.resolve(__dirname, '../src/contents');
    const hasTopicContent = (topicId: string): boolean => {
        const topicDir = path.join(contentsDir, `topic${topicId.replace('-', '_')}`);
        return fs.existsSync(topicDir);
    };

    // トピック、チャプター、セクションの全URLを列挙（コンテンツがあるもののみ）
    roadmapData.forEach(stage => {
        stage.topics.forEach(topic => {
            // コンテンツが存在しないトピックはスキップ
            if (!hasTopicContent(topic.id)) return;

            // トピックのURL
            urls += `
    <url>
        <loc>${SITE_URL}/roadmap/${topic.id}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>`;

            topic.chapters.forEach(chapter => {
                // チャプターのURL
                urls += `
    <url>
        <loc>${SITE_URL}/roadmap/${topic.id}/${chapter.id}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>`;

                // 演習問題のURL
                urls += `
    <url>
        <loc>${SITE_URL}/roadmap/${topic.id}/${chapter.id}/exercises</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.6</priority>
    </url>`;

                chapter.sections.forEach(section => {
                    // セクションのURL
                    urls += `
    <url>
        <loc>${SITE_URL}/roadmap/${topic.id}/${chapter.id}/${section.id}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.6</priority>
    </url>`;
                });
            });
        });
    });

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
</urlset>
`;

    // publicディレクトリが存在しない場合は作成（通常は存在します）
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }

    fs.writeFileSync(sitemapPath, sitemapContent);
    console.log(`✅ Sitemap successfully generated at ${sitemapPath}`);
}

createSitemap();
