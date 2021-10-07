import Head from '../components/head'
// import Image from 'next/image'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'

export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head />
      <header className={styles.header}>
        {home ? (
          <>
            <img
              priority
              src="/images/logo-white.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt="Logo"
            />
            <h1 className={utilStyles.heading2Xl}>Gator Christian Life</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt="Logo"
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>Gator Christian Life</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}