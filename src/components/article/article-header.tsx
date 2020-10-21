import React from 'react';

import { Users } from '@/generated/graphql';
import { UserIcon } from '@/components/user-icon';
import { formatDate } from '@/utils/date';
import { useDIContext } from '@/context';

import styles from './index.module.css';

type Props = {
    subject: string;
    user: Pick<Users, 'displayID' | 'displayName'>;
    publishedAt: string;
};

export const ArticleHeader: React.FC<Props> = ({
    subject,
    user,
    publishedAt,
}) => {
    const services = useDIContext((services) => services);
    const { datetime, isNew } = formatDate(
        services.datetimeService.getNowByString(publishedAt),
        services.datetimeService.getNow(),
    );

    return (
        <>
            <h1 className={styles.subject}>{subject}</h1>
            <div className={styles.userContainer}>
                <div>
                    <UserIcon src="/profile.png" />
                </div>
                <div className={styles.userText}>
                    <div className={styles.userID}>
                        {user.displayName} @{user.displayID}
                    </div>
                    <span className={styles.publishedAt}>
                        <span>{datetime}</span>
                        {isNew ? (
                            <span className={styles.newContent}>New</span>
                        ) : (
                            ''
                        )}
                    </span>
                </div>
            </div>
        </>
    );
};
