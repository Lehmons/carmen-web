// ****************************************/
// Hero Styled
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../../Styles";

const HeroStyles = styled.section`
  display: grid;

  ${media.smallDesktopAndBelow`
  width: 100%
  grid-auto-rows: auto;
	`}
  ${media.tabletPortraitAndBelow`
`}

  .featuredGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 33px;
    width: 100%;
    height: 100%;
    max-width: 640rem;
  }

  .featuredGrid img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .blurb {
    padding-top: 5rem;
    width: 100%;
  }

  .blurb p {
    font-size: ${font.h2};
    line-height: ${font.titleLineHeight};
    ${media.smallDesktopAndBelow`
      font-size: ${font.h2Tablet};
    `}
    ${media.tabletPortraitAndBelow`
      font-size: ${font.h2Mobile};
    `};
  }

  .linebreaker {
    padding-top: 3.5rem;
    border-bottom: 1px solid black;
    ${media.minDevicePixelRatio2`
      border-width: 0.5px;
    `}
  }
`;

export default HeroStyles;
