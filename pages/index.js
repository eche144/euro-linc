import Head from '../components/head'

import NavigationButton from '../components/navigationButton'
import NavigationBar from '../components/navigationBar'
import Header from '../components/header'
import Footer from '../components/footer'

import Media from 'react-media'

import SectionAbout from '../components/sections/about'
import SectionFeatures from '../components/sections/features'
import SectionActivities from '../components/sections/activities'
import SectionLatestPosts from '../components/sections/latestPosts'
import SectionContact from '../components/sections/contact'

import { gql } from '@apollo/client'
import client from '../apollo-client'

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query allPosts {
        posts {
          nodes {
            title
            slug
          }
        }
      }
    `,
  })
  return {
    props: {
      posts: data.posts.nodes,
    },
  }
}

export default function MyApp({ posts }) {
  return (
    <>
      <Head />
      <Media
        queries={{
          small: '(max-width: 799px)',
          medium: '(min-width: 800px)',
        }}>
        {(matches) => (
          <>
            {matches.small && <NavigationButton />}
            {matches.medium && <NavigationBar />}
          </>
        )}
      </Media>
      <Header />
      <main>
        <SectionAbout />
        <SectionFeatures />
        <SectionActivities />
        <SectionLatestPosts posts={posts} />
        <SectionContact />
      </main>
      <Footer />
    </>
  )
}
