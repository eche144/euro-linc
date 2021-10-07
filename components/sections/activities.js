import React from 'react'

const SectionActivities = () => {
  return (
    <section className='section-activities'>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>Upcoming Events</h2>
      </div>
      <div className='row'>
        <div className='col-1-of-3'>
          <div className='card'>
            <div className='card__side card__side--front'>
              <div className='card__picture card__picture--1'>&nbsp;</div>
              <h4 className='card__heading'>
                <span className='card__heading-span card__heading-span--1'>
                  Ichitucknee
                </span>
              </h4>
              <div className='card__details'>
                <ul>
                  <li>Go tubing</li>
                  <li>Eat BBQ</li>
                  <li>Mosquitoes included</li>
                </ul>
              </div>
            </div>
            <div className='card__side card__side--back card__side--back-1'>
              <div className='card__cta'>
                <div className='card__price-box'>
                  <p className='card__price-only'>Only</p>
                  <p className='card__price-value'>$297</p>
                </div>
                <a href='#' className='btn btn--white'>
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-1-of-3'>
          <div className='card'>
            <div className='card__side card__side--front'>
              <div className='card__picture card__picture--2'>&nbsp;</div>
              <h4 className='card__heading'>
                <span className='card__heading-span card__heading-span--2'>
                  Women's Retreat
                </span>
              </h4>
              <div className='card__details'>
                <ul>
                  <li>Speaker: Probably Jan</li>
                  <li>Eat chocolate</li>
                  <li>Talk about girl stuff</li>
                </ul>
              </div>
            </div>
            <div className='card__side card__side--back card__side--back-2'>
              <div className='card__cta'>
                <div className='card__price-box'>
                  <p className='card__price-only'>Only</p>
                  <p className='card__price-value'>$497</p>
                </div>
                <a href='#' className='btn btn--white'>
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-1-of-3'>
          <div className='card'>
            <div className='card__side card__side--front'>
              <div className='card__picture card__picture--3'>&nbsp;</div>
              <h4 className='card__heading'>
                <span className='card__heading-span card__heading-span--3'>
                  Faithwalkers
                </span>
              </h4>
              <div className='card__details'>
                <ul>
                  <li>3 days 2 nights</li>
                  <li>Asheville, NC</li>
                  <li>Financial aid available</li>
                </ul>
              </div>
            </div>
            <div className='card__side card__side--back card__side--back-3'>
              <div className='card__cta'>
                <div className='card__price-box'>
                  <p className='card__price-only'>Only</p>
                  <p className='card__price-value'>$897</p>
                </div>
                <a href='#' className='btn btn--white'>
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='u-center-text u-margin-top-huge'>
        <a href='#' className='btn btn--primary'>
          Learn more
        </a>
      </div>
    </section>
  )
}

export default SectionActivities