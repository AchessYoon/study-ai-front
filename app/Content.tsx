
"use client"

import styles from './page.module.css'
import Link from 'next/link'
import Hint from './Hint'
import AnswerInput from './AnswerInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { useGetFile } from './useFileContext'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Content({props: { hint1, hint2, hint3, answer, problemText}}:{props: { hint1: string, hint2: string, hint3: string, answer: string, problemText: string}}) {
  return (
    <>
      <div className={styles.leftSection}>
        <div className={styles.problem}>{problemText || ""}</div>
        <textarea className={styles.solving}/>
        <div className={styles.bottomSection}>
          <AnswerInput answer={answer || ""}/>
          <Link className={styles.uploadNew} href="/upload">
            <FontAwesomeIcon icon={faUpload}/>
            새 문제
          </Link>
        </div>
      </div>
      <div className={styles.rightSection}>
        <Hint title="힌트1" content={hint1 || ""}/>
        <Hint title="힌트2" content={hint2 || ""}/>
        <Hint title="전체 풀이" content={hint3 || ""}/>
      </div>
    </>
  )
}
