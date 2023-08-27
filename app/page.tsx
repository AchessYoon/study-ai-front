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

const problem = "철수와 영희는 자신의 집에서 상점을 향해 동시에 출발하였다. 영희의 집은 상점에서 6km떨어져 있고, 철수가 영희의 2배의 속력으로 이동하여 출발한 지 30분 만에 상점이 2km남은 지접에서 영희를 추월했을때, 철수의 속력은?(단, 영희의 집은 철수의 집과 상점사이에 있다.)"
const hint = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

export default function Home() {
  const {fileName, fileEncodedBase64, isText} = useGetFile()
  const router = useRouter()
  const [resJson, setResJson] = useState<{ hint1: string, hint2: string, hint3: string, answer: string, problemText: string}|null>()
  console.log(fileName)
  useEffect(()=>{
    if(fileName) {
      console.log(JSON.stringify({filename: fileName, fileEncodedBase64}))
      try {

        
        fetch("http://15.164.81.24:8080/api/sample",{
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({filename: fileName, fileEncodedBase64, isText})
        }).then((res)=>{res.json().then((j)=>{setResJson(j)})})
      } catch (e) {
        console.log(e)
        // router.push("/upload")

      }
    }
  },[])
  
  return (
    <>
      <div className={styles.leftSection}>
        <div className={styles.problem}>{resJson?.problemText || ""}</div>
        <textarea className={styles.solving}/>
        <div className={styles.bottomSection}>
          <AnswerInput answer={resJson?.answer || ""}/>
          <Link className={styles.uploadNew} href="/upload">
            <FontAwesomeIcon icon={faUpload}/>
            새 문제
          </Link>
        </div>
      </div>
      <div className={styles.rightSection}>
        <Hint title="힌트1" content={resJson?.hint1 || ""}/>
        <Hint title="힌트2" content={resJson?.hint2 || ""}/>
        <Hint title="전체 풀이" content={resJson?.hint3 || ""}/>
      </div>
    </>
  )
}
