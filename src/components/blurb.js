import React from "react"
import {Line1, Line2, Line3, BlurbContainer, JudoImage, LeftBlurb, RightBlurb} from "../styles/blurb";
import Judo from "../images/judo.png";

const Blurb = () => {
  return(
      <div style={{...BlurbContainer}}>
          <div style={{...LeftBlurb,}}>
              <span style={Line1}>web devolopment /</span>
              <span style={Line2}>software architecture /</span>
              <span style={Line3}>judo.</span>
          </div>
          <div style={RightBlurb}>
              <img src={Judo} style={JudoImage} alt={'Judo'}/>
          </div>
      </div>
  );
};

export default Blurb;