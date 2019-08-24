import React from "react"

import Layout from "../components/globalFiles/Layout"
import Hero from "../components/globalFiles/Hero"
import Banner from "../components/globalFiles/banner"

const aboutPage = ({ data }) => {
  return (
    <Layout>
      <Hero img={data.about.childImageSharp.fluid}>
        <Banner
          greeting="About"
          title="Us"
          text="What we do and how we do it"
        />
      </Hero>
    </Layout>
  )
}

export const query = graphql`
  query {
    about: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default aboutPage
