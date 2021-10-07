import React from 'react'
import Link from 'next/link'
import styles from '../styles/header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logoBox}>
        <img
          src="/logo-white.png"
          alt='Logo'
          width={75}
          height={75}
          quality={65}
        />
      </div>
      <div className='header__text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary--main'>Gator Christian Life</span>
          <span className='heading-primary--sub'>
            Bringing college students to Christ &amp; preparing them for a lifetime of service
          </span>
        </h1>
        <div className="header__button-box">
          <Link href='#'>
            <a className='btn btn--white btn--animated'>
              About Us
            </a>
          </Link>
          <Link href='#'>
            <a className='btn btn--outline-white btn--animated'>
              Get Involved
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
