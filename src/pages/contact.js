import React from "react"

import Layout from "../components/globalFiles/Layout"
import Hero from "../components/globalFiles/Hero"

const contact = ({ data }) => {
  return (
    <Layout>
      <Hero img={data.contact.childImageSharp.fluid} />
      contact page
    </Layout>
  )
}

export const query = graphql`
  query {
    contact: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default contact
