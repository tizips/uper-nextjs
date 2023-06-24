import React from "react";
import Link from "next/link";
import Nav from "@/components/nav";
import Search from "@/components/search";
import {doCategories} from "@/service/api";

import styles from './index.module.scss';

const Header = async (props: APIComHeader.Props) => {

    const categories = await doCategories();

    return (
        <header className={styles.container}>
            <div className={styles.logo}>
                <Link href="/">{props.name}</Link>
            </div>
            <Search/>
            <Nav categories={categories}/>
        </header>
    )
}

export default Header;