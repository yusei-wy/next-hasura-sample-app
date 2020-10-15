/**
 * 記事データをフォーマットする
 */
export const formatArticle = (content: string): string[] => {
    return content.split('\n\n');
};
