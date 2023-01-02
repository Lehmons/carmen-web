// ****************************************/
// About
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";
import { motion } from "framer-motion";

const AboutStyles = styled(motion.section)`
  margin-top: ${(props) => props.theme.sitePaddingTop};
  ${media.smallDesktopAndBelow`
  width: 100%;
  padding-top: 8rem;
	`}
  ${media.tabletPortraitAndBelow`
  padding-top: 80px;
`}  

  a {
    color: black;
  }

  .heroText {
    width: 100%;
    padding-top: 2.3rem;
    padding-bottom: 5rem;
    ${media.tabletPortraitAndBelow`
      padding-top: 23px;
      padding-bottom: 50px;
  `}
  }

  .heroText,
  .two-column {
    border-bottom: 1px solid black;
    ${media.minDevicePixelRatio2`
      border-width: 0.5px;
    `}
  }

  .get-in-touch p,
  .heroText p {
    font-size: ${font.h2};
    line-height: ${font.titleLineHeight};
    max-width: 130rem;
    ${media.smallDesktopAndBelow`
      font-size: ${font.h2Tablet};
      max-width: 1300px;
    `}
    ${media.tabletPortraitAndBelow`
      font-size: ${font.h2Mobile};
    `};
  }

  .get-in-touch > p,
  .get-in-touch > div,
  .heroText > p,
  footer,
  .heroText > div {
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

  .two-column {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8rem 0;
    ${media.smallDesktopAndBelow`
      padding: 80px ${(props) => props.theme.sitePaddingLeftRightDesktop};
    `}
    ${media.tabletLandscapeAndBelow`
      justify-content: flex-start;

    `}
    ${media.tabletPortraitAndBelow`
      padding-left: ${(props) => props.theme.sitePaddingLeftRightMobile};
      padding-right: ${(props) => props.theme.sitePaddingLeftRightMobile};
    `}
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 7.2rem;
    padding-top: 2.4rem;
    ${media.smallDesktopAndBelow`
      column-gap: 72px;
      padding-top: 24px;
    `}
    ${media.tabletLandscapeAndBelow`
      grid-template-columns: repeat(1, 1fr);
    `}
  }

  .get-in-touch {
    padding-top: 5.7rem;
  }

  footer {
    padding-top: 24rem;
  }
  ${media.smallDesktopAndBelow`
      padding-top: 240px;
    `}
`;

export default AboutStyles;
