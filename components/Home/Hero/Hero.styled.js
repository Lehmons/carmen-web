// ****************************************/
// Hero Styled
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../../Styles";

const HeroStyles = styled.section`
  display: grid;

  ${media.smallDesktopAndBelow`
  	width: 100%;
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
    ${media.tabletPortraitAndBelow`
			column-gap: 9px;
		`}
  }

  .featuredGrid img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .blurb {
    padding-top: 7.2rem;
    width: 100%;
    ${media.smallDesktopAndBelow`
			padding-top: 72px;
		`}
    ${media.tabletPortraitAndBelow`
			padding-top: 60px;
		`}
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
    padding-top: 7.2rem;
    border-bottom: 1px solid black;
    ${media.smallDesktopAndBelow`
			padding-top: 72px;
		`}
    ${media.tabletPortraitAndBelow`
			padding-top: 60px;
		`}
    ${media.minDevicePixelRatio2`
      border-width: 0.5px;
    `}
  }
`;

export default HeroStyles;
