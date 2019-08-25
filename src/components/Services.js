import React from "react"
import styled from "styled-components"

import Section from "../components/globalFiles/section"
import PageTitle from "../components/globalFiles/PageTitle"

import services from "../constants/services"

import { setColor } from "../styledComponents/styles"

const Services = ({ className }) => {
  return (
    <div className={className}>
      <Section color={setColor.mainWhite}>
        <PageTitle title="Our" subtitle="Services" />
        <div className="center">
          {services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            )
          })}
        </div>
      </Section>
    </div>
  )
}

export default styled(Services)`
  .center {
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 2rem;
  }
  .service {
    margin: 2rem 0;
    text-align: center;
  }
  .service span {
    background: ${setColor.primaryColor};
    padding: 0.5rem;
    display: inline-block;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  .service h4 {
    text-transform: uppercase;
  }
`
