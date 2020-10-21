import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

import { Users } from '@/generated/graphql';
import { Button } from '@/components/button';

import styles from './index.module.css';
import { UserIcon } from '../user-icon';

type Props = {
    user: Pick<Users, 'displayID' | 'displayName'>;
};

export const ArticleFooter: React.FC<Props> = ({ user }) => {
    return (
        <>
            <div className={styles.articleFooterContainer}>
                <div>
                    <FontAwesomeIcon
                        icon={faThumbsUp}
                        className={styles.icon}
                    />
                    &nbsp; 65536イイネ！
                </div>
                <div>
                    <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
                    <FontAwesomeIcon
                        icon={faFacebook}
                        className={styles.icon}
                    />
                </div>
            </div>
            <div className={styles.articleFooter}>
                <UserIcon src="/profile.png" />
                <div className={styles.userText}>
                    <div>{user.displayName}</div>
                    <p className={styles.userDescriptoin}>
                        ほげほげでふがふがをやっています。
                    </p>
                </div>
                <div className={styles.userRight}>
                    <Button>Follow</Button>
                </div>
            </div>
        </>
    );
};
