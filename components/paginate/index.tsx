import React from "react";
import Link from "next/link";

import styles from './index.module.scss';

const Paginate = (props: APIComPaginate.Props) => {

    return (
        props.total > props.size &&
        <div className={styles.container}>
            <div>
                <Link
                    href={{pathname: props.uri, query: {page: props.page - 1}}}
                    className={`${props.page <= 1 ? styles.disable : ''}`}
                >
                    <i className='iconfont'>&#xe617;</i>
                </Link>
            </div>
            <div className={styles.page}>
                <span>{props.page}</span>
            </div>
            <div>
                <Link
                    href={{pathname: props.uri, query: {page: props.page + 1}}}
                    className={`${props.total <= props.page * props.size ? styles.disable : ''}`}
                >
                    <i className='iconfont'>&#xe61a;</i>
                </Link>
            </div>
        </div>
    )
}

export default Paginate;