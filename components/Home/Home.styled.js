// ****************************************/
// Home
// ****************************************/

import Head from "next/head";
import styled from "styled-components";
import { font, media, underline } from "../Styles";
import { motion } from "framer-motion";

const HomeStyles = styled(motion.section)`
  padding-top: ${(props) => props.theme.sitePaddingTop};
  ${media.smallDesktopAndBelow`
  	width: 100%;
  	padding-top: ${(props) => props.theme.sitePaddingTopDesktop};
	`}
  ${media.tabletPortraitAndBelow`
  	padding-top: ${(props) => props.theme.sitePaddingTopMobile}
	`}

  .project-tile {
    width: 100%;
    padding-top: 3.9rem;
    padding-bottom: 5rem;
    border-bottom: 1px solid black;
    display: grid;
    grid-template-columns: repeat(1, fr);
    ${media.smallDesktopAndBelow`
      padding-top: 39px;
      padding-bottom: 50px;
    `}
    ${media.minDevicePixelRatio2`
      border-width: 0.5px;
    `}
  }

  .project-tile a {
    color: black;
  }

	.project-tile a,
  .blurb {
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

  .project-tile img {
    border-radius: 20px;
  }

  .project-tile .image-wrapper {
    padding-top: 4rem;
		${media.smallDesktopAndBelow`
			padding-top: 40px;
		`}
  }

  .project-tile .indent {
    padding-left: 11.2rem;
    ${media.smallDesktopAndBelow`
      padding-left: 112px;
    `}
    ${media.tabletLandscapeAndBelow`
      padding-left: 30px;
    `}
  }
`;

export default HomeStyles;
