import * as React from "react"
import { Link } from "gatsby"
import { layout, mainHeading, headerLinkHome } from "./layout.module.css"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className={mainHeading}>
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className={headerLinkHome} to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className={layout}>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
