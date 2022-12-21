// ****************************************/
// Nav
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const NavStyled = styled.nav`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 3;
  background: ${(props) => props.theme.grey100};
  ${media.smallDesktopAndBelow`

	`}

  .logo,
  .projects,
  .about,
  a {
    font-size: ${font.p};
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    padding-top: 2.1rem;
    padding-bottom: 2.2rem;
    ${media.smallDesktopAndBelow`
      padding-top: 21px;
      padding-bottom: 22px;
      font-size: ${font.pTablet};
    `}
    ${media.tabletPortraitAndBelow`
      font-size: ${font.smallPMobile};
    `}
  }

  a.is-active,
  a:active,
  a:hover {
    text-decoration: underline;
  }

  .logo {
    padding-left: ${(props) => props.theme.sitePaddingLeftRight};
    ${media.smallDesktopAndBelow`
    padding-left: ${(props) => props.theme.sitePaddingLeftRightDesktop};
    `}
    ${media.tabletPortraitAndBelow`
    padding-left: ${(props) => props.theme.sitePaddingLeftRightMobile};
    `}
  }

  .work-about .work {
    margin-right: 5.7rem;
    ${media.smallDesktopAndBelow`
      margin-right: 57px;
    `}
    ${media.tabletPortraitAndBelow`
      margin-right: 20px;
    `}
  }

  .work-about .about {
    padding-right: ${(props) => props.theme.sitePaddingLeftRight};
    ${media.smallDesktopAndBelow`
    padding-right: ${(props) => props.theme.sitePaddingLeftRightDesktop};
    `}
    ${media.tabletPortraitAndBelow`
    padding-right: ${(props) => props.theme.sitePaddingLeftRightMobile};
    `}
  }
`;

export default NavStyled;
