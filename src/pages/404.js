import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/globalFiles/Layout"
import Hero from "../components/globalFiles/Hero"
import Banner from "../components/globalFiles/banner"

const errorPage = ({ data }) => {
  return (
    <Layout>
      <Hero img={data.error.childImageSharp.fluid}>
        <Banner
          greeting="Error"
          title="Page"
          text="Something has gone horribly worng"
        ></Banner>
      </Hero>
    </Layout>
  )
}

export const query = graphql`
  query {
    error: file(relativePath: { eq: "errorPage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default errorPage
