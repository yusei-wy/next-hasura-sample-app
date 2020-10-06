import { DeepPartial } from 'redux';
import { createContext, useContext, useMemo } from 'react';

import { createServices, Services } from '@/services/services';

const defaultSerices = createServices();

const DIContext = createContext(defaultSerices);

// Provider を作成 props と default をマージして注入
export const DIProvider: React.FC<{
    services?: DeepPartial<Services>;
}> = ({ children, services = {} }) => {
    const newValue = useMemo(() => Object.assign(defaultSerices, services), [
        services,
    ]);
    return <DIContext.Provider value={newValue}>{children}</DIContext.Provider>;
};

type MapServicesToProps = (s: Services) => any;

// 使いやすように custom hook を作成
export const useDIContext = <T extends MapServicesToProps>(selector: T) => {
    const context = useContext(DIContext);
    return useMemo<ReturnType<T>>(() => {
        return selector(context);
    }, [selector, context]);
};
