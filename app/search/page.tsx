import React from "react";
import dynamic from "next/dynamic";
import {doSearch} from "@/service/api";

const Banner = dynamic(() => import('@/components/banner'));
const Item = dynamic(() => import('@/components/item'));
const Paginate = dynamic(() => import('@/components/paginate'));
const Empty = dynamic(() => import("@/components/empty"));

import styles from './index.module.scss';

const Search = async (props: APISearch.Props) => {

    let search: API.Paginate<API.Articles> = {page: 0, size: 0, total: 0}

    if (props.searchParams?.keyword) {
        search = await doSearch({keyword: props?.searchParams?.keyword, page: props.searchParams?.page});
    }

    return (
        <>
            <title>Search - 搜索</title>
            <meta name="keywords" content=''/>
            <meta name="description" content=''/>
            <Banner name='Search'/>
            <div className={styles.container}>
                {
                    search.total > 0 ?
                        <>
                            {
                                search.data?.map(item => (
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
                                uri='/search'
                                page={search.page}
                                size={search.size}
                                total={search.total}
                            />
                        </>
                        : <Empty/>
                }
            </div>
        </>
    )
}

export default Search;