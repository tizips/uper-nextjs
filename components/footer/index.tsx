import React from "react";

import styles from './index.module.scss';

const Footer = (props: APIComFooter.Props) => {

    return (
        <div className={styles.container}>
            <ul>
                {
                    props.setting?.copyright &&
                    <li><span>©️{props.setting.copyright}</span></li>
                }
                {
                    props.setting?.icp &&
                    <li>
                        <a href={process.env.ICP} target='_blank'>{props.setting.icp}</a>
                    </li>
                }
                {
                    props.setting?.police &&
                    <li>
                        <a href={process.env.POLICE} target='_blank'>{props.setting.police}</a>
                    </li>
                }
            </ul>
            {
                props.setting?.signature && <p>{props.setting.signature}</p>
            }
        </div>
    )
}

export default Footer;