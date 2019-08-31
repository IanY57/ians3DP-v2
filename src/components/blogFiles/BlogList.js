import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import {
  setRem,
  setFont,
  setFlex,
  setColor,
} from "../../styledComponents/styles"

const BlogList = ({ className }) => {
  const { posts } = useStaticQuery(getPosts)
  return (
    <div className={className}>
      <ul className="artical">
        {posts.edges.map(({ node }) => {
          return (
            <div>
              <li key={node.id}>
                <AniLink fade to="/" className="title">
                  <h2>{node.title}</h2>
                </AniLink>
                <p className="description">{node.description.description}</p>
              </li>
            </div>
          )
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
          description {
            description
          }
        }
      }
    }
  }
`

export default styled(BlogList)`
  ${setFont.headingFont}
  .artical {
    text-align: center;
    margin: ${setRem(20)};
    list-style-type: none;
  }
  .title {
  }
  .description {
    ${setFont.mainFont};
  }
  a {
    color: ${setColor.mainBlack};
    text-decoration: none;
    &:hover {
      color: ${setColor.primaryColor};
    }
  }
`
