import {SectionBorder, FontFamily, LeftSkew, RightSkew, FlexContainer, SiteColors} from './main';

const gradient = {color1: '#2C3E50', color2: '#3d7181', color3: '#4CA1AF'};

const BlurbTextShared = {
    ...FontFamily,
    ...{
        color: 'white',
        fontSize: 'calc(20px + 2vw)',
        fontFamily: 'Lucida Console',
        position: 'absolute',
        transform: 'skew(0deg, -3deg)',
    }

};

const Line1 = {
    ...BlurbTextShared,
    ...{
        right: '0%',
        top: '30%'
    }
};

const Line2 = {
    ...BlurbTextShared,
    ...{
        right: '0%',
        top: '45%'
    }
};

const Line3 = {
    ...BlurbTextShared,
    ...{
        right: '0%',
        top: '60%'
    }
};

const BlurbContainer = {
    ...FlexContainer,
};

const BlurbShared = {
    marginBottom: `20px`,
    padding: '50px 0 20px 0',
    marginTop: '-30px',
    flex: `50%`,
    height: '500px',
};

const RightBlurb = {
    ...BlurbShared,
    ...RightSkew,
    ...{
        backgroundImage: `linear-gradient(to right, ${gradient.color2}, ${gradient.color3})`,
        overflow: 'hidden'
    }
};

const LeftBlurb = {
    ...BlurbShared,
    ...LeftSkew,
    ...{
        backgroundImage: `linear-gradient(to right, ${gradient.color1}, ${gradient.color2})`
    }
};

const JudoImage = {
    ...LeftSkew,
    ...{
        position: 'absolute',
        left: '13%',
        width: '90%',
        top: '-20%',
        filter: `opacity(.8)`
    }

};

export {Line1, Line2, Line3, BlurbContainer, RightBlurb, LeftBlurb, JudoImage};

