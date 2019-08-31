import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const BlogList = () => {
  const { posts } = useStaticQuery(getPosts)
  return (
    <div>
      <ul>
        {posts.edges.map(({ node }) => {
          return <li key={node.id}>{node.title}</li>
        })}
      </ul>
    </div>
  )
}

const getPosts = graphql`
  query {
    posts: allContentfulBlog(sort: { fields: published, order: DESC }) {
      edges {
        node {
          published(formatString: "Do MMMM YYYY")
          title
        }
      }
    }
  }
`

export default BlogList
