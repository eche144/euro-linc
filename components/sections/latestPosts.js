import React from 'react'
import Link from 'next/link'

export default function SectionLatestPosts(props) {
  return (
    <section className='section-stories'>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>Sunday Service Teachings</h2>
      </div>
      {props.posts.slice(0, 2).map((post) => {
        const href = `posts/${post.slug}`
        return (
          <div className='row' key={post.slug}>
            <div className='story'>
              <figure className='story__shape'>
                <img
                  src='https://source.unsplash.com/random/300x300'
                  alt='Latest teaching'
                  className='story__image'
                />
                <figcaption className='story__caption'>Sermon Teacher</figcaption>
              </figure>
              <div className='story__text'>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Sermon Title
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore culpa a id officia illo ipsam cum laborum modi totam
                  consectetur, non, numquam rerum dolor!.
                </p>
                <Link href={href}>
                  <a className='btn-text'>Read more &rarr;</a>
                </Link>
              </div>
            </div>
          </div>
        )
      })}

      <div className='u-center-text u-margin-top-huge'>
        <a href='#' className='btn-text'>
          See all teachings &rarr;
        </a>
      </div>
    </section>
  )
}
