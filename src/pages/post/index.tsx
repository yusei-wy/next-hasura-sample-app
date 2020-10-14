import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';

import { UserIcon } from '@/components/user-icon';
import { Editor } from '@/components/editor';
import { SiteHeader, SiteHeaderItem } from '@/components/site-header';
import { Button } from '@/components/button';
import { usePostArticleMutation } from '@/generated/graphql';

import styles from './index.module.css';

const PostPage: NextPage = () => {
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [postDisabled, setPostDisabled] = useState(false);
    const [postArticle] = usePostArticleMutation();
    const router = useRouter();

    const handleChangeSubject = useCallback(
        (ev: React.ChangeEvent<HTMLInputElement>) => {
            setSubject(ev.target.value);
        },
        [],
    );

    const handlePost = useCallback(
        async (ev: React.FormEvent<HTMLFormElement>) => {
            ev.preventDefault();
            if (!content || !subject || postDisabled) return;
            setPostDisabled(true);

            const { data } = await postArticle({
                variables: {
                    // FIXME: authorID は一旦決め打ちにする
                    authorID: '6916e23e-261f-46ad-840d-98e84db65c5d',
                    content,
                    subject,
                    publishedAt: 'now()',
                },
            });
            if (data && data.insert_articles_one) {
                const articleID = data.insert_articles_one.id;
                // FIXME: userID 決め打ち
                router.push(`/hoge/${articleID}`);
                setPostDisabled(false);
            } else {
                console.error('POST unknown state', data);
            }
        },
        [content, subject, postDisabled, postArticle, router],
    );

    const siteHeaderRight = (
        <>
            <SiteHeaderItem>
                <form onSubmit={handlePost}>
                    <Button type="submit">
                        <span>投稿する</span>
                    </Button>
                </form>
            </SiteHeaderItem>
            <SiteHeaderItem>
                <UserIcon src="/profile.png" />
            </SiteHeaderItem>
        </>
    );

    return (
        <>
            <SiteHeader right={siteHeaderRight} />
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
        </>
    );
};

export default PostPage;
