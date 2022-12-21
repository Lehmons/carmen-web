// ****************************************/
// Project
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";
import { motion } from "framer-motion";

const ProjectStyles = styled(motion.section)`
  ${media.smallDesktopAndBelow`
	`}
  ${media.mobileOnly`
	`}
`;

export default ProjectStyles;
