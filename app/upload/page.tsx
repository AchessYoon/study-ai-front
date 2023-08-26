"use client"

import styles from './page.module.css'

export default function Home() {
  const onChange = () => {}
  return (
    <input type='file' 
        accept='image/jpg,impge/png,image/jpeg,image/gif' 
        name='profile_img' 
        onChange={onChange}>
    </input>
  )
}
