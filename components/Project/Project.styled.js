// ****************************************/
// Project
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";
import { motion } from "framer-motion";

const ProjectStyles = styled(motion.section)`
  padding-top: ${(props) => props.theme.sitePaddingTop};
  ${media.smallDesktopAndBelow`
  	width: 100%;
  	padding-top: ${(props) => props.theme.sitePaddingTopDesktop};
	`}
  ${media.tabletPortraitAndBelow`
		padding-top: ${(props) => props.theme.sitePaddingTopMobile};
	`}

  .description {
    padding: 13rem ${(props) => props.theme.sitePaddingLeftRight};
    border-bottom: 1px solid black;
    ${media.smallDesktopAndBelow`
      padding: 130px ${(props) => props.theme.sitePaddingLeftRightDesktop};
    `}
    ${media.tabletPortraitAndBelow`
      padding: 90px ${(props) => props.theme.sitePaddingLeftRightMobile};
    `}
    ${media.minDevicePixelRatio2`
      border-width: 0.5px;
    `}
  }

  .description h1,
  .description > p,
  .description > div p {
    font-size: ${font.h1};
    font-family: ${font.family200};
    line-height: ${font.titleLineHeight};
    max-width: 130rem;
    ${media.smallDesktopAndBelow`
      font-size: ${font.h1Tablet};
      max-width: 1300px;
    `}
    ${media.tabletPortraitAndBelow`
      font-size: ${font.h1Mobile};
    `};
  }

  .description strong {
    font-family: ${font.family100};
  }

  .description span {
    text-transform: uppercase;
    display: block;
    margin-top: 3rem;
    font-size: ${font.smallP};
    ${media.smallDesktopAndBelow`
      margin-top: 30px;
      font-size: ${font.smallPTablet};
    `}
    ${media.tabletPortraitAndBelow`
      font-size: ${font.smallPMobile};
    `}
  }

  .blocks {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 9rem 0;
    row-gap: 11rem;
    ${media.smallDesktopAndBelow`
    padding: 90px 0;
    row-gap: 110px;
    `}
    ${media.tabletPortraitAndBelow`
    padding: 70px 0;
    row-gap: 90px;
    `}
  }

  .project-text p {
    font-family: ${font.family100};
    font-size: ${font.p};
    text-align: center;
    max-width: 108rem;
    margin-left: auto;
    margin-right: auto;
    line-height: ${font.pLineHeight};
    ${media.smallDesktopAndBelow`
      font-size: ${font.pTablet};
      max-width: 1080px;
    `}
    ${media.tabletPortraitAndBelow`
      font-size: ${font.pMobile};
    `}
  }

  .credits {
    padding-bottom: 3rem;
    ${media.smallDesktopAndBelow`
      padding-bottom: 30px;
    `}
  }

  .credits p {
    font-size: ${font.smallP};
    line-height: ${font.pLineHeight};
    ${media.smallDesktopAndBelow`
      font-size: ${font.smallPTablet};
    `}
    ${media.tabletPortraitAndBelow`
      font-size: ${font.smallPMobile};
    `}
  }

  .credits,
  footer {
    padding-left: ${(props) => props.theme.sitePaddingLeftRight};
    padding-right: ${(props) => props.theme.sitePaddingLeftRight};
    ${media.smallDesktopAndBelow`
      padding-left: ${(props) => props.theme.sitePaddingLeftRightDesktop};
      padding-right: ${(props) => props.theme.sitePaddingLeftRightDesktop};
    `}
    ${media.tabletPortraitAndBelow`
      padding-left: ${(props) => props.theme.sitePaddingLeftRightMobile};
      padding-right: ${(props) => props.theme.sitePaddingLeftRightMobile};
    `}
  }
`;

export default ProjectStyles;
