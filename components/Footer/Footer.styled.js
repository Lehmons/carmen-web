// ****************************************/
// Footer
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const FooterStyles = styled.footer`
  display: flex;
  padding: 4.5rem 0;
  justify-content: space-between;
  padding-left: ${(props) => props.theme.sitePaddingLeftRight};
  padding-right: ${(props) => props.theme.sitePaddingLeftRight};
  ${media.smallDesktopAndBelow`
    padding: 45px 0;
  `}
  ${media.tabletLandscapeAndBelow`
    flex-direction: column-reverse;
  `}
  ${media.tabletPortraitAndBelow`
    padding: 35px 0;
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
      margin-left: 20px;
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
