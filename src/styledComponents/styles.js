import { css } from "styled-components"

export const setColor = {
  primaryColor: "#d5b987",
  mainWhite: "#f5f1e6",
  backgroundColor: "#eee3cf",
  secondaryColor: "#dec89f",
  midColor: "#e4d5b6",
  mainBlack: "#222",
  mainGrey: "#ececec",
  lightGrey: "#f7f7f7",
}

export const setFont = {
  mainFont: "font-family: 'Merriweather', serif",
  headingFont: "font-family: 'Abril Fatface', cursive",
}

export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `
  display:flex;
  align-items: ${y};
  justify-content: ${x};
  `
}

export const setBackground = ({
  img = "https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  color = "rgba(0,0,0,0)",
  color2 = "rgba(0,0,0,0)",
} = {}) => {
  return `
  background: linear-gradient(${color}, ${color2}),
    url(${img}) center/cover fixed no-repeat;
  `
}

export const setRem = (number = 16) => {
  return `
  ${number / 16}rem
  `
}

export const setLetterSpacing = (number = 2) => {
  return `
  letter-spacing: ${number}px
  `
}

export const setBorder = ({
  width = "2px",
  style = "solid",
  color = "black",
} = {}) => {
  return `
    border: ${width} ${style} ${color}
  `
}

const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 572,
}
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `
  return acc
}, {})

export const setTransition = ({
  property = "all",
  time = "0.3s",
  timing = "ease-in-out",
} = {}) => {
  return `
  transition: ${property} ${time} ${timing}
  `
}

export const setShadow = {
  light: "box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75)",
  dark: "box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75)",
  darkest: "box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75)",
}
