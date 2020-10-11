import React from 'react';

import { useClassNames } from '@/utils/hooks';

import styles from './index.module.css';

type Props = {
    className?: string;
};

export const SiteHeaderItem: React.FC<Props> = ({ className, children }) => {
    const _className = useClassNames(styles.item, className);

    return <div className={_className}>{children}</div>;
};
