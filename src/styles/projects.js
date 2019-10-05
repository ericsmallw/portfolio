import {
    FlexContainer,
    RightSkew,
    LeftSkew,
    SectionBorder,
    FontFamily,
    SiteColors
} from "./main"
import ItWorksPng from '../images/itworks.png';
import LoisPng from '../images/lois.png';
import UberPng from '../images/uber.png';
import EscreenPng from '../images/escreengohh.png';
import WhizzimoPng from '../images/whizzimo.png';
import DiversityPng from '../images/diversity.png';

const ProjectsContainer = {
    ...FlexContainer,
};

const ProjectsShared = {
    marginBottom: `20px`,
    padding: '50px 0 20px 0',
    marginTop: '-30px',
    flex: `50%`,
    height: '600px',
    overflow: 'hidden',
    backgroundColor: `${SiteColors.sunsetPurple}`
};

const RightProjectPanel = {
    ...ProjectsShared,
    ...SectionBorder,
    ...RightSkew
};

const LeftProjectPanel = {
    ...ProjectsShared,
    ...SectionBorder,
    ...LeftSkew
};

const ProjectsContentContainer = {
    ...FontFamily,
    ...{
        position: 'absolute',
        color: 'white',
        width:'100%',
        marginTop: '40px',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    }
};

const ProjectsTitle = {
    fontSize: 'calc(10px + 2vw)',
    color: 'white'
};

const RecentProjectsContainer = {
    ...FlexContainer,
    ...{
        padding: '40px 25% 0 25%',
        width: '90%'
    }
};

const RecentProjectsCol = {
    flex: '33%',
    backgroundColor: 'white',
    height: '200px',
    margin: '5px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    border: '5px solid whtie'
};

const ItWorks = {
    ...RecentProjectsCol,
    ...{
        backgroundImage: `url(${ItWorksPng})`,
    }
};
const Lois = {
    ...RecentProjectsCol,
    ...{
        backgroundImage: `url(${LoisPng})`,
    }
};

const Uber = {
    ...RecentProjectsCol,
    ...{
        backgroundImage: `url(${UberPng})`,
    }
};

const EscreenGo = {
    ...RecentProjectsCol,
    ...{
        backgroundImage: `url(${EscreenPng})`,
    }
};

const Whizzimo = {
    ...RecentProjectsCol,
    ...{
        backgroundImage: `url(${WhizzimoPng})`,
    }
};

const Diversity = {
    ...RecentProjectsCol,
    ...{
        backgroundImage: `url(${DiversityPng})`,
    }
};

export {
    ProjectsContainer,
    RightProjectPanel,
    LeftProjectPanel,
    ProjectsContentContainer,
    ProjectsTitle,
    RecentProjectsContainer,
    RecentProjectsCol,
    ItWorks,
    Lois,
    Uber,
    EscreenGo,
    Whizzimo,
    Diversity
};
