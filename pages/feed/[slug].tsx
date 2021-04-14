import React from 'react';
import { useRouter, NextRouter } from 'next/router';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import Toolbar from '../../components/toolbar';
import styles from '../../styles/Feed.module.scss';

const Feed: React.FC = ({
    pageNumber,
    articles,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router: NextRouter = useRouter();

    return (
        <div className='page-container'>
            <Toolbar />
            <div className={styles.main}>
                {articles.map((article: any, i: number) => (
                    <div key={i} className={styles.post}>
                        <h1
                            onClick={() => (window.location.href = article.url)}
                        >
                            {article.title}
                        </h1>
                        <p>{article.description}</p>
                        {!!article.urlToImage && (
                            <img src={article.urlToImage} />
                        )}
                    </div>
                ))}
            </div>

            <div className={styles.paginator}>
                <div
                    className={
                        pageNumber === 1 ? styles.disable : styles.active
                    }
                    onClick={() => {
                        if (pageNumber > 1) {
                            router.push(`/feed/${pageNumber - 1}`);
                        }
                    }}
                >
                    Previous Page
                </div>

                <div>{pageNumber}</div>
                <div
                    className={
                        pageNumber === 5 ? styles.disable : styles.active
                    }
                    onClick={() => {
                        if (pageNumber < 5) {
                            router.push(`/feed/${pageNumber + 1}`);
                        }
                    }}
                >
                    Next Page
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (
    pageContext: any
) => {
    const pageNumber = pageContext.query.slug;

    if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
        return {
            props: {
                articles: [],
                pageNumber: 1,
            },
        };
    }

    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
            },
        }
    );

    const apiJson = await apiResponse.json();

    const { articles } = apiJson;

    return {
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber),
        },
    };
};

export default Feed;
