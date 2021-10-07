import React from 'react'

const NavigationButton = () => {
  return (
    <div className="navigation">
      <input
        id="navigation-toggle"
        type="checkbox"
        className="navigation__checkbox"
      />
      <label htmlFor="navigation-toggle" className="navigation__button"><span className="navigation__icon">&nbsp;</span></label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item"><a href="#" className="navigation__link">About GCL</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link">Statement of faith</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link">Calendar of activities</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link">Our stories</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link">Get in touch</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavigationButton
