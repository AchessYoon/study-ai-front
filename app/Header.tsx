import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Study with AI</h1>
      <nav>
        <span>Menu1</span>
      </nav>
    </header>
  )
}
