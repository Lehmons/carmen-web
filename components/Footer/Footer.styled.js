// ****************************************/
// Footer
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const FooterStyles = styled.footer`
  display: flex;
  padding: 9rem ${(props) => props.theme.sitePaddingLeftRight} 4.5rem ${(props) => props.theme.sitePaddingLeftRight} ;
  justify-content: space-between;
  ${media.smallDesktopAndBelow`
      padding-left: ${(props) => props.theme.sitePaddingLeftRightDesktop};
      padding-right: ${(props) => props.theme.sitePaddingLeftRightDesktop};
  `}
  ${media.tabletLandscapeAndBelow`
    flex-direction: column-reverse;
  `}
  ${media.tabletPortraitAndBelow`
      padding: 35px 0;
      padding-left: ${(props) => props.theme.sitePaddingLeftRightMobile};
      padding-right: ${(props) => props.theme.sitePaddingLeftRightMobile};
  `}

  & > section:nth-child(1) {
    ${media.tabletLandscapeAndBelow`
      padding-top: 30px;
    `}
  }

  p,
  a {
    text-transform: uppercase;
    font-size: ${font.p};
    line-height: ${font.titleLineHeight};
    ${media.smallDesktopAndBelow`
      font-size: ${font.pTablet};
    `}
    ${media.tabletPortraitAndBelow`
      font-size: ${font.smallPMobile};
    `};
  }

  a + a {
    margin-left: 5.1rem;
    ${media.smallDesktopAndBelow`
      margin-left: 51px;
    `}
    ${media.tabletPortraitAndBelow`
      margin-left: 15px;
    `};
  }

  .site-name p {
    text-transform: uppercase;
  }

  a.is-active,
  a:active,
  a:hover {
    text-decoration: underline;
  }
`;

export default FooterStyles;
