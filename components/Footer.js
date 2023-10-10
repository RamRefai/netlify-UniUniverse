import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p>Made <span>By</span> students <span >For</span>  Students. </p>
        <img src="/unipal-logo.png" alt="Uni Universe Logo" className={styles.logo} />
      </footer>
    </>
  )
}
