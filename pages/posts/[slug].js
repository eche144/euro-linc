import Layout from '../../components/layout'
import client from '../../apollo-client'
import { gql } from '@apollo/client'

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query allPosts {
        posts(first: 500) {
          nodes {
            slug
          }
        }
      }
    `,
  })

  const paths = data.posts.nodes.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = await getBySlug(params.slug)
  return { props: { post } }
}

export async function getBySlug(slug) {
  const { data } = await client
    .query({
      query: gql`
        query post($slug: String) {
          postBy(slug: $slug) {
            title
            content(format: RENDERED)
          }
        }
      `,
      variables: {
        slug,
      },
    })
    return data.postBy
}

export default function Post({post}) {
  return (
    <Layout>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.content}}></div>
    </Layout>
  )
}
