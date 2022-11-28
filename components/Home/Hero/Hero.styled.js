// ****************************************/
// Hero Styled
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../../Styles";

const HeroStyles = styled.section`
  ${media.smallDesktopAndBelow`
	`}
  ${media.mobileOnly`
	`}
`;

export default HeroStyles;
