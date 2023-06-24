import React from "react";
import dynamic from "next/dynamic";
import {doSetting} from "@/service/api";

const Header = dynamic(() => import('@/components/header'));
const Link = dynamic(() => import('@/components/link'));
const Footer = dynamic(() => import('@/components/footer'));

import '@/styles/globals.scss';

import styles from "@/app/layout.module.scss";

const RootLayout = async ({children}: { children: React.ReactNode }) => {

    const setting = await doSetting();

    return (
        <html lang="en">
        <body>
        <div className={styles.container}>
            <Header name={setting?.name}/>
            {children}
            <Link />
            <Footer setting={setting}/>
        </div>
        </body>
        </html>
    )
}

export default RootLayout;