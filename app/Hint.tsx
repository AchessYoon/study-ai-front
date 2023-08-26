"use client"

import { useEffect, useRef, useState } from 'react';
import styles from './hint.module.css'

const hint = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

export default function Hint({title}:{title: string}) {
    // const { summary, children } = props;
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        console.log(contentRef?.current)
        setContentHeight(contentRef?.current?.clientHeight ?? 0);
    }, []);

    useEffect(() => {
        contentRef.current?.style.setProperty('--contentHeight', contentHeight + "");
        console.log(contentHeight)
    }, [contentHeight]);

    return (
        <details className={styles.hint}>
            <summary className={styles.hintSummary}>
                <span className={styles.circle}><div className={styles.arrowWapper}><i className={styles.arrow}/></div></span>
                {title}
            </summary>
            <div className={styles.detailsWrapper}>
                <p className={styles.detailsContent} ref={contentRef}>{hint}</p>
            </div>
        </details>
    )
}
