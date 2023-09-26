import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p>Made By students For Students. </p>
        <img src="/logo-netlify.svg" alt="Netlify Logo" className={styles.logo} />
      </footer>
    </>
  )
}
