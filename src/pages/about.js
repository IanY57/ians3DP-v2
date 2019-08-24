import React from "react"

import Layout from "../components/globalFiles/Layout"
import Hero from "../components/globalFiles/Hero"

const aboutPage = ({ data }) => {
  return (
    <Layout>
      <Hero img={data.about.childImageSharp.fluid} />
      about Page
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
