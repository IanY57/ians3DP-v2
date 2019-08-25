import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/globalFiles/Layout"
import Hero from "../components/globalFiles/Hero"
import Banner from "../components/globalFiles/banner"
import Services from "../components/Services"
import LatestPosts from "../components/LatestPosts"
import FeaturedProducts from "../components/FeaturedProducts"

import {
  setLetterSpacing,
  setColor,
  setRem,
  setTransition,
} from "../styledComponents/styles"

const index = ({ data, className }) => (
  <Layout>
    <div className={className}>
      <Hero img={data.home.childImageSharp.fluid}>
        <Banner
          greeting="Ian's 3D"
          title="Printing Service"
          text="Using FDM (Fused Deposition Modeling) and PLA (Polylactic Acid) plastics"
        >
          <AniLink fade to="/about" className="btn-primary">
            Read More About Us
          </AniLink>
        </Banner>
      </Hero>
      <Services />
      <LatestPosts />
      <FeaturedProducts />
    </div>
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

export default styled(index)`
  .btn-primary {
    text-transform: uppercase;
    ${setLetterSpacing()};
    color: ${setColor.primaryColor};
    border: 3px solid ${setColor.primaryColor};
    margin: ${setRem(25)};
    padding: 0.9rem 1.6rem;
    display: inline-block;
    ${setTransition()}
    cursor: pointer;

    &:hover {
      background: ${setColor.primaryColor};
      color: ${setColor.mainBlack};
    }
  }
`
