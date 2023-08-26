import styles from './page.module.css'
import Hint from './Hint'

const problem = "철수와 영희는 자신의 집에서 상점을 향해 동시에 출발하였다. 영희의 집은 상점에서 6km떨어져 있고, 철수가 영희의 2배의 속력으로 이동하여 출발한 지 30분 만에 상점이 2km남은 지접에서 영희를 추월했을때, 철수의 속력은?(단, 영희의 집은 철수의 집과 상점사이에 있다.)"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>{problem}</div>
      <Hint index={1}/>
    </main>
  )
}
