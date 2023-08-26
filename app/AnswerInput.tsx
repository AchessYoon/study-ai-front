import styles from './answerInput.module.css'

export default function AnswerInput() {
  return (
    <div className={styles.answer}>
      <input className={styles.input} type="text" placeholder="답안을 입력해주세요."/>
      <div className={styles.submitWrapper}>
        <button className={styles.submitButton}>제출</button>
      </div>
    </div>
  )
}
