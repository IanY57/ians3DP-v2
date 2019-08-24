import React from "react"

import GlobalStyles from "../../styledComponents/globalStyles"

import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
