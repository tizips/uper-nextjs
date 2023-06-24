import React from "react";
import dynamic from "next/dynamic";
import {doArticles} from "@/service/api";

const Banner = dynamic(() => import('@/components/banner'));
const Item = dynamic(() => import('@/components/item'));
const Paginate = dynamic(() => import('@/components/paginate'));

import styles from './page.module.scss';

const Home = async (props: APIHome.Props) => {

    const article = await doArticles({page: props?.searchParams?.page})

    return (
        <>
            <title>首页</title>
            <meta name="keywords" content=''/>
            <meta name="description" content=''/>

            <Banner name='首页'/>
            <div className={styles.container}>
                {
                    article.data?.map(item => (
                        <Item
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            category={item.category}
                            summary={item.summary}
                            created_at={item.created_at}
                        />
                    ))
                }
            </div>
            <Paginate
                uri='/'
                page={article.page}
                size={article.size}
                total={article.total}
            />
        </>
    )
}

export default Home;