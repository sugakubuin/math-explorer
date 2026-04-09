/**
 * ContentBox メタデータの型定義。
 * Vite プラグインがビルド時に収集するデータの型。
 */

export interface ContentBoxMeta {
    /** ContentBox のタイプ */
    type: 'definition' | 'theorem' | 'lemma' | 'proposition' | 'corollary';
    /** ContentBox のタイトル文字列 */
    title: string;
    /** トピックID (例: "2-1") */
    topicId: string;
    /** チャプターID (例: "1") */
    chapterId: string;
    /** セクションID (例: "1.1") */
    sectionId: string;
}

/** 定義カテゴリに該当するタイプ */
export const DEFINITION_TYPES = ['definition'] as const;

/** 命題カテゴリに該当するタイプ */
export const PROPOSITION_TYPES = ['proposition', 'theorem', 'lemma', 'corollary'] as const;
