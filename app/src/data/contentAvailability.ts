/**
 * ビルド時に contents ディレクトリ内のセクションファイルの存在を検出し、
 * トピックIDごとにコンテンツの有無を判定するユーティリティ。
 * 
 * Vite の import.meta.glob を利用して静的解析時にファイル一覧を取得する。
 */

// ビルド時にすべてのセクションファイルのパスを取得
const contentModules = import.meta.glob('../contents/topic*/chapter*/*.tsx', { eager: false });

// ファイルパスからトピックIDを抽出してセットに格納
const topicsWithContent = new Set<string>();

for (const path of Object.keys(contentModules)) {
    // パス例: ../contents/topic1_1/chapter1/section1_1_1.1.tsx
    const match = path.match(/\/contents\/topic(\d+_\d+)\//);
    if (match) {
        // "1_1" → "1-1" に変換
        const topicId = match[1].replace('_', '-');
        topicsWithContent.add(topicId);
    }
}

/**
 * 指定したトピックIDにコンテンツ（セクションファイル）が1つ以上存在するかを返す。
 */
export function hasTopicContent(topicId: string): boolean {
    return topicsWithContent.has(topicId);
}
