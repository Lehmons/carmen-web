// ****************************************/
// Nav
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const NavStyled = styled.section`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 8.7vh;
  z-index: 3;
  background: white;
  ${media.smallDesktopAndBelow`
  height: 80px;
	`}

  .logo,
  .projects,
  .about,
  a {
    font-size: ${font.p};
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  a.is-active,
  a:active,
  a:hover {
    text-decoration: underline;
  }

  .logo {
    margin-left: 6.7rem;
    ${media.smallDesktopAndBelow`
      margin-left: 67px;
    `}
  }

  .WorkAbout .projects {
    margin-right: 5.7rem;
    ${media.smallDesktopAndBelow`
    marign-right: 57px;
	`}
  }

  .WorkAbout .about {
    margin-right: 6.7rem;
    ${media.smallDesktopAndBelow`
    marign-left:  67px;
	`}
  }
`;

export default NavStyled;
