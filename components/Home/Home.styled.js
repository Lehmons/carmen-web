// ****************************************/
// Home
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";
import { motion } from "framer-motion";

const HomeStyles = styled(motion.section)`
  margin-top: ${(props) => props.theme.sitePaddingTop};
  margin-left: ${(props) => props.theme.sitePaddingLeftRight};
  margin-right: ${(props) => props.theme.sitePaddingLeftRight};
  ${media.smallDesktopAndBelow`
  width: 100%
  padding-top: 8rem;
	`}
  ${media.tabletPortraitAndBelow`
  padding-top: 80px;
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

  .project-tile .image-wrapper {
    padding-top: 3rem;
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

  .image-wrapper img {
    border-radius: 20px;
  }
`;

export default HomeStyles;
