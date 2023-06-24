'use client';

import React, {useState} from "react";
import {useRouter} from 'next/navigation'

import styles from './index.module.scss';

const Search = () => {

    const router = useRouter();

    const [keyword, setKeyword] = useState('')
    const [open, setOpen] = useState(false);

    const onChange = (e: any) => {

        const {value}: { value: any } = e.target;

        setKeyword(value);
    }

    const onSubmit = (e: any) => {

        setOpen(false);

        router.push(`/search?keyword=${encodeURI(keyword)}`);

        setKeyword('');

        e.preventDefault();
    }

    return (
        <>
            <div onClick={() => setOpen(true)} className={styles.btn}/>
            <form onSubmit={onSubmit} className={`${styles.form}`} style={{display: open ? 'block' : 'none'}}>
                <div className={styles.container}>
                    <p className={styles.micro}>你想搜索什么...</p>
                    <input placeholder="Enter search keywords..." type="text" value={keyword} onChange={onChange}/>
                    <button type="button"/>
                </div>
                <div className={styles.close} onClick={() => setOpen(false)}/>
            </form>
        </>
    )
}

export default Search