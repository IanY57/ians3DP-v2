import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import BlogCard from "./BlogCard"

import {
  setRem,
  setFont,
  setFlex,
  setColor,
  setLetterSpacing,
  setTransition,
} from "../../styledComponents/styles"

const BlogList = ({ className }) => {
  const { posts } = useStaticQuery(getPosts)
  return (
    <div className={className}>
      <section className="blog">
        {/* <Title title="Our" subtitle="Blog" /> */}
        <div className="center">
          {posts.edges.map(({ node }) => {
            return <BlogCard key={node.id} blog={node} />
          })}
        </div>
      </section>
    </div>
  )
}

const getPosts = graphql`
  query {
    posts: allContentfulBlog(sort: { fields: published, order: DESC }) {
      edges {
        node {
          published(formatString: "Do MMMM YYYY")
          id: contentful_id
          title
          slug
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default styled(BlogList)`
  .blog {
    padding: 3rem 0;
  }
  .center {
    width: 80vw;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
  /* .links {
    width: 80vw;
    margin: 0 auto 5rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  } */
  /* .link {
    text-transform: uppercase;
    ${setLetterSpacing()};
    background: ${setColor.primaryColor};
    color: ${setColor.mainWhite};
    border: 2px solid ${setColor.primaryColor};
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    display: inline-block;
    ${setTransition()};
    cursor: pointer;
  } */
  /* .link:hover {
    background: transparent;
    color: ${setColor.primaryColor};
  } */
  /* .active {
    background: ${setColor.mainWhite};
    color: ${setColor.primaryColor};
  } */

  @media screen and (min-width: 576px) {
    .center {
      grid-template-columns: repeat(auto-fill, minmax(368.66px, 1fr));
    }
    /* .links {
      width: 60vw;
    } */
  }
  @media screen and (min-width: 1200px) {
    .center {
      width: 100%;
      max-width: 1170px;
    }
  }
`
