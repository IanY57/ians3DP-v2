import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from "gatsby"

import {
  setRem,
  setFont,
  setFlex,
  setColor,
  setLetterSpacing,
  setTransition,
  setShadow,
} from "../../styledComponents/styles"

const BlogCard = ({ blog, className }) => {
  const { slug, title, image, published } = blog
  console.log(slug)

  return (
    <div className={className}>
      <article className="blog">
        <div className="container">
          <Image fluid={image.fluid} className="img" alt="single post" />
          <Link className="link" to={`/blog/${slug}`}>
            read more
          </Link>
          <h6 className="date">{published}</h6>
        </div>
        <div className="footer">
          <h4>{title}</h4>
        </div>
      </article>
    </div>
  )
}

export default styled(BlogCard)`
  .blog {
    ${setShadow.light};
    ${setTransition()};
    &:hover {
      ${setShadow.darkest};
    }
  }

  .container {
    position: relative;
    background: ${setColor.primaryColor};
    ${setTransition()};
    &:hover .img {
      ${setTransition()};
      opacity: 0.5;
    }
    &:hover .link {
      opacity: 1;
    }
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    text-transform: uppercase;
    ${setLetterSpacing()};
    color: ${setColor.mainWhite};
    border: 2px solid ${setColor.mainWhite};
    padding: 0.5rem 0.7rem;
    display: inline-block;
    ${setTransition()};
    cursor: pointer;
    &:hover {
      background: ${setColor.mainWhite};
      color: ${setColor.primaryColor};
    }
  }
  .footer {
    padding: 1rem;
    text-align: center;
  }
  .footer h4 {
    text-transform: capitalize;
    margin-bottom: 0;
  }
  .date {
    position: absolute;
    left: 0;
    top: 75%;
    background: ${setColor.primaryColor};
    padding: 0.3rem 0.5rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`
