import React from "react";
import dayjs from "dayjs";

import styles from './index.module.scss';
import Link from "next/link";

const Item = (props: APIComItem.Props) => {

    return (
        <div className={styles.container}>
            <h3>
                <Link href={`/articles/${props.id}`}>{props.name}</Link>
            </h3>
            <div className={styles.other}>
                <div className={styles.date}>{dayjs(props.created_at).format('YYYY-MM-DD')}</div>
                <div className={styles.category}>{props.category}</div>
            </div>
            <p className={styles.summary}>{props.summary}</p>
        </div>
    )
}

export default Item;