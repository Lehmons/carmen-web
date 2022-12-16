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
    height: 102rem;
    padding-top: 4rem;
    border-bottom: 1px solid black;
  }

  .project-tile .image-wrapper {
    padding-top: 3rem;
  }

  .image-wrapper img {
    border-radius: 20px;
  }
`;

export default HomeStyles;
