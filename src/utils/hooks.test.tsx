import React from 'react';
import { shallow } from 'enzyme';

import { useClassNames } from './hooks';

describe('utils', () => {
    it('useClassNames', () => {
        const Wrapper: React.FC = () => {
            const classNames = useClassNames('hoge', 'fuga', 'piyo');
            return <div>{classNames}</div>;
        };
        expect(shallow(<Wrapper />).text()).toEqual('hoge fuga piyo');
    });

    it('useClassNames in undefined', () => {
        const Wrapper: React.FC = () => {
            const classNames = useClassNames('hoge', 'fuga', 'piyo', undefined);
            return <div>{classNames}</div>;
        };
        expect(shallow(<Wrapper />).text()).toEqual('hoge fuga piyo');
    });
});
