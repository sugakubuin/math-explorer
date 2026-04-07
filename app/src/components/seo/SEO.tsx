import { Head } from 'vite-react-ssg';

interface SEOProps {
    title: string;
    description?: string;
    url?: string;
    imageUrl?: string;
    type?: 'website' | 'article';
    jsonLd?: Record<string, unknown>;
}

const DEFAULT_TITLE = 'Math Explorer | 大学数学の学習ロードマップ';
const DEFAULT_DESCRIPTION = '大学で学ぶ数学の全体像を可視化。基礎から応用まで、迷わずに学習を進めるためのガイドマップとして、分野ごとの体系的な道筋を提供します。';
const SITE_URL = 'https://mathematics-explorer.netlify.app';

export default function SEO({ title, description, url, imageUrl, type = 'website', jsonLd }: SEOProps) {
    const formattedTitle = title === DEFAULT_TITLE ? DEFAULT_TITLE : `${title}`;
    const formattedDescription = description || DEFAULT_DESCRIPTION;
    const metaUrl = url ? `${SITE_URL}${url}` : SITE_URL;
    const metaImage = imageUrl ? `${SITE_URL}${imageUrl}` : `${SITE_URL}/og-image-square.png`;

    return (
        <Head>
            {/* 基本設定 */}
            <title>{formattedTitle}</title>
            <meta name="description" content={formattedDescription} />
            <link rel="canonical" href={metaUrl} />

            {/* OGP設定 (X / Facebook / Slack 等向け) */}
            <meta property="og:title" content={formattedTitle} />
            <meta property="og:description" content={formattedDescription} />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content="Math Explorer" />
            
            {/* OGP画像設定 */}
            <meta property="og:image" content={metaImage} />
            <meta property="og:image:alt" content="Math Explorer OGP Image" />

            {/* Twitter カード */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={formattedTitle} />
            <meta name="twitter:description" content={formattedDescription} />
            <meta name="twitter:image" content={metaImage} />

            {/* JSON-LD 構造化データ */}
            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        ...jsonLd,
                    })}
                </script>
            )}
        </Head>
    );
}
