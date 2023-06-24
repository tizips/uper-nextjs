import React from "react";
import {doLinks} from "@/service/api";

import styles from './index.module.scss';

const Link = async () => {

    const links = await doLinks();

    return (
        links &&
        <div className={styles.container}>
            <ul>
                {
                    links?.map(item => (
                        <li key={item.id}>
                            <a href={item.uri} target='_blank'>{item.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Link;