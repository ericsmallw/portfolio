import React from "react"
import '../styles/hover.css';
import {
  Diversity,
  EscreenGo,
  ItWorks,
  LeftProjectPanel, Lois,
  ProjectsContainer,
  ProjectsContentContainer,
  ProjectsTitle, RecentProjectsCol, RecentProjectsContainer,
  RightProjectPanel, Uber, Whizzimo,
} from "../styles/projects"

const Projects = () => {
    return(
        <div style={{...ProjectsContainer}}>
            <div style={LeftProjectPanel}> </div>
            <div style={RightProjectPanel}> </div>
          <div style={ProjectsContentContainer}>
            <span style={ProjectsTitle}>
              recent projects
            </span>
            <div style={RecentProjectsContainer}>
              <div style={Lois} className='hvr-grow'/>
              <div style={Diversity} className='hvr-grow'/>
              <div style={EscreenGo} className='hvr-grow'/>
            </div>
            <div style={RecentProjectsContainer}>
              <div style={Whizzimo} className='hvr-grow'/>
              <div style={Uber} className='hvr-grow'/>
              <div style={ItWorks} className='hvr-grow'/>
            </div>
          </div>
        </div>
    );
};

export default Projects;
