import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/globalFiles/Layout"
import Hero from "../components/globalFiles/Hero"
import Banner from "../components/globalFiles/banner"
import Section from "../components/globalFiles/section"

import { setColor, setFont, setFlex, setRem } from "../styledComponents/styles"

const aboutPage = ({ data, className }) => {
  return (
    <Layout>
      <Hero img={data.about.childImageSharp.fluid}>
        <Banner
          greeting="About"
          title="Us"
          text="What we do and how we do it"
        />
      </Hero>
      <Section className={className}>
        <article className="artical">
          <h3 className="heading">I purchased my first printer in 2013</h3>
          <p>
            "In 2013 I found an article talking about 3D printing and how the
            cost of them had fallen to the point a hobbyist could afford one",
          </p>

          <h3 className="heading">
            That Printer was a Printrbot Junior Version 2.
          </h3>
          <p>
            This printer came in kit form and took about 6 hours to assemble.
            That was the easy part. After much reading on how to calibrate the
            steppers and the extruder it finally printed a few objects.
          </p>
        </article>
      </Section>
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

export default styled(aboutPage)`
  .artical {
    margin: ${setRem(25)};
    padding: ${setRem(5)};
  }
  .heading {
    color: ${setColor.mainBlack};
    ${setFont.headingFont}
  }
`
