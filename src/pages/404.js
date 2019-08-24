import React from "react"

import Layout from "../components/globalFiles/Layout"
import Hero from "../components/globalFiles/Hero"

const errorPage = ({ data }) => {
  return (
    <Layout>
      <Hero img={data.error.childImageSharp.fluid} />
      Something has gone horribly worng
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
