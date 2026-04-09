/**
 * import.meta.glob を使ったセクションコンポーネントのローダーユーティリティ。
 * Viteが動的インポートのパスを静的に解析できるようにする。
 */

// すべてのセクションファイルを遅延ロード可能な形で登録
const sectionModules = import.meta.glob('../contents/**/section*.tsx');

/**
 * 指定されたトピック・チャプター・セクションのコンポーネントローダーを返す。
 * @returns ローダー関数。該当ファイルが存在しない場合は null。
 */
export function getSectionLoader(topicId: string, chapterId: string, sectionId: string) {
    const topicFormatted = topicId.replace('-', '_');
    const key = `../contents/topic${topicFormatted}/chapter${chapterId}/section${topicFormatted}_${sectionId}.tsx`;
    return sectionModules[key] || null;
}
