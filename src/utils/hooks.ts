import { useMemo } from 'react';

/**
 * 複数のクラス名を合成して1つの文字列に結合する
 * undefined が混じっていてもOK
 */
export const useClassNames = (...names: ReadonlyArray<string | undefined>) => {
    return useMemo(() => names.filter((name) => !!name).join(' '), [names]);
};
