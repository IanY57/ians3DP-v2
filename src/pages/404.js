import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/globalFiles/Layout"
import Hero from "../components/globalFiles/Hero"
import Banner from "../components/globalFiles/banner"

import {
  setLetterSpacing,
  setColor,
  setRem,
  setTransition,
} from "../styledComponents/styles"

const errorPage = ({ data, className }) => {
  return (
    <Layout>
      <div className={className}>
        <Hero img={data.error.childImageSharp.fluid}>
          <Banner
            greeting="Error"
            title="Page"
            text="Something has gone horribly worng"
          >
            <AniLink to="/" className="btn-primary">
              Please return home
            </AniLink>
          </Banner>
        </Hero>
      </div>
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

export default styled(errorPage)`
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
