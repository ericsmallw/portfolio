import {
    FlexContainer,
    RightSkew,
    LeftSkew,
    FontFamily,
    SiteColors
} from './main';


const HeaderContainer = {
    ...FlexContainer
};

const SharedHeaderBackground = {
    backgroundColor: `${SiteColors.midnight}`,
    marginBottom: `20px`,
    padding: '50px 0 20px 0',
    marginTop: '-50px',
    flex: `50%`,
    paddingTop: `50px`,
    color: `${SiteColors.electricBlue}`
};

const RightHeader = {
    ...SharedHeaderBackground,
    ...RightSkew
};

const LeftHeader = {
    ...SharedHeaderBackground,
    ...LeftSkew
};

const HeaderTitle = {
    ...RightSkew,
    ...FontFamily,
    ...{
        marginTop: '10px',
        marginLeft: '20px',
    }
};

const SocialLinksTopContainer = {
    ...LeftSkew,
    ...{
        position: 'absolute',
        top: '65%',
        right: '10%'
    }
};

const SocialLinks = {
    marginRight: '20px'
};

export {
    HeaderContainer,
    RightHeader,
    LeftHeader,
    HeaderTitle,
    SocialLinksTopContainer,
    SocialLinks
};

