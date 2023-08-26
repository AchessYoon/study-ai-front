"use client"

import { ChangeEvent, useEffect, useState } from 'react'
import styles from './answerInput.module.css'

export default function AnswerInput() {
  const answer = "42"
  const colorMap = {
    "neutral": "black",
    "right": "#36ba72",
    "wrong": "#d13134",
  }

  const [inputValue, setInputValue] = useState('');
  const [answerState, setAnswerState] = useState<"neutral"|"right"|"wrong">("neutral")

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setAnswerState("neutral")
  }

  const handleSubmit = ()=>{
    if(inputValue==answer)
      setAnswerState("right")
    else
      setAnswerState("wrong")
  }

  return (
    <div className={styles.answer}>
      <input className={styles.input} type="text" placeholder="답안을 입력해주세요." style={{ color: colorMap[answerState] }} 
        onChange={handleChange} onFocus={handleChange} value={inputValue} disabled={answerState=="right"}/>
      <div className={styles.submitWrapper}>
        <button className={styles.submitButton} onClick={handleSubmit} disabled={answerState=="right"}>제출</button>
      </div>
    </div>
  )
}
