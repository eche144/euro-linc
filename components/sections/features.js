import React from 'react'

import { PuzzleIcon, SparklesIcon, UserGroupIcon, GlobeIcon } from '@heroicons/react/outline'

const SectionFeatures = () => {
  return (
    <section className='section-features'>
      <div className='row'>
        <div className='col-1-of-4'>
          <div className='feature-box'>
            <PuzzleIcon className='feature-box__icon' />
            <h3 className='heading-tertiary u-margin-bottom-small'>Connect</h3>
            <p className='feature-box__text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='feature-box'>
            <SparklesIcon className='feature-box__icon' />
            <h3 className='heading-tertiary u-margin-bottom-small'>Grow</h3>
            <p className='feature-box__text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='feature-box'>
            <UserGroupIcon className='feature-box__icon' />
            <h3 className='heading-tertiary u-margin-bottom-small'>Disciple</h3>
            <p className='feature-box__text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='feature-box'>
            <GlobeIcon className='feature-box__icon' />
            <h3 className='heading-tertiary u-margin-bottom-small'>Go</h3>
            <p className='feature-box__text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionFeatures
