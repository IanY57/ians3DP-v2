import React from "react"

import Layout from "../components/globalFiles/Layout"
import Hero from "../components/globalFiles/Hero"
import Banner from "../components/globalFiles/banner"

const products = ({ data }) => {
  return (
    <Layout>
      <Hero img={data.products.childImageSharp.fluid}>
        <Banner
          greeting="Our"
          title="Products"
          text="A sellection of thing to buy"
        />
      </Hero>
    </Layout>
  )
}

export const query = graphql`
  query {
    products: file(relativePath: { eq: "products.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default products
