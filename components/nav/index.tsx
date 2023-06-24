'use client';

import React, {useState} from "react";
import Link from "next/link";

import styles from "./index.module.scss";

const Nav = (props: APIComNav.Props) => {

    const [nav, setNav] = useState(false);

    return (
        <>
            <nav className={`${styles.mobile} ${nav && styles.open}`}>
                <ul>
                    <li><Link href="/">首页</Link></li>
                    {
                        props.categories?.map(item => (
                            <li key={item.id}>
                                {
                                    item.children ?
                                        <span>{item.name}</span> :
                                        <Link href={`/categories/${item.id}`}>{item.name}</Link>
                                }
                                {
                                    item.children &&
                                    <ul className="sub-menu">
                                        {
                                            item.children.map(value => (
                                                <li key={value.id}>
                                                    <Link href={`/categories/${value.id}`}>{value.name}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                }
                            </li>
                        ))
                    }
                </ul>
                <div onClick={() => setNav(!nav)} className={styles.btn}>
                    <i className={styles.i_1}></i>
                    <i className={styles.i_2}></i>
                </div>
            </nav>
            <nav className={styles.pc}>
                <ul>
                    <li><Link href="/">首页</Link></li>
                    {
                        props.categories?.map(item => (
                            <li key={item.id}>
                                {
                                    item.children ?
                                        <span>{item.name}</span> :
                                        <Link href={`/categories/${item.id}`}>{item.name}</Link>
                                }
                                {
                                    item.children &&
                                    <ul className="sub-menu">
                                        {
                                            item.children.map(value => (
                                                <li key={value.id}>
                                                    <Link href={`/categories/${value.id}`}>{value.name}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                }
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    )
}

export default Nav;