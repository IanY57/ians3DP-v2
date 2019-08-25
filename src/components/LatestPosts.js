import React from "react"
import styled from "styled-components"

import Section from "../components/globalFiles/section"
import PageTitle from "../components/globalFiles/PageTitle"
import { setColor } from "../styledComponents/styles"

const LatestPosts = ({ className }) => {
  return (
    <div className={className}>
      <Section color={setColor.backgroundColor}>
        <PageTitle title="Latest" subtitle="Posts" />
      </Section>
    </div>
  )
}

export default styled(LatestPosts)``
