import React from 'react'

const SectionAbout = () => {
  return (
    <section className="section-about">
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">
        Join a little team with a big God.
      </h2>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <h3 className="heading-tertiary u-margin-bottom-small">
          How then will they call on Him in whom they have not believed?
        </h3>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          rem architecto alias sint, labore unde quas rerum magnam quae
          autem quis reprehenderit exercitationem. Nobis harum tempora,
          veniam sed eaque vero!
        </p>

        <h3 className="heading-tertiary u-margin-bottom-small">
          Go therefore.
        </h3>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          rem architecto alias sint, labore unde quas rerum magnam quae
          autem quis reprehenderit exercitationem. Nobis harum tempora,
          veniam sed eaque vero!
        </p>

        <a href="#" className="btn-text">Learn more &rarr;</a>
      </div>
      <div className="col-1-of-2">
        <div className="composition">
          <img
            src="https://source.unsplash.com/random/400x300"
            alt="Photo 1"
            className="composition__photo composition__photo--p1"
          /><img
            src="https://source.unsplash.com/random/400x300"
            alt="Photo 2"
            className="composition__photo composition__photo--p2"
          /><img
            src="https://source.unsplash.com/random/400x300"
            alt="Photo 3"
            className="composition__photo composition__photo--p3"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default SectionAbout
