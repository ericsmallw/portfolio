import React from "react"
import {
  HeaderContainer,
  HeaderTitle,
  RightHeader,
  LeftHeader, SocialLinksTopContainer, SocialLinks,
} from "../styles/header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"

const Header = ({ siteTitle }) => (
  <header style={HeaderContainer}>
    <div style={LeftHeader}>
      <h3 style={HeaderTitle}>
        {siteTitle}
      </h3>
    </div>
    <div style={RightHeader}>
      <div style={SocialLinksTopContainer}>
        <FontAwesomeIcon icon={faLinkedin} style={SocialLinks} size="lg"/>
        <FontAwesomeIcon icon={faGithubSquare} style={SocialLinks} size="lg"/>
        <FontAwesomeIcon icon={faTwitterSquare} style={SocialLinks} size="lg"/>
      </div>
    </div>
  </header>
);

export default Header
