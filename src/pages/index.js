import React from "react"

import Layout from "../components/globalFiles/Layout"
import Hero from "../components/globalFiles/Hero"

const index = ({ data }) => (
  <Layout>
    <Hero img={data.home.childImageSharp.fluid} />
    <h1>Index page</h1>
  </Layout>
)

export const query = graphql`
  query {
    home: file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default index
