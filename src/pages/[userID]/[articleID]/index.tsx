import React from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Error from 'next/error';

import { useGetArticleQuery } from '@/generated/graphql';
import { Article } from '@/components/article';
import { SiteHeader } from '@/components/site-header';
import { useDIContext } from '@/context';

import styles from './index.module.css';
import { ArticleHeader } from '@/components/article/article-header';
import { ArticleFooter } from '@/components/article/article-footer';

const ArticlePage: NextPage = () => {
    const services = useDIContext((services) => services);

    const router = useRouter();
    const { articleID } = router.query;

    const { loading, error, data } = useGetArticleQuery({
        variables: {
            id: articleID as string,
        },
    });

    if (loading) {
        return <p>...loading</p>;
    }
    if (error) {
        return <p>{error.toString()}</p>;
    }
    if (!data || !data.articles_by_pk) {
        return <Error statusCode={404} />;
    }

    const { user, subject, content, publishedAt } = data.articles_by_pk;
    if (!publishedAt) {
        return <Error statusCode={404} />;
    }
    const articleHeaderProps = { user, subject, publishedAt };

    return (
        <>
            <SiteHeader />
            <div className={styles.contentContainer}>
                <ArticleHeader {...articleHeaderProps} />
                <div className={styles.content}>
                    <Article content={content} />
                </div>
                <ArticleFooter user={user} />
            </div>
        </>
    );
};

export default ArticlePage;
