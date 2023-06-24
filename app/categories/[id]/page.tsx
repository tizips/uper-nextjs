import React from "react";
import dynamic from "next/dynamic";
import {notFound} from "next/navigation";
import {doArticles, doCategory} from "@/service/api";

const Banner = dynamic(() => import('@/components/banner'));
const Item = dynamic(() => import('@/components/item'));
const Paginate = dynamic(() => import('@/components/paginate'));
const HTML = dynamic(() => import("@/components/html"));
const Empty = dynamic(() => import("@/components/empty"));

import styles from "./index.module.scss";

const Categories = async (props: APICategory.Props) => {

    const category = await doCategory(props.params.id);

    if (!category) {
        notFound()
    }

    const article = await doArticles({categories: [props.params.id], page: props?.searchParams?.page})

    return (
        <>
            <title>{category.title || category.name}</title>
            <meta name="keywords" content={category.keyword}/>
            <meta name="description" content={category.description}/>

            <Banner name={category?.name} url={category.picture}/>

            {
                category.type == 'page' ?
                    <HTML title={category.name} HTML={category.html}/> :
                    category.type == 'list' &&
                    <div className={styles.container}>
                        {
                            article.total > 0 ?
                                <>
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
                                    <Paginate
                                        uri={`/categories/${props.params.id}`}
                                        page={article.page}
                                        size={article.size}
                                        total={article.total}
                                    />
                                </>
                                : <Empty/>
                        }
                    </div>
            }
        </>
    )
}

export default Categories;