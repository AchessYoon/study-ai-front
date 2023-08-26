"use client"

import { useEffect, useRef, useState } from 'react';
import styles from './hint.module.css'

export default function Hint({title, content}:{title: string, content: string}) {
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        setContentHeight(contentRef?.current?.clientHeight ?? 0);
    }, []);

    useEffect(() => {
        contentRef.current?.style.setProperty('--contentHeight', contentHeight + "");
    }, [contentHeight]);

    return (
        <details className={styles.hint}>
            <summary className={styles.hintSummary}>
                <span className={styles.circle}><div className={styles.arrowWapper}><i className={styles.arrow}/></div></span>
                {title}
            </summary>
            <div className={styles.detailsWrapper}>
                <p className={styles.detailsContent} ref={contentRef}>{content}</p>
            </div>
        </details>
    )
}
