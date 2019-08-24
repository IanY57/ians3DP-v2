import styled from "styled-components"

import {
  setColor,
  setRem,
  setLetterSpacing,
  setFont,
  setBorder,
  setTransition,
} from "../../styledComponents/styles"

export const PrimaryBtn = styled.button`
  display: inline-block;

  background: ${setColor.primaryColor};
  color: ${setColor.mainWhite};
  text-transform: capitalize;
  font-size: ${setRem(18)};
  ${setFont.mainFont};
  padding: ${setRem(17)} ${setRem(36)};
  ${setBorder({ color: setColor.primaryColor })};
  ${setLetterSpacing(3)};
  ${setTransition()}
  text-decoration-color: ${setColor.primaryColor};
  text-decoration: none;

  &:hover {
    background: transparent;

    text-decoration-color: ${setColor.primaryColor};
    text-decoration: none;
  }

  ${props =>
    `margin: ${props.Top || 0} ${props.Right || 0} ${props.Bottom ||
      0} ${props.Left || 0}}`};
  cursor: pointer;
`

export const SmallBtn = styled(PrimaryBtn)`
  padding: ${setRem(9)} ${setRem(12)};
`
