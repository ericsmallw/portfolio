/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header";
import Blurb from "./blurb";
import Projects from "./projects";
import About from "./about";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <>
        <Header siteTitle={data.site.siteMetadata.author} />
        <Blurb/>
        <Projects/>
        <About/>
    </>
  )
};

export default Layout
