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
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .project-feed img {
    border-radius: 20px;
  }
`;

export default HomeStyles;
