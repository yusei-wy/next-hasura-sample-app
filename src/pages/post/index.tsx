import { NextPage } from 'next';
import React, { useCallback, useState } from 'react';

import { Editor } from '@/components/editor';

import styles from './index.module.css';

const PostPage: NextPage = () => {
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');

    const handleChangeSubject = useCallback(
        (ev: React.ChangeEvent<HTMLInputElement>) => {
            setSubject(ev.target.value);
        },
        [],
    );

    return (
        <div className={styles.editContent}>
            <input
                className={styles.subject}
                type="text"
                placeholder="タ イ ト ル"
                value={subject}
                onChange={handleChangeSubject}
            />
            <Editor
                className={styles.editor}
                placeholder="本文を書きましょう"
                value={content}
                onEdit={setContent}
            />
        </div>
    );
};

export default PostPage;
