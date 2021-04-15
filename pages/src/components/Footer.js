import styles from '../../../styles/Home.module.css'

export default function Home() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="animate__animated animate__bounce animate__delay-2s">
          Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </div>
      </a>
    </footer>
  )
}
