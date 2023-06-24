import React from "react";

import styles from './index.module.scss';

const HTML = (props: APIComHTML.Props) => {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{props.title}</h1>
            {
                props.HTML &&
                <div className={styles.content} dangerouslySetInnerHTML={{__html: props.HTML}}/>
            }
        </div>
    )
}

export default HTML;