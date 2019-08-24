import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/globalFiles/Layout"
import Hero from "../components/globalFiles/Hero"
import Banner from "../components/globalFiles/banner"

const index = ({ data }) => (
  <Layout>
    <Hero img={data.home.childImageSharp.fluid}>
      <Banner
        greeting="Ian's 3D"
        title="Printing Service"
        text="Using FDM (Fused Deposition Modeling) and PLA (Polylactic Acid) plastics"
      ></Banner>
    </Hero>
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
