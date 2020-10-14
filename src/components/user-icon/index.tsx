import React from 'react';

import styles from './index.module.css';

type Props = {
    src: string;
};

export const UserIcon: React.FC<Props> = ({ src }) => {
    return <img className={styles.userIcon} src={src} />;
};
