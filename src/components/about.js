import React from "react"
import {
    AboutContainer,
    LeftAboutPanel,
    RightAboutPanel,
    AboutContentContainer,
    AboutTitle,
    AboutDetailsContainer, AboutCol
} from "../styles/about";

const About = () => {
    return(
        <div style={{...AboutContainer}}>
            <div style={LeftAboutPanel}> </div>
            <div style={RightAboutPanel}> </div>
            <div style={AboutContentContainer}>
            <span style={AboutTitle}>
              About Me
            </span>
                <div style={AboutDetailsContainer}>
                    <div style={AboutCol}/>
                    <div style={AboutCol}/>
                </div>
            </div>
        </div>
    );
};

export default About;
