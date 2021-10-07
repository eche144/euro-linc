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
          <span className='heading-primary--main'>LINC Europe 2021</span>
          <span className='heading-primary--sub'>
            Build the Kingdom with your summer.
          </span>
        </h1>
        <div className="header__button-box">
          <Link href='#'>
            <a className='btn btn--white btn--animated'>
              About
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
