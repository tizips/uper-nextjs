import React from "react";
import dynamic from "next/dynamic";
import {notFound} from "next/navigation";
import {doArticle} from "@/service/api";

const Banner = dynamic(() => import('@/components/banner'));
const HTML = dynamic(() => import("@/components/html"));

import styles from './index.module.scss';

const Article = async (props: APIArticle.Props) => {

    const article = await doArticle(props.params.id);

    if (!article) {
        notFound();
    }

    return (
        <>
            <title>{article.title || article.name}</title>
            <meta name="keywords" content={article.keyword}/>
            <meta name="description" content={article.description}/>

            <Banner name={article.name} url={article.picture}/>

            <div className={styles.container}>
                <HTML title={article.name} HTML={article.html}/>
            </div>
        </>
    )
}

export default Article;