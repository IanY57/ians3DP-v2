import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaAlignRight } from "react-icons/fa"

import logo from "../../images/logo.png"

import links from "../../constants/links"
import socialIcons from "../../constants/social-icons"

import {
  setColor,
  setTransition,
  setLetterSpacing,
} from "../../styledComponents/styles"

const Navbar = ({ className }) => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  //console.log(isOpen)

  return (
    <div className={className}>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo" />
            <button type="button" className="logo-btn" onClick={toggleNav}>
              <FaAlignRight className="logo-icon" />
            </button>
          </div>
          <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
            {links.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>{item.text}</Link>
                </li>
              )
            })}
          </ul>
          <div className="nav-social-links">
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
        </div>
      </nav>
    </div>
  )
}

export default styled(Navbar)`
  background: ${setColor.mainWhite};

  .logo-btn {
    background: transparent;
    border: none;
    outline: none;
  }

  .logo-icon {
    color: ${setColor.mainBlack};
    font-size: 1.5rem;
  }

  .nav-links {
    list-style-type: none;
    ${setTransition()};
    height: 0;
    overflow: hidden;
  }
  .show-nav {
    height: 216px;
  }

  .nav-links a {
    display: block;
    padding: 1rem 1.25rem;
    text-decoration: none;
    text-transform: uppercase;
    color: ${setColor.mainBlack};
    ${setTransition()};
    font-weight: bold;
    ${setLetterSpacing(4)}
  }
  .nav-links a:hover {
    color: ${setColor.primaryColor};
  }

  .nav-social-links {
    display: none;
  }

  @media screen and (min-width: 576px) {
    .navbar {
      padding: 0 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .logo-btn {
      display: none;
    }
    .nav-center {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      height: auto;
      display: flex;
    }
    .nav-social-links {
      display: flex;
      line-height: 0;
    }
    .nav-social-links a {
      color: ${setColor.mainBlack};
      margin: 0 0.5rem;
      font-size: 1.2rem;
      ${setTransition()};
    }
    .nav-social-links a:hover {
      color: ${setColor.primaryColor};
      transform: translateY(-5px);
    }
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
  }
`
