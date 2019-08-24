import { createGlobalStyle } from "styled-components"

// font-family: 'Quicksand', sans-serif;
// font-family: 'Satisfy', cursive;

import { setColor, setFont, setLetterSpacing } from "../styledComponents/styles"

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Merriweather:400,700&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 100%;
  color:${setColor.mainBlack};
  background: ${setColor.lightGrey}; 
  ${setFont.mainFont};
  line-height: 1.4;
  font-size: 1rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: ${setFont.headingFont};
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  ${setLetterSpacing(3)}
}
p {
  margin-bottom: 1.25rem;
}
a {
  text-decoration: none;
}
`

export default GlobalStyles
