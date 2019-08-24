import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import links from "../../constants/links"
import socialIcons from "../../constants/social-icons"

import {
  setColor,
  setLetterSpacing,
  setTransition,
} from "../../styledComponents/styles"

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <footer className="footer">
        <div className="links">
          {links.map((item, index) => {
            return (
              <Link key={index} to={item.path}>
                {item.text}
              </Link>
            )
          })}
        </div>
        <div className="icons">
          {socialIcons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })}
        </div>
        <div className="copyright">
          copyright Ian's 3D Printing Service {new Date().getFullYear()} all
          rights reserved
        </div>
      </footer>
    </div>
  )
}

export default styled(Footer)`
  .footer {
    margin-top: auto;
    background: ${setColor.secondaryColor};
    padding: 2rem;
    text-align: center;
    color: ${setColor.mainBlack};
  }
  .links a {
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    color: ${setColor.mainBlack};
    margin: 0.5rem 1rem;
    ${setLetterSpacing(4)};
    ${setTransition()};
    font-weight: bold;
  }
  .links a:hover {
    color: ${setColor.primaryColor};
  }
  .icons a {
    display: inline-block;
    margin: 1rem;
    font-size: 1.3rem;
    color: ${setColor.mainBlack};
    ${setTransition()};
  }
  .icons a:hover {
    color: ${setColor.primaryColor};
    transform: translateY(-5px);
  }
  .copyright {
    text-transform: capitalize;
    ${setLetterSpacing()}
    line-height: 1;
  }
`
