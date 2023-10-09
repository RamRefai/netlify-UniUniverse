import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p>Made <span STYLE={"text-decoration:underline"}>By</span> students <span STYLE={"text-decoration:underline"}>For</span>  Students. </p>
        <img src="/logo-netlify.svg" alt="Uni Universe Logo" className={styles.logo} />
      </footer>
    </>
  )
}
