import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jeky blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          개발자 이제찬
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>만들 재료 &rarr;</h3>
            <Chip
              icon={<FaceIcon />}
              label="Primary clickable"
              clickable
              color="primary"
              deleteIcon={<DoneIcon />}
            />
          </a>

          <a href="https://hyeee.me/" className={styles.card}>
            <h3>레이아웃 구성 &rarr;</h3>
            <p>page 1 경력? </p>
          </a>
          <a href="https://mattfarley.ca/" className={styles.card}>
            <h3>레이아웃 구성 &rarr;</h3>
            <p>page 2 기술스택 </p>
          </a>
          <a href="https://hyeee.me/" className={styles.card}>
            <h3>레이아웃 구성 &rarr;</h3>
            <p>page 1 </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
