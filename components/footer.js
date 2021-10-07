import React from 'react'
// import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__logo-box'>
        <img
          src="/logo-white.png"
          alt='Logo'
          className='header__logo'
          width='100'
          height='100'
        />
      </div>
      <div className='row'>
        <div className='col-1-of-2'>
          <div className='footer__navigation'>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  About Us
                </a>
              </li>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  Contact
                </a>
              </li>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  Resources
                </a>
              </li>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  Good News
                </a>
              </li>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  Prayer
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-1-of-2'>
          <p className='footer__copyright'>
            Copyright &copy; Gator Christian Life
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
