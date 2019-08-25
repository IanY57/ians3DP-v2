import React from "react"
import styled from "styled-components"

import Section from "../components/globalFiles/section"
import PageTitle from "../components/globalFiles/PageTitle"
import { setColor } from "../styledComponents/styles"

const FeaturedProducts = ({ className }) => {
  return (
    <div className={className}>
      <Section color={setColor.mainWhite}>
        <PageTitle title="Featured" subtitle="Products" />
      </Section>
    </div>
  )
}

export default styled(FeaturedProducts)``
