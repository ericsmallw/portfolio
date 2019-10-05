import {
    FlexContainer,
    RightSkew,
    LeftSkew,
    SectionBorder,
    FontFamily,
    SiteColors
} from "./main"

const AboutContainer = {
    ...FlexContainer
};

const AboutShared = {
    marginBottom: `20px`,
    padding: '50px 0 20px 0',
    marginTop: '-30px',
    flex: `50%`,
    height: '600px',
    overflow: 'hidden',
    color: `${SiteColors.electricBlue}`,
    backgroundColor: `${SiteColors.midnight}`
};

const RightAboutPanel = {
    ...AboutShared,
    ...SectionBorder,
    ...RightSkew
};

const LeftAboutPanel = {
    ...AboutShared,
    ...SectionBorder,
    ...LeftSkew
};

const AboutContentContainer = {
    ...FontFamily,
    ...{
        position: 'absolute',
        width:'100%',
        marginTop: '40px',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        color: `${SiteColors.electricBlue}`
    }
};

const AboutTitle = {
    fontSize: 'calc(10px + 2vw)',
};

const AboutDetailsContainer = {
    ...FlexContainer,
    ...{
        padding: '0 25% 0 25%'
    }
};

const AboutCol = {
    flex: '50%',
    borderRadius: '10px',
    height: '150px',
    width: '300px',
    margin: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    filter: 'opacity(.7)',
};

export {
    AboutContainer,
    AboutContentContainer,
    AboutDetailsContainer,
    LeftAboutPanel,
    RightAboutPanel,
    AboutCol,
    AboutTitle
};