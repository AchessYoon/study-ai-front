import styles from './header.module.css'
import Image from 'next/image'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>CogniCalBook</h1>
      <div className={styles.user}>
        <span className={styles.userName}>User42</span>
        <Image src={"https://ui-avatars.com/api/?name=John+Doe"} alt="user icon" width={32} height={32} unoptimized={true} className={styles.userImage}/>
      </div>
    </header>
  )
}
