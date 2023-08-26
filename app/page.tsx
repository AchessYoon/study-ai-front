import styles from './page.module.css'
import Link from 'next/link'
import Hint from './Hint'
import AnswerInput from './AnswerInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

const problem = "철수와 영희는 자신의 집에서 상점을 향해 동시에 출발하였다. 영희의 집은 상점에서 6km떨어져 있고, 철수가 영희의 2배의 속력으로 이동하여 출발한 지 30분 만에 상점이 2km남은 지접에서 영희를 추월했을때, 철수의 속력은?(단, 영희의 집은 철수의 집과 상점사이에 있다.)"

export default function Home() {
  return (
    <>
      <div className={styles.leftSection}>
        <div className={styles.problem}>{problem}</div>
        <textarea className={styles.solving}/>
        <div className={styles.bottomSection}>
          <AnswerInput />
          <Link className={styles.uploadNew} href="/upload">
            <FontAwesomeIcon icon={faUpload}/>
            새 문제
          </Link>
        </div>
      </div>
      <div className={styles.rightSection}>
        <Hint title="힌트1"/>
        <Hint title="힌트2"/>
        <Hint title="전체 풀이"/>
      </div>
    </>
  )
}
