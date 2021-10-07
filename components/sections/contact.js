import React from 'react'

const SectionContact = () => {
  return (
    <section className='section-contact'>
      <div className='row'>
        <div className='contact'>
          <div className='contact__form'>
            <form action='#' className='form'>
              <div className='u-margin-bottom-medium'>
                <h2 className='heading-secondary'>Let's stay in touch.</h2>
              </div>
              <div className='form__group'>
                <input
                  id='name'
                  type='text'
                  className='form__input'
                  placeholder='Full Name'
                  required
                />
                <label htmlFor='name' className='form__label'>
                  Your Name
                </label>
              </div>
              <div className='form__group'>
                <input
                  id='email'
                  type='email'
                  className='form__input'
                  placeholder='Email'
                  required
                />
                <label htmlFor='email' className='form__label'>
                  Email
                </label>
              </div>
              <div className='form__group u-margin-bottom-medium'>
                <div className='form__radio-group'>
                  <input
                    id='newsletter'
                    name='newsletter'
                    type='radio'
                    className='form__radio-input'
                    defaultChecked
                  />
                  <label htmlFor='newsletter' className='form__radio-label'>
                    <span className='form__radio-button'></span>
                    Newsletter
                  </label>
                </div>
                <div className='form__radio-group'>
                  <input
                    id='gospel'
                    name='gospel'
                    type='radio'
                    className='form__radio-input'
                  />
                  <label htmlFor='gospel' className='form__radio-label'>
                    <span className='form__radio-button'></span>
                    Learn about Jesus
                  </label>
                </div>
              </div>
              <div className='form__group'>
                <button className='btn btn--primary'>Submit &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionContact