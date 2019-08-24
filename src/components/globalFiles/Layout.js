import React from "react"

import GlobalStyles from "../../styledComponents/globalStyles"

import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
