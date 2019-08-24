import React from "react"

import Layout from "../components/globalFiles/Layout"
import Hero from "../components/globalFiles/Hero"
import Banner from "../components/globalFiles/banner"

const contact = ({ data }) => {
  return (
    <Layout>
      <Hero img={data.contact.childImageSharp.fluid}>
        <Banner
          greeting="Contact"
          title="Us"
          text="drop us a line or ask a question"
        />
      </Hero>
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
