import React from "react"

import Layout from "../components/globalFiles/Layout"
import Hero from "../components/globalFiles/Hero"
import Banner from "../components/globalFiles/banner"

import BlogList from "../components/blogFiles/BlogList"

const blog = ({ data }) => {
  return (
    <Layout>
      <Hero img={data.blog.childImageSharp.fluid}>
        <Banner
          greeting="Our"
          title="Blog"
          text="A place to share some thoughts"
        />
      </Hero>
      <BlogList />
    </Layout>
  )
}

export const query = graphql`
  query {
    blog: file(relativePath: { eq: "blog.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog
